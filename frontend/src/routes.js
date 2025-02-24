import { Component } from "react"
import Admin from "./pages/admin"
import {ADMIN_ROUTE, GETUSER_ROUTE, LOGIN_ROUTE, POSTPASSNGER_ROUTE, REGISTRATION_ROUTE, UPDATEPASSENGER_ROUTE, UPDATE_ROUTE } from "./utils/consts"
import GetUsers from "./pages/getusers"
import UpdateUser from "./pages/update"
import UpdatePassenger from "./pages/passenger"
import Registration from "./pages/registration"
import PostPassenger from "./pages/postPas"


export const authRoutes = [
    // {
    //     path: UPDATE_ROUTE,
    //     Component: UpdateUser
    // }
]

export const publicRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: GETUSER_ROUTE,
        Component: GetUsers
    },
    {
        path: UPDATEPASSENGER_ROUTE,
        Component: UpdatePassenger
    },
    {
        path: UPDATE_ROUTE,
        Component: UpdateUser
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Registration
    },
    // {
    //     path: LOGIN_ROUTE,
    //     Component: Login
    // }
    {
        path: POSTPASSNGER_ROUTE,
        Component: PostPassenger
    }
]