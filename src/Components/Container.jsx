

import React, {useState, useEffect} from 'react'
import ItemCount from './ItemCount'
const Container = () => {

    //const [products, setProducts] = useState([]);
    
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getProducts();
    })
   const datos=  [
        {
            "id": 1,
            "name": "Remera Blanca",
            "precio": 1450,
            "descripcion": "Remera blanca para hombre",
            "categoria": "hombre",
            "stock": 4
        },
        {
            "id": 2,
            "name": "Remera azul",
            "precio": 1450,
            "descripcion": "Remera azul para hombre",
            "categoria": "hombre",
            "stock": 4
        },
        {
            "id": 3,
            "name": "Remera rosa",
            "precio": 1450,
            "descripcion": "Remera rosa para mujer",
            "categoria": "mujer",
            "stock": 4
        },
        {
            "id": 4,
            "name": "Remera lila",
            "precio": 1450,
            "descripcion": "Remera lila para mujer",
            "categoria": "mujer",
            "stock": 4
        },
        {
            "id": 5,
            "name": "Remera negra",
            "precio": 1450,
            "descripcion": "Remera negra para hombre",
            "categoria": "hombre",
            "stock": 4
        },
        {
            "id": 6,
            "name": "Remera verde",
            "precio": 1450,
            "descripcion": "Remera verde para hombre",
            "categoria": "hombre",
            "stock": 4
        }
    ]



    const getProducts = async () =>{
        let ServerOnline = true;
        let promesa = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(ServerOnline){
                    resolve("[{\"id\":1,\"image\":\"https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg\"},{\"id\":1,\"image\":\"https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg\"},{\"id\":1,\"image\":\"https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg\"},{\"id\":1,\"image\":\"https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg\"},{\"id\":1,\"image\":\"https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg\"},{\"id\":1,\"image\":\"https://images-na.ssl-images-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg\"}]");
                }else{
                    reject( new Error('Servidor sin conexion'));
                }
            },3000);    
        });
        console.log(promesa);
         let data = await promesa;
         console.log(data);
         data = JSON.parse(data);

         setProducts(data);

}
    
    
    
    return (
        <div>
            <ItemCount stock={5} initial={1}/>
        </div>
    )
}

export default Container
