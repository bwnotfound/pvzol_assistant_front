"use client";
import React, { useState } from "react";
import "@/app/ui/css/login.css";
import { getServer, postServer } from "@/app/lib/web";

export default function LoginPage() {
  // 使用 useState 创建多个状态变量来分别存储输入框的值
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 创建独立的处理函数
  const handleEmailChange = (event: { target: { value: string } }) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: { target: { value: string } }) => {
    setPassword(event.target.value);
  };

  function check(email: string, password: string) {
    const data = { email: email, password: password };
    postServer("/login", data)
      .then((response) => response.json())
      .then((data) => {
        switch (data.code) {
          case 0:
            window.location.href = "/home";
            break;
          case 1:
            alert(data.message);
            break;
          default:
            alert("未知状态码:" + data.code);
            break;
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="relative bg-white px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 animate-fade-in">
        <div className="text-sm text-gray-700 mb-6">
          警告：该网站是由蓝白bw架设，由于网站无法做到完全安全，请不要输入敏感信息（密码虽然在网站是md5加密存储，但是也请不要用常用密码，避免泄漏）
        </div>
        <div className="mx-auto max-w-md">
          <div className="divide-y divide-gray-300/50">
            <div className="relative text-center space-y-6 py-1 leading-7 text-gray-700">
              <input
                type="text"
                value={email}
                onChange={handleEmailChange}
                placeholder="邮箱"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300"
              />
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="密码"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300"
              />
              <br />
              <button
                className="btn btn-bg text-white w-44 p-2 rounded-md transition-colors"
                type="submit"
                onClick={() => check(email, password)}
              >
                登录
              </button>
              <br />
              <button
                className="btn btn-bd border w-44 p-2 rounded-md"
                type="button"
                onClick={() => (window.location.href = "/register")}
              >
                前往注册
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
