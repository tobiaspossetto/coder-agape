import React from 'react'

const CountDetail = (props) => {
    return (
        <div className="countdetail-container">
            <button className='btn btn-danger' onClick={props.restar}>-</button>
            <p>{props.valor}</p>
            <button className='btn btn-success' onClick={props.sumar}>+</button>
        </div>
    )
}

export default CountDetail
