import React from 'react';

import '../styles/components/pages/ContactoPage.css'

const ContactoPage = (props) => {
    return (
        <main>
        <div class="datos-de-contacto">
            <div>
                <p><i class="fa-solid fa-location-dot"></i>C. Lavalle 5102, Córdoba</p>
                <p><i class="fa-solid fa-phone"></i>+54 9 11 1234 5678</p>
                <p><i class="fa-solid fa-envelope"></i>cabañaslassierras@gmail.com</p>
            </div>
            <div class="redes">
                <p><i class="fa-brands fa-instagram"></i>@cabaniaslassierras</p>
                <p><i class="fa-brands fa-facebook"></i>@cabaniaslassierras</p>
            </div>            
        </div>
        <div class="formulario-contacto"></div> 
        <div class="formulario-de-contacto">
            <h4>Dejanos tu consulta:</h4>
            <form action="">
                <p><label for="">Nombre:</label>
                    <input type="text" required /></p>
                <p><label for="">Apellido:</label>
                    <input type="text" required /></p>
                <p><label for="">Teléfono:</label>
                    <input type="number" name="" id="" required /></p>
                <p><label for="">Email:</label>
                    <input type="email" name="" id="" required /></p>
                <p><label for="">Fecha aprox. de ingreso:</label>
                    <input type="datetime" name="" id="" required /></p>
                <p><label for="">Cantidad de personas:</label>
                    <input type="number" required /></p>
                <p><label for="">Tu consulta:</label></p>      
                <textarea name="" id="" cols="30" rows="10" required></textarea>
                <input type="button" value="Enviar" class="btn" />
            </form>
        </div>      
    </main>
    );
}

export default ContactoPage;