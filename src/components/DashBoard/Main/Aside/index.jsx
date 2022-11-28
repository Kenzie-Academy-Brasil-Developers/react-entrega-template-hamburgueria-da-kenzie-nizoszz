import { Cart } from "./Cart";
import { AsideStyled } from "./style";
import { StyledTitle, StyledText } from "../../../../style/typography";
import { CartTotal } from "./Cart/CartTotal";

export const Aside = ({
  currentSale,
  cartTotal,
  setCartTotal,
  setCurrentSale,
}) => {
  return (
    <AsideStyled>
      <div className="topCart">
        <StyledTitle tag="heading3" titleStyle="heading3" color="white">
          Carrinho de compras
        </StyledTitle>
      </div>
      {currentSale.length === 0 ? (
        <div className="cartItems">
          <StyledTitle tag="heading3" titleStyle="heading3">
            Sua sacola está vazia
          </StyledTitle>
          <StyledText tag="body-600" textStyle="body-600" weigth={400}>
            Adicione itens
          </StyledText>
        </div>
      ) : (
        <>
          <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
          <CartTotal
            cartTotal={cartTotal}
            setCartTotal={setCartTotal}
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
          />
        </>
      )}
    </AsideStyled>
  );
};
