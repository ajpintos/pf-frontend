import imgpropia from "../../logo/logo.png";

const Footer = () => {
  return (
    <div className='col bg-secondary' >
      <div className='row' >
        <figure className='col-sm-6 col-md-3 col-lg-3'>
          <img src={imgpropia} alt="Biofresh Logo" className='img-fluid w-50' />
        </figure>
        <article className='col-sm-6 col-md-3 col-lg-3'>
          <h4 className='text-warning-emphasis'>
            INFORMATION
          </h4>
          <p className='h6 text-warning'>
          This web page is the result of the Final Project of Henry's FullStack Master.
          </p>
        </article>
        <article className='col-sm-6 col-md-3 col-lg-3'>
          <h4 className='text-warning-emphasis'>Group 5 of cohort Pt-10b</h4>
          <p className='h6 text-warning'>
            Juan Cruz Matanzo <br/>
            Santiago Muller <br/>
            Javier Pintos <br/>
            Mauricio Mendez <br/>
            Santiago Diaz <br/>
            Mario A. Benitez D. 
          </p>
        </article>
        <article className='col-sm-6 col-md-3 col-lg-3'>
          <h4 className='h5 text-warning-emphasis'>
            MENU
          </h4>
          <ul className='h5 list-unstyled text-primary'>
            <li >Home</li>
            <li>Categories</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </article> 
      </div>
      <h5 className='text-warning-emphasis'>Copyright 2023</h5>
    </div>
  )
};

export default Footer;