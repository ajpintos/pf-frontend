import s from './About.module.css'
const About=()=>{

    return(
        <div className={s.container}>
        <h1>About Us</h1>

        <div className={s.container2}>
            <h2>Acerca de nuestro proyecto</h2>
            <p>Nuestro proyecto  se enfoca en realizar una aplicacion de comercio electrónico para la venta de alimentos naturales y saludables. El objetivo principal del proyecto es dar una herramienta agradable y amigable a los consumidores que usan sitios web de los minoristas de alimentos.</p>
           
        </div> 
        <div className={s.container2}>
            <h2>Equipo de desarrolladores</h2>
            <p>Nuestro equipo de trabajo se ha capacitado en el bootcamp de <strong>Full Stack Web </strong> impartido por <strong>Soy Henry. </strong></p><p> Y está conformado por:</p>
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
            <h2>Areas de conocimiento</h2>
            
            <p>Nuestro proyecto esta realizado para los diferentes entornos de desarrollo, aplicando variadas metodologias y herramientas de trabajo de acuerdo al area.</p>
            <p>Esta aplicacion se desarrollo con tecnologias de programacion actuales tanto en el area de backend, bases de datos  y como en el frontend</p>
        </div> 
    
        </div>
    )
}

export default About;