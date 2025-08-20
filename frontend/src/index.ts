import LandingPage from './pages/landing/page'
import UserProfile from './pages/user-profile/user-profile'
import React from './react/react'

React.init({
    routes: {
        '/': LandingPage,
        '/user': UserProfile
    },
})
