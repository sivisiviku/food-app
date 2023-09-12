function CartItem (props){
  const price = `$${props.price.toFixed(2)}`;

  return <li className="flex justify-between border-b-2 mb-2">
    <div>
      <h2 className="text-lg font-semibold">{props.name}</h2>
      <div>
        <span className="text-sm font-medium text-red-600 mr-8">{price}</span>
        <span className="border-2 px-1 rounded-md text-sm font-medium">x {props.amount}</span>
      </div>
    </div>
    <div>
      <button className="border border-red-600 px-2 rounded-md mr-2" onClick={props.onRemove}>−</button>
      <button className="border border-red-600 px-2 rounded-md" onClick={props.onAdd}>+</button>
    </div>
  </li>
};

export default CartItem;
