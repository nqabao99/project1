import React from "react";
import logo from "../../../assets/img/logo.png";
import Button from "../../common/Button";
import Cart from "../../common/Cart";
import Image from "../../common/Image";
import Input from "../../common/Input";
import ListSearchAddress from "../../ListSearchAddress";
import NoneAddress from "../../ListSearchAddress/NoneAddress";
import "./styleHeader.scss";
import ShipNow from "../../ShipNow";
function Header({
  handleSearchAddressChange,
  dataAddress,
  searchText,
  getAddressClick,
  closeAddress,
  openAddressModal,
  refAddress,
  listProductOrder,
  openShipNow,
  handleOpenShipNow,
  handleCloseShipNow,
}) {
  return (
    <header>
      <div className="sticky">
        <div className="container">
          <div className="header">
            <div className="header-left">
              <Image src={logo} alt="logo thecoffee house" width="190" />
            </div>
            <div className="header-center">
              <Button text="Giao ngay" onClick={handleOpenShipNow} />
              {openShipNow && (
                <ShipNow handleCloseShipNow={handleCloseShipNow} />
              )}
              <Input
                type="text"
                placeholder="Nhập địa chỉ giao hàng"
                onChange={handleSearchAddressChange}
                value={searchText}
                onClick={openAddressModal}
              />
              {searchText.length !== 0 ? (
                dataAddress.length !== 0 ? (
                  !closeAddress ? (
                    <ListSearchAddress
                      dataAddress={dataAddress}
                      getAddressClick={getAddressClick}
                      refAddress={refAddress}
                    />
                  ) : null
                ) : (
                  <NoneAddress />
                )
              ) : null}
            </div>
            <div className="header-right">
              <Button text="Đăng nhập" />
              <Cart listProductOrder={listProductOrder} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
