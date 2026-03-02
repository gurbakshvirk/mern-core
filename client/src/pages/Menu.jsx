import { useState } from 'react'
import Productcard from '../components/Productcard'
import { useEffect } from 'react';
const products = [
    { id: 1, name: "T-Shirt", price: 499, qty: 1 },
    { id: 2, name: "Jeans", price: 1299, qty: 1 },
    { id: 3, name: "Sneakers", price: 2499, qty: 1 },
    { id: 4, name: "Hoodie", price: 1799, qty: 1 },
    { id: 5, name: "Jacket", price: 2999, qty: 1 },
    { id: 6, name: "Cap", price: 299, qty: 1 },
    { id: 7, name: "Backpack", price: 1499, qty: 1 },
    { id: 8, name: "Sunglasses", price: 999, qty: 1 },
    { id: 9, name: "Watch", price: 3499, qty: 1 },
    { id: 10, name: "Wallet", price: 799, qty: 1 }
];
// useEffect
// localStorage.setItem / getItem
const Menu = () => {
    const [product, setproduct] = useState(products)
    useEffect(() => {
        const saved = localStorage.getItem('products');
        if (saved) {
            setproduct(JSON.parse(saved))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(product))
    }, [product])


    // const removeproduct = () => {
    //     const newProductArray = product.filter((item) => item.qty > 0)
    //     setproduct(newProductArray)
    // }
    const removeproduct = (id) => {
        const newProductArray = product.filter(item => item.id !== id)
        setproduct(newProductArray)
    }


    const itemsqtytotal = product.reduce((acc, curr) => { return acc + curr.qty }, 0)
    console.log(itemsqtytotal)

    const pricetotal = product.reduce((acc, curr) => { return acc + curr.qty * curr.price }, 0)
    console.log(pricetotal)
    return (
        <div>
            <Productcard product={product} setproduct={setproduct} removeproduct={removeproduct} />
            <h1>Sum of all products {itemsqtytotal}</h1>
            <h1>Total of products:{pricetotal}</h1>
        </div>
    )
}
export default Menu