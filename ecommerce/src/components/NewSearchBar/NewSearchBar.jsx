import React, {Component} from "react";
import './NewSearchBar.css'


class NewSearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchBar: ''
         }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.filterProducts(this.state.searchBar)
    }

    render() { 
        return ( 
            <div className='container'>
                <div className='row'>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                        className='col-sm-offset-6 col-sm-3 '
                        type='text' name='searchBar'
                        onChange={this.handleChange}
                        value={this.state.searchBar}
                        placeholder = 'New Search Bar testing'
                        />
                        <button className='searchButton' type='submit'>Search</button>
                    </form>

                </div>

            </div>
         );
    }
}
 
export default NewSearchBar;