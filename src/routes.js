import {Switch, Route} from 'react-router-dom';
import Auth from './components/Auth';
import Landing from './components/Landing';
import ProductPage from './components/ProductPage';
import Products from './components/Products';
import UserProfile from './components/UserProfile';
import UserReviews from './components/UserReviews';

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/auth' component={Auth} />
        <Route path='/user-profile' component={UserProfile} />
        <Route path='/products' component={Products} />
        <Route path='/product-page' component={ProductPage} />
        <Route path='/user-reviews' component={UserReviews} />
    </Switch>
)