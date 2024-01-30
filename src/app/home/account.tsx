"use client";
import React, { useState } from "react";
import { postServer } from "@/app/lib/web";

export function AccountAddPanel(
  isAddAccountPageShow: any,
  setIsAddAccountPageShow: (arg0: boolean) => void,
  handleAddAccountClicked: {
    (arg0: string, arg1: string, arg2: File | null): void;
  }
) {
  console.log("AccountAddPanel 加载");
  const [nickname, setNickname] = useState("");
  const [description, setDescription] = useState("");
  const [selectFile, setSelectFile] = useState<File | null>(null);
  const [isRequesting, setIsRequesting] = useState(false);

  if (!isAddAccountPageShow) return <div></div>;
  return (
    <div className="fixed bg-gray-300 bg-opacity-60 h-full w-full">
      <div className="absolute h-3/4 w-2/3 rounded-lg mt-20 ml-28 bg-gray-50">
        <div className="flex justify-end">
          <button
            className="rounded-full mt-6 mr-6 border-2 border-gray-200 bg-gray-100 py-2 px-4 hover:bg-gray-200 focus:outline-none"
            type="button"
            onClick={() => {
              setIsAddAccountPageShow(false);
            }}
          >
            X
          </button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="mt-10">
            <input
              className="rounded-lg border-2 border-gray-200 bg-gray-100 py-2 px-4 focus:bg-gray-200"
              type="text"
              placeholder="账号名"
              onChange={(e) => {
                setNickname(e.target.value);
                // nickname = e.target.value;
              }}
            />
          </div>
          <div className="mt-10">
            <input
              className="rounded-lg border-2 border-gray-200 bg-gray-100 py-2 px-4 focus:bg-gray-200"
              type="text"
              placeholder="描述"
              onChange={(e) => {
                setDescription(e.target.value);
                // description = e.target.value;
              }}
            />
          </div>
          <div className="mt-10">
            <input
              className="rounded-lg border-2 border-gray-200 bg-gray-100 py-2 px-4 focus:bg-gray-200"
              type="file"
              placeholder="选择文件"
              onChange={(e) => {
                console.log(e.target.files);
                if (e.target.files === null || e.target.files.length == 0)
                  setSelectFile(null);
                else setSelectFile(e.target.files[0]);
                console.log(selectFile);
              }}
            />
          </div>
          <div className="mt-10">
            <button
              className="rounded-lg border-2 border-gray-200 bg-gray-100 py-2 px-4 focus:bg-gray-200"
              type="button"
              onClick={() => {
                setIsRequesting(true);
                handleAddAccountClicked(nickname, description, selectFile);
                setIsRequesting(false);
              }}
              disabled={isRequesting}
            >
              添加
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function accountListReducer(accountList: Array<any>, action: any) {
  switch (action.type) {
    case "add":
      return [...accountList, action.account];
    case "delete":
      return accountList.filter((account) => account.id !== action.id);
    case "set":
      return action.accountList;
    case "enable":
      return accountList.map((account) => {
        if (account.id === action.id) {
          console.log(account);
          return { ...account, enabled: true };
        }
        return account;
      });
    case "disable":
      return accountList.map((account) => {
        if (account.id === action.id) {
          console.log(account);
          return { ...account, enabled: false };
        }
        return account;
      });
    default:
      throw new Error("unexpected action type");
  }
}

function AccountControlPanel(
  setIsAddAccountPageShow: any,
  reloadUser: () => void
) {
  return (
    <div className="h-20 w-5/6 rounded-lg mt-16 ml-28 py-7 px-8">
      <button
        className="rounded-lg border-2 border-gray-200 bg-gray-100 py-2 px-4 hover:bg-gray-200 focus:outline-none"
        type="button"
        onClick={() => {
          setIsAddAccountPageShow(true);
        }}
      >
        添加用户
      </button>
      <button
        className="rounded-lg border-2 border-gray-200 bg-gray-100 py-2 px-4 hover:bg-gray-200 focus:outline-none ml-4"
        type="button"
        onClick={reloadUser}
      >
        刷新用户
      </button>
    </div>
  );
}

export function handleAddAccountClicked(
  accountListDispatch: React.Dispatch<any>,
  setIsAddAccountPageShow: any
) {
  function handler(nickname: string, description: string, selectFile: any) {
    console.log(nickname);
    console.log(description);
    console.log(selectFile);
    if (nickname === "") {
      nickname = "default";
    }
    if (description === "") {
      description = "暂无描述";
    }
    if (selectFile === null) {
      alert("请选择文件");
      return;
    }
    if (selectFile.size > 1024 * 1024 * 2) {
      alert("文件大小不能超过2MB");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result === null) {
        alert("文件读取失败");
        return;
      }
      let data = {
        nickname: nickname,
        description: description,
        assistantData: btoa(
          Array.from(new Uint8Array(reader.result as ArrayBuffer))
            .map((b) => String.fromCharCode(b))
            .join("")
        ),
      };
      console.log(data);
      postServer("/assistant/account/upload", data)
        .then((res) => res.json())
        .then((data) => {
          switch (data.code) {
            case 0:
              break;
            case 1:
            case 2:
              alert(data.message);
              return;
            default:
              alert("未知状态码:" + data.code);
              return;
          }
          accountListDispatch({
            type: "add",
            account: data.account,
          });
          setIsAddAccountPageShow(false);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    reader.readAsArrayBuffer(selectFile);
  }
  return handler;
}

function handleDeleteAccountClicked(
  reloadUser: () => void,
  accountListDispatch: React.Dispatch<any>
) {
  function handler(accountId: any) {
    console.log(accountId);
    postServer("/assistant/account/delete", { id: accountId })
      .then((res) => res.json())
      .then((data) => {
        switch (data.code) {
          case 0:
            break;
          case 1:
          case 2:
          case 3:
            alert(data.message);
            reloadUser();
            return;
          default:
            alert("未知状态码:" + data.code);
            return;
        }
        accountListDispatch({
          type: "delete",
          id: accountId,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return handler;
}

function handleEnableAccountClicked(
  reloadUser: () => void,
  accountListDispatch: React.Dispatch<any>
) {
  function handler(accountId: any) {
    console.log(accountId);
    postServer("/assistant/account/enable", { id: accountId })
      .then((res) => res.json())
      .then((data) => {
        switch (data.code) {
          case 0:
            break;
          case 1:
          case 2:
          case 3:
            alert(data.message);
            reloadUser();
            return;
          default:
            alert("未知状态码:" + data.code);
            return;
        }
        accountListDispatch({
          type: "enable",
          id: accountId,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return handler;
}

function handleDisableAccountClicked(
  reloadUser: () => void,
  accountListDispatch: React.Dispatch<any>
) {
  function handler(accountId: any) {
    console.log(accountId);
    postServer("/assistant/account/disable", { id: accountId })
      .then((res) => res.json())
      .then((data) => {
        switch (data.code) {
          case 0:
            break;
          case 1:
          case 2:
          case 3:
            alert(data.message);
            reloadUser();
            return;
          default:
            alert("未知状态码:" + data.code);
            return;
        }
        accountListDispatch({
          type: "disable",
          id: accountId,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return handler;
}

function AccountShowPanel(
  reloadUser: () => void,
  accountList: Array<any>,
  accountListDispatch: React.Dispatch<any>
) {
  return (
    <div className="h-3/5 w-5/6 rounded-lg mt-10 ml-28 bg-gray-50">
      <ul>
        {accountList.map((account: any) => (
          <li className="w-full relative" key={account.id}>
            <div className="flex my-1 bg-gray-100">
              <div className="flex py-2 text-base">
                <div className="">账户名:{account.nickname}</div>
                <div className="ml-5">账户描述:{account.description}</div>
              </div>
              <div className="absolute w-full">
                <div className="flex justify-end">
                  <div className=" py-2">
                    状态:{account.enabled ? "启用中" : "禁用中"}
                  </div>
                  {account.enabled ? (
                    <button
                      className="ml-2 bg-green-300 py-2 px-5 rounded-lg"
                      type="button"
                      onClick={() =>
                        handleDisableAccountClicked(
                          reloadUser,
                          accountListDispatch
                        )(account.id)
                      }
                    >
                      禁用
                    </button>
                  ) : (
                    <button
                      className="ml-2 bg-green-300 py-2 px-5 rounded-lg"
                      type="button"
                      onClick={() =>
                        handleEnableAccountClicked(
                          reloadUser,
                          accountListDispatch
                        )(account.id)
                      }
                    >
                      启用
                    </button>
                  )}

                  <button
                    className="ml-2 bg-red-400 py-2 px-5 rounded-lg"
                    type="button"
                    onClick={() =>
                      handleDeleteAccountClicked(
                        reloadUser,
                        accountListDispatch
                      )(account.id)
                    }
                  >
                    删除
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AccountMainPage(
  showChoice: any,
  accountList: Array<any>,
  accountListDispatch: React.Dispatch<any>,
  reloadUser: () => void,
  setIsAddAccountPageShow: any
) {
  if (showChoice !== "accountManage") {
    return <div></div>;
  }
  return (
    <div className="h-full w-full">
      {/* <div>accountMainPage</div> */}
      {AccountControlPanel(setIsAddAccountPageShow, reloadUser)}
      {AccountShowPanel(reloadUser, accountList, accountListDispatch)}
    </div>
  );
}
