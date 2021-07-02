import React from 'react'

import * as AiIcons from 'react-icons/ai'

require('./footer.css')
const Footer = () => {
    return (
        <div className="footer">
            <div className="nombre">
                Agape 2020
            </div>
            <div className="icons">

                <a target="_blank"  href='https://www.facebook.com/Ag%C3%A1pe-Tienda-Online-105297704567427/'>
                    <AiIcons.AiFillFacebook className='img' size={30} />
                </a>
                <a target="_blank"  href='https://www.instagram.com/agapetiendaonline/'>
                     <AiIcons.AiFillInstagram className='img' size={30} />
                </a>
                <a target="_blank" href='https://api.whatsapp.com/send?phone=549356465-6612'>
                    <AiIcons.AiOutlineWhatsApp className='img' size={30} />
                </a>
            
                
                
            </div>
            
        </div>
    )
}

export default Footer
