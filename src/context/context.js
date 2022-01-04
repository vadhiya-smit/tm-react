import React, { useEffect, useState } from 'react'
import Users from '../services/Users';
const MyContext = React.createContext();    

const ContextApis = ({children}) => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const  getData = async () => {
            var id = localStorage.getItem("userId")
            if(!id) {
                localStorage.setItem("userId","61bdb7f135c6730016bd378a")
                id = "61bdb7f135c6730016bd378a"
            }
            const res = await Users.getUserData(id)
            console.log(res);
            setUser(res)
            setIsLoading(false)
        }
        getData()
    }, [])

    return (
        <MyContext.Provider value={{user, setUser}} >
            {isLoading ? <div className="text-center">
                <img src="/LoadingClock.gif" alt="Loading..." />
            </div>  : <>{children}</>}
        </MyContext.Provider>
    )
}

export  {ContextApis,MyContext}
