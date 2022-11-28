import { CartCard } from "./CartCard";
import { CartUl } from "./style";

export const Cart = ({ currentSale, setCurrentSale }) => {
  return (
    <CartUl>
      {currentSale.map((currentItem) => (
        <CartCard
          key={currentItem.id}
          currentItem={currentItem}
          setCurrentSale={setCurrentSale}
          currentSale={currentSale}
        />
      ))}
    </CartUl>
  );
};
