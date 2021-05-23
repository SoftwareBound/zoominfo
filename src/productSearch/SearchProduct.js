import React, { useState } from "react";
import Button from "../common/components/Button";
import Input from "../common/components/Input";
const SearchProduct = () => {
  const [searchVar, setSearchVar] = useState("");
  return (
    <div>
      <Input change_func={setSearchVar} value={searchVar} />
      <Button title="Submit" />
    </div>
  );
};

export default SearchProduct;
