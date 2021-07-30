import React, { memo, useEffect, useState } from "react";
import ModalOrderRender from "../../conponents/ModalOrder";
import PropTypes from "prop-types";
import { createStructuredSelector } from "reselect";
import { makeSelectProduct } from "../../redux/selectors/order";
import {
  CloseModalOrder,
  addListProductOrder,
} from "../../redux/actions/order";
import { connect } from "react-redux";
import { compose } from "redux";
function ModalOrder({ productSelect, CloseModalOrder, addListProductOrder }) {
  const [amount, setAmount] = useState(1);
  const [size, setSize] = useState(productSelect.variants[0].val);
  const [priceSize, setPriceSize] = useState(productSelect.variants[0].price);
  const [nameTopping, setNameTopping] = useState("");
  const [codeTopping, setCodeTopping] = useState([]);
  const [priceTopping, setPriceTopping] = useState(0);
  const [note, setNote] = useState("");
  const handlePlusAmount = () => {
    setAmount(amount + 1);
  };

  const handleMinusAmount = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };

  const handleSizeChange = (e, item) => {
    if (e.target.checked) {
      setSize(item.val);
      setPriceSize(item.price);
    }
  };
  const handleToppingChange = (e, item, index) => {
    if (e.target.checked) {
      let addCodeTopping = codeTopping.splice(index, 0, item.code);
      setPriceTopping(priceTopping + item.price);
      setNameTopping(nameTopping.concat(` ${item.product_name} +`));
      setCodeTopping([...codeTopping, addCodeTopping]);
    } else {
      setPriceTopping(priceTopping - item.price);
      setNameTopping(nameTopping.replace(` ${item.product_name} +`, ""));
      setCodeTopping(codeTopping.filter((i) => i !== item.code));
    }
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleAddProductOrderClick = () => {
    const product = {
      product_name: productSelect.product_name,
      image: productSelect.image,
      topping_list: productSelect.topping_list,
      variants: productSelect.variants,
      //active
      amount: amount,
      size: size,
      priceSize: priceSize,
      nameTopping: nameTopping,
      codeTopping: codeTopping.filter((item) => typeof item !== "object"),
      priceTopping: priceTopping,
      note: note,
      totalPrice: amount * (priceSize + priceTopping),
    };
    addListProductOrder(product);
  };

  useEffect(() => {
    if (
      productSelect.amount !== undefined &&
      productSelect.size !== undefined &&
      productSelect.priceSize !== undefined &&
      productSelect.nameTopping !== undefined &&
      productSelect.priceTopping !== undefined
    ) {
      setAmount(productSelect.amount);
      setSize(productSelect.size);
      setPriceSize(productSelect.priceSize);
      setNameTopping(productSelect.nameTopping);
      setPriceTopping(productSelect.priceTopping);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ModalOrderRender
      productSelect={productSelect}
      CloseModalOrder={CloseModalOrder}
      amount={amount}
      handlePlusAmount={handlePlusAmount}
      handleMinusAmount={handleMinusAmount}
      size={size}
      priceSize={priceSize}
      handleSizeChange={handleSizeChange}
      nameTopping={nameTopping}
      priceTopping={priceTopping}
      handleToppingChange={handleToppingChange}
      handleNoteChange={handleNoteChange}
      handleAddProductOrderClick={handleAddProductOrderClick}
    />
  );
}

ModalOrder.propTypes = {
  productSelect: PropTypes.object,
  CloseModalOrder: PropTypes.func,
  addListProductOrder: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  productSelect: makeSelectProduct(),
});

function mapDispatchToProps(dispatch) {
  return {
    CloseModalOrder: () => dispatch(CloseModalOrder()),
    addListProductOrder: (product) => dispatch(addListProductOrder(product)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(ModalOrder);
