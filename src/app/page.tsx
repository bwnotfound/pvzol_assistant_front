// "use client";

// export default function Home() {
//   return (
//       <div className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-gray-50">
//         <div className="mx-auto max-w-md">
//           <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
//             <p>蓝白bw分享的一些小工具，一些日常内容会在这里展出，欢迎使用</p>
//             <p>请先登录或注册</p>
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-7"
//               type="button"
//               onClick={() => {
//                 window.location.href = "/login";
//               }}
//             >
//               登录
//             </button>
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-7"
//               type="button"
//               onClick={() => {
//                 window.location.href = "/register";
//               }}
//             >
//               注册
//             </button>
//           </div>
//         </div>
//         <div className="flex w-full h-28 bg-gray-200 justify-center">
//           <a className="hover:text-blue-400" href="https://beian.miit.gov.cn/" target="_blank">
//             鄂ICP备2024036010号-1
//           </a>
//         </div>
//       </div>
//   );
// }

"use client";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen justify-between overflow-hidden bg-gray-50">
      <div className="mx-auto max-w-md">
        <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
          <p>蓝白bw分享的一些小工具，一些日常内容会在这里展出，欢迎使用</p>
          <p>请先登录或注册</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-7"
            type="button"
            onClick={() => {
              window.location.href = "/login";
            }}
          >
            登录
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-7"
            type="button"
            onClick={() => {
              window.location.href = "/register";
            }}
          >
            注册
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-7"
            type="button"
            onClick={() => {
              window.location.href = "/home";
            }}
          >
            进入主页
          </button>
        </div>
      </div>
      <div className="flex w-full h-16 bg-gray-200 justify-center">
        <a
          className="mt-6 hover:text-blue-400"
          href="https://beian.miit.gov.cn/"
          target="_blank"
        >
          鄂ICP备2024036010号-1
        </a>
      </div>
    </div>
  );
}
