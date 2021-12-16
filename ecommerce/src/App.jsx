import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import jwtDecode from "jwt-decode";
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import AddProduct from './components/AddProduct/AddProduct';
//import ProductTable from './components/ProductTable/ProductTable';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
//import ProductSearch from './components/SearchBar/SearchBar';
import NewSearchBar from './components/NewSearchBar/NewSearchBar';
//import UserNavBar from './components/UserNavBar/UserNavBar';
import Home from './components/Home/Home';
import './components/NavBar/NavBar.css'
import Review from './components/Reviews/Reviews';
import NewReview from './components/Reviews/NewReview';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: [],
            user:[],
            loggedIn: false,
            categories: [],
            registeredUser: [],
            currentUser: [],
            products: [],
            shoppingCart: [],
            reviews: [],
            reviewById: [],
            newReview: [],
            productId:[]
        }
    }

    componentDidMount() {
        this.getAllCategories();
        this.getAllProducts();
        this.getReviews();
        const jwt = localStorage.getItem('token');
        try{
            const user = jwtDecode(jwt);
            this.setState({user});
        } catch {}
    }

    //USER FUNCTIONS/API Calls
    userRegister = async (registeredUser) => {
        console.log(registeredUser);
        let response = await axios.post('https://localhost:44394/api/authentication/', registeredUser);
        console.log(response.data);
        if(response === undefined){
            this.setState({});
        }
        else {
            this.setState({
                registeredUser: response.data,
            });
            console.log(registeredUser)
        }
    }

    userLogin = async (login) => {
       try {
           let response = await axios.post('https://localhost:44394/api/authentication/login/',login);
           if (response === undefined){
               this.setState({});
           }
           else{
               this.setState({
                   token: response.data,
                   user: this.state.user,
                   loggedIn: !this.state.loggedIn
               });
               localStorage.setItem('token', this.state.token.token);
               console.log(this.state.token.token);
               console.log(this.state.user);
           }
           console.log(response.data)
       } catch(err) {
            console.log(err)
       }
   }

   getCurrentUser = async () => {
       try{
           const jwt= localStorage.getItem('token');
           let response = await axios.get('https://localhost:44394/api/examples/user', {headers: {Authorization: 'Bearer ' + jwt}});
           if (response === undefined){
               this.setState({});
           }
           else{
               this.setState({ 
                   user: response.data
                });
                console.log(this.state.user)
           }
       }
       catch(err) {
           console.log(err);
       }
   };

   //PRODUCT FUNCTIONS
   //GET PRODUCT TABLE (ALL PRODUCTS)
    getAllProducts = async () => {
       try{
           let response = await axios.get('https://localhost:44394/api/product/');
           if (response === undefined){
            this.setState({});
        }
        else{
            this.setState({ 
                products: response.data
             });
             //console.log(this.state.products)
            }
        }
        catch(err) {
            console.log(err);
        }
    }

    
   //CART FUNCTIONS
   //CATEGORY FUNCTIONS
    getAllCategories = async() => {
        try{
            let response = await axios.get('https://localhost:44394/api/category');
            if (response === undefined){
                this.setState({});
                console.log(response.data)
            }
            else{
                this.setState({
                    categories: response.data
                });
                console.log(this.state.categories)
            }
        }
        catch (err){
            console.log(err);
        }
    }
    filterAllProducts = async (searchTerm) => {
        let results = this.state.products.filter(function(product){
            if(product.name.toLowerCase().includes(searchTerm))
            {
                return true;
            } 
        })
        this.setState({
            products : results
        })
    }
    // getShoppingCart = async () => {
    //     let tempShoppingCart = this.state.shoppingCart
    //     try{
    //         let response = await axios('https://localhost:44394/api/shoppingcart/');
    //         if (response === undefined){
    //             this.setState({});
    //             console.log(response.data)
    //         }
    //         else{
    //             this.setState({
    //             tempShoppingCart: response.data
    //             });
    //         }
    //         return this.setState({
    //         shoppingCart: tempShoppingCart,
    //     });
    //     }
    //     catch (err){
    //         console.log(err);
    //     }
    // };
    // getUsersCart = async () => {
    //     try{
    //         const jwt= localStorage.getItem('token');
    //         let response = await axios.get(`https://localhost:44394/api/shoppingcart`, {headers: {Authorization: 'Bearer ' + jwt}})
    //         if (response === undefined) {
    //             this.setState({});
    //         } 
    //         else {
    //         this.setState({
    //             shoppingCart: response.data,
    //         });
    //         }
    //     }
    //     catch(err){
    //         console.log(err);
    //     }
    // };
    // addProductToCart = async (item) => {
    //     let productToAdd = {
    //         products : item.productID
    //     }
    //     try{
    //         const jwt= localStorage.getItem('token');
    //         let response = await axios.post("https://localhost:44394/api/shoppingcart", productToAdd, {headers: { Authorization: "Bearer " + jwt }})
    //         if (response === undefined) {
    //             this.setState({});
    //         } 
    //         else {
    //         this.setState({
    //             product: response.data,
    //         });
    //         }
    //     }
    //     catch(err){
    //         console.log(err);
    //     }
    // };
    // deleteProductFromCart = async (productId) => {
    //     try{
    //         const jwt= localStorage.getItem('token');
    //         let response = await axios.delete(`https://localhost:44394/api/shoppingcart/${productId}`, {headers: {Authorization: 'Bearer ' + jwt}} )
    //         if (response === undefined) {
    //             this.setState({});
    //         } 
    //         else {
    //         this.setState({
    //             product: response.data,
    //         });
    //         }
    //     }
    //     catch(err){
    //         console.log(err);
    //     }
    // };
    // increaseQuantity = async (quantity, shoppingCartId) => {
    //     try{
    //         const jwt= localStorage.getItem('token');
    //         await axios.patch(`https://localhost:44394/api/shoppingcart/${shoppingCartId}`, {Quantity: quantity+1} ,{headers: {Authorization: 'Bearer ' + jwt}})
    //     }
    //     catch(err){
    //         console.log(err);
    //     }
    // };
    // decreaseQuantity = async (quantity, shoppingCartId) => {
    //     try{
    //         const jwt= localStorage.getItem('token');
    //         await axios.patch(`https://localhost:44394/api/shoppingcart/${shoppingCartId}`, {Quantity: quantity-1} ,{headers: {Authorization: 'Bearer ' + jwt}})
    //     }
    //     catch(err){
    //         console.log(err);
    //     }
    // };  
 //REVIEW FUNCTIONS
 getReviews = async () => {
    try{
      let response = await axios.get(`https://localhost:44394/api/review/`);
      if (response === undefined) {
          this.setState({});
      } else {
          this.setState({
            reviews: response.data
          });
          console.log(this.state.reviews)
        }
    }
    catch(err) {
      console.log(err);
    }
  };

