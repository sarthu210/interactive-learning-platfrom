import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function AuthLayout({children, authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    useEffect(() => {

        if(authentication && isAuthenticated !== authentication){
            navigate("/login")
        } else if(!authentication && isAuthenticated !== authentication){
            navigate("/")
        }
        setLoader(false)
    }, [isAuthenticated, navigate, authentication])

  return loader ? <h1>Loading...</h1> : <>{children}</>
}