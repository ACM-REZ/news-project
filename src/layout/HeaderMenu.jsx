import Navigation from "../components/Navigation/Navigation";
import "./HeaderMenu.css";

const HeaderMenu = ({ setIsOpenHeaderMenu }) => {
  return (
    <div className="HeaderMenu" onClick={() => setIsOpenHeaderMenu(false)}>
      <div className="HeaderMenu__content" onClick={(e) => e.stopPropagation()}>
        <Navigation isHeader={true} />
      </div>
    </div>
  );
};

export default HeaderMenu;
