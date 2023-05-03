 import React from "react";
import { useParams} from "react-router-dom";

import style from './Detail.module.css'

   
const Detail = ()=>{
    const { id } = useParams();   
   const [product, setProduct] = React.useState({}); 
    console.log(id)
//   //  01702cfd-2ec1-4c74-9439-519594fbc43d
  // const product= {
  //   name: "Leche de almendras",
  //   image: "https://biofresh.shop/img/leche-almendras.jpg",//'../../assets/img/leche-almendras.jpg'
  //   description:
  //     "Leche vegetal de almendras, rica en grasas saludables y nutrientes.",
  //   price: 3.5,
  //   stock: 15,
  // }
 
  const getProductForId= async()=>{
    try {
      const Data= await axios(`http://localhost:3001/products/${id}` )
          const char=Data.data;
          console.log(char)         
            if (char.length>=1) {   setProduct(char[0]);  }
           else { window.alert("No hay ningun Producto con ese ID ");  }
    } catch (error) {
        window.alert("Error en la busqueda del Producto ")
    }
          

   }

  React.useEffect(() => {         
    getProductForId();
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [id]);


//   const history = useHistory()
//   function backToHome(){ history.push("/home")    }

//   function format(num)  {    
//       if(!isNaN(num)){
//         num = num.toString().split("").reverse().join("").replace(/(?=\d*\.?)(\d{3})/g,'$1.');
//         num = num.split("").reverse().join("").replace(/^[.]/, "");
//         return num;      
//       }  
//     }
  
return(
    <div className={style.container}>
       
        
        <div className={style.container2}>
        <div className={style.contInf} >
        
            <h3 className={style.title}>{product.name}</h3> 
            <p> {product.description}</p>
            </div>
          <img src={product.image} alt={product.name} width="320" height="320"/>
          <div className={style.contInf} >
            <div className={style.price}><label>$ </label>{product.price}</div>
            <div><label>Disponibles: </label>{product.stock}</div>
            
            <div><label>Cantidad:<input type="number" className={style.cantidad}   /> </label></div>
            <button  className={style.btn}> Add to Car</button> 
          
          </div>
            
           
        </div>
        {/* <button onClick={backToHome} className={style.btn}> Volver</button> */}
    </div>
)


}
export default Detail;