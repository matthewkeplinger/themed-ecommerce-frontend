import React from 'react';
import './ProductTable.css'
import NewReview from '../Reviews/NewReview';

function ProductTable(props){
    if (props.products === undefined) {
        console.log(props);
        return (
            null
        );
    } else {
        console.log(props);
        console.log(props.category);
        let categories = props.category
        let products = props.products.map((product) => {
            return <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.averageRating}</td>
                <td>{product.category.name}</td>
            </tr>
        })
        return (
            <div className="details">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Avg Rating</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody className="prodbody">
                        {products}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductTable;

