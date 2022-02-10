import React, {useEffect, useState} from "react";
import NavBar from "../../components/NavBar/NavBar";
import Container from "../../components/Container/Container";
import Card from "../../components/Card/Card";
import Loader from "../../components/loader/loader";
import useDebounce from "../../hooks/useDebounce";
import {useHistory} from "react-router-dom";
import ItemCard from "../../components/ItemCard";
import { useParams } from 'react-router-dom';
import {getItemDetaill, searchItems} from "../../utils/models/mercadoLibre";

const ItemDetail=()=>{
    let { id } = useParams();
    const [searchTxt,setSearchTxt]=useState('');
    const [cargando,setCargando]=useState(false)
    const [itemDetaill,setItemDetaill]=useState(null)
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
    useEffect(() => {
        if(id) {
            loadData(id)
        }else{
            setItemDetaill(null)
        }
    }, [id]);
    const loadData=async(itemId)=>{
        setCargando(true)
        setItemDetaill(null)
        const result= await getItemDetaill(itemId)
        const {item}=result;
        setItemDetaill(item??null)
        setCargando(false)
    }
    return <>
        <NavBar searchTxt={searchTxt} onChangeTxt={onChangeTxt}/>
        <Container>
            <Card>
                {cargando &&<Loader/>}
                {!!itemDetaill && <ItemCard item={itemDetaill??''}/>}
            </Card>
        </Container>
    </>
}
export default ItemDetail;