import {
  Conteiner,
  Header,
  Bory,
  ItemConteiner,
  Name,
  Quantity,
  Total,
  Modal,
} from "./styled";
import { AiOutlineClose, AiFillDelete, AiOutlinePlus } from "react-icons/ai";
import { RiSubtractLine } from "react-icons/ri";
import Button from "../button";
import { useIsOpem } from "../../provider/isOpem";
import { useCart } from "../../provider/cart";

interface Product {
  name: string;
  category: string;
  price: number;
  img_url: string;
}

interface ModalCartProps {
  products: Product[];
}

const ModalCart = ({ products }: ModalCartProps) => {
  const { isOpemModalFunction } = useIsOpem();
  const { cart, removeItemCart, addCart, removeAllItensCard, removeFromCart } = useCart();

  const totalValor = cart.reduce(function(acc, item){
    return acc + item.price
  },0)
  console.log(cart);

  return (
    <Modal>
      <Conteiner>
        {cart === [] ? (
          <>
            <Header>
              <p>Carrinho de Compras</p>
              <AiOutlineClose onClick={isOpemModalFunction} />
            </Header>
            <Bory>
              <p>Sua Sacola está vazia</p>
              <span>Adicione itens</span>
            </Bory>
          </>
        ) : (
          <>
            <Header>
              <p>Carrinho de Compras</p>
              <AiOutlineClose onClick={isOpemModalFunction} />
            </Header>

            <Bory>
              {cart.map((item, index) => (
                <ItemConteiner>
                  <img src={item.img_url} />
                  <div className="discription">
                    <Name>
                      <h1>{item.name}</h1>
                      <AiFillDelete onClick={() => removeItemCart(item)} />
                    </Name>
                    <Quantity>
                      <AiOutlinePlus onClick={() => addCart(item)} />
                      1
                      <RiSubtractLine onClick={() => removeFromCart(item)}/>
                    </Quantity>
                  </div>
                </ItemConteiner>
              ))}
            </Bory>

              <Total>
                <div className="division"></div>
                <div className="priceTotal">
                  <p>Total</p>
                  <h3>{totalValor.toFixed(2)}</h3>
                </div>
              <Button
                name="Remover Todos"
                color="var(--color-grey-300)"
                backgroundColor="var(--color-grey-100)"
                funcao={() => removeAllItensCard()}
              />
              </Total>
          </>
        )}
      </Conteiner>
    </Modal>
  );
};

export default ModalCart;
