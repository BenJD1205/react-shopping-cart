import React from "react";
// import data from "./data.json";
import Products from './components/Products';
import Filter from './components/Filter';
import Cart from './components/Cart';
import store from './store';
import {Provider} from 'react-redux';
class App extends React.Component {

  // constructor(){
  //   super();
  //   this.state ={
  //     products:data.products,
  //     cartItems: localStorage.getItem("cartItems") ? 
  //     JSON.parse(localStorage.getItem("cartItems")) : [],
  //     size:"",
  //     sort:""
  //   }
  // }

  createOrder = (order) => {
    alert("Need to save order for" + order.name);
  }

  // removeFromCart = (product) => {
  //   const cartItems = this.state.cartItems.slice();
  //   const remove = cartItems.filter(x=>x._id !==product._id);
  //   this.setState({
  //     cartItems: remove
  //   })
  //   localStorage.setItem("cartItems",JSON.stringify(remove));
  // }
  
  // addToCart = (product) =>{
  //   const cartItems = this.state.cartItems.slice();
  //   let alreadyInCart = false;
  //   cartItems.forEach(item => {
  //     if(item._id === product._id){
  //       item.count++;
  //       alreadyInCart = true;
  //     }
  //   });
  //   if(!alreadyInCart){
  //     cartItems.push({...product,count:1})
  //   }
  //   this.setState({cartItems})
  //   localStorage.setItem("cartItems",JSON.stringify(cartItems));
  // }

  // sortProducts = (e) => {
  //   const sort = e.target.value;
  //   console.log(e.target.value);
  //   this.setState((state) => ({
  //     sort:sort,
  //     products: this.state.products.slice().sort((a,b) =>(
  //       sort === "lowest" ? ((a.price <b.price) ? 1: -1) : 
  //       sort === "highest" ? ((a.price>b.price) ? 1 : -1) :
  //       ((a._id > b._id) ? 1 : -1)
  //     ))
  //   }))
  // }

  // filterProducts = (e) => {
  //   console.log(e.target.value);
  //   if(e.target.value === ""){
  //     this.setState({
  //       size:e.target.value,
  //       products:data.products
  //     })
  //   }else{
  //     this.setState({
  //       size:e.target.value,
  //       products:data.products.filter(
  //         product=>product.availableSizes.indexOf(e.target.value)>=0
  //       )
  //     })
  //   }
  // }

  render(){
    // const {products, cartItems} = this.state;
    return (
      <Provider store={store}>
        <div className="grid-container">
          <header>
            <a href="/">React Shoppingcart</a>
          </header>
          <main>
            <div className="content">
              <div className="main">
                <Filter 
                  
                />
                <Products 
                  
                />
              </div>
              <div className="sidebar">
                <Cart 
                  
                />
              </div>
          </div>
          </main>
          <footer>
            All is reserved
          </footer>
        </div>
      </Provider>
    );
  }
}

export default App;
