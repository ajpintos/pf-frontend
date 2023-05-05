import React, {useEffect, useState} from "react";
import {useSelector} from 'react-redux';
import s from './NavBar.module.css';
import {Link} from 'react-router-dom';



export default function NavBar () {
    const categoriesList = [
        {
            id: 1,
            name: 'Frutos secos',
            description: 'Productos naturales y saludables ricos en nutrientes y grasas saludables.'
          },
          {
            id: 2,
            name: 'Especias',
            description: 'Condimentos naturales para dar sabor y aroma a tus comidas.'
          },
          {
            id: 3,
            name: 'Suplementos',
            description: 'Productos naturales para complementar una dieta saludable.'
          },
          {
            id: 4,
            name: 'Frutas y verduras',
            description: 'Productos orgánicos, frescos y de temporada.'
          },
          {
            id: 5,
            name: 'Cereales y legumbres',
            description: 'Alimentos ricos en fibra, proteínas y carbohidratos saludables.'
          }
    ]
    // const allCategories = useSelector( state => state.allCategories);
    // const allProducts = useSelector(state => state.allProducts);
    const [categories, setCategories] = useState(); // traemos todas las categorias
    const [products, setProducts] = useState(); // traemos todos los productos
    const [filter, setFilter] = useState(); // aplicamos el filtrado y traemos los productos ya filtrados

    // useEffect(() => {
    //     setFilter(products)
    // }, [])

    // useEffect(() => {

    // },[])


    /* metodos de filtrado:
        Categorias
        Precios (Desde: ________ Hasta: _______)
    */

    /* metodos de ordenamiento
        Albafeticamente
        Precio
    */

    //

    return (
    //     <nav className={s.navbar}>
    //         <ul className={s.navbar_left}>
    //             <li><a href="/">HOME</a></li>
    //             <li className={s.dropdown}>
    //                 <a href="/categories">STORE</a>
    //                 <select className={s.dropdown_menu}>
    //                     {categoriesList.map((name, index) => (
    //                         <option key={index}><a href={`/products/${name}`}>{name}</a></option>
    //                     ))}
    //                 </select>
    //             </li>
    //             <li><a href="/about">ABOUT US</a></li>
    //             <li><a href="/contact">CONTACT US</a></li>
    //         </ul>
    //         <ul className={s.navbar_right}>
    //             <li><a href="/settings">SETTINGS</a></li>
    //         </ul>
    //   </nav>
    <div className={s.container_settings}>
        <div className={s.navBar}> 
            <Link to='/' className={s.home}>HOME</Link>
            
            <ul>
                <Link to='/store' className={s.categories}>CATEGORIES</Link>
                {categoriesList.map(c => {
                    return(
                        <li><Link to={`/store/:${c.id}`}>{c.name}</Link></li>
                    )
                })}
            </ul>
            <Link to='/about' className={'s.about_us'}>ABOUT US</Link>
            <Link to='/contact' className={'s.contact_us'}>CONTACT US</Link>
        </div>
        <Link to='/settings' className={'s.settings'}>SETTINGS</Link>
    </div>
    )
}