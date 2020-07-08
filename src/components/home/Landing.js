import React, { Component } from 'react';

import {connect} from 'react-redux';

import SearchForm from './SearchForm';
import Spinner from '../layout/Spinner';
import MoviesContainer from './MoviesContainer';

export class Landing extends Component {
    render() {
        const {loading} =this.props;

        return (
            <div className="container">
                <SearchForm />
                {loading ? <Spinner /> : <MoviesContainer />} 
            </div> //đúng thì hiện thị spinner và sai thì phim nhập
        );
    }
}


const mapStateToProps = state => ({
    loading: state.movies.loading
})

export default connect(mapStateToProps)(Landing);
