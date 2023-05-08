import NavBar from '../NavBar/NavBar';
import s from './About.module.css'
const About=()=>{

    return(
        <div className={s.container}>
       
        
        <NavBar/>
        <h1>About Us</h1>
        <div className={s.container2}>
            <h2>About Our Project</h2>            {/* Acerca de nuestro proyecto */}
            <p>Our project focuses on making an e-commerce application for the sale of natural and healthy foods. The main objective of the project is to give a nice and friendly tool to consumers who use websites of food retailers.</p>
            {/* Nuestro proyecto  se enfoca en realizar una aplicacion de comercio electrónico para la venta de alimentos naturales y saludables. El objetivo principal del proyecto es dar una herramienta agradable y amigable a los consumidores que usan sitios web de los minoristas de alimentos. */}
           
        </div> 
        <div className={s.container2}>
            <h2>Developer Team</h2>
            {/* Equipo de desarrolladores */}
            <p>Our work team has been trained in the bootcamp of <strong>Full Stack Web </strong> imparted by <strong>Soy Henry. </strong></p><p> And is integrated by:</p>
            {/* <p>Nuestro equipo de trabajo se ha capacitado en el bootcamp de <strong>Full Stack Web </strong> impartido por <strong>Soy Henry. </strong></p><p> Y está conformado por:</p> */}
            <ul>
                <li>Javier Pintos (Uru)</li>
                <li>Juan Matanzo  (Arg)</li>
                <li>Mario Benitez (Mex)</li>
                <li>Mauricio Mendez (Col)</li>
                <li>Santiago Diaz (Col)</li>
                <li>Santiago Muller (Arg)</li>
            </ul>
            
        </div> 
        <div className={s.container2}>
            <h2>Knowledge Areas</h2>
            {/* <h2>Areas de conocimiento</h2> */}
            
            <p>Our project is made for different development environments, applying various methodologies and work tools according to the area.</p>
            <p>This application was developed with current programming technologies both in the backend area, databases and in the frontend.</p>
            {/* <p>Nuestro proyecto esta realizado para los diferentes entornos de desarrollo, aplicando variadas metodologias y herramientas de trabajo de acuerdo al area.</p>
            <p>Esta aplicacion se desarrollo con tecnologias de programacion actuales tanto en el area de backend, bases de datos  y como en el frontend</p> */}
        </div> 
    
        </div>
    )
}

export default About;