import React, { Component } from 'react'
import axios from 'axios';
import FeaturedProducts from './FeaturedProducts';
import RecentReviews from './RecentReviews';

class Landing extends Component {
    constructor() {
        super();
        this.state = {
            featuredItems: [],
            recentReviews: []
        }
    }

    componentDidMount() {
        this.getFeaturedItems();
        this.getRecentReviews();
    }

    getFeaturedItems() {
        axios
            .get('http://localhost:5050/featured-products/')
            .then(res => {
                this.setState({featuredItems: res.data});
            })
            .catch(error => {
                alert(error);
            })
    }

    getRecentReviews() {
        axios
            .get('http://localhost:5050/recent-reviews/')
            .then(res => {
                this.setState({recentReviews: res.data});
            })
            .catch(error => {
                alert(error)
            })
    }

    render() {
        const featuresMapped = this.state.featuredItems.map(item => {
            return <FeaturedProducts item={item} />
        });
        const recentReviewsMapped = this.state.recentReviews.map(review => {
            return <RecentReviews review={review} />
        });
        return (
            <div>
                <h4 className='featured-items-title'>Featured Items:</h4>
                <section className='featured-items-section'>
                    {featuresMapped}
                </section>
                <h4 className='featured-items-title'>Recent Reviews:</h4>
                <section className='recent-reviews-section'>
                    {recentReviewsMapped}
                </section>
            </div>
        );
    }
}

export default Landing;