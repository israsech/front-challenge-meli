import React from 'react';
import "./Loader.scss";

const Loader =()=>{
    return <div className="container-loader">
        <figure className="loader-img">
            <img src={`/images/loader.gif`} alt="Cargando"/>
        </figure>
    </div>
}
export default Loader;