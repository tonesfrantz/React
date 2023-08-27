import React, { useEffect, useState } from 'react';

const ProductList = ({ category }: { category: string }) => {
    const [products, setProducts] = useState<String[]>([]);

    useEffect(() => {
        console.log('Fetching Poducts in ', category);
        setProducts(['Clothing', 'Household']);
    }, [category]);
    return <div>ProductList</div>;
};

export default ProductList;
