import { Form } from "./Form";
import { SearchBarStyled } from "./style";

export const SearchBar = ({
  setFilteredProducts,
  products,
  filteredProducts,
  formValue,
  setFormValue
}) => {
  return (
    <SearchBarStyled>
      <Form
        setFilteredProducts={setFilteredProducts}
        products={products}
        filteredProducts={filteredProducts}
        formValue={formValue}
        setFormValue={setFormValue}
      />
    </SearchBarStyled>
  );
};
