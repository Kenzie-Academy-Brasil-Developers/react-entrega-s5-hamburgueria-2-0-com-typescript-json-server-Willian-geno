import {
  Conteiner,
  Harder,
  IconsConteiner,
  InputSerch,
  CardsConteiner,
  Langht,
} from "./styled";
import Logo from "../../components/logo";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useIsOpem } from "../../provider/isOpem";
import { useRequest } from "../../provider/request";
import Card from "../../components/card";
import ModalCart from "../../components/modalCart";
import { useProducts } from "../../provider/products";
import { useEffect, useState} from "react";

/* interface Input{
  input:string;
} */

const Dashboard = () => {
 /*  const [name,setName] = useState("") */
  const {
    isOpemSearch,
    isOpemSearchFunction,
    isOpemModalFunction,
    isOpemModal,
  } = useIsOpem();
  const { logof, isLogadoFunction } = useRequest();
  const { addProducts, products } = useProducts();

  isLogadoFunction();
  useEffect(() => {
    addProducts();
  }, []);

/*   const searchFunction = () => {
    setName(name.toUpperCase);
    filterProducts(name);

  } */

  return (
    <Conteiner>
      <InputSerch isOpemSearch={isOpemSearch}>
        <input/>
        <BiSearchAlt2 onClick={isOpemSearchFunction} />
      </InputSerch>
      <Harder>
        <Logo width={22} />
        <IconsConteiner>
          <BiSearchAlt2 onClick={isOpemSearchFunction} />
          <FaShoppingCart onClick={isOpemModalFunction}/>
          <FiLogOut className="search2" onClick={logof} />
        </IconsConteiner>
      </Harder>
      <CardsConteiner>
        <Card products={products} />
      </CardsConteiner>
      {isOpemModal && (
        <ModalCart
          products={[
            {
              name: "Mega Stacker Atômico 4.0",
              category: "Sanduiches",
              price: 35,
              img_url:
                "https://bk-cms-dev.s3.amazonaws.com/mega-stacker-atomico4-d_2021-09-16-133808_nczz.jpg?mtime=20210916093809&focal=none",
            },
          ]}
        />
      )}
    </Conteiner>
  );
};

export default Dashboard;
