import React, { Component, Fragment } from 'react';
import Product from './Product';
import axios from "axios";
const config = require('../config.json');

export default class Products extends Component {

  state = {
    newproduct: null,
    products: []
  }

  fetchProducts = async () => {
    // add call to AWS API Gateway to fetch products here
    // then set them in state
    try {
      const res = await axios.get(`${config.api.invokeUrl}/products`);
      const products = res.data;
      //const products = [{id: 1, productname: "Panel Solar", price: "2500"},{id: 2, productname: "Motor a gas", price: "1500"}]
      this.setState({ products: products });
      console.log(this.state.products)
    } catch (err) {
      console.log(`An error has occurred: ${err}`);
    }
  }

  componentDidMount = () => {
    this.fetchProducts();
  }

  render() {
    return (
      <Fragment>
        <section className="section">
          <div className="container">
            <h1>IoT and Energy Products</h1>
            <p className="subtitle is-5">Invest in a clean future with our efficient and cost-effective green IoT products:</p>
            <br />
            <div className="columns">
              <div className="column">
                <div className="tile is-ancestor">
                  <div className="tile is-4 is-parent  is-vertical">
                    { 
                      this.state.products && this.state.products.length > 0
                      ? this.state.products.map(product => <Product name={product.Name} id={product.Id} price={product.Price} image={product.Image} key={product.Id} />)
                      : <div className="tile notification is-warning">No products available</div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}
