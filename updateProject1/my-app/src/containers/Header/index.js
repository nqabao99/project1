import React, { useEffect, useState, useRef } from "react";
import HeaderRender from "../../conponents/layout/Header";
function Header(props) {
  const refAddress = useRef();
  const [searchText, setSearchText] = useState("");
  const [dataAddress, setDataAddress] = useState([]);
  const [closeAddress, setCloseAddress] = useState(false);
  const handleSearchAddressChange = (e) => {
    setSearchText(e.target.value);
    if (e.target.value.length > 3) {
      fetch(
        `https://api.thecoffeehouse.com/api/v5/map/autocomplete?key=${e.target.value.toLowerCase()}&from=TCH-WEB`,
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "accept-language": "en-US,en;q=0.9,ja;q=0.8",
            "cache-control": "no-cache",
            pragma: "no-cache",
            "sec-ch-ua":
              '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            "tch-app-version": "",
            "tch-device-id": "",
            "x-csrf-token": "XJVEF4AnLtZqcFJ87XeJaV1nJxGC5HrAkMy9QCHA",
            "x-requested-with": "XMLHttpRequest",
          },
          referrer: "https://order.thecoffeehouse.com/",
          referrerPolicy: "strict-origin-when-cross-origin",
          body: null,
          method: "GET",
          mode: "cors",
          credentials: "omit",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setDataAddress(data.addresses);
        });
    }
  };

  const getAddressClick = (data) => {
    setSearchText(data);
    setCloseAddress(true);
  };

  const openAddressModal = () => {
    setCloseAddress(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeAddressModal);
    return () => document.removeEventListener("mousedown", closeAddressModal);
  }, []);

  const closeAddressModal = (event) => {
    if (!refAddress.current?.contains(event.target)) {
      setCloseAddress(true);
    }
  };

  return (
    <HeaderRender
      handleSearchAddressChange={handleSearchAddressChange}
      dataAddress={dataAddress}
      searchText={searchText}
      getAddressClick={getAddressClick}
      closeAddress={closeAddress}
      openAddressModal={openAddressModal}
      refAddress={refAddress}
    />
  );
}

export default Header;
