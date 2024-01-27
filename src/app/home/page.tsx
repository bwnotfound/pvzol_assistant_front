"use client";
import React from "react";
import { useState, useEffect, useReducer } from "react";
import { postServer, getServer } from "@/app/lib/web";
import {
  AccountAddPanel,
  accountListReducer,
  AccountMainPage,
  handleAddAccountClicked,
} from "./account";
import { DisplayPage } from "./display";

function UserSidebar(handleClick: { (choice: string): void }) {
  return (
    <div className="space-y-3 bg-gray-100 ">
      <button
        className="my-1 py-3 w-5/6 border-gray-300 border rounded-2xl hover:bg-gray-300 focus:outline-none"
        type="button"
        onClick={() => handleClick("accountManage")}
      >
        账号管理
      </button>
      <br />
      <button
        className="my-1 py-3 w-5/6 border-gray-300 border rounded-2xl hover:bg-gray-300 focus:outline-none"
        type="button"
        onClick={() => handleClick("displayPage")}
      >
        信息展示
      </button>
    </div>
  );
}

export default function UserPage() {
  const [userinfo, setUserInfo] = useState({
    username: "",
    email: "",
  });
  const [accountList, accountListDispatch] = useReducer(accountListReducer, []);
  const [showChoice, setShowChoice] = useState("");
  const [isAddAccountPageShow, setIsAddAccountPageShow] = useState(false);

  function reloadUser() {
    getServer("/user")
      .then((res) => res.json())
      .then((data) => {
        switch (data.code) {
          case 0:
            break;
          case 1:
            alert(data.message);
            window.location.href = "/login";
            return;
          default:
            alert(data.message);
            alert("未知状态码:" + data.code);
            window.location.href = "/login";
            return;
        }
        setUserInfo({ username: data.user.username, email: data.user.email });
        accountListDispatch({
          type: "set",
          accountList: data.user.accountList,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("获取用户信息失败");
      });
  }

  useEffect(reloadUser, []);

  function handleUsersidebarClicked(choice: string) {
    setShowChoice(choice);
    console.log(choice);
  }

  return (
    <div className={"h-full flex"}>
      <div
        className={
          "w-2/12 h-full bg-gray-100 m-0 p-0 text-center leading-10 px-2 pt-20"
        }
      >
        <div>
          {/* <img src={usericon} alt="usericon" style={{ width: '10', height: '10'}}/> */}
          <p className="text-lg">{userinfo.username}</p>
          {/* <p>{userinfo.email}</p> */}
          {/* <button onClick={()=>checkDelect()}>注销用户</button> */}
        </div>
        <div className="mt-14 text-xl w-full p-2">
          {UserSidebar(handleUsersidebarClicked)}
        </div>
      </div>
      <div className={"w-2/3 h-full relative"}>
        {AccountMainPage(
          showChoice,
          accountList,
          accountListDispatch,
          reloadUser,
          setIsAddAccountPageShow
        )}
        {DisplayPage(showChoice)}
      </div>
      {AccountAddPanel(
        isAddAccountPageShow,
        setIsAddAccountPageShow,
        handleAddAccountClicked(accountListDispatch, setIsAddAccountPageShow)
      )}
    </div>
  );
}
