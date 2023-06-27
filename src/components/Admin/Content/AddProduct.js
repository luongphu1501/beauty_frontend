import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from "react-icons/fc";
import { addNewProduct } from '../../../services/apiServices';
import convertToBase64 from '../../../ultils/Product';
import { getProduct } from '../../../services/apiServices';

const AddProduct = (props) => {
    const { listCategory } = props
    const [show, setShow] = useState(false);
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const [categoy, setCategory] = useState(1)
    const [description, setDescription] = useState("")
    const [img, setImg] = useState("")



    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSave = async () => {
        const data = {
            name, price, quantity, categoy, description, img
        }
        const res = await addNewProduct(data)
        props.getListProduct(4, 1)

    }

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        console.log(base64)
        setImg(base64)
    }
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                + Add new product
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Tên sản phẩm</label>
                            <input type="text" className="form-control" value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Giá</label>
                            <input type="number" className="form-control" value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Số lượng</label>
                            <input type="number" className="form-control" value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Danh mục</label>
                            <select id="inputState" className="form-select" value={categoy} onChange={(e) => setCategory(e.target.value)}>
                                {listCategory.map(item => {
                                    return (
                                        <option value={item.id} key={item.id}>{item.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="col-md-12">
                            <label className="form-label">Mô tả </label>
                            <textarea className="form-control" onChange={e => setDescription(e.target.value)}>
                                {description}
                            </textarea>
                        </div>
                        <div className='col-md-12'>
                            <label className='form-label label-update' htmlFor='upload-file'>
                                <FcPlus />
                                Thêm hình ảnh
                            </label>
                            <input type={"file"} hidden id="upload-file" onChange={handleFileUpload} />
                        </div>


                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => {
                        handleSave()
                        setName("")
                        setPrice("")
                        setQuantity("")
                        setCategory(1)
                        setDescription("")
                        setImg("")
                        setShow(false)

                    }}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddProduct;