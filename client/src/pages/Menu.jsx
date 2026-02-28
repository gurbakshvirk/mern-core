import React, { useState } from 'react'
import Productcard from '../components/Productcard'

const products = [
    { id: 1, name: "T-Shirt", price: 499 , qty:1},
    { id: 2, name: "Jeans", price: 1299, qty:1 },
    { id: 3, name: "Sneakers", price: 2499, qty:1 },
    { id: 4, name: "Hoodie", price: 1799, qty:1 },
    { id: 5, name: "Jacket", price: 2999, qty:1 },
    { id: 6, name: "Cap", price: 299 , qty:1},
    { id: 7, name: "Backpack", price: 1499, qty:1 },
    { id: 8, name: "Sunglasses", price: 999 , qty:1},
    { id: 9, name: "Watch", price: 3499, qty:1 },
    { id: 10, name: "Wallet", price: 799 , qty:1}
];



const Menu = () => {
    const [product, setproduct] = useState(products)
    return (
        <div>
            <Productcard product={product} setproduct={setproduct} />
        </div>
    )
}

export default Menu
