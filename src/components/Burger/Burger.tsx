import BurgerStyled from "./BurgerStyled.style";

interface BurgerProps {
  isActive: boolean;
  actionOnClick: React.MouseEventHandler<HTMLDivElement>;
}

const Burger = ({ isActive, actionOnClick }: BurgerProps): JSX.Element => {
  return (
    <BurgerStyled
      className={`burger-container${isActive ? " active" : ""}`}
      title="Burger"
      onClick={actionOnClick}
    >
      <span className="burger-bar"></span>
      <span className="burger-bar"></span>
      <span className="burger-bar"></span>
      <span className="burger-bar"></span>
      <span className="burger-bar"></span>
      <span className="burger-bar"></span>
    </BurgerStyled>
  );
};

export default Burger;
