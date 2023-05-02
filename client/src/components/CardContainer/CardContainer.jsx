import React from "react";
import styles from "./CardContainer.module.css"
import Card from "../Card/Card.jsx";

function CardContainer () {

    const productsArray = [
        {
          name: "Almendras",
          image: "https://via.placeholder.com/150x150",
          description: "Fruto seco rico en grasas saludables, proteínas y fibra.",
          price: 2.5,
          stock: 50,
        },
        {
          name: "Dátiles",
          image: "https://via.placeholder.com/150x150",
          description: "Fruta deshidratada rica en fibra y vitaminas.",
          price: 3.5,
          stock: 30,
        },
        {
          name: "Ciruelas pasas",
          image: "https://via.placeholder.com/150x150",
          description:
            "Fruta deshidratada rica en fibra, antioxidantes y compuestos beneficiosos para la salud.",
          price: 4.0,
          stock: 20,
        },
        {
          name: "Nueces de Brasil",
          image: "https://via.placeholder.com/150x150",
          description:
            "Fruto seco rico en grasas saludables, proteínas y minerales.",
          price: 6.0,
          stock: 40,
        },
        {
          name: "Higos secos",
          image: "https://via.placeholder.com/150x150",
          description:
            "Fruta deshidratada rica en fibra, antioxidantes y compuestos beneficiosos para la salud.",
          price: 3.5,
          stock: 15,
        },
        {
          name: "Pistachos",
          image: "https://via.placeholder.com/150x150",
          description: "Fruto seco rico en grasas saludables, proteínas y fibra.",
          price: 5.0,
          stock: 25,
        },
        {
          name: "Anacardos",
          image: "https://via.placeholder.com/150x150",
          description:
            "Fruto seco rico en grasas saludables, proteínas y minerales.",
          price: 7.5,
          stock: 35,
        },
        {
          name: "Arándanos deshidratados",
          image: "https://via.placeholder.com/150x150",
          description:
            "Fruta deshidratada rica en antioxidantes y compuestos beneficiosos para la salud.",
          price: 4.25,
          stock: 10,
        },
        {
          name: "Avellanas",
          image: "https://via.placeholder.com/150x150",
          description: "Fruto seco rico en grasas saludables, proteínas y fibra.",
          price: 2.25,
          stock: 60,
        },
        {
          name: "Pasas",
          image: "https://via.placeholder.com/150x150",
          description: "Fruta deshidratada rica en fibra y antioxidantes.",
          price: 2.75,
          stock: 50,
        },
        {
          name: "Jugo de naranja",
          image: "https://via.placeholder.com/150x150",
          description:
            "Jugo natural de naranjas frescas, rico en vitamina C y antioxidantes.",
          price: 2.5,
          stock: 30,
        },
        {
          name: "Agua de coco",
          image: "https://via.placeholder.com/150x150",
          description: "Agua natural de coco, rica en electrolitos y nutrientes.",
          price: 3.0,
          stock: 25,
        },
        {
          name: "Limonada natural",
          image: "https://via.placeholder.com/150x150",
          description:
            "Limones frescos exprimidos con agua y endulzados con miel natural.",
          price: 2.75,
          stock: 20,
        },
        {
          name: "Té verde",
          image: "https://via.placeholder.com/150x150",
          description:
            "Té verde natural, rico en antioxidantes y con propiedades antiinflamatorias.",
          price: 3.5,
          stock: 40,
        },
        {
          name: "Jugo de manzana",
          image: "https://via.placeholder.com/150x150",
          description:
            "Jugo natural de manzanas frescas, rico en vitaminas y antioxidantes.",
          price: 2.25,
          stock: 30,
        },
        {
          name: "Té de jengibre",
          image: "https://via.placeholder.com/150x150",
          description:
            "Té natural de jengibre fresco, con propiedades antiinflamatorias y digestivas.",
          price: 3.25,
          stock: 20,
        },
        {
          name: "Jugo de pomelo",
          image: "https://via.placeholder.com/150x150",
          description:
            "Jugo natural de pomelo frescas, rico en vitamina C y antioxidantes.",
          price: 2.75,
          stock: 25,
        },
        {
          name: "Leche de almendras",
          image: "https://via.placeholder.com/150x150",
          description:
            "Leche vegetal de almendras, rica en grasas saludables y nutrientes.",
          price: 3.5,
          stock: 15,
        },
        {
          name: "Té de menta",
          image: "https://via.placeholder.com/150x150",
          description:
            "Té natural de hojas de menta fresca, con propiedades digestivas y relajantes.",
          price: 2.5,
          stock: 30,
        },
      ];

    return (
        <div className={styles.container_productos}>
            {productsArray.length 
                ?
                productsArray.map(product => (
                    <Card
                        key={product.name}
                        name={product.name}
                        image={product.image}
                        description={product.description}
                        price={product.price}
                        stock={product.stock} 
                    />
                ))
                : null
            }
        </div>
    )
}

export default CardContainer;