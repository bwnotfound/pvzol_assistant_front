"use client";
import { useState, useEffect, useReducer } from "react";
import { getServer, postServer } from "@/app/lib/web";
import { accountListReducer } from "@/app/home/account";

function deleteCurrentUser() {
  alert("此操作会删除当前用户");
  alert("此操作会删除当前用户");
  getServer("/test/delete/user/current")
    .then((rep) => rep.json())
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
      window.location.href = "/login";
    })
    .catch((err) => console.log(err));
}

function deleteAllUserAccount() {
  alert("此操作会删除所有用户的账户");
  alert("此操作会删除所有用户的账户");
  getServer("/test/delete/user/all/account")
    .then((rep) => rep.json())
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
      alert(data.message);
    })
    .catch((err) => console.log(err));
}

function deleteUser(userId: any, userList: any, setUserList: any) {
  alert("此操作会删除用户");
  getServer("/test/delete/user?id=" + userId)
    .then((rep) => rep.json())
    .then((data) => {
      switch (data.code) {
        case 0:
          alert(data.message);
          setUserList(userList.filter((user: any) => user.id !== userId));
          break;
        case 1:
          alert(data.message);
          window.location.href = "/login";
          return;
        case 2:
        case 3:
          alert(data.message);
          return;
        default:
          alert(data.message);
          alert("未知状态码:" + data.code);
          window.location.href = "/login";
          return;
      }
    })
    .catch((err) => console.log(err));
}

function deleteAccount(accountId: number) {
  getServer("/test/delete/account?id=" + accountId)
    .then((rep) => rep.json())
    .then((data) => {
      switch (data.code) {
        case 0:
          alert(data.message);
          break;
        case 1:
          alert(data.message);
          window.location.href = "/login";
          return;
        case 2:
        case 3:
          alert(data.message);
          return;
        default:
          alert(data.message);
          alert("未知状态码:" + data.code);
          return;
      }
    })
    .catch((err) => console.log(err));
}

function startOneCircle() {
  getServer("/test/start/circle")
    .then((rep) => rep.json())
    .then((data) => {
      switch (data.code) {
        case 0:
          alert(data.message);
          break;
        case 1:
          alert(data.message);
          window.location.href = "/login";
          return;
        case 2:
          alert(data.message);
          return;
        default:
          alert(data.message);
          alert("未知状态码:" + data.code);
          window.location.href = "/login";
          return;
      }
    })
    .catch((err) => console.log(err));
}

function startLoop() {
  getServer("/test/start/loop")
    .then((rep) => rep.json())
    .then((data) => {
      switch (data.code) {
        case 0:
          alert(data.message);
          break;
        case 1:
          alert(data.message);
          window.location.href = "/login";
          return;
        case 2:
          alert(data.message);
          return;
        default:
          alert(data.message);
          alert("未知状态码:" + data.code);
          window.location.href = "/login";
          return;
      }
    })
    .catch((err) => console.log(err));
}

