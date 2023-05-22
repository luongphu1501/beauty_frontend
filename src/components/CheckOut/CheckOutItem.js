import product_img from "../../assets/img/product_img.png"

const CheckOutItem = (props) => {
    const item = props.item;
    return (<>
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

        </tr>
    </>)
}

export default CheckOutItem