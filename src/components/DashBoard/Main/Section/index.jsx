import { ProductList } from "./ProducList";
import { SectionStyled } from "./style";

export const Section = ({
  products,
  setCurrentSale,
  currentSale,
  filteredProducts,
  formValue,
  setFormValue,
  toast,
}) => {
  return (
    <SectionStyled>
      <ProductList
        toast={toast}
        formValue={formValue}
        products={products}
        setCurrentSale={setCurrentSale}
        currentSale={currentSale}
        filteredProducts={filteredProducts}
        setFormValue={setFormValue}
      />
    </SectionStyled>
  );
};
