import { Container } from "../../../style/container";
import { Aside } from "./Aside";
import { Section } from "./Section";
import { MainContent } from "./style";

export const Main = ({
  products,
  loading,
  currentSale,
  setCurrentSale,
  cartTotal,
  setCartTotal,
  filteredProducts,
  formValue,
  setFormValue,
  toast,
}) => {
  const totalValue = () => {
    const value = currentSale.reduce((acc, prevValue) => {
      return acc + prevValue.price;
    }, 0);
    setCartTotal(value);
  };
  totalValue();
  return (
    <Container>
      {loading && <div>Carregando...</div>}
      <MainContent>
        <Section
          toast={toast}
          formValue={formValue}
          products={products}
          loading={loading}
          setCurrentSale={setCurrentSale}
          currentSale={currentSale}
          setCartTotal={setCartTotal}
          filteredProducts={filteredProducts}
          setFormValue={setFormValue}
        />
        <Aside
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          setCartTotal={setCartTotal}
          cartTotal={cartTotal}
        />
      </MainContent>
    </Container>
  );
};
