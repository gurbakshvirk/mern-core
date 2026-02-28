import React from 'react'

const Productcard = ({ product, setproduct }) => {

  const increaseqty = (e) => {
    const newarray = product.map((evt) => {
      if (evt.id === e) {
        return {...evt,qty: evt.qty + 1}
      } else {
        return evt
      }
    })
    setproduct(newarray)
  }
  
  const deccreaseqty = (e) => {
    const newarray = product.map((evt) => {
      if (evt.id === e) {
        return {...evt,qty: evt.qty - 1}
      } else {
        return evt
      }
    })
    setproduct(newarray)
  }

  return (
    <div>
      {product.map((e) => (
        <div key={e.id}>
          <h1 >{e.name}</h1>
          <h3>{e.id}</h3>
          <h3>{e.price}</h3>
          <div>
            <button onClick={() => deccreaseqty(e.id)}>-</button>
            <h3>{e.qty}</h3>
            <button onClick={() => increaseqty(e.id)}>+</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Productcard
