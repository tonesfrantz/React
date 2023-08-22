import React from 'react';

interface Props {
    cart: any[];
}
const Cart = ({ cart }: Props) => {
    return (
        <>
            <div>Cart</div>
            <ul>
                {cart.map((item) => {
                    {
                        <li></li>;
                    }
                })}
            </ul>
        </>
    );
};

export default Cart;
