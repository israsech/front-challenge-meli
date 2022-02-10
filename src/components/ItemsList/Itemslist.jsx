import React from 'react';
import "./ItemsList.scss";
import {formatPrice, normalizeLabel} from "../../utils/utils";

const Itemslist =({items,openItemDetaill})=>{
    return<div className={'items-list'}>
        {items.map((item,key)=><><div className={'item'} onClick={()=>openItemDetaill(item.id)} key={key}>
            <figure className="item-img">
                <img src={item?.picture??''} alt={`imagen ${item.title}`}/>
            </figure>
            <div className="item-detaill">
                <div className="main">
                    <h2 className={'price'}> {`${formatPrice(item.price.amount)} ${item.price.currency}`}
                    </h2>
                    <h3 className={'condition'}>
                        {normalizeLabel(item?.condition??'')}
                    </h3>
                </div>
                <h1 className={'title'}>
                    {item.title}
                </h1>
            </div>
        </div>
            <hr className="solid"/>
        </>)}
    </div>
}

export default Itemslist;