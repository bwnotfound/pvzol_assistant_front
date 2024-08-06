"use client";
import React, { useState } from "react";
import "@/app/ui/css/login.css";
import { postServer } from "@/app/lib/web";

export default function RegisterPage() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [anotherPassword, setAnotherPassword] = useState("");

  function check(
    name: string,
    email: string,
    password: string,
    anotherPassword: string
  ) {
    console.log("check button clicked");
    if (name === "") {
      alert("用户名不能为空");
      return;
    }
    if (email === "") {
      alert("邮箱不能为空");
      return;
    }
    if (password !== anotherPassword) {
      alert("两次输入的密码不一致");
      return;
    }
    const data = { username: name, email: email, password: password };
    postServer("/register", data)
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
    <div
      className={
        "relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12"
      }
    >
      <div
        className={
          "relative bg-white px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 animate-fade-in"
        }
      >
        <div className={"mx-auto max-w-md"}>
          <div className={"divide-y divide-gray-300/50"}>
            <div
              className={
                "relative text-center space-y-6 py-1 text-pretty leading-7 text-gray-700"
              }
            >
              <input
                type="text"
                value={username}
                onChange={(event) => setName(event.target.value)}
                placeholder="用户名"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300"
              />
              <input
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="邮箱"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300"
              />
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="密码"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300"
              />
              <input
                type="password"
                value={anotherPassword}
                onChange={(event) => setAnotherPassword(event.target.value)}
                placeholder="再次输入密码"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300"
              />
              <br />
              <button
                className={
                  "btn btn-bg border w-44 p-2 rounded-md"
                }
                type="submit"
                onClick={() =>
                  check(username, email, password, anotherPassword)
                }
              >
                注册
              </button>
              <br />
              <button
                className={"btn btn-bd border w-44 p-2 rounded-md"}
                type="submit"
                onClick={() => (window.location.href = "/login")}
              >
                前往登录
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
