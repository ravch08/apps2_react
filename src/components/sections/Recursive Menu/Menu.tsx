import { recursiveMenuData } from "../../../utils/recursiveMenuData";
import BackHome from "../../features/BackHome";
import MenuList from "./MenuList";

const RecursiveMenu = () => {
  return (
    <>
      <BackHome />
      <section aria-labelledby="Recursive Menu" className="mt-20">
        <div className="container">
          <MenuList list={recursiveMenuData} />
        </div>
      </section>
    </>
  );
};

export default RecursiveMenu;
