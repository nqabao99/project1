import React, { Component } from 'react';

class AddressItem extends React.Component {
    
    getData = (e) => {
        e.preventDefault();
        this.props.parentCallback(this.props.data);
    }

    render() {
        const { data } = this.props;
        let arr = data.split(", ");
        let first = arr[0];
        arr.shift(); //xoá phần tử đầu
        return (
            <li onClick={this.getData}>
                <div className="icon">
                    <i className="fa fa-map-marker"></i>
                </div>
                <div className="text">
                    <p>{first}</p>
                    <p>{arr.join(", ")}</p>
                </div>
            </li>
        )
    }
}

export default AddressItem;

