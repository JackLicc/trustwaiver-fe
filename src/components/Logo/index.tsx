// add logo component
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from './logo.svg';
import { cn } from '@/lib/utils';

const Logo = () => {
    return (
        <Link href="/">
            <a className={cn('flex items-center')}>
                <Image src={logo} alt="Logo" width={40} height={40} />
                <span className={cn('ml-2 text-xl font-bold')}>纽村省钱快报</span>
            </a>
        </Link>
    );
};

export default Logo;