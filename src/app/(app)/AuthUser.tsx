'use client'

import { useAuth } from '@/hooks/auth'
import AuthButtons from '@/app/(app)/AuthButtons'
import Profile from '@/app/(app)/Profile'

const AuthUser = () => {
    const { user } = useAuth()

    if (user) {
        return <Profile user={user} />
    }

    return <AuthButtons />
}

export default AuthUser