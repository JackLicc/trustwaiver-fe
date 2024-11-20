'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuLabel
} from '@/components/ui/dropdown-menu'

import { useAuth } from '@/hooks/auth'

const Profile = ({ user }) => {
    const { logout } = useAuth()

    const noavatar = '/assets/img/noavatar.svg'

    const handleLogout = async () => {
        await logout()
        window.location.href = '/'
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className="w-8 h-8 cursor-pointer">
                    <AvatarImage src={user.avatar || noavatar} alt="avatar" referrerPolicy="no-referrer" />
                    <AvatarFallback>Hi</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>
                    <div className="flex items-center justify-between">
                        <Avatar className="w-12 h-12">
                            <AvatarImage src={user.avatar || noavatar} alt="avatar" referrerPolicy="no-referrer" />
                            <AvatarFallback>Hi</AvatarFallback>
                        </Avatar>
                        <div className="ml-4 w-48">
                            <div className="text-medium font-medium truncate">Hi, {user.display_name}</div>
                        </div>
                        <div></div>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem">Logout</a>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu >
    )
}

export default Profile