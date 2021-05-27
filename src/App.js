import { store } from "./redux/store";
import "./App.css";
import { Provider } from "react-redux";
import { ProductItemContainer } from "./product/index";
import { headlines } from "./common/titles/headlines";
import { SearchProduct } from "./productSearch";
import { useEffect } from "react";
import "./style.css";

function App() {
  return (
    <div className="contianer main_container">
      <Provider store={store}>
        <h1>{headlines.MAIN_HEADLINE}</h1>
        <SearchProduct />
        <ProductItemContainer />
      </Provider>
    </div>
  );
}

export default App;
