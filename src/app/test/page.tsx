
'use client';
import React from 'react'
import { useState , useEffect} from 'react'
import axios from 'axios';

const Page = () => {




const [endpoint, setEndpoint] = useState("users");
    type Data={
        id:number,
        firstName:string
    }

    const [data,setData]=useState<Data[]>([]);
    const [loading,setLoading]=useState(false);
     useEffect(() => {
    amardata(endpoint);
  }, [endpoint]);


    //eikhane ami amar data fetch korbo 

    const amardata=async(endpoint:string)=>{

        setLoading(true);

        try{
            const response=await axios.get(`https://api.fake-rest.refine.dev/${endpoint}`);
            setData(response.data);
        
        }
        catch(error){
            alert("Something went wrong");
        }

        finally{
            setLoading(false);
        }

    }

    //eiber ami delete korbo

    const deleteKor=async(endpoint:string, id:number)=>{

        try{
            await axios.delete(`https://api.fake-rest.refine.dev/${endpoint}/${id}`);
            await amardata(endpoint); // refetch data after deletion
        }
        catch(error){
            alert("Something went wrong while deleting");
        }
    }








    if(loading){
        return <p>Loading...</p>
    }


  return (


    <div>

            
            <div>
                <h1>Data Fetched Successfully</h1>
                <ul>
                    {data.map((item:Data) => (
                        <div key={item.id} style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                            <li key={item.id}>{item.firstName}</li>
                            <button onClick={()=>{deleteKor(endpoint,item.id)}}>delete</button>
                            </div>
                        
                    ))}
                </ul>
            </div>
       

        
    </div>
  );
};

export default Page