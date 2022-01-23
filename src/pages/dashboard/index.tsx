import { Conteiner, Harder, IconsConteiner, InputSerch } from "./styled";
import Logo from "../../components/logo";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useIsOpem } from "../../provider/isOpem";

const Dashboard = () => {
  const { isOpemSearch, isOpemSearchFunction } = useIsOpem();

  return (
    <Conteiner>
        <InputSerch isOpemSearch={isOpemSearch}>
          <input />
          <BiSearchAlt2 onClick={isOpemSearchFunction} />
        </InputSerch>
      <Harder>
        <Logo width={22} />
        <IconsConteiner>
          <BiSearchAlt2 onClick={isOpemSearchFunction} />
          <FaShoppingCart />
          <FiLogOut />
        </IconsConteiner>
      </Harder>
    </Conteiner>
  );
};

export default Dashboard;