reviewById = async (id) => {
    try{
      let response = await axios.get(`https://localhost:44394/api/reviews/${id}`);
      if (response === undefined) {
          this.setState({});
      } else {
          this.setState({
            reviewById: response.data
          });
        }
    }
    catch(err) {
      console.log(err);
    }
  };

//   createReview = async (review) => {
//     let response = await axios.post('https://localhost:44394/api/Review/', review);
//     console.log(review);
//     if (response === undefined){
//           this.setState({
//           });
//       }else{
//         this.setState({
//           newReview: response.data
//       });
//       }
//   }

    
  createReview = async (shoe) => {

      try{
          let response = await axios.post('https://localhost:44394/api/Review/', shoe)
          console.log(response.data)
      }
      catch(err){
          console.log("error in createReview", err)
      }
      this.getReviews();
  }


    render() {
        return (

               <div>
                
                <NavBar />
                <div className= "userfields">
                <br /> <br /> <br />
                <NewSearchBar filterProducts = {this.filterAllProducts} />
                {/* <ProductSearch /> */}
                {/* <Registration  userRegister = {this.userRegister} /> */}
                {/* <Login userLogin={this.userLogin}/> */}

                <Switch>
                    <Route path="/registration" render={() => <Registration  userRegister = {this.userRegister} />} />
                    <Route path="/login" render={() => <Login userLogin={this.userLogin}/>} />
                    <Route path="/" exact render={() => <Home filterProducts={this.filterAllProducts} products = {this.state.products} 
                            category={this.state.categories}  />} />
                    <Route path="/Review" render={() => <Review reviews = {this.state.reviews} createNewReview={this.createReview}/>} />
                    <Route path="/add-product" render={() => <AddProduct categories={this.state.categories} />} />
                    {/* <Route path="/shopping-cart" render={() => <ShoppingCart decreaseQuantity={this.decreaseQuantity}
                            increaseQuantity={this.increaseQuantity}
                            getUsersCart={this.getUsersCart()}
                            user={this.state.currentUser}
                            shoppingCart={this.getShoppingCart()}
                            deleteItemFromCart={this.deleteItemFromCart()}/>} /> */}
                </Switch>
                {/* <Review reviews = {this.state.reviews} /> */}
                <NewReview createNewReview={this.createReview}/>
                {/* <AddProduct categories = {this.state.categories}/> */}
                {/* <ProductTable products = {this.state.products} /> */}
                </div>
            </div>
        );
    }
}
    

export default App;


// addProduct={this.addProductToCart()} goes on line 330 after category