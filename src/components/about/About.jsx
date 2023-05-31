import './About.css'
import GPIImage1 from '../../assets/img/gpi.png'
import GPIImage2 from '../../assets/img/abimg4.svg'
import GPIImage3 from '../../assets/img/mision.jpg'
import GPIImage4 from '../../assets/img/vision.jpg'
import GPIImage5 from '../../assets/img/18.png'
import GPIImage6 from '../../assets/img/random.jpg'
import GPIImage7 from '../../assets/img/random2.webp'
export const About = () => {
    return (
        <>
    <div id="contentAboutMenuAboutComponent">
        <div className="aboutAboutComponent">
            <div className="aboutDivBAboutComponent">
                <img id="aboutGpiAboutComponent" src={GPIImage1}/>
            </div>
            <div className="aboutContainerAboutComponent">
                <div className="aboutHeaderAboutComponent">
                    <span>¿Que es lo que buscamos?</span>
                    <div id="txtAboutAboutComponent">
                        <span>Buscamos proporcionar una plataforma en linea que permita a las personas encontrar y reservar
                            espacios
                            de manera eficiente, ayudando a los propietarios de espacios para eventos a promocionar y
                            comercializar
                            sus lugares de una manera mas efectiva, donde a su vez los clientes pueden encontrar su lugar
                            ideal.</span>
                    </div>
                </div>
            </div>

            <div className="aboutConAboutComponent">
                <div className="aboutTxtAboutComponent">
                    GPi es una plataforma en linea que permite rentar lugares para eventos.<br/>
                    Permitimos a los usuarios buscar y reservar lugares unicos y autenticos.
                    <br/><br/>La plataforma se enfoca en ofrecer una experiencia mas personalizada y autentica donde
                    el anfitrion se puede comunicar con el cliente.
                </div>
                <div className="aboutImgAboutComponent">
                    <img id="abImgAboutComponent" src={GPIImage2} />
                </div>
            </div>

            <p className="abAboutComponent">Nuestros principios</p>

            <div className="aboutCon2AboutComponent">

                <div className="aboutCardAboutComponent">
                    <div className="aboutCardImgAboutComponent">
                        <img src={GPIImage3} className="imgCardAboutComponent"/>
                    </div>
                    <div className="aboutCardTxtAboutComponent">
                        <div id="aboutCardTitleAboutComponent">Mision</div>
                        <div>Facilitar la conexion entre personas que desean rentar un espacio para realizar un evento y
                            aquellos
                            que tienen un espacio disponible para rentar adaptandose a sus necesidades especificas.</div>
                    </div>
                </div>

                <div className="aboutCardAboutComponent">
                    <div className="aboutCardImgAboutComponent">
                        <img src={GPIImage4} className="imgCardAboutComponent"/>
                    </div>
                    <div className="aboutCardTxtAboutComponent">
                        <div id="aboutCardTitleAboutComponent">Vision</div>
                        <div>Buscamos convertirnos en la plataforma lider regional de renta de lugares ofreciendo
                            un servicio de alta calidad y una experiencia personalizada para los clientes y anfitriones.
                        </div>
                    </div>
                </div>
            </div>

            <p className="abAboutComponent">Publico objetivo</p>
            <div className="aboutCon2AboutComponent">

                <div className="aboutCardAboutComponent" id="pObjAboutComponent">
                    <div className="aboutCardImgAboutComponent">
                        <img src={GPIImage5} className="imgCardAboutComponent"/>
                    </div>
                    <div className="aboutCardTxtAboutComponent">
                        <div id="pOtAboutComponent">Gente mayor de 18 años</div>
                    </div>
                </div>

                <div className="aboutCardAboutComponent" id="pObjAboutComponent">
                    <div className="aboutCardImgAboutComponent">
                        <img src={GPIImage6} className="imgCardAboutComponent"/>
                    </div>
                    <div className="aboutCardTxtAboutComponent">
                        <div id="pOtAboutComponent">Propietarios de espacios para eventos</div>
                    </div>
                </div>

                <div className="aboutCardAboutComponent" id="pObjAboutComponent">
                    <div className="aboutCardImgAboutComponent">
                        <img src={GPIImage7} className="imgCardAboutComponent"/>
                    </div>
                    <div className="aboutCardTxtAboutComponent">
                        <div id="pOtAboutComponent">Personas que buscan un lugar para celebrar un evento</div>
                    </div>
                </div>

            </div>

            <div className="aboutConAboutComponentExtraMisa" id="aboutConBAboutComponent">
                <div className="aboutImgAboutComponent">
                    <img id="abImg2AboutComponent" src='/src/assets/img/beta.PNG' />
                </div>
                <div className="aboutTxtAboutComponent" id="abInvAboutComponent">
                    Para usar GPi es tan sencillo como dirigirte al catalogo de granjas, en donde podras filtrar la
                    informacion
                    en base a tus necesidades, una vez que encuentres el lugar que te gusta, solicitas la reserva
                    y esperas la confirmacion del anfitrion.<br/> <br/>
                    ¡Tambien despues de tu reserva podras calificar tu experiencia!
                </div>
            </div>
        </div>           
    </div> 
</>

    )
}

export default About