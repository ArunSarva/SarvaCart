import React, { Component } from 'react';
import ReactTable from 'react-table'
import api from '../Api/Index'

class Cart1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            carts: [],
            columns: [],
            isLoading: false,
        }
    }
    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getCart().then(Carts => {
            this.setState({
                Carts: Carts.data,
                isLoading: false,
            })
            console.log("hi",Carts)
            console.log("hiii",Carts.data)

        })
    }

    render() {
        const { Carts, isLoading } = this.state
        console.log(Carts)

        const columns = [
            // {
            //     Header: 'ID',
            //     accessor: '_id',
            //     // filterable: true,
            // },
            {
                Header: 'Brand',
                accessor: 'Product_Brand',
                // filterable: true,
            },
            {
                Header: 'Name',
                accessor: 'Product_Name',
                // filterable: true,
            },
            {
                Header: 'Price',
                accessor: 'Product_Price',
                // filterable: true,
            },
            {
                Header: 'Disctiption',
                accessor: 'Product_Discription',
                // filterable: true,
            },
            {
                Header: 'Quantity',
                accessor: 'Quantity',
                // filterable: true,
            },
            {
                Header: 'Total_price',
                accessor: 'Total_price',
                // filterable: true,
                // Cell: props => <span>{props.value.join(' / ')}</span>,
            },
        ]

        let showTable = true
        // if (!Carts.length ) {
        //     showTable = false
        // }

        return (
            <div>
                {/* <Wrapper> */}
                {showTable && (
                    <ReactTable
                        data={Carts}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={5}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            {/* </Wrapper> */}
            </div>
        );
    }
}

export default Cart1;