import React from 'react';
import CartItem from './CartItem';

const CartList = ({value}) => {  //value is destructured in the props
  const{cart}=value //hence this is possible
    return (
      <div className="container-fluid">
        {cart.map(item=>{
          return <CartItem key={item.id} item={item} value={value}/>
        })}
      </div>
    )
}

export default CartList;