import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import Product_Navbar from './Product_Navbar';
import Footer from './Footer';

class Product_view extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllMovies().then(movies => {
            this.setState({
                movies: movies.data.data,
                isLoading: false,
            })
        })
    }

    render() {

        const { movies, isLoading } = this.state
        
        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
            },
            {
                Header: 'Rating',
                accessor: 'rating',
                filterable: true,
            },
            {
                Header: 'Time',
                accessor: 'time',
                Cell: props => <span>{props.value.join(' / ')}</span>,
            },
        ]
        
        let showTable = true
        if (!movies.length) {
            showTable = false
        }

        return (
            <div>
                <Navbar/>
                <Product_Navbar/>
                <div>
                {showTable && (
                    <ReactTable
                        data={movies}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
                </div>

                <Footer/>
            </div>
        );
    }
}

export default Product_view;