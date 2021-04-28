import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  align-items: stretch;
  flex-direction: column;
  display: flex;
  position: relative;
  width: 300px;
  height: 476px;
  left: 490px;
  top: 300px;

  svg {
    margin: 10px 15px 20px 10px;
  }
  ${(props) =>
    props.temErro &&
    css`
      border-color: #f01f;
      color: #f01f;
    `}
  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: #fff;
    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #fff;
    }
  }
`;

export const Erro = styled.div`
  color: #f65f;
`;
