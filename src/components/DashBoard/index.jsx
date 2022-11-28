import { Header } from "./Header";
import { Main } from "./Main";
import { useState, useEffect } from "react";
import { Api } from "../../services/api";
import { ToastContainer, toast } from "react-toastify";

export const DashBoard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [formValue, setFormValue] = useState({
    category: "",
  });

  useEffect(() => {
    const getProducts = async () => {
      try {
        const request = await Api.get("products");
        if (request.statusText === "OK") {
          setProducts(request.data);
        }
      } catch (error) {
        return error;
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);
  return (
    <>
      <Header
        setFilteredProducts={setFilteredProducts}
        products={products}
        filteredProducts={filteredProducts}
        formValue={formValue}
        setFormValue={setFormValue}
      />
      <Main
        toast={toast}
        formValue={formValue}
        products={products}
        loading={loading}
        filteredProducts={filteredProducts}
        currentSale={currentSale}
        setCurrentSale={setCurrentSale}
        cartTotal={cartTotal}
        setCartTotal={setCartTotal}
        setFormValue={setFormValue}
      />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
};
