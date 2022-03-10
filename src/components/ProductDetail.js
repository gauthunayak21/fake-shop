import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router";
import { fetchProduct, removeSelectedProducts } from '../redux/actions/productActions';

const ProductDetail = () => {
    const {id} = useParams();
    const product = useSelector(state => state.product.product || {});
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProduct(id))
        return () => {
            dispatch(removeSelectedProducts())
        }
    }, [id])

    const {title, image, category, price, description} = product;

    return (
        <div className="ui grid container">
            {
                Object.keys(product).length ? (
                    <div className="ui placeholder segment">
                        <div className="ui two column stackable center aligned grid">
                            <div className="ui vertical divider">AND</div>
                            <div className="middle aligned row">
                                <div className="column lp">
                                    <img className="ui fluid image" src={image} />
                                </div>
                                <div className="column rp">
                                    <h1>{title}</h1>
                                    <h2>
                                        <a className="ui teal tag label">${price}</a>
                                    </h2>
                                    <h3 className="ui brown block header">{category}</h3>
                                    <p>{description}</p>
                                    <div className="ui vertical animated button" tabIndex="0">
                                        <div className="hidden content">
                                            <i className="shop icon"></i>
                                        </div>
                                        <div className="visible content">Add to Cart</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (<div>...Loading</div>)
            }
        </div>
    )
}

export default ProductDetail