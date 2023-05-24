import './Profile.css'
import { useState, useEffect } from 'react'

//Importar las dos madres de opiniones y locaciones


export const Profile = () => {
    const [locations, setLocations] = useState([]);
    const [opinions, setOpinions] = useState([]);

    const fetchOpiniones = async () => {
        const { result } = await getOpiniones(localStorage.getItem("id"));
        console.log(result);
        setOpinions(result);
    }

    const fetchLocaciones = async () => {
        const { result } = await getLocaciones(localStorage.getItem("id"));
        console.log(result);
        setLocations(result);
    }
    useEffect(() => {
        fetchOpiniones();
        fetchLocaciones();
    }, [])

    return (
        <>
            <div id="catalogoProfileComponent">
                <div className="catalogoMitadProfileComponent">
                    <div id="profileContainerProfileComponent">
                        <div id="profileHeaderProfileComponent">
                            <div className="profileCardProfileComponent">
                                <div className="avatarContainerProfileComponent">
                                    <img className="userProfileProfileComponent" src="src/avatar.jpg" alt="" />
                                </div>
                                <div>
                                    <div className="bProfileComponent">Elian Gerard <svg className="verifiedProfileComponent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        width="64px" height="64px">
                                        <path
                                            d="M21.187,10.007a3.457,3.457,0,0,1-.864-.712A3.378,3.378,0,0,1,20.6,8.154c.291-.821.62-1.751.092-2.474s-1.525-.7-2.4-.68a3.371,3.371,0,0,1-1.155-.078,3.369,3.369,0,0,1-.425-1.063c-.248-.845-.531-1.8-1.4-2.086-.838-.27-1.614.324-2.3.846A3.285,3.285,0,0,1,12,3.25a3.285,3.285,0,0,1-1.023-.631C10.293,2.1,9.52,1.5,8.678,1.774c-.867.282-1.15,1.24-1.4,2.085A3.418,3.418,0,0,1,6.857,4.92,3.482,3.482,0,0,1,5.7,5c-.878-.024-1.867-.05-2.4.68s-.2,1.653.092,2.473a3.336,3.336,0,0,1,.281,1.141,3.449,3.449,0,0,1-.863.713c-.732.5-1.563,1.069-1.563,1.993s.831,1.491,1.563,1.993a3.449,3.449,0,0,1,.863.712A3.335,3.335,0,0,1,3.4,15.847c-.29.82-.618,1.75-.091,2.473s1.521.7,2.4.68a3.479,3.479,0,0,1,1.156.078,3.4,3.4,0,0,1,.424,1.063c.248.845.531,1.8,1.4,2.086a1.424,1.424,0,0,0,.431.068,3.382,3.382,0,0,0,1.868-.914A3.285,3.285,0,0,1,12,20.75a3.285,3.285,0,0,1,1.023.631c.685.523,1.461,1.121,2.3.845.867-.282,1.15-1.24,1.4-2.084a3.388,3.388,0,0,1,.424-1.062A3.4,3.4,0,0,1,18.3,19c.878.021,1.867.05,2.4-.68s.2-1.653-.092-2.474a3.38,3.38,0,0,1-.281-1.139,3.436,3.436,0,0,1,.864-.713c.732-.5,1.563-1.07,1.563-1.994S21.92,10.508,21.187,10.007ZM15.45,11.1l-4,3a.749.749,0,0,1-.98-.07l-2-2a.75.75,0,0,1,1.06-1.06l1.54,1.54L14.55,9.9a.75.75,0,0,1,.9,1.2Z" />
                                    </svg></div>

                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="profileDescriptionProfileComponent">Soy un arrendador de propiedades con más de 10 años de experiencia en
                                el mercado inmobiliario. Mi objetivo es que mis inquilinos se sientan
                                cómodos y seguros en sus hogares, y para lograrlo me aseguro de mantener una comunicación
                                abierta y efectiva con ellos.</p>
                            <div className="tagsProfileComponent">
                                <div id="userRatingProfileComponent">
                                    4.5 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
                                        <path
                                            d="M 24.009766 5 A 1.50015 1.50015 0 0 0 22.658203 5.8300781 L 17.505859 16.134766 L 5.2714844 18.017578 A 1.50015 1.50015 0 0 0 4.4394531 20.560547 L 12.902344 29.023438 L 11.017578 41.271484 A 1.50015 1.50015 0 0 0 13.193359 42.830078 L 24 37.191406 L 34.806641 42.830078 A 1.50015 1.50015 0 0 0 36.982422 41.271484 L 35.097656 29.023438 L 43.560547 20.560547 A 1.50015 1.50015 0 0 0 42.728516 18.017578 L 30.494141 16.134766 L 25.341797 5.8300781 A 1.50015 1.50015 0 0 0 24.009766 5 z" />
                                    </svg>
                                </div>
                                <div className="languageProfileComponent">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48px" height="48px">
                                        <path
                                            d="M 12 2 C 10.814 2 9.5418125 3.6912344 8.7578125 6.3652344 C 8.6648125 6.6822344 8.9121875 7 9.2421875 7 L 14.757812 7 C 15.087813 7 15.334188 6.6822344 15.242188 6.3652344 C 14.458187 3.6912344 13.186 2 12 2 z M 8.0664062 2.8085938 C 6.2694063 3.5805938 4.7487344 4.8665156 3.6777344 6.4785156 C 3.5307344 6.6995156 3.6968906 7 3.9628906 7 L 5.9296875 7 C 6.3556875 7 6.5475625 6.8363281 6.6015625 6.6113281 C 6.9555625 5.1343281 7.4554063 3.8475937 8.0664062 2.8085938 z M 15.933594 2.8085938 C 16.544594 3.8475937 17.044437 5.1353281 17.398438 6.6113281 C 17.452437 6.8363281 17.651813 7 17.882812 7 L 20.033203 7 C 20.299203 7 20.469266 6.6995156 20.322266 6.4785156 C 19.251266 4.8665156 17.730594 3.5805938 15.933594 2.8085938 z M 2.71875 9 C 2.56675 9 2.4287188 9.0991406 2.3867188 9.2441406 C 2.1357188 10.120141 2 11.045 2 12 C 2 12.955 2.1357188 13.879859 2.3867188 14.755859 C 2.4287187 14.900859 2.56675 15 2.71875 15 L 5.6289062 15 C 5.9249063 15 6.1500937 14.747125 6.1210938 14.453125 C 6.0440937 13.665125 6 12.848 6 12 C 6 11.152 6.0430937 10.334875 6.1210938 9.546875 C 6.1500937 9.252875 5.9249063 9 5.6289062 9 L 2.71875 9 z M 8.6484375 9 C 8.3944375 9 8.1764844 9.1855 8.1464844 9.4375 C 8.0524844 10.2495 8 11.107 8 12 C 8 12.893 8.0524844 13.7505 8.1464844 14.5625 C 8.1764844 14.8145 8.3944375 15 8.6484375 15 L 15.351562 15 C 15.605562 15 15.823516 14.8145 15.853516 14.5625 C 15.947516 13.7505 16 12.893 16 12 C 16 11.107 15.947516 10.2495 15.853516 9.4375 C 15.823516 9.1855 15.605563 9 15.351562 9 L 8.6484375 9 z M 18.371094 9 C 18.075094 9 17.849906 9.252875 17.878906 9.546875 C 17.955906 10.334875 18 11.152 18 12 C 18 12.848 17.956906 13.665125 17.878906 14.453125 C 17.849906 14.747125 18.075094 15 18.371094 15 L 21.28125 15 C 21.43325 15 21.571281 14.900859 21.613281 14.755859 C 21.864281 13.879859 22 12.955 22 12 C 22 11.045 21.864281 10.120141 21.613281 9.2441406 C 21.571281 9.0991406 21.43325 9 21.28125 9 L 18.371094 9 z M 3.9667969 17 C 3.7007969 17 3.5307344 17.300484 3.6777344 17.521484 C 4.7487344 19.133484 6.2694063 20.419406 8.0664062 21.191406 C 7.4554063 20.152406 6.9555625 18.864672 6.6015625 17.388672 C 6.5475625 17.163672 6.3481875 17 6.1171875 17 L 3.9667969 17 z M 9.2421875 17 C 8.9121875 17 8.6658125 17.317766 8.7578125 17.634766 C 9.5418125 20.308766 10.814 22 12 22 C 13.186 22 14.458188 20.308766 15.242188 17.634766 C 15.335187 17.317766 15.087812 17 14.757812 17 L 9.2421875 17 z M 18.070312 17 C 17.644312 17 17.452437 17.163672 17.398438 17.388672 C 17.044438 18.865672 16.544594 20.152406 15.933594 21.191406 C 17.730594 20.419406 19.251266 19.133484 20.322266 17.521484 C 20.469266 17.300484 20.303109 17 20.037109 17 L 18.070312 17 z" />
                                    </svg>
                                    <p className="pProfileComponent">Español</p>
                                </div>
                                <div className="languageProfileComponent">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48px" height="48px">
                                        <path
                                            d="M 12 2 C 10.814 2 9.5418125 3.6912344 8.7578125 6.3652344 C 8.6648125 6.6822344 8.9121875 7 9.2421875 7 L 14.757812 7 C 15.087813 7 15.334188 6.6822344 15.242188 6.3652344 C 14.458187 3.6912344 13.186 2 12 2 z M 8.0664062 2.8085938 C 6.2694063 3.5805938 4.7487344 4.8665156 3.6777344 6.4785156 C 3.5307344 6.6995156 3.6968906 7 3.9628906 7 L 5.9296875 7 C 6.3556875 7 6.5475625 6.8363281 6.6015625 6.6113281 C 6.9555625 5.1343281 7.4554063 3.8475937 8.0664062 2.8085938 z M 15.933594 2.8085938 C 16.544594 3.8475937 17.044437 5.1353281 17.398438 6.6113281 C 17.452437 6.8363281 17.651813 7 17.882812 7 L 20.033203 7 C 20.299203 7 20.469266 6.6995156 20.322266 6.4785156 C 19.251266 4.8665156 17.730594 3.5805938 15.933594 2.8085938 z M 2.71875 9 C 2.56675 9 2.4287188 9.0991406 2.3867188 9.2441406 C 2.1357188 10.120141 2 11.045 2 12 C 2 12.955 2.1357188 13.879859 2.3867188 14.755859 C 2.4287187 14.900859 2.56675 15 2.71875 15 L 5.6289062 15 C 5.9249063 15 6.1500937 14.747125 6.1210938 14.453125 C 6.0440937 13.665125 6 12.848 6 12 C 6 11.152 6.0430937 10.334875 6.1210938 9.546875 C 6.1500937 9.252875 5.9249063 9 5.6289062 9 L 2.71875 9 z M 8.6484375 9 C 8.3944375 9 8.1764844 9.1855 8.1464844 9.4375 C 8.0524844 10.2495 8 11.107 8 12 C 8 12.893 8.0524844 13.7505 8.1464844 14.5625 C 8.1764844 14.8145 8.3944375 15 8.6484375 15 L 15.351562 15 C 15.605562 15 15.823516 14.8145 15.853516 14.5625 C 15.947516 13.7505 16 12.893 16 12 C 16 11.107 15.947516 10.2495 15.853516 9.4375 C 15.823516 9.1855 15.605563 9 15.351562 9 L 8.6484375 9 z M 18.371094 9 C 18.075094 9 17.849906 9.252875 17.878906 9.546875 C 17.955906 10.334875 18 11.152 18 12 C 18 12.848 17.956906 13.665125 17.878906 14.453125 C 17.849906 14.747125 18.075094 15 18.371094 15 L 21.28125 15 C 21.43325 15 21.571281 14.900859 21.613281 14.755859 C 21.864281 13.879859 22 12.955 22 12 C 22 11.045 21.864281 10.120141 21.613281 9.2441406 C 21.571281 9.0991406 21.43325 9 21.28125 9 L 18.371094 9 z M 3.9667969 17 C 3.7007969 17 3.5307344 17.300484 3.6777344 17.521484 C 4.7487344 19.133484 6.2694063 20.419406 8.0664062 21.191406 C 7.4554063 20.152406 6.9555625 18.864672 6.6015625 17.388672 C 6.5475625 17.163672 6.3481875 17 6.1171875 17 L 3.9667969 17 z M 9.2421875 17 C 8.9121875 17 8.6658125 17.317766 8.7578125 17.634766 C 9.5418125 20.308766 10.814 22 12 22 C 13.186 22 14.458188 20.308766 15.242188 17.634766 C 15.335187 17.317766 15.087812 17 14.757812 17 L 9.2421875 17 z M 18.070312 17 C 17.644312 17 17.452437 17.163672 17.398438 17.388672 C 17.044438 18.865672 16.544594 20.152406 15.933594 21.191406 C 17.730594 20.419406 19.251266 19.133484 20.322266 17.521484 C 20.469266 17.300484 20.303109 17 20.037109 17 L 18.070312 17 z" />
                                    </svg>
                                    <p className="pProfileComponent">Inglés</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="opinionContainerProfileComponent">
                        <div id="profileSectionsProfileComponent">
                            <div className="profileSectionProfileComponent">Opiniones</div>
                            <div className="contenedorSelfOpinionesCatalogo">
                                {opinions.map(opinion => (
                                    <CatalogoOpinionesSelfCard
                                        location={opinion}
                                        key={opinion.id}
                                    />
                                ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="catalogoMitadProfileComponent">
                    <div className="contenedorSelfOpinionesCatalogo">
                        {locations.map(location => (
                            <LocationCard
                                id={location.id}
                                key={location.id}
                                {...location}
                            />
                        ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;