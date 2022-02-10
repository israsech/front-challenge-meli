import React, {useEffect, useState} from 'react';
import NavBar from "../../components/NavBar/NavBar";
import Container from "../../components/Container/Container";
import useDebounce from "../../hooks/useDebounce";
import {useHistory} from "react-router-dom";

const Home =()=>{
    const [searchTxt,setSearchTxt]=useState('');
    const onChangeTxt=(event)=>{
        setSearchTxt(event?.target?.value??'')
    }
    const valueDebounce = useDebounce(searchTxt, 1500);
    const history = useHistory()
    useEffect(() => {
        if(valueDebounce.length >1) {
            history.push(`/items?search=${searchTxt}`);
        }
    }, [valueDebounce]);
    return <>
        <NavBar  searchTxt={searchTxt} onChangeTxt={onChangeTxt}/>
        <Container/>
    </>
}
export default Home;