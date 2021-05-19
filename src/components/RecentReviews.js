import React, { Component } from 'react'
import axios from 'axios';

class FeaturedProducts extends Component {
     render() {
        return (
            <div>
                <section className='mapped-recent-reviews-section'>
                    <h6 className='mapped-recent-reviews-text'>{this.props.review.name}</h6>
                    <h6 className='mapped-recent-reviews-text'>
                        {`${this.props.review.rating} / 10 ${this.props.review.review_message}`}
                    </h6>
                    <button>View Item</button>
                </section>
            </div>
        );
    }
}

export default FeaturedProducts;