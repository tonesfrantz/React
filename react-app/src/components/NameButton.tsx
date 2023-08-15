import React, { useState } from 'react';

interface Props {
    name: string;
    changeName: (text: string) => void;
}

const NameButton = ({ name, changeName }: Props) => {
    const [message, setMessage] = useState('');
    const handleChange = (e: any) => {
        setMessage(e.target.value);
    };

    const handleClick = () => {
        changeName(message);
    };

    return (
        <>
            <input
                type='text'
                id='message'
                name='message'
                onChange={handleChange}
                value={message}
            />
            <button onClick={handleClick}>{name}</button>
        </>
    );
};

export default NameButton;
