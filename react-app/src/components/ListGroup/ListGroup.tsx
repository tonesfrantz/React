import { useState } from 'react';

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>No items Found</p>}
            <ul className='list-group'>
                {items.map((item, index) => (
                    <li
                        className={
                            selectedIndex === index
                                ? 'list-group-item active'
                                : 'list-group-item'
                        }
                        key={item}
                        onClick={() => {
                            console.log(index);
                            console.log(selectedIndex);
                            setSelectedIndex(index);
                            onSelectItem(item);
                        }}>
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}
export default ListGroup;
