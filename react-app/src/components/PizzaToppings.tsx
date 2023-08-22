import React, { useState } from 'react';

interface Props {
    newToppings: (text: string) => void;
}

const PizzaToppings = ({ newToppings }: Props) => {
    const toppingChoices = ['Cheese', 'Salami', 'Tomato', 'Pesto', 'Anchovies'];
    const [toppings, setToppings] = useState('');
    // const [newToppings, setNewToppings1] = useState(newTopping);
    const handleToppings = (e: any) => {
        setToppings(e.target.value);
    };

    const handleLog = () => {
        newToppings(toppings);
        console.log(toppings);
    };
    return (
        <>
            <div>Pizza Toppings</div>

            {toppingChoices.map((item) => {
                return (
                    <button onClick={handleToppings} key={item} value={item}>
                        {item}
                    </button>
                );
            })}
            <button onClick={handleLog}>Log Pizza</button>
        </>
    );
};

export default PizzaToppings;
