import {objectToUrlParams} from "../utils";
import {get} from "../conexion";

const url_api = 'http://localhost:5000/api/';

export async function searchItems(q){
    const filter={q}
    const paramsString= objectToUrlParams(filter??{}) ? `?${objectToUrlParams(filter??{})}` : '';
    return await get(`${url_api}items${paramsString}`);
}
export async function getItemDetaill(id){
    return await get(`${url_api}items/${id}`);
}