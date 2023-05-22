
const Category = (props) => {
    const { listCategory } = props;
    return (
        <ul className="list-categorypr">
            {listCategory.map(item => {
                return (
                    <li>
                        <input type="checkbox" value={item.name} id={"cate" + item.id} />
                        <label htmlFor={"cate" + item.id}>{item.name}</label>
                    </li>
                )
            })}
        </ul>
    )
}

export default Category