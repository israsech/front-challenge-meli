import React from "react";
import {formatPrice, normalizeLabel} from "../../utils/utils";
import "./ItemCard.scss";
const ItemCard=({item})=>{
    return <div className={'item-card'}>
        <div className={'main-section'}>
            <figure className="item-img">
                <img src={item?.picture?.url??''} alt={`imagen ${item?.title}`}/>
            </figure>
            <h3 className={'desc-title'}>
                Descripción del producto
            </h3>
            <h4 className={'desc'}>
                {item?.description}
            </h4>
        </div>
        <div className={'description-section'}>
            <h3 className={'state'}>
                {`${normalizeLabel(item?.condition??'')} -  ${item?.sold_quantity??0 } vendidos`}
            </h3>
            <h1 className={'title'}>
                {item?.title}
            </h1>
            <h2 className={'price'}>
                {`${formatPrice(item?.price?.amount)} ${item?.price?.currency}`}
            </h2>
            <button className={'button-comprar'}>
                Comprar
            </button>
        </div>
    </div>
}
export default ItemCard;