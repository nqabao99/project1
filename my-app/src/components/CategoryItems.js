import React from 'react';


class CategoryItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: ""
        };
        this.myRef = React.createRef();
    }

    

    handleClick = (id) => {
        this.setState({ active: id });
        // console.log(e.target);
        // if(e.currentTarget){
        //     console.log('bb');
        //     this.setState({ active: id });
        // }else{
        //     this.setState({ active: "" });
        //    console.log('aa');
        // }

        document.getElementsByClassName()
        
      };


    render() {
        console.log(this.myRef);
        const { categories } = this.props;
        // console.log(this.state.active);
        return (
            <li ref={this.myRef} className={categories._id === this.state.active ? "active" : "main-container__left-navmenu__items"} onClick={() => this.handleClick(categories._id)}
            ><a href={`#${categories._id}`}>{categories.name}</a></li>
        );
    }
}

export default CategoryItems;