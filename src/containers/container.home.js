import { connect } from "react-redux";

import {Home} from './../pages';

import { fetch_latestProducts, fetch_brandList } from '../modules/action.home';

export default connect (
    (state) => ({
        latestProducts : state.home.latestProducts,
        brandList : state.home.brandList
    }),
    (dispatch) => ({
        fetchLatestProducts : () => dispatch(fetch_latestProducts()),
        fetchBrandList : () => dispatch(fetch_brandList())
    }),
)(Home)