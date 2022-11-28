import { StyledText, StyledTitle } from "../../../../../../style/typography";
import { StyledButton } from "../../../../../../style/button";
import { ProductLi } from "./style";

import "react-toastify/dist/ReactToastify.css";

export const ProductCard = ({
  product,
  setCurrentSale,
  currentSale,
  toast,
}) => {
  const handlerClick = (product) => {
    if (!currentSale.find((currentItem) => currentItem.id === product.id)) {
      setCurrentSale([...currentSale, product]);
      toast.success("Item adicionado com sucesso");
    } else {
      toast.warn("Esté item já foi adicionado!");
    }
  };

  return (
    <ProductLi product={product}>
      <div className="img-content">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="description-content">
        <StyledTitle tag="heading3" titleStyle="heading3">
          {product.name}
        </StyledTitle>
        <StyledText tag="caption" textStyle="caption">
          {product.category}
        </StyledText>
        <StyledText weigth={600} tag="body" textStyle="body">
          R$ {product.price.toFixed(2)}
        </StyledText>
        <StyledButton
          onClick={() => {
            handlerClick(product);
          }}
          weigth={600}
          buttonStyle="default"
        >
          Adicionar
        </StyledButton>
      </div>
    </ProductLi>
  );
};
