import React, { useCallback, useRef } from "react";
import * as Yup from "yup";

import user from "../../assets/user.png";
import { Container } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";
//import Input from "../../componentes/input";
import Botao from "../../componentes/botao";
import { Form } from "@unform/web";

function Login() {
  const formRef = useRef(null);

  const submeterForm = useCallback((data) => {
    console.log(data);
    try {
      const skema = Yup.object().shape({
        email: Yup.string().required("Email não informado"),
        senha: Yup.string().required("Senha não informada"),
      });
      skema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const erros = {};
        err.inner.forEach((error) => {
          erros[error.path] = error.message;
        });
        console.log(erros);
        formRef.current?.setErros(erros);
        return;
      }
    }
  }, []);

  return (
    <Container>
      <img src={user} size="10" alt="user" />
      <Form ref={formRef} onSubmit={submeterForm}>
        <h1>Login</h1>
        {/* <Input icon={FiMail} placeholder="Email"></Input> */}
        {/* <Input name="senha" icon={FiLock} type="password" placeholder="Senha" /> */}
        <Botao type="submit">Cadastro</Botao>
        <button>Login</button>
      </Form>
      <a href="/login">Fazer Login</a>
    </Container>
  );
}

export default Login;
