import React, { Component } from 'react'
import axios from 'axios';

class FeaturedProducts extends Component {
     render() {
        return (
            <div>
                <section className='mapped-features-section'>
                    <h6 className='mapped-features-text'>{this.props.item.name}</h6>
                    <h6 className='mapped-features-text'>${this.props.item.price}</h6>
                    <button className='mapped-features-button'>View Item</button>
                </section>
            </div>
        );
    }
}

export default FeaturedProducts;