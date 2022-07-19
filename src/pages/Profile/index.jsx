import {FiArrowLeft, FiCamera} from 'react-icons/fi'
import { AiTwotoneLock , AiOutlineUser} from "react-icons/ai";
import { FiMail } from "react-icons/fi";

import {Container,Form, Avatar} from "./styles.js";

import {Input} from '../../components/Input'
import {Button} from '../../components/Button'

import {Link} from 'react-router-dom'
import { api} from "../../services/api"

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { useAuth } from '../../hooks/auth.jsx';
import { useState } from 'react';

export function Profile(){
  const {user, updateProfile} = useAuth();

  const [name,setName] = useState(user.name);
  const [email,setEmail] = useState(user.email);
  const [passwordOld,setPasswordOld] = useState();
  const [passwordNew,setPasswordNew] = useState();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate(){
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password:passwordOld,
    };
    const userUpdated = Object.assign(user,updated)
    updateProfile({user: userUpdated, avatarFile});
  }

  function handleChangeAvatar(event){
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);

    setAvatar(imagePreview);
  }

  return(
  <Container>
    <header>
      <Link to="/">
       <FiArrowLeft/> Voltar
      </Link>
    </header>
    <Form>
      <Avatar>
        <img 
        src={avatar} 
        alt="Foto do usuário" 
        />
        <label htmlFor="avatar">
        <FiCamera/>
        <input id='avatar' type="file"  onChange={handleChangeAvatar}/>
        </label>
      </Avatar>
      <Input icon={AiOutlineUser} placeholder="Usuário" type="text"
      value={name}
      onChange={e => setName(e.target.value)}
      />
      <Input icon={FiMail} placeholder="E-mail" type="text"
      value={email}
      onChange={e => setEmail(e.target.value)}
      />
      <Input icon={AiTwotoneLock} placeholder="Senha atual" type="password"
      onChange={e => setPasswordOld(e.target.value)}
      />
      <Input icon={AiTwotoneLock} placeholder="Nova senha " type="password"
      onChange={e => setPasswordNew(e.target.value)}
      />
      <Button title="Salvar" onClick={handleUpdate}/>
    </Form>
  </Container>)
}