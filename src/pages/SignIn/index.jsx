import { AiTwotoneLock } from "react-icons/ai";
import { FiMail } from "react-icons/fi";

import {Container, Form, Background} from "./styles.js";

import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import {ButtonText} from '../../components/ButtonText'

import {Link} from 'react-router-dom'

import { useState } from "react";

import { useAuth } from "../../hooks/auth";


export function SignIn(){
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const {signIn} = useAuth();

  function handleSignIn(){
    signIn({email,password})
  }

  return(
  <Container>
    <Form>
      <h1>RocketMovies</h1>
      <p>Aplicação para acompanhar tudo que assitir.</p>

      <h2>Faça seu login</h2>
      <Input icon={FiMail} placeholder="Email" type="text"
      onChange={e => setEmail(e.target.value)}
      />
      <Input icon={AiTwotoneLock} placeholder="Senha" type="password"
      onChange={e => setPassword(e.target.value)}

      />
      <Button title="Entrar" onClick={handleSignIn}/>
      <Link to="/register"><ButtonText title="Criar conta"/></Link>

    </Form>
    <Background/>

  </Container>
  )
}