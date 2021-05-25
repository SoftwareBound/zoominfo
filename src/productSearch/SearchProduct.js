import React, { useEffect, useState } from "react";
import Button from "../common/components/Button";
import Input from "../common/components/Input";
import { useDispatch, useSelector } from "react-redux";
import {
  getSearchedProducts,
  clearSearchedProducts,
} from "../redux/actions/productActions";
import { initializeOffset } from "../redux/actions/resultsActions";
const SearchProduct = () => {
  const [searchVar, setSearchVar] = useState("");
  const dispatch = useDispatch();
  const resultsOffset = useSelector((state) => state.resultsReducer);

  const getResults = () => {
    dispatch(getSearchedProducts(resultsOffset, searchVar));
  };
  const clearResults = () => {
    setSearchVar("");
    dispatch(initializeOffset());
    dispatch(clearSearchedProducts(0));
  };
  return (
    <div>
      <Input change_func={setSearchVar} value={searchVar} />
      <Button btn_title="Submit" btn_func={getResults} />
      <Button btn_title="Clear" btn_func={clearResults} />
    </div>
  );
};

export default SearchProduct;
