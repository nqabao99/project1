import React, { Component } from 'react';
import SearchInput from '../common/SearchInput';
import AddressItem from '../common/AddressItem';
import '../assets/addressitem.scss';

class SearchAddress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchAdd: "",
            dataAdd: []
        };
    }

    handleSearchAddress = (e) => {
        this.setState({ searchAdd: e.target.value })
        fetch(`https://order.thecoffeehouse.com/api/location?address=${this.state.searchAdd}`)
            .then((response) => response.json())
            .then(data => {
                this.setState({ dataAdd: data.predictions })
            });
    }


    render() {
        const { dataAdd } = this.state;
        console.log(dataAdd);

        return (
            <form action="#" className="seachAdd">
                <i className="fa fa-map-marker icon-marker"></i>
                <SearchInput type="text" placeholder="Nhập địa chỉ giao hàng" onChange={this.handleSearchAddress} />
                <div className="seachAdd-container" >
                    <ul className="seachAdd-list">
                        {
                            // dataAdd.map(item =>
                            // (
                            //     <AddressItem key={item.id} data={item.description} />
                            // ))
                        }
                    </ul>
                </div>
            </form>

        )
    }
}

export default SearchAddress;