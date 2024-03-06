import React from "react";
import '../styles/components/pages/NosotrosPage.css';

const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
            <h2>Historia</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit. Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Integer volutpat convallis mauris, eu gravida lectus tincidunt et. Nam arcu libero, non facilisis maximus, aliquam dapibus eros. Maecenas faucibus mollis interdum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit. Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Integer volutpat convallis mauris, eu gravida lectus tincidunt et. Nam arcu libero, non facilisis maximus, aliquam dapibus eros. Maecenas faucibus mollis interdum.</p>
            </div>
            <div className="staff">
                <h2>Staff</h2>
                <div className="persona">
                    <img src="./silueta1.jpg"/>
                    <h5>Roberto Lopez</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit. Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Integer volutpat convallis mauris, eu gravida lectus tincidunt et. Nam arcu libero, non facilisis maximus, aliquam dapibus eros. Maecenas faucibus mollis interdum.</p>
                </div>
            </div>
        </main>
    );
}

export default NosotrosPage;