'use client'

import { useState } from 'react';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import { GoogleOAuthProvider } from '@react-oauth/google';

import { Button } from "@/components/ui/button";
import AuthForm from '@/app/(app)/AuthForm';

const AuthButtons = () => {
    const [open, setOpen] = useState(false);
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID

    return (
        <Dialog open={open} onOpenChange={(v) => setOpen(v)}>
            <DialogTrigger>
                Log In
            </DialogTrigger>
            <DialogContent>
                <GoogleOAuthProvider clientId={clientId}>
                    <AuthForm closeModal={() => setOpen(false)} />
                </GoogleOAuthProvider>
                <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                    <span className="sr-only">Close</span>
                </DialogClose>
            </DialogContent>
        </Dialog>
    );
}

export default AuthButtons