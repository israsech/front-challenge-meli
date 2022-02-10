import React from 'react';
import "./Card.scss";

const Card =({children})=>{
    return<div className="card">
            <div className="card-contend">
             {children}
            </div >
        </div>
}
export default Card;