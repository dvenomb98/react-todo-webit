import React, { useEffect } from 'react'
import { AuthService } from '@/services/auth/auth.service'

export const Dashboard = () => {
    useEffect(() => {
        AuthService.whoAmI().then((res) => console.log(res))
    }, [])

    return <h2>DashBoard</h2>
}
