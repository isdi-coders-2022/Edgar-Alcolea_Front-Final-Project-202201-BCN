import styled from "styled-components";

const StyledButton = styled.button`
  transition: all 0.5s;
  font-family: "Sora", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  font-weight: 400;
  font-size: 20px;
  background: ${(props) => props.theme.colors.secondary};
  border: 0px solid #2ef051;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  padding: 15px;
  margin: 15px;
  &:hover {
    background: ${(props) => props.theme.colors.primary};
  }
`;

export default StyledButton;
