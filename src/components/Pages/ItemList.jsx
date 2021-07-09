import React, {useState, useEffect} from 'react'
import Item from './Item'
const ItemList = () => {
    const [products, setProducts] = useState([]);
    const dataAPI = [
        {name: 'Producto1',
         description: 'Este es el producto 1',
         id: 1,
         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGoX_R1TEFY73TrJrNnXXz_7xJ-zjTcLgKizj4OxBzI8Z5cfNVpHinoup3BGXlX2ZcTqA&usqp=CAU'
        
        },
        {name: 'Producto2',
         description: 'Este es el producto 2',
         id: 2,
         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGoX_R1TEFY73TrJrNnXXz_7xJ-zjTcLgKizj4OxBzI8Z5cfNVpHinoup3BGXlX2ZcTqA&usqp=CAU'
        
        },
        {name: 'Producto3',
         description: 'Este es el producto 3',
         id: 3,
         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGoX_R1TEFY73TrJrNnXXz_7xJ-zjTcLgKizj4OxBzI8Z5cfNVpHinoup3BGXlX2ZcTqA&usqp=CAU'
        
        },
        {name: 'Producto4',
         description: 'Este es el producto 4',
         id: 4,
         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGoX_R1TEFY73TrJrNnXXz_7xJ-zjTcLgKizj4OxBzI8Z5cfNVpHinoup3BGXlX2ZcTqA&usqp=CAU'
        
        },
        {name: 'Producto5',
         description: 'Este es el producto 5',
         id: 5,
         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGoX_R1TEFY73TrJrNnXXz_7xJ-zjTcLgKizj4OxBzI8Z5cfNVpHinoup3BGXlX2ZcTqA&usqp=CAU'
        
        }
    ]
    let data = []
    useEffect(()=>{
        getProducts();
        
        console.log(products)
    },[])


    const getProducts = async () =>{
        let ServerOnline = true;
        let promesa = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(ServerOnline){
                    resolve(dataAPI);
                }else{
                    reject( new Error('Servidor sin conexion'));
                }
            },3000);    
        });
        console.log(promesa);
         data = await promesa;
         
         setProducts(data)
         console.log('productos');
         console.log(products);
    }
      
       


    return (
        <div className="container-fluid">


            <div className="row">
                {
                products.map((i ) =>{
                    return(

                        <div key={i.id}  className="col-12 col-sm-6 col-md-3" >
                            <Item  title={i.title} description={i.description} img={i.img}/>
                        </div>
                    )
                })
                }

               


            </div>
        </div>
    )
}

export default ItemList
