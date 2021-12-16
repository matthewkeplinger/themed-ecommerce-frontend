import React, {Component} from "react";

class NewReview extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            productId: 0,
            description: '',
            rating: 0,
         }
    }


    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        const review = {
            productId: parseInt(this.state.productId),
            description: this.state.description,
            rating: parseInt(this.state.rating)
        }
        event.preventDefault();
        this.props.createNewReview(review);
        this.setState({
            productId: 0,
            description: '',
            rating: 0,
        });
    }

    render() { 
        return ( 
            
            <div className="review">
                 <form onSubmit={this.handleSubmit} >
                <label>Product Id </label>
                <input name="productId" onChange={this.handleChange} value={this.state.productId} />
                <label>Review Description</label>
                <input type='text' name='description' onChange={this.handleChange} value={this.state.description} />
                <label>Review Rating
                        <select
                        name='rating'
                        onChange={this.handleChange}
                        className='form-control'
                        value= {this.state.rating}
                        >
                        <option value=''>Select a Rating from 1-5</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        </select>
                </label>
                <button type='submit'>Submit</button>
                </form>
            </div>
         );
    }
}
 
export default NewReview;
