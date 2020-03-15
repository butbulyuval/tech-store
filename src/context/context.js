import React, {Component} from 'react';
import {linkData} from './linkData';


const ProductContext = React.createContext();
//Provider
//consumer
class ProductProvider extends Component {
    state={
      sideBarOpen: false,
      cartOpen: false,
      cartItems: 0,
      links: linkData,
      cart:[]
    };
    // handle side bar
    handleSideBar = () => {
      this.setState({sideBarOpen:!this.state.sideBarOpen});
    };
    // handle cart
    handleCart = () => {
      this.setState({cartOpen:!this.state.cartOpen});
    };
    //open cart
    openCart = () => {
        this.setState({cartOpen:true})
    };
    // close cart
    closeCart = () => {
      this.setState({cartOpen:false})
    };

    render() {
        return(
           <ProductContext.Provider value=
                {{  ...this.state,
                    handleSideBar: this.handleSideBar,
                    handleCart: this.handleCart,
                    closeCart: this.closeCart,
                    openCart: this.openCart
                }}>
               {this.props.children}
           </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;
export {ProductProvider,ProductConsumer};
