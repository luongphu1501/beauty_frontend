
const CartItem = (props) => {
    const item = props.item;
    return (
        <>
            <tr >
                <td class="infor-product">
                    <img src={item.image} />
                    <p>{item.name}</p>
                </td>
                <td>${item.price}</td>
                <td>
                    <div class="choose-number">
                        <p>-</p>
                        <input type="number" value={item.quantity} />
                        <p>+</p>
                    </div>
                </td>
                <td>{item.price * item.quantity}</td>
                <td class="delete">
                    Xóa
                </td>
            </tr>
        </>
    )
}

export default CartItem