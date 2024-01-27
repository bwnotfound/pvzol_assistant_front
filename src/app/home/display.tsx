import { useEffect, useState } from "react";
import { getServer } from "@/app/lib/web";

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

export function DisplayPage(showChoice: any) {
  const [isRunning, setIsRunning] = useState(false);
  const [runList, setRunList] = useState([]);
  const [waitList, setWaitList] = useState([]);
  useEffect(() => {
    if (showChoice !== "displayPage") {
      return;
    }
    refresh(setIsRunning, setRunList, setWaitList);
  }, []);
  if (showChoice !== "displayPage") {
    return <div></div>;
  }
  return (
    <div className="mt-20 ml-20">
      <button
        className="bg-green-300 rounded-lg px-3 py-1"
        type="button"
        onClick={() => refresh(setIsRunning, setRunList, setWaitList)}
      >
        刷新
      </button>
      <div>{RunningListShow(isRunning, runList, waitList)}</div>
    </div>
  );
}
