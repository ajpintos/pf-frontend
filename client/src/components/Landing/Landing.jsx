import s from "./Landing.module.css";
import imgpropia from "../../logo/logo.png";

const Landing = () => {
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
    <div className={s.container}>
      <div className={s.container_inicio}>
        <img src={imgpropia} alt="imagen" className={s.logo} />
        <input type="text" placeholder="Search..." className={s.search} />
        <button className={s.my_acount}>🙋‍♂️My account</button>
        <button className={s.whishlist}>🧡Whishlist</button>
        <button className={s.amount}>🛒AMOUNT</button>
        <br />
        <br />

        <div className={s.container_settings}>
          <button className={s.home}>HOME</button>
          <button className={s.categories}>CATEGORIES</button>
          <button className={s.about_us}>ABOUT US</button>
          <button className={s.contact_us}>CONTACT US</button>
          <br />
          <button className={s.settings}>SETTINGS</button>
          <br />
        </div>
      </div>
      <h1 className={s.hero}>HERO</h1>

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
      <br />
      <div className={s.container_final}>
        <img src={imgpropia} alt="imagen" className={s.logo2} />

        <h4 className={s.container_infomation_final}>
          INFORMATION
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h6>
        </h4>

        <h4 className={s.container_contact_final}>
          CONTACT
          <h6>
            Lorem ipsum dolor sit amet. consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h6>
        </h4>

        <h4 className={s.container_menu_final}>
          MENU
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h6>
        </h4>
        <h5 className={s.copyright}>Copyright 2023</h5>
      </div>
    </div>
  );
};

export default Landing;
