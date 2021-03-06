import React from 'react';
import {
    MDBView,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBMask,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBInput,
 
} from 'mdbreact';
import '../PublicRoute/home.css'
function PublicRoute() {

    return (
        <div id='home'>
             <MDBView src='https://desktopwallpaper.wiki/wp-content/uploads/data/2017/12/6/popular-gym-background-1920x111-WTG200513.jpg'>
          <MDBMask className='rgba-black-light' />
          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{ height: '100%', width: '100%', paddingTop: '17rem' }}
          >
            <MDBRow>
              <MDBCol md='12' className='mb-4 white-text text-center'>
                <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '><MDBIcon fab icon="mandalorian" />
                  WOD Tribe
                </h1>
                <hr className='hr-light my-4' />
                <h5 className='text-uppercase mb-4 white-text '>
                  <strong></strong>
                </h5>
                <MDBBtn outline color='white'>
                  The Tribe
                </MDBBtn>
                <MDBBtn outline color='white'>
                  Team
                </MDBBtn>
                <MDBBtn outline color='white'>
                Contact us
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
           <MDBContainer id='mission'>
        <MDBRow className='py-5'>
          <MDBCol md='12' className='white-text text-center'>
            <h3>
              <MDBIcon icon="quote-left" />          AQUI VAMOS A PONER UNA FRASE O UN LEMA PRA LA MARCA, O PODEMOS HACER COMO UN PEQUENO MISSION STATEMENT.                 <MDBIcon icon="quote-right" />
            </h3>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <section className="my-5">
        <h1 className="h1-responsive font-weight-bold text-center my-5">
          <strong>Explore The Tribe</strong>
        </h1>
        <h4 className="white-text w-responsive text-center mx-auto mb-5">
          Aqui se va a explicar que WOD tribe no es solo para ver los ejercicios si no que pueden hacer otras cosas.
      </h4>
        <MDBRow>
          <MDBCol lg="5" className="mb-lg-0 mb-5">
            <img
              src="https://mdbootstrap.com/img/Photos/Others/images/83.jpg"
              alt=""
              className="img-fluid rounded z-depth-1"
            />
          </MDBCol>
          <MDBCol lg="7">
            <h3 >  <MDBIcon icon="dumbbell" />         Check your progress</h3>
            <h4>
              Aqui se hablara acerca de los WOD y como pueden ver sus resultados y lo que han mejorado
         </h4>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="7">
            <h3>  <MDBIcon icon="utensils" />        Track your calories</h3>
            <h4>
              Aqui se hablara acerca de calorie ytacker y como funciona</h4>
            </MDBCol>
            <MDBCol lg="5">
              <img
                src="https://mdbootstrap.com/img/Photos/Others/images/82.jpg"
                alt=""
                className="img-fluid rounded z-depth-1"
              />
            </MDBCol>
          </MDBRow>
          <hr className="my-5" />
          <MDBRow>
            <MDBCol lg="5" className="mb-lg-0 mb-5">
              <img
                src="https://mdbootstrap.com/img/Photos/Others/images/83.jpg"
                alt=""
                className="img-fluid rounded z-depth-1"
              />
            </MDBCol>
            <MDBCol lg="7">
              <h3>  <MDBIcon icon="calculator" />          Fitness Calculator</h3>
              <h4>
              Aqui se hablara caerca de como puedes usar la calculadora para ver BMI y toda esta paja
           </h4>
            </MDBCol>
          </MDBRow>
          <hr className="my-5" />
        </section>
       
        

        <MDBRow className=" text-center">
          <MDBCardBody>
            <h2 className="h1-responsive font-weight-bold my-5">
            Our amazing team
          </h2>
            <p className="white-text w-responsive mx-auto mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
            <MDBRow>
              <MDBCol md="6" className="mb-md-0 mb-5">
                <img
                  tag="img"
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                  className="rounded-circle z-depth-1 img-fluid"
                  alt="Sample avatar"
                />
                <h4 className="font-weight-bold white-text my-4">
                Anthonny Rodriguez 
              </h4>
                <h6 className="text-uppercase white-text mb-3">Full-Stack Developer</h6>
                <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-green">
                  <MDBIcon fab icon="facebook-f" />
                </MDBBtn>
                <MDBBtn
                  tag="a"
                  floating
                  size="sm"
                  className="mx-1 mb-0 btn-green"
                >
                  <MDBIcon fab icon="github" />
                </MDBBtn>
                <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-green">
                  <MDBIcon fab icon="twitter" />
                </MDBBtn>
              </MDBCol>
              <MDBCol md="4" className="mb-md-0 mb-5">
                <img
                  tag="img"
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
                  className="rounded-circle z-depth-1 img-fluid"
                  alt="Sample avatar"
                />
                <h4 className="font-weight-bold white-text my-4">
                Andrew Rodriguez 
              </h4>
              <h6 className="text-uppercase white-text mb-3">Full-Stack Developer</h6>
                <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-green">
                  <MDBIcon fab icon="facebook-f" />
                </MDBBtn>
                <MDBBtn
                  tag="a"
                  floating
                  size="sm"
                  className="mx-1 mb-0 btn-green"
                >
                  <MDBIcon fab icon="github" />
                </MDBBtn>
                <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-green">
                  <MDBIcon fab icon="twitter" />
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBRow>
        <section className="my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5 white-text"></h2>
      Contact us
      
      <MDBRow>
        <MDBCol lg="5" className="lg-0 mb-4">
          <MDBCard>
            <MDBCardBody>
              <div>
                <h3 className="mt-2">
                  <MDBIcon icon="envelope" /> Write to us:
                </h3>
              </div>
              <p className="white-text">
                We'll write rarely, but only the best content.
              </p>
              <div className="md-form">
                <MDBInput
                  icon="user"
                  label="Your name"
                  iconClass="white-text"
                  type="text"
                  id="form-name"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  label="Your email"
                  iconClass="white-text"
                  type="text"
                  id="form-email"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="tag"
                  label="Subject"
                  iconClass="white-text"
                  type="text"
                  id="form-subject"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="pencil-alt"
                  label="Icon Prefix"
                  iconClass="white-text"
                  type="textarea"
                  id="form-text"
                />
              </div>
              <div className="text-center">
                <MDBBtn color="green">Submit</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="7">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
          <MDBRow className="text-center white-text">
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="green" className="accent-1">
                <MDBIcon icon="map-marker-alt" />
              </MDBBtn>
              <p>New York, 94126</p>
              <p className="mb-md-0">United States</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="green" className="accent-1">
                <MDBIcon icon="phone" />
              </MDBBtn>
              <p>+ 01 234 567 89</p>
              <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="green" className="accent-1">
                <MDBIcon icon="envelope" />
              </MDBBtn>
              <p>info@gmail.com</p>
              <p className="mb-md-0">sale@gmail.com</p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </section >
        </div>
    )
}


export default PublicRoute