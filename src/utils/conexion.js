import axios from "axios";

export async function get(url){
    try{
        const result = await axios.get(url);
        return result?.data;
    }catch(error) {
        console.log(error);
    }
}