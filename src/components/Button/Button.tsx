import StyledButton from "./StyledButton.style";

interface ButtonProps {
  actionOnClick: () => void;
}

const Button = ({ actionOnClick }: ButtonProps): JSX.Element => {
  return <StyledButton onClick={actionOnClick}>Load more</StyledButton>;
};
export default Button;
