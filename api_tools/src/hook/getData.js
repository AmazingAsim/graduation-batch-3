import {useEffect, useState} from 'react'
import axios from 'axios';
export default function useGetData(url){
   const [data,setData] = useState([]);
   const [loading,setLoading] = useState(true);
   useEffect(function(){
     async function getData(){
        let result = await axios.get(url);
        setData(result.data);
        setLoading(false);
     }
     getData();
   },[url]);

   return [data,loading];
}

