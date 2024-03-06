import React from "react";
import '../styles/components/pages/HomePage.css';

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="./banner-color.png" alt="imagen de portada" width="100%"/>
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit. Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Integer volutpat convallis mauris, eu gravida lectus tincidunt et. Nam arcu libero, non facilisis maximus, aliquam dapibus eros. Maecenas faucibus mollis interdum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit. Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Integer volutpat convallis mauris, eu gravida lectus tincidunt et. Nam arcu libero, non facilisis maximus, aliquam dapibus eros. Maecenas faucibus mollis interdum.</p>
                </div>
                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span class="cita">Simplemente Excelente</span>
                        <span class="autor">Juan Lopez - carteras.com</span>
                    </div>
                </div>

            </div>

        </main>
    );
}

export default HomePage;