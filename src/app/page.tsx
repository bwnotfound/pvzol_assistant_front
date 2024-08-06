"use client";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-r from-blue-100 to-white">
      

      {/* 主内容 */}
      <div className="flex-1 flex flex-col items-center justify-center mx-auto max-w-2xl text-center space-y-6 animate-slide-in">
        <h1 className="text-4xl font-bold">蓝白bw的小工具</h1>
        <p className="text-lg text-gray-600 ">
          一些日常内容会在这里展出，欢迎使用
        </p>
        <p className="text-lg text-gray-600">
          请先登录或注册
        </p>
        <div className="space-x-4">
          <button
            className="btn btn-bg font-bold py-2 px-4 rounded"
            type="button"
            onClick={() => {
              window.location.href = "/login";
            }}
          >
            登录
          </button>
          <button
            className="btn btn-bd font-bold py-2 px-4 rounded border"
            type="button"
            onClick={() => {
              window.location.href = "/register";
            }}
          >
            注册
          </button>
          {/*<button
            className="btn btn-home font-bold py-2 px-4 rounded border"
            type="button"
            onClick={() => {
              window.location.href = "/home";
            }}
          >
            进入主页
          </button>*/}
        </div>
      </div>

      
    </div>
  );
}