function stopCircleRunning() {
  getServer("/test/stop/circle")
    .then((rep) => rep.json())
    .then((data) => {
      switch (data.code) {
        case 0:
          alert(data.message);
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
    })
    .catch((err) => console.log(err));
}

function stopLoopRunning() {
  getServer("/test/stop/loop")
    .then((rep) => rep.json())
    .then((data) => {
      switch (data.code) {
        case 0:
          alert(data.message);
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
    })
    .catch((err) => console.log(err));
}

function fetchCircleRunningStatus(
  setIsRunning: any,
  setRunningAccountList: any
) {
  getServer("/test/state/circle/running")
    .then((rep) => rep.json())
    .then((data) => {
      switch (data.code) {
        case 0:
          console.log(data.message);
          setIsRunning(data.result);
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
    })
    .catch((err) => console.log(err));

  getServer("/test/get/circle/runlist")
    .then((rep) => rep.json())
    .then((data) => {
      switch (data.code) {
        case 0:
          console.log(data.message);
          setRunningAccountList(data.result);
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
    })
    .catch((err) => console.log(err));
}

function fetchLoopRunningStatus(setIsRunning: any, setRunningAccountList: any) {
  getServer("/test/state/loop/running")
    .then((rep) => rep.json())
    .then((data) => {
      switch (data.code) {
        case 0:
          console.log(data.message);
          setIsRunning(data.result);
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
    })
    .catch((err) => console.log(err));

  getServer("/test/get/loop/runlist")
    .then((rep) => rep.json())
    .then((data) => {
      switch (data.code) {
        case 0:
          console.log(data.message);
          setRunningAccountList(data.result);
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
    })
    .catch((err) => console.log(err));
}

function fetchUserList(setUserList: any) {
  getServer("/test/get/userlist")
    .then((rep) => rep.json())
    .then((data) => {
      switch (data.code) {
        case 0:
          alert(data.message);
          setUserList(data.result);
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
    })
    .catch((err) => console.log(err));
}

function reloadAccountListToCircle() {
  getServer("/test/load/circle/all")
    .then((rep) => rep.json())
    .then((data) => {
      switch (data.code) {
        case 0:
          alert(data.message);
          break;
        case 1:
          alert(data.message);
          window.location.href = "/login";
          return;
        case 2:
          alert(data.message);
          return;
        default:
          alert(data.message);
          alert("未知状态码:" + data.code);
          window.location.href = "/login";
          return;
      }
    })
    .catch((err) => console.log(err));
}

function reloadAccountListToLoop() {
  getServer("/test/load/loop/all")
    .then((rep) => rep.json())
    .then((data) => {
      switch (data.code) {
        case 0:
          alert(data.message);
          break;
        case 1:
          alert(data.message);
          window.location.href = "/login";
          return;
        case 2:
          alert(data.message);
          return;
        default:
          alert(data.message);
          alert("未知状态码:" + data.code);
          window.location.href = "/login";
          return;
      }
    })
    .catch((err) => console.log(err));
}

function clearCircleWork() {
  getServer("/test/clear/circle/work")
    .then((rep) => rep.json())
    .then((data) => {
      switch (data.code) {
        case 0:
          alert(data.message);
          break;
        case 1:
          alert(data.message);
          window.location.href = "/login";
          return;
        case 2:
          alert(data.message);
          return;
        default:
          alert(data.message);
          alert("未知状态码:" + data.code);
          window.location.href = "/login";
          return;
      }
    })
    .catch((err) => console.log(err));
}

function clearLoopWork() {
  getServer("/test/clear/loop/work")
    .then((rep) => rep.json())
    .then((data) => {
      switch (data.code) {
        case 0:
          alert(data.message);
          break;
        case 1:
          alert(data.message);
          window.location.href = "/login";
          return;
        case 2:
          alert(data.message);
          return;
        default:
          alert(data.message);
          alert("未知状态码:" + data.code);
          window.location.href = "/login";
          return;
      }
    })
    .catch((err) => console.log(err));
}

function loadCircleWaitList() {
  getServer("/test/load/circle/wait")
    .then((rep) => rep.json())
    .then((data) => {
      switch (data.code) {
        case 0:
          alert(data.message);
          break;
        case 1:
          alert(data.message);
          window.location.href = "/login";
          return;
        case 2:
          alert(data.message);
          return;
        default:
          alert(data.message);
          alert("未知状态码:" + data.code);
          window.location.href = "/login";
          return;
      }
    })
    .catch((err) => console.log(err));
}

function loadLoopWaitList() {
  getServer("/test/load/loop/wait")
    .then((rep) => rep.json())
    .then((data) => {
      switch (data.code) {
        case 0:
          alert(data.message);
          break;
        case 1:
          alert(data.message);
          window.location.href = "/login";
          return;
        case 2:
          alert(data.message);
          return;
        default:
          alert(data.message);
          alert("未知状态码:" + data.code);
          window.location.href = "/login";
          return;
      }
    })
    .catch((err) => console.log(err));
}

function CircleRunningStatusShow(isRunning: any, runningAccountList: any) {
  if (isRunning === null) return null;
  if (isRunning === true) {
    return (
      <div>
        <div>当前正在运行</div>
        <div>正在运行的账号:</div>
        <ul>
          {runningAccountList.map((account: any) => (
            <li key={account.id}>
              id:{account.id}&nbsp;&nbsp; userId:{account.userId}&nbsp;&nbsp; nickname:{account.nickname}
              &nbsp;&nbsp; description:{account.description}&nbsp;&nbsp;
              gameName:{account.gameName}&nbsp;&nbsp; enabled:
              {account.enabled ? "启用" : "禁用"}
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return <div>当前未运行</div>;
  }
}

function ShowUserList(userList: any, setUserList: any, setShowingUser: any) {
  if (userList.length === 0) return null;
  return (
    <div className="w-2/3">
      <ul>
        {userList.map((user: any) => (
          <li className="my-1 flex justify-between" key={user.id}>
            id:{user.id}&nbsp;&nbsp; username:{user.username}&nbsp;&nbsp; email:
            {user.email}
            <div>
              <button
                className="bg-green-300 rounded-lg px-2 py-1 ml-10"
                type="button"
                onClick={() => {
                  setShowingUser(user);
                }}
              >
                查看用户
              </button>
              <button
                className="bg-red-300 rounded-lg px-2 py-1 ml-10"
                type="button"
                onClick={() => {
                  deleteUser(user.id, userList, setUserList);
                }}
              >
                删除
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ShowUser(showingUser: any, setShowingUser: any) {
  console.log(showingUser);
  if (showingUser == null) return null;
  return (
    <div className="fixed w-full h-full top-0 left-0 bg-gray-200 bg-opacity-60 justify-center">
      <div className="mx-auto w-4/5 h-5/6 mt-10 rounded-lg bg-gray-50">
        <div className="flex justify-end">
          <button
            className="rounded-full mt-6 mr-6 border-2 border-gray-200 bg-gray-100 py-2 px-4 hover:bg-gray-200 focus:outline-none"
            type="button"
            onClick={() => {
              setShowingUser(null);
            }}
          >
            X
          </button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <ul className="w-2/3">
            {showingUser.accountList.map((account: any, index: any) => (
              <li
                className="relative flex w-full justify-between items-center my-2"
                key={index}
              >
                <span>
                  id:{account.id}&nbsp; 昵称:{account.nickname}&nbsp; 描述:
                  {account.description}&nbsp; 游戏名:{account.gameName}&nbsp;
                  {account.enabled ? "启用中" : "禁用中"}
                </span>
                <button
                  className="rounded-lg px-3 py-1 bg-red-300 hover:bg-red-400"
                  type="button"
                  onClick={() => {
                    deleteAccount(account.id);
                    setShowingUser(null);
                  }}
                >
                  删除
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function TestPage() {
  const [userinfo, setUserInfo] = useState({
    username: "",
    email: "",
  });
  const [accountList, accountListDispatch] = useReducer(accountListReducer, []);
  const [circleIsRunning, setCircleIsRunning] = useState(null);
  const [runningCircleAccountList, setRunningCircleAccountList] = useState([]);
  const [loopIsRunning, setLoopIsRunning] = useState(null);
  const [runningLoopAccountList, setRunningLoopAccountList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [showingUser, setShowingUser] = useState(null);
  function reloadUser() {
    getServer("/test/user")
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

  return (
    <div>
      <div className="flex w-full mb-10">
        <div className="w-4/5 ml-10 mt-16 space-y-4">
          <div className="space-x-5">
            <button
              className="bg-green-300 rounded-lg px-3 py-1"
              type="button"
              onClick={startOneCircle}
            >
              开启单轮循环
            </button>
            <button
              className="bg-green-300 rounded-lg px-3 py-1"
              type="button"
              onClick={stopCircleRunning}
            >
              停止单轮循环
            </button>
            <button
              className="bg-green-300 rounded-lg px-3 py-1"
              type="button"
              onClick={startLoop}
            >
              开启总循环
            </button>
            <button
              className="bg-green-300 rounded-lg px-3 py-1"
              type="button"
              onClick={stopLoopRunning}
            >
              停止总循环
            </button>
          </div>
          <div className="space-x-5">
            <button
              className="bg-green-300 rounded-lg px-3 py-1"
              type="button"
              onClick={() => {
                fetchCircleRunningStatus(
                  setCircleIsRunning,
                  setRunningCircleAccountList
                );
              }}
            >
              日常运行状态
            </button>
            <button
              className="bg-green-300 rounded-lg px-3 py-1"
              type="button"
              onClick={() => {
                fetchUserList(setUserList);
              }}
            >
              user列表
            </button>
            <button
              className="bg-green-300 rounded-lg px-3 py-1"
              type="button"
              onClick={reloadAccountListToCircle}
            >
              重载account日常
            </button>
            <button
              className="bg-green-300 rounded-lg px-3 py-1"
              type="button"
              onClick={loadCircleWaitList}
            >
              载入wait日常
            </button>
            <button
              className="bg-green-300 rounded-lg px-3 py-1"
              type="button"
              onClick={clearCircleWork}
            >
              清空work日常
            </button>
          </div>
          <div className="space-x-5">
            <button
              className="bg-green-300 rounded-lg px-3 py-1"
              type="button"
              onClick={() => {
                fetchLoopRunningStatus(
                  setLoopIsRunning,
                  setRunningLoopAccountList
                );
              }}
            >
              获取总循环运行状态
            </button>
            <button
              className="bg-green-300 rounded-lg px-3 py-1"
              type="button"
              onClick={reloadAccountListToLoop}
            >
              重载account总循环
            </button>
            <button
              className="bg-green-300 rounded-lg px-3 py-1"
              type="button"
              onClick={loadLoopWaitList}
            >
              载入wait总循环
            </button>
            <button
              className="bg-green-300 rounded-lg px-3 py-1"
              type="button"
              onClick={clearLoopWork}
            >
              清空work总循环
            </button>
          </div>
        </div>

        <div className="w-1/5 mt-16 space-y-4">
          <button
            className="bg-red-300 rounded-lg px-3 py-1"
            type="button"
            onClick={deleteAllUserAccount}
          >
            删除allAccount
          </button>
          <button
            className="bg-red-300 rounded-lg px-3 py-1"
            type="button"
            onClick={deleteCurrentUser}
          >
            删除当前user
          </button>
        </div>
      </div>

      <div className="flex w-full">
        {CircleRunningStatusShow(circleIsRunning, runningCircleAccountList)}
        {ShowUserList(userList, setUserList, setShowingUser)}
      </div>
      {ShowUser(showingUser, setShowingUser)}
    </div>
  );
}
