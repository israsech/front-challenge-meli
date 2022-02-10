import React from "react";
import "./Breadcrumbs.scss";
const Breadcrumbs=({categories})=>{
    const categoriasString=categories.join(' > ')
    return <div className={'container-bread'}>
        <h4 className={'bread-crumbs'}>
            {categoriasString}
        </h4>
    </div>
}
export default Breadcrumbs;