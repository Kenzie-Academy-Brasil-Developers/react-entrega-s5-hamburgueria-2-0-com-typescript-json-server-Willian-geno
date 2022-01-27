import Button from "../button";
import { Conteiner, ItemDiscription, Category, Price, Name, ButtonConteiner } from "./styled";
import {useCart} from "../../provider/cart"

interface Product {
  name: string;
  category: string;
  price: number;
  img_url: string;
}

interface CardtProps {
  products: Product[];
}

const Card = ({ products }: CardtProps) => {

  const {addCart, removeItemCart} = useCart();

  return (
    <>
      {products.map((item, index) => (
        <Conteiner>
          <img src={item.img_url} />
          <ItemDiscription>
            <Name>{item.name}</Name>
            <Category>{item.category}</Category>
            <Price>R$ {item.price.toFixed(2)}</Price>
            <ButtonConteiner>
              <Button
                name="Adicionar"
                color="var(--color-grey-0)"
                backgroundColor="var(--color-green)"
                funcao={() => addCart(item)}
              />
            </ButtonConteiner>
          </ItemDiscription>
        </Conteiner>
      ))}
    </>
  );
};

export default Card;
