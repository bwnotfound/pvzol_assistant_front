"use client";
import { useState, useEffect, useReducer } from "react";
import { getServer, postServer } from "@/app/lib/web";
import { accountListReducer } from "@/app/home/account";

function deleteCurrentUser() {
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

function deleteUser(userId: any, userList: any, setUserList: any) {
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
  if (isRunning === null) return <div></div>;
  if (isRunning === true) {
    return (
      <div>
        <div>当前正在运行</div>
        <div>正在运行的账号:</div>
        <ul>
          {runningAccountList.map((account: any) => (
            <li key={account.id}>
              id:{account.id}&nbsp;&nbsp; nickname:{account.nickname}
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

function ShowUserList(userList: any, setUserList: any) {
  if (userList.length === 0) return <div></div>;
  return (
    <div>
      <ul>
        {userList.map((user: any) => (
          <li className="my-1" key={user.id}>
            id:{user.id}&nbsp;&nbsp; username:{user.username}&nbsp;&nbsp; email:
            {user.email}
            <button
              className="bg-red-300 rounded-lg px-2 py-1 ml-10"
              type="button"
              onClick={() => {
                deleteUser(user.id, userList, setUserList);
              }}
            >
              删除
            </button>
          </li>
        ))}
      </ul>
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
      <div className="flex w-full">
        <button
          className="bg-green-300 rounded-lg px-3 py-1 ml-10 mt-16"
          type="button"
          onClick={startOneCircle}
        >
          开启单轮循环
        </button>
        <button
          className="bg-green-300 rounded-lg px-3 py-1 ml-10 mt-16"
          type="button"
          onClick={stopCircleRunning}
        >
          停止单轮循环
        </button>
        <button
          className="bg-green-300 rounded-lg px-3 py-1 ml-10 mt-16"
          type="button"
          onClick={startLoop}
        >
          开启总循环
        </button>
        <button
          className="bg-green-300 rounded-lg px-3 py-1 ml-10 mt-16"
          type="button"
          onClick={stopLoopRunning}
        >
          停止总循环
        </button>
        <div className="flex w-1/2 justify-end pr-36">
          <button
            className="bg-red-300 rounded-lg px-3 py-1 ml-10 mt-16"
            type="button"
            onClick={deleteCurrentUser}
          >
            删除当前用户
          </button>
        </div>
      </div>
      <div>
        <button
          className="bg-green-300 rounded-lg px-3 py-1 ml-10 mt-16"
          type="button"
          onClick={() => {
            fetchCircleRunningStatus(
              setCircleIsRunning,
              setRunningCircleAccountList
            );
          }}
        >
          获取单轮循环运行状态
        </button>
        <button
          className="bg-green-300 rounded-lg px-3 py-1 ml-10 mt-16"
          type="button"
          onClick={() => {
            fetchUserList(setUserList);
          }}
        >
          获取user列表
        </button>
        <button
          className="bg-green-300 rounded-lg px-3 py-1 ml-10 mt-16"
          type="button"
          onClick={reloadAccountListToCircle}
        >
          重载account列表到单轮循环
        </button>
        <button
          className="bg-green-300 rounded-lg px-3 py-1 ml-10 mt-16"
          type="button"
          onClick={loadCircleWaitList}
        >
          载入到单轮循环wait列表
        </button>
        <button
          className="bg-green-300 rounded-lg px-3 py-1 ml-10 mt-16"
          type="button"
          onClick={clearCircleWork}
        >
          清空单轮循环工作列表
        </button>
      </div>
      <div>
        <button
          className="bg-green-300 rounded-lg px-3 py-1 ml-10 mt-16"
          type="button"
          onClick={() => {
            fetchLoopRunningStatus(setLoopIsRunning, setRunningLoopAccountList);
          }}
        >
          获取总循环运行状态
        </button>
        <button
          className="bg-green-300 rounded-lg px-3 py-1 ml-10 mt-16"
          type="button"
          onClick={reloadAccountListToLoop}
        >
          重载account列表到总循环
        </button>
        <button
          className="bg-green-300 rounded-lg px-3 py-1 ml-10 mt-16"
          type="button"
          onClick={loadLoopWaitList}
        >
          载入到总循环wait列表
        </button>
        <button
          className="bg-green-300 rounded-lg px-3 py-1 ml-10 mt-16"
          type="button"
          onClick={clearLoopWork}
        >
          清空总循环工作列表
        </button>
      </div>

      <div className="flex w-full">
        {CircleRunningStatusShow(circleIsRunning, runningCircleAccountList)}
        {ShowUserList(userList, setUserList)}
      </div>
    </div>
  );
}
