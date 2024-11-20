import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <header className="relative w-full py-3 px-6 border-b border-b-primary-300 flex items-center" style={{ backgroundColor: '#353434' }}>
            <Link className="inline-block flex flex-col items-center text-white mr-8" href="/">
                <span className="text-lg" style={{ fontFamily: 'SimHei,Aria', color: '#FFF', display: 'inline-block' }}>
                    纽村<span style={{ color: '#ffe724', border: '1px solid red', borderRadius: '50%', padding: '3px 4px', transform: 'rotate(30deg)' }}>省</span>钱快报
                </span>
                <small className="block text-xs" style={{ color: '#FFF' }}>省钱才是王道</small>
            </Link>
            <nav className="ml-4">
                <ul className="flex items-center">
                    <li className="mr-4">
                        <Link href="/">
                            <p className="text-sm font-semibold text-white">今日特价</p>
                        </Link>
                    </li>
                    <li className="mr-4">
                        <Link href="/store/list">
                            <p className="text-sm font-semibold text-white">店铺特价</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header