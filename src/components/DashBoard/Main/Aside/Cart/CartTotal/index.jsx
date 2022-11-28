import { StyledButton } from "../../../../../../style/button";
import { StyledText } from "../../../../../../style/typography";
import { CartTotalStyled } from "./style";

export const CartTotal = ({ currentSale, cartTotal, setCurrentSale }) => {
  return (
    <CartTotalStyled>
      <div>
        <StyledText tag="body-600" weigth={600} color="black">
          Total
        </StyledText>
        <StyledText tag="body-600" weigth={600} color="#828282">
          R$ {cartTotal.toFixed(2)}
        </StyledText>
      </div>
      <StyledButton
        onClick={() => {
          setCurrentSale([]);
        }}
        buttonStyle="secondaryMedium"
      >
        Remover todos
      </StyledButton>
    </CartTotalStyled>
  );
};
