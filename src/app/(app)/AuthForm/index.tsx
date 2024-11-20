'use client'

import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import './AuthForm.module.scss';

const AuthForm = ({ closeModal }) => {
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    const redirectURI = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI;

    const googleLogin = useGoogleLogin({
        flow: 'auth-code',
        scope: 'email profile openid',
        redirect_uri: redirectURI,
        ux_mode: 'redirect',
        state: window.location.href,
        onSuccess: (response) => {
            console.log(response);
            window.location.reload();
        },
        onError: (error) => {
            console.error(error);
        },
    });

    const loginGoogle = (e) => {
        e.preventDefault();
        googleLogin();
    }


    return (
        <>
            <div className="w-full mx-auto">
                <div className="text-center text-lg font-bold text-black">Log In</div>
                <form className="bg-white rounded my-4 w-full text-sm font-medium">
                    <button
                        className="w-full mt-2 mb-2 bg-white hover:bg-slate-50 text-black py-2 px-4 rounded focus:outline-none focus:shadow-outline border border-gray-200"
                        onClick={loginGoogle}
                    >
                        <div className="flex items-center justify-center">
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.5 544.3">
                                <path
                                    d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                    fill="#4285f4" />
                                <path
                                    d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-88.2-68.7c-24.4 16.6-55.9 26-92.2 26-70.9 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.6 243.2 149.6z"
                                    fill="#34a853" />
                                <path
                                    d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                    fill="#fbbc04" />
                                <path
                                    d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 57.7 28.9 150l90.4 70.1c21.5-64.5 82.8-112.4 152.8-112.4z"
                                    fill="#ea4335" />
                            </svg>
                            <span className="ml-2">Continue with Google</span>
                        </div>
                    </button>
                </form >
            </div >
        </>
    )
}

export default AuthForm;