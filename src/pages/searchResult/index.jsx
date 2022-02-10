import React,{useState,useEffect} from 'react';
import NavBar from "../../components/NavBar/NavBar";
import Container from "../../components/Container/Container";
import Card from "../../components/Card/Card";
import useDebounce from "../../hooks/useDebounce";
import { searchItems} from "../../utils/models/mercadoLibre";
import {useParams, useHistory, useLocation} from "react-router-dom";
import Loader from "../../components/loader/loader";
import Itemslist from "../../components/ItemsList/Itemslist";
import Breadcrumbs from "../../components/Breadcrumbs";

const SearchResult =()=>{
    function useQuery() {
        const { search } = useLocation();
        return React.useMemo(() => new URLSearchParams(search), [search]);
    }
    let query = useQuery();
    const search = query.get("search");
    const [searchTxt,setSearchTxt]=useState('')
    const [cargando,setCargando]=useState(false)
    const [items,setItems]=useState([])
    const [categories,setCategories]=useState([])
    const history = useHistory()

    const onChangeTxt=(event)=>{
        setSearchTxt(event?.target?.value??'')
    }
    const valueDebounce = useDebounce(searchTxt, 1500);
    useEffect(() => {
        if( valueDebounce.length >1) {
            onDelayEnd();
        }
    }, [valueDebounce]);

    useEffect(() => {
        if( search.length >1) {
            setCargando(true)
            setSearchTxt(search);
        }
    }, []);
    useEffect(() => {
        const params = new URLSearchParams()
        if (searchTxt.trim().length>0) {
            params.append("search", searchTxt.trim())
        } else {
            params.delete("search")
        }
        history.push({search: params.toString()})
    }, [searchTxt, history])
    const onDelayEnd=async()=>{
        setCargando(true)
        setItems([])
        setCategories([])
        const result= await searchItems(searchTxt)
        setItems(result?.items??[])
        setCategories(result?.categories??[])
        setCargando(false)
    }
    const openItemDetaill=(id)=>{
        history.push(`/items/${id}`);
    }
    return <>
        <NavBar searchTxt={searchTxt} onChangeTxt={onChangeTxt}/>
        <Container>
            {categories?.length>0&&<Breadcrumbs categories={categories}/>}
            <Card>
                <Itemslist items={items} openItemDetaill={openItemDetaill}/>
                {cargando &&<Loader/>}
            </Card>
        </Container>
    </>
}
export default SearchResult;