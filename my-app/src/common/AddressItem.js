import React, { Component } from 'react';

class AddressItem extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <li>
                <div className="icon">
                    <i className="fa fa-map-marker"></i>
                </div>
                <div className="text">
                    <p>{data}</p>
                    <p>ho chinh minh</p>
                </div>
            </li>
        )
    }
}

export default AddressItem;