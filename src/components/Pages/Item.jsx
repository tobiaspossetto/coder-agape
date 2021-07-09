import React from 'react'

const Item = (props) => {
    return (
        <div>
                        <div className="card mb-3">
                <img src={props.img} className="card-img-top" alt="img-producto"/>
                <div className="card-body ">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text"> {props.description}</p>
                    {/* <p className="card-text text-danger">Hombre</p> */}
                    <a href="/" className="btn btn-warning">Ver mas</a>
                </div>
                </div>
        </div>
    )
}

export default Item
