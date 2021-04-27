import React from 'react';


import logo from "../../assets/quiz.png"
import { Conteiner } from "./styles";


import Botao from "../../componentes/botao";

function Login(){
    
    return (  
        <Conteiner> 
            <form> 
                <div>
                <Botao>Cadastro</Botao>
                <Botao>Login</Botao>
                <Botao>Tema</Botao>
                <Botao>Play</Botao>
                </div>
               
                <img src = {logo} alt = "logo"/>
                <p>Quiz</p> 
                
            </form>
           
        </Conteiner>
        
    );
}

export default Login;