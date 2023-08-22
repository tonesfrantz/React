import React from 'react';

interface Props {
    pizzaToppings: string[];
    onClickTopping: (topping: string) => void;
    updatedPizza: IPizza;
}
export interface IPizza {
    sauce: string;
    topping: string[];
}
export const Pizza = ({
    pizzaToppings,
    onClickTopping,
    updatedPizza,
}: Props) => {
    return (
        <>
            <div>Pizza</div>
            {pizzaToppings.map((item) => (
                <button
                    onClick={() => {
                        onClickTopping(item);
                    }}
                    key={item}>
                    {item}
                </button>
            ))}
            {updatedPizza.topping.map((topping, index) => (
                <li key={index}>{topping}</li>
            ))}
        </>
    );
};

// export default Pizza;
