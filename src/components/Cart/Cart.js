import React from 'react';
import {useCart} from "react-use-cart";

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,

        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,

    } = useCart();
    if (isEmpty) return <h1 className= "text-center">Aún no agregaste nada a tu carrito. Agregá tus favoritos! </h1>
    return (
        <section className="py-4 container">

        <div className="row justify-content-center">
            <div className="col-12">
            <h5> Tu Carrito ({totalUniqueItems}) total Items: ({}) </h5>
            </div>
        </div>
        </section>
    );
};

export default Cart;