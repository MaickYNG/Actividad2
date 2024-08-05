import { useEffect, useState } from "react";
import { UserList } from "./UserList";
import { withSearchBar } from "./withSearchBar";
function Usuarios(){
    const [usersData , setUsersData]= useState([])


    const dataObtener = () =>{

        const url = "https://jsonplaceholder.typicode.com/users"
        fetch (url)
        .then (response => response.json())
        .then (data =>{setUsersData(data)
            console.log("usersData",usersData)

        })
    }
    const UserListWithSearch = withSearchBar(UserList, usersData,["name", "enmail", "phone"])
    
    useEffect(() =>{
        dataObtener()
    },[])

    return(
        <>
        <h1>Users</h1>
        <UserListWithSearch></UserListWithSearch>
        </>
    )
}
export default Usuarios

