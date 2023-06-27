import { useSelector, useDispatch } from 'react-redux'
import CartSlice from "../../redux/CartSlice"

const CartItem = (props) => {
    const listProduct = useSelector((state) => state.cart.cart)
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(CartSlice.actions.deleteItem(id))
    }

    const item = props.item;
    return (
        <>
            <tr >
                <td className="infor-product">
                    <img src={item.image} />
                    <p>{item.name}</p>
                </td>
                <td>${item.price}</td>
                <td>
                    <div className="choose-number">

                        <input type="number" value={item.quantity} />

                    </div>
                </td>
                <td>{item.price * item.quantity}</td>
                <td className="delete">
                    <div className='btn '
                        onClick={() => handleDelete(item.id)}
                    >Xóa</div>
                </td>
            </tr>
        </>
    )
}

export default CartItem