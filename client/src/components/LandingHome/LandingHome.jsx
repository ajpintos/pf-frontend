import s from "./Landing_home.module.css";
import imgpropia from "../../logo/logo.png";
import p from "../../helpers/importPictures";
import Footer from '../Footer/Footer.jsx';

const Landing_home = () => {
  const productsArray = [
    {
      name: "Almendras",
      image: p.almendras,
      description: "Fruto seco rico en grasas saludables, proteínas y fibra.",
      price: 2.5,
      stock: 50,
    },
    {
      name: "Dátiles",
      image: p.datiles,
      description: "Fruta deshidratada rica en fibra y vitaminas.",
      price: 3.5,
      stock: 30,
    },
    {
      name: "Ciruelas pasas",
      image: p.pasas,
      description:
        "Fruta deshidratada rica en fibra, antioxidantes y compuestos beneficiosos para la salud.",
      price: 4.0,
      stock: 20,
    },
    {
      name: "Nueces de Brasil",
      image: p.nueces_brasil,
      description:
        "Fruto seco rico en grasas saludables, proteínas y minerales.",
      price: 6.0,
      stock: 40,
    },
    {
      name: "Higos secos",
      image: p.higos_secos,
      description:
        "Fruta deshidratada rica en fibra, antioxidantes y compuestos beneficiosos para la salud.",
      price: 3.5,
      stock: 15,
    },
    {
      name: "Pistachos",
      image: p.pistachios,
      description: "Fruto seco rico en grasas saludables, proteínas y fibra.",
      price: 5.0,
      stock: 25,
    },
    {
      name: "Anacardos",
      image: p.anacardos,
      description:
        "Fruto seco rico en grasas saludables, proteínas y minerales.",
      price: 7.5,
      stock: 35,
    },
    {
      name: "Arándanos deshidratados",
      image: p.arandanos_desidratados,
      description:
        "Fruta deshidratada rica en antioxidantes y compuestos beneficiosos para la salud.",
      price: 4.25,
      stock: 10,
    },
    {
      name: "Avellanas",
      image: p.avellanas,
      description: "Fruto seco rico en grasas saludables, proteínas y fibra.",
      price: 2.25,
      stock: 60,
    },
    {
      name: "Pasas",
      image: p.pasas,
      description: "Fruta deshidratada rica en fibra y antioxidantes.",
      price: 2.75,
      stock: 50,
    },
    {
      name: "Jugo de naranja",
      image: p.jugo_naranja,
      description:
        "Jugo natural de naranjas frescas, rico en vitamina C y antioxidantes.",
      price: 2.5,
      stock: 30,
    },
    {
      name: "Agua de coco",
      image: p.agua_coco,
      description: "Agua natural de coco, rica en electrolitos y nutrientes.",
      price: 3.0,
      stock: 25,
    },
    {
      name: "Limonada natural",
      image: p.limonada,
      description:
        "Limones frescos exprimidos con agua y endulzados con miel natural.",
      price: 2.75,
      stock: 20,
    },
    {
      name: "Té verde",
      image: p.te_verde,
      description:
        "Té verde natural, rico en antioxidantes y con propiedades antiinflamatorias.",
      price: 3.5,
      stock: 40,
    },
    {
      name: "Jugo de manzana",
      image: p.jugo_manzana,
      description:
        "Jugo natural de manzanas frescas, rico en vitaminas y antioxidantes.",
      price: 2.25,
      stock: 30,
    },
    {
      name: "Té de jengibre",
      image: p.te_jengibre,
      description:
        "Té natural de jengibre fresco, con propiedades antiinflamatorias y digestivas.",
      price: 3.25,
      stock: 20,
    },
    {
      name: "Jugo de pomelo",
      image: p.jugo_pomelo,
      description:
        "Jugo natural de pomelo frescas, rico en vitamina C y antioxidantes.",
      price: 2.75,
      stock: 25,
    },
    {
      name: "Leche de almendras",
      image: p.leche_almendras,
      description:
        "Leche vegetal de almendras, rica en grasas saludables y nutrientes.",
      price: 3.5,
      stock: 15,
    },
    {
      name: "Té de menta",
      image: p.te_de_menta,
      description:
        "Té natural de hojas de menta fresca, con propiedades digestivas y relajantes.",
      price: 2.5,
      stock: 30,
    },
  ];
  return (
    <div className={s.container}>

      {/* Cabecera */}
      <header>

        {/* Sección del logo, login, favoritos y carrito */}
        <div className={s.container_inicio}>
          <img src={imgpropia} alt="imagen" className={s.logo} />
          <input type="text" placeholder="Search..." className={s.search} />
          <button className={s.my_acount}>🙋‍♂️My account</button>
          <button className={s.whishlist}>🧡Whishlist</button>
          <button className={s.amount}>🛒AMOUNT</button>
          <br />
          <br />
        </div>

        {/* Sección de NavBar y Settings */}
        <div className={s.container_settings}>
          <div className={s.navBar}> 
            <button className={s.home}>HOME</button>
            <button className={s.categories}>CATEGORIES</button>
            <button className={s.about_us}>ABOUT US</button>
            <button className={s.contact_us}>CONTACT US</button>
          </div>
          <button className={s.settings}>SETTINGS</button>
        </div>

        {/* Sección Hero */}
        <h1 className={s.hero}>HERO</h1>

      </header>

      {/* Sección Cards */}
      <section>
        <h2 className={s.feactured_products}>FEACTURED PRODUCTS</h2>
        <div className={s.container_productos}>
          {productsArray.map((p) => (
            <div className={s.productos}>
              <img
                src={p.image}
                alt="En desarrollo"
                className={s.image_product}
                />
              <h4 className={s.name}>{p.name}</h4>
              <h6 className={s.description}>{p.description}</h6>
              <h5 className={s.price}>$:{p.price}</h5>
              <button className={s.button_cart}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Landing_home;
