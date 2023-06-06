import s from './About.module.css'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import team from './team.js'
import emailIcon from '../../assets/img/about/icon/email.png';
import githubIcon from '../../assets/img/about/icon/github2.png';
import linkedinIcon from '../../assets/img/about/icon/linkedin.png';


const About=()=>{
// 

    return(
        <div className="container-fluid">
            <section>
                <h1 className="text-center mt-3" >About Us</h1>
            </section>
            <div className={s.container2}>
                <h2>About our project</h2>
                <p>Our project focuses on making an e-commerce application for the sale of natural and healthy foods. The main objective of the project is to give a nice and friendly tool to consumers who use websites of food retailers.</p>
            
            </div> 
            <div className={s.container2}>
                <h2>Developer team</h2>
                <p>Our work team has been trained in the bootcamp of <strong>Full Stack Web </strong> imparted by <strong>Soy Henry. </strong></p><p> And is made up of:</p>
            
            < div  className="Container ">
                <Row className='d-flex justify-content-center'>
              
                    {team.map((ele,index)=>{              
                        return    (
                        < Col key={index} className="col-lg-3 col-md-4 col-sm-12 col-xl-2 g-0" >  
                            <Card style={{ width: '12rem' }   } className="mt-1 " >
                                <Card.Img variant="top" src={ele.photo} />
                                <Card.Body>
                                    <Card.Title>{ele.name}</Card.Title>
                                    <Card.Text>                        
                                        <h6> <img src={ele.flag}  alt={ele.name} height='45px'/>  {ele.country}</h6> 
                                        <div style={{fontSize:'0.7rem',textAlign:'center'}}>                    
                                        <div><img src={emailIcon} alt='Email' height='24px'/><div>{ele.email}</div></div>
                                        <div><img src={githubIcon} alt='Git' height='24px'/><div>{ele.git}</div></div>
                                        <div><img src={linkedinIcon} alt='Linkedin' height='21px'/><div>{ele.linkedin}</div></div>
                                        <p>{ele.data}</p>
                                        </div>
                                    </Card.Text>                            
                                </Card.Body>
                            </Card>                            
                            </Col>
                         )
                    })
                    
                    }
                    </Row>
                 </div>
            </div> 
            <div className={s.container2}>
                <h2>Knowledge Areas</h2>
                
                <p>Our project is made for different development environments, applying various methodologies and work tools according to the area.</p>
                <p>This application was developed with current programming technologies both in the backend area, databases and in the frontend.</p>
            </div> 
        </div>
    )
}

export default About;