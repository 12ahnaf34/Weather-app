import styled from "styled-components";

const StyledSpan = styled.span`
  background-color: #343434;
  display: grid;
  bottom: 0px;
  width: 100vw;
  @media screen {
    position: fixed;
    bottom: 0px;
    width: 100vw;
  }
`;

const Footer = ({ children }) => {
  return <StyledSpan>{children}</StyledSpan>;
};

export default Footer;
