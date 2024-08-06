// components/Footer.tsx
import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-black text-center py-6">
            <div className="container mx-auto text-white">
                <p><a className="hover:text-blue-400 transition-colors text-sm font-semibold" href="https://beian.miit.gov.cn/" target="_blank">鄂ICP备2024036010号-1</a></p>
                <br />
                <p className="mb-2 text-sm font-semibold">&copy; Copyright 蓝白BW 2024 @ All Rights Reserved</p>
                <p className="mb-4 text-sm font-semibold">by: 忧郁鼠标</p>
                <div className="flex justify-center space-x-4 mt-4 text-sm">
                    <a href="/" className="hover:text-blue-500 transition-colors">关于我</a>
                    <a href="/" className="hover:text-blue-500 transition-colors">我的服务</a>
                    <a href="/" className="hover:text-blue-500 transition-colors">支持</a>
                </div>
            </div>
        </footer>
    );
}
