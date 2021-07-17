import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Item from './Item'
import axios from 'axios'
const ItemList = () => {

    
    const { category } = useParams();
    
    const [products, setProducts] = useState([]);
   
    

    
    useEffect(()=>{
        
     
            
          getProducts()
         
       
       
    },[category])




    const getProducts = async () =>{
        if(category){
            const data = await axios.get(`http://localhost:4000/product/category/${category}`)
            
            setProducts(data.data)
           
        }else{
            const data = await axios.get(`http://localhost:4000/products`)
         
            setProducts(data.data)
          
        }
    }
      
       


    return (
        <div className="container-fluid pt-5">


            <div className="row m-auto">
                {
                products.map((i ) =>{
                    return(

                        <div key={i.id}  className="col-10 col-sm-4 col-md-4 m-auto" >
                            <Item  prodID = {i.id} title={i.name} price={i.price} description={i.description} cat={i.category} img={i.img}/>
                        </div>
                    )
                })
                }

               


            </div>
        </div>
    )
}

export default ItemList
