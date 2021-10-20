import React from 'react';
import {useCart} from "react-use-cart";
 

const ItemCard  = (props) => {
    const { addItem,
        totalUniqueItems,
        items,

        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    return (
            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                <div class="card p-0 overflow-hidden h-100 shadow">
                  <img src= {props.img}  class="card-img-top img-fluid"/>
                     <div class="card-body text-center">
                         <h5 class="card-title">{props.title}</h5>
                         <h5 class="card-text">$ {props.price} </h5> 
                         <p class="card-text">{props.desc} </p>
                         <p class="card-text">${props.itemquantity} </p>
                         <button class="btn btn-dark" onClick={() =>addItem (props.item)}>Agregar al carrito</button>
                         <button class="btn btn-dark" onClick={() => updateItemQuantity ()}> Restar</button>

                     </div>
                </div>
            </div>
        );
    };


export default ItemCard;
