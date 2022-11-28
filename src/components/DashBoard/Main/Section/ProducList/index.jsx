import { StyledButton } from "../../../../../style/button";
import { StyledTitle } from "../../../../../style/typography";
import { ProductCard } from "./ProductCard";
import { ProductUl, SearchResultStyled } from "./style";


export const ProductList = ({
  products,
  setCurrentSale,
  currentSale,
  totalValue,
  filteredProducts,
  formValue,
  setFormValue,
  toast
}) => {
  return (
    <>
      {filteredProducts.length === 0 ? (
        <ProductUl>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              setCurrentSale={setCurrentSale}
              currentSale={currentSale}
              totalValue={totalValue}
              toast={toast}
            />
          ))}
        </ProductUl>
      ) : (
        <>
          <SearchResultStyled>
            <StyledTitle tag="heading1">
              Resultado para: {formValue.category}
            </StyledTitle>
            <StyledButton>Limpar busca</StyledButton>
          </SearchResultStyled>
          <ProductUl>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                setCurrentSale={setCurrentSale}
                currentSale={currentSale}
                totalValue={totalValue}
                toast={toast}
              />
            ))}
          </ProductUl>
        </>
      )}
    </>
  );
};
