import { StyledButton } from "../../../../../style/button";
import { InputSearch } from "./InputSearch";
import { FormStyled } from "./style";

export const Form = ({
  setFilteredProducts,
  products,
  filteredProducts,
  formValue,
  setFormValue,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const filter = products.filter((product) =>
      filteredProducts.length === 0
        ? products
        : product.category.toLowerCase() === formValue.category.toLowerCase()
    );

    setFilteredProducts(filter);
  };
  return (
    <FormStyled onSubmit={handleSubmit}>
      <InputSearch formValue={formValue} setFormValue={setFormValue} />
      <StyledButton weigth={500}>Pesquisar</StyledButton>
    </FormStyled>
  );
};
