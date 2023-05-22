import { useEffect } from "react";
import category from "../../assets/img/category1.png"

const Category = (props) => {
    const { listCategory } = props;
    useEffect(() => {
        console.log(listCategory)
    }, [])
    return (
        <>
            {listCategory.map((item) => {
                return (
                    <div className="category" key={item.id}>
                        <img src={category} />
                        <div className="category-name">
                            {item.name}
                        </div>
                    </div>
                )

            })}
        </>
    )
}

export default Category
