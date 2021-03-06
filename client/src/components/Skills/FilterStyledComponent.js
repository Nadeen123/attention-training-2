import styled from "styled-components"

const DivStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px auto 10px;
`
const FilterStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: black;
  .isClicked {
    color: #2f4f4f;
    text-shadow: 1px 1px #c0c0c0;
    box-shadow: inset 1px 1px 14px #c1c1c1;
    outline: none;
  }
`

const FilterButton = styled.button`
  background: ${({ background }) => background || "#fff"};
  display: inline-block;
  box-shadow: 0px 10px 25px #5468ff4d;
  width: ${({ width }) => width || "111px"};
  height: ${({ height }) => height || "34px"};
  border-radius: ${props =>
    props.borderRaduis === "left" ? "15px 0px 0px 15px" : "0px 15px 15px 0px"};
  outline: none;
  &:hover {
    color: ${({ hoverColor }) => hoverColor || "#2F4F4F"};
    text-shadow: 1px 1px #c0c0c0;
    box-shadow: inset 1px 1px 14px #c1c1c1;
    outline: none;
  }
`

export { FilterButton, DivStyled, FilterStyled }
