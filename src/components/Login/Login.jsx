import BtnLogin from "./BtnLogin"
import "./login.css"

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function Login() {
  return (
    
    <main>
        <section className="main-header-login">
            <div className="title">
              <h1>¿Cuánto <span style={{color: "#1ed760"}}>conoces</span> a tu <span style={{borderBottom: "5px solid #1ed760"}}>artista</span> favorito?</h1>
              <BtnLogin text={"¡Jugar ahora!"}/>
            </div>

            <div className="image-gif-container">
              <img src="https://i.ibb.co/rMgKBqm/2023-09-04-17-43-24-1.gif" className="initial-gif" alt="" />
            </div>

        </section>

        <section className="faq-login">

            <h2 className="faq-title">¿Cómo funciona el juego?</h2>
            
            <article className="step" data-aos="fade-right" data-aos-once="true">
                <img src="https://i.ibb.co/584fcCd/imagen-2023-09-04-193831412.png" alt="" />

               <div>
                <h3 style={{color:"#1ed760"}}>1.</h3>
               <p>Selecciona a tu artista favorito. <br /> En este menú, puedes elegir a uno de los artistas que más escuchaste en las últimas 4 semanas o buscar a otro artista.</p>
               </div>
            </article>

            <article className="step"  data-aos="fade-left" data-aos-once="true">
                <img src="https://i.ibb.co/DCT5rWm/imagen-2023-09-04-194714602.png" alt="" />
                <div>
                <h3 style={{color:"#1ed760"}}>2.</h3>
                <p>Comenzar a jugar. Al tocar el botón, los temas del artista comenzarán a reproducirse.</p>
                </div>
            </article>

            <article className="step"  data-aos="fade-right" data-aos-once="true">
              <img src="https://i.ibb.co/QrRXMpL/imagen-2023-09-04-195326639.png" alt="" />
              
              <div>
                <h3 style={{color:"#1ed760"}}>3.</h3>
                <p>Jugar. Ahora te toca jugar. Tenes que adivinar el nombre de la canción que se está reproduciendo.</p>
              </div>
              
            </article>

            <article className="step "  data-aos="fade-left" data-aos-once="true">
              <img src="https://i.ibb.co/NSqQRM5/imagen-2023-09-04-200343109.png" alt="" />
              <div>
              <h3 style={{color:"#1ed760"}}>4.</h3>
              <p>Final. Cuando termines, tenes una alerta con un resumen de la sesión.</p>

              </div>
            </article>

        </section>

    </main>
    
  )
}

export default Login