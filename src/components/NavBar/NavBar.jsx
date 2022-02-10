import React from 'react';
import "./NavBar.scss";
import {useHistory} from "react-router-dom";

const NavBar =({searchTxt,onChangeTxt})=>{
    const history = useHistory()
    const goHome=()=>{
        history.push(`/`);
    }
    return <section className="container-navbar">
            <div className="navbar">
                <figure className="logo-meli">
                    <img src={`/images/logo-meli.png`} alt="Mercado libre" onClick={goHome}/>
                </figure>
                <section className="buscador">
                    <div className="home-buscador-container">
                        <input
                            className="home-buscador"
                            type="text"
                            placeholder="Nunca dejes de buscar"
                            value={searchTxt}
                            onChange={onChangeTxt} />
                    </div>
                </section>
            </div>
    </section>
}
export default NavBar;