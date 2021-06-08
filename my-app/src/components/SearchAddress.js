import React, { Component } from 'react';
import SearchInput from '../common/SearchInput';
import AddressItem from '../common/AddressItem';
import NoDataAddressItem from '../common/NoDataAddressItem';
import '../assets/addressitem.scss';

class SearchAddress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataAdd: [],
            checkForData: false
        };
    }
    

    handleChange = (e)=>{
        let dataInput = e.target.value;
        fetch(`https://order.thecoffeehouse.com/api/location?address=${dataInput}`)
            .then((response) => response.json())
            .then(data => {
                if(data.status === "FAIL"){
                    this.setState({
                        checkForData: false
                    })
                }else{
                    this.setState({
                        checkForData: true,
                        dataAdd: data.predictions          
                    })
                    
                }
            });
    }

    callbackFunction = (childData) => {
        alert(childData);
    }
    
    render() {
        const { dataAdd, checkForData } = this.state;
        
        return (
            <form action="#" className="seachAdd">
                <i  className="fa fa-map-marker icon-marker"></i>
                <SearchInput type="text" placeholder="Nhập địa chỉ giao hàng" onChange={this.handleChange} />
                <div className="seachAdd-container" >
                    <ul className="seachAdd-list">
                        {
                            checkForData 
                            ? dataAdd.length === 0 
                                ? 
                                    <NoDataAddressItem data="Không tìm thấy" /> 
                                : 
                                    dataAdd.map(item =>
                                        (
                                            <AddressItem parentCallback={this.callbackFunction} key={item.id} data={item.description} />
                                        ))           
                            : null      
                        }
                    </ul>
                </div>
            </form>
        )
    }
}

export default SearchAddress;