import { ButtonRemoveStyled, CartCardStyled } from "./style";
import { StyledTitle, StyledText } from "../../../../../../style/typography";
export const CartCard = ({
  currentItem,
  setCurrentSale,
  currentSale,
}) => {
  const removeButton = (id) => {
    const filter = currentSale.filter((currentItem) => currentItem.id !== id);
    setCurrentSale(filter);
  };

  return (
    <CartCardStyled>
      <img src={currentItem.img} alt={currentItem.name} />
      <div>
        <StyledTitle tag="heading4" titleStyle="heading4">
          {currentItem.name}
        </StyledTitle>
        <StyledText tag="caption" textStyle="caption">
          {currentItem.category}
        </StyledText>
      </div>
      <ButtonRemoveStyled
        onClick={() => {
          removeButton(currentItem.id);
        }}
      >
        Remover
      </ButtonRemoveStyled>
    </CartCardStyled>
  );
};
