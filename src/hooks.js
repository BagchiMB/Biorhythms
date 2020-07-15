import {useState} from 'react'

export function useLocalStorage(key,defaultValue)
{
    const getiniValue=()=>localStorage.getItem(key) ?? defaultValue; 
    const [value,setValue]=useState(getiniValue)
    const setAndStoreVal= (newValue) => {
        setValue(newValue)
        localStorage.setItem(key,newValue)
    }
    return [value,setAndStoreVal]
}