import styled from "styled-components";

const BurgerStyled = styled.div`
  width: 60px;
  height: 45px;
  position: relative;
  left: 20px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  span {
    display: block;
    position: absolute;
    height: 6px;
    width: 50%;
    background: ${(props) => props.theme.colors.primary};
    opacity: 1;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }
  span:nth-child(even) {
    left: 50%;
    border-radius: 0 9px 9px 0;
  }

  span:nth-child(odd) {
    left: 0px;
    border-radius: 9px 0 0 9px;
  }

  span:nth-child(1),
  span:nth-child(2) {
    top: 0px;
  }

  span:nth-child(3),
  span:nth-child(4) {
    top: 18px;
  }

  span:nth-child(5),
  span:nth-child(6) {
    top: 36px;
  }

  &.active span:nth-child(1),
  &.active span:nth-child(6) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  &.active span:nth-child(2),
  &.active span:nth-child(5) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  &.active span:nth-child(1) {
    left: 5px;
    top: 7px;
  }

  &.active span:nth-child(2) {
    left: calc(50% - 5px);
    top: 7px;
  }

  &.active span:nth-child(3) {
    left: -50%;
    opacity: 0;
  }

  &.active span:nth-child(4) {
    left: 100%;
    opacity: 0;
  }

  &.active span:nth-child(5) {
    left: 5px;
    top: 29px;
  }

  &.active span:nth-child(6) {
    left: calc(50% - 5px);
    top: 29px;
  }
  @media (min-width: 600px) {
    display: none;
  } ;
`;

export default BurgerStyled;
