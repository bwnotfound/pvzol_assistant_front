// components/Navbar.tsx
"use client";

import React from 'react';

export default function Navbar() {
    return (
        <nav className="fixed w-full top-0 flex justify-between items-center px-6 py-4 bg-white shadow-md z-50">
            <div className="text-lg font-bold">蓝白BW</div>
            <div className="space-x-8">
                <a href="/" className="hover:text-blue-500 transition-colors">首页</a>
                <a href="/login" className="hover:text-blue-500 transition-colors">登录</a>
                <a href="/register" className="hover:text-blue-500 transition-colors">注册</a>
            </div>
            <button
                className="btn btn-bg font-bold py-2 px-4 rounded border"
                type="button"
                onClick={() => {
                    window.location.href = "/home";
                }}
            >
                进入主页
            </button>
        </nav>
    );
}
