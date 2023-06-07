
const Category = (props) => {
    const { listCategory } = props;
    return (
        <ul className="list-categorypr">
            {listCategory.map(item => {
                return (
                    <li>
                        <input type="radio" name="category" value={item.id} id={"cate" + item.id}
                            onChange={(event) => {
                                props.handleChangeCategory(event)
                            }}
                        />
                        <label htmlFor={"cate" + item.id}>{item.name}</label>
                    </li>
                )
            })}
        </ul>
    )
}

export default Category