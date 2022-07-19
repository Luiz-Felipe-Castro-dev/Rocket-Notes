import {useState} from 'react';

import { AiTwotoneLock , AiOutlineUser, AiOutlineArrowLeft} from "react-icons/ai";
import { FiMail } from "react-icons/fi";

import {api} from "../../services/api.js"

import {Container, Form, Background} from "./styles.js";

import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import {ButtonText} from '../../components/ButtonText'

import {Link, useNavigate} from 'react-router-dom'


export function SignUp(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  function handleSignUp(){
    if(!name || !email || !password){
      return alert("Preencha todos os campos")
    }

    api.post("/post", {name,email,password})
    .then(() =>{
      alert("Usuário cadastrado com sucesso")
      navigate("/");
    })
    .catch(error =>{
      if(error.response){
        alert(error.response.data.message)
      }
      else{
        alert("não foi possível cadastrar")
      }
    })
  }
  return(
  <Container>

    <Form>
      <h1>RocketMovies</h1>
      <p>aplicação para acompanhar tudo que assitir</p>

      <h2>Crie sua conta</h2>
      <Input icon={AiOutlineUser} placeholder="Usuário" type="text"
      onChange = {e => setName(e.target.value)}
      />
      <Input icon={FiMail} placeholder="Email" type="text"
      onChange = {e => setEmail(e.target.value)}      
      />
      <Input icon={AiTwotoneLock} placeholder="Senha" type="password"
      onChange = {e => setPassword(e.target.value)}      
      />
      
      <Button title="Cadastrar"  onClick={handleSignUp}/>
      <Link to="/"><AiOutlineArrowLeft/><ButtonText title="Voltar para o login"/></Link>

    </Form>
    <Background/>


  </Container>
  )
}