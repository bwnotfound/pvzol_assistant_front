import { useEffect, useState } from "react";
import { getServer } from "@/app/lib/web";
import React from "react";

function RunningListShow(isRunning: any, runList: any, waitList: any) {
  if (isRunning) {
    return (
      <div className="flex">
        <div>正在运行的账号</div>
        <div>{runList}</div>
        <div>等待运行的账号</div>
        <div>{waitList}</div>
      </div>
    );
  } else {
    return (
      <div>
        <div>当前没有正在运行的账号</div>
      </div>
    );
  }
}

function AccountTable(accountList: any, setShowingAccountId: any) {
  return (
    <div className="bg-gray-50 max-w-2xl overflow-hidden">
      <ul>
        {accountList.map((account: any) => (
          <li
            className="flex items-center justify-between px-4 py-2"
            key={account.id}
          >
            <span>
              账号名:{account.nickname}&nbsp;描述:{account.description}
            </span>
            <button
              className="rounded-lg px-3 py-1 bg-green-300 hover:bg-green-400"
              type="button"
              onClick={() => {
                setShowingAccountId(account.id);
              }}
            >
              查看日志
            </button>
          </li>
        ))}
      </ul>
      {/* <ul className="max-w-md mx-auto bg-white rounded-md shadow overflow-hidden">
        <li className="border-b hover:bg-gray-100 transition-all duration-200 flex items-center justify-between p-4">
          <span>List Item 1</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            按钮
          </button>
        </li>

        <li className="border-b hover:bg-gray-100 transition-all duration-200 flex items-center justify-between p-4">
          <span>List Item 2</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            按钮
          </button>
        </li>
      </ul> */}
    </div>
  );
}

function refresh(setIsRunning: any, setRunList: any, setWaitList: any) {
  getServer("/info/loop")
    .then((rep) => rep.json())
    .then((data) => {
      switch (data.code) {
        case 0:
          break;
        case 1:
          alert(data.message);
          window.location.href = "/login";
          return;
        case 2:
        case 3:
        case 4:
          alert(data.message);
          return;
        default:
          alert(data.message);
          alert("未知状态码:" + data.code);
          return;
      }
      setIsRunning(data.result.isRunning);
      setRunList(data.result.runList);
      setWaitList(data.result.waitList);
    })
    .catch((err) => console.log(err));
}

function ShowLogContent(showingLog: any, setShowingLog: any) {
  if (showingLog == null) return null;
  return (
    <div className="fixed top-0 left-0 bg-gray-300 bg-opacity-60 h-full w-full justify-center">
      <div className="mx-auto mt-10 w-4/5 h-5/6 rounded-lg bg-gray-50">
        <div className="flex justify-end">
          <button
            className="rounded-full my-3 mr-6 border-2 border-gray-200 bg-gray-100 py-2 px-4 hover:bg-gray-200 focus:outline-none"
            type="button"
            onClick={() => {
              setShowingLog(null);
            }}
          >
            返回
          </button>
        </div>
        <div className="mb-4 flex flex-col h-5/6 flex-shrink-0 overflow-auto px-8 leading-6 bg-gray-50 rounded-xl">
          {
            <div>
              <span>日志文件名:{showingLog.logName}</span>
              <br />
              <br />
              <p>
                {showingLog.content
                  .split("\n")
                  .map((line: string, index: number) => (
                    <div key={index}>
                      {line}
                      <br />
                    </div>
                  ))}
              </p>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

function AccountLogsPage(
  logs: any,
  setLogs: any,
  showingLog: any,
  setShowingLog: any,
  showingAccountId: any,
  setShowingAccountId: any
) {
  if (showingAccountId == -1) return null;
  return (
    <div>
      <div className="fixed top-0 left-0 bg-gray-300 bg-opacity-60 h-full w-full justify-center">
        <div className="mx-auto w-4/5 h-5/6 mt-10 rounded-lg bg-gray-50">
          <div className="flex justify-end">
            <button
              className="rounded-full mt-6 mr-6 border-2 border-gray-200 bg-gray-100 py-2 px-4 hover:bg-gray-200 focus:outline-none"
              type="button"
              onClick={() => {
                setShowingAccountId(-1);
              }}
            >
              X
            </button>
          </div>
          <div className="flex flex-col justify-center items-center">
            <ul className="w-2/3">
              {logs.map((log: any, index: any) => (
                <li
                  className="relative flex w-full justify-between items-center my-2"
                  key={index}
                >
                  <span>日志文件名:{log.logName}</span>
                  <button
                    className="rounded-lg px-3 py-1 bg-green-200 hover:bg-green-300"
                    type="button"
                    onClick={() => {
                      setShowingLog(log);
                    }}
                  >
                    展示
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {ShowLogContent(showingLog, setShowingLog)}
    </div>
  );
}

export function DisplayPage(accountList: any, showChoice: any) {
  const [isRunning, setIsRunning] = useState(false);
  const [runList, setRunList] = useState([]);
  const [waitList, setWaitList] = useState([]);
  const [showingAccountId, setShowingAccountId] = useState(-1);
  const [logs, setLogs] = useState([]);
  const [showingLog, setShowingLog] = useState(null);
  useEffect(() => {
    console.log(showingAccountId);
    if (showingAccountId == -1) return;
    getServer("/info/account/logs?accountid=" + showingAccountId)
      .then((rep) => rep.json())
      .then((data) => {
        switch (data.code) {
          case 0:
            break;
          case 1:
            alert(data.message);
            window.location.href = "/login";
            return;
          case 2:
          case 3:
          case 4:
            alert(data.message);
            setLogs([]);
            return;
          default:
            alert(data.message);
            alert("未知状态码:" + data.code);
            setLogs([]);
            return;
        }
        console.log(data.result);
        const result = data.result;
        setLogs(result);
      });
  }, [showingAccountId]);
  // useEffect(() => {
  //   if (showChoice !== "displayPage") {
  //     return;
  //   }
  //   refresh(setIsRunning, setRunList, setWaitList);
  // }, []);
  console.log("in DisplayPage");
  if (showChoice !== "displayPage") {
    return null;
  }
  return (
    <div className="mt-20 ml-20">
      <button
        className="bg-green-300 rounded-lg px-3 py-1 mb-2 hover:bg-green-400"
        type="button"
        onClick={() => refresh(setIsRunning, setRunList, setWaitList)}
      >
        刷新
      </button>
      <div className="mb-7">当前助手版本: pre27_1 (旧版本不能保证兼容性)</div>
      <div className="mb-7">每天9点15点各运行一次。9点运行时会禁用刷洞和打副本，15点运行时才会开始刷洞和打副本。</div>
      <div className="mb-7">周五9点会自动把剩下跨服次数全部用掉</div>

      {/* <div>{RunningListShow(isRunning, runList, waitList)}</div> */}
      {AccountTable(accountList, setShowingAccountId)}
      {AccountLogsPage(
        logs,
        setLogs,
        showingLog,
        setShowingLog,
        showingAccountId,
        setShowingAccountId
      )}
    </div>
  );
}
