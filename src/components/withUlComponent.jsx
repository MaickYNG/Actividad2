import * as allIcons from 'react-icons/fa';

export const withUlComponent =(Component , datalist) =>{

    return function(){

        return(
            <Component list ={datalist}></Component>
        )
    }
        

}