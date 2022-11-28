import { Container } from "../../../style/container";
import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";
import { StyledHeader, StyledHeaderFlexBox } from "./style";

export const Header = ({
  setFilteredProducts,
  products,
  filteredProducts,
  setFormValue,
  formValue,
}) => {
  return (
    <StyledHeader>
      <Container>
        <StyledHeaderFlexBox>
          <Logo />
          <SearchBar
            setFilteredProducts={setFilteredProducts}
            filteredProducts={filteredProducts}
            products={products}
            setFormValue={setFormValue}
            formValue={formValue}
          />
        </StyledHeaderFlexBox>
      </Container>
    </StyledHeader>
  );
};
