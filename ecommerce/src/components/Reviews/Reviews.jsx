import React from 'react';
import NewReview from './NewReview';

function Review(props){
    if (props.reviews === undefined) {
        console.log(props);
        return (
            null
        );
    } else {
        console.log(props);
        let reviews = props.reviews.map((review) => {
            return <tr key={review.reviewID}>
                <td>{review.description}</td>
                <td>{review.rating}</td>
                <td>{review.product.name}</td>

            </tr>
        })
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Customer's Review:</th>
                            <th>Customer Rating:</th>
                            <th>Product</th>
     
                        </tr>
                    </thead>
                    <tbody>
                        {reviews}
                    </tbody>
                </table>
                {/* <NewReview createNewReview={props.createReview}/> */}
            </div>
        )
    }
}

export default Review;

