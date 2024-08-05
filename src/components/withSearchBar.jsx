import { useState } from "react";
import SearchBar from "./SearchBar";



export const withSearchBar =(Component, data, keys) =>{
    return function (){
        const [query, setQuery] = useState("");
        
        const search = (dataSearch) => {
            return (
                dataSearch.filter((item) =>(
                    keys.some((key) =>
                        item[key]?.toLowerCase().includes(query.toLowerCase()))
                ))

            )
        }

        return(
            data && (
                <>
                <SearchBar setQuery={setQuery}></SearchBar>
                <Component  dataList ={search(data)}></Component>
                </>
            )
        )            
    }

}


/*item[key]?.toLowerCase().includes(query.toLowerCase()) */