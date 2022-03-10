import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products)
    const renderList = products && products.map(product => {
        const { id, title, image, category, price} = product;

        return (
            <Link to={`/product/${id}`} key={id}>
            <div className="four column wide" >
            <div className="ui link cards">
                <div className="card">
                    <div className="image">
                        <img className="Medium" src={image} alt={title} />
                    </div>
                    <div className="content">
                        <div className="header">{title}</div>
                        <div className="meta price">$ {price}</div>
                        <div className="meta">{category}</div>
                    </div>
                </div>
            </div>
        </div>
            </Link>
        )
    })
    return <>{renderList}</>
}

export default ProductComponent