import React from "react";
import './ProductDetails.css'

function ProductDetails(props){
    return(
        <div className="details">
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Reviews</th>
                    <th>Average Rating</th>
                </tr>
            </thead>

            <tbody>
                {props.productDetails.map((details) => {
                    return(
                        <tr className='rows' key={details.id}>
                            <td>{details.name}</td>
                            <td>{details.description}</td>
                            <td>{details.price}</td>
                            <td>{details.reviews}</td>
                            <td>{details.averageRating}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>)
}

export default ProductDetails