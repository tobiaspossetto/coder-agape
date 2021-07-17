import React from 'react'


import links from './links'
const LinkWidget = (props) => {
    return (
        <div className="cardWidget">
            <div className="d-flex align-items-center"> 
                 
                {links[props.posicionlink].icon}
               
                 <span className="ml-2 ">{links[props.posicionlink].name}</span>
            </div>
           
        </div>
    )
}

export default LinkWidget
