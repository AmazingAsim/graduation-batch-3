import { useEffect,useState } from "react";
import axios from "axios";


export default function useGetData(url){
    const [data,setData] = useState([]);

    useEffect(()=>{
      let getData = async()=>{
        try {
            let result = await axios.get(url);
            setData(result.data);
        } catch (error) {
            console.log(error)
        }
      }

      getData();
    },[url])

    return {data};
}