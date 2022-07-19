import { Container, Profile } from "./styles";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"


export function Header({notes,setNotes,search,setSearch = () => {}}){
  const {signOut, user} = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;


  return(
    <Container>
      <Profile>
        <h1>RocketMovies</h1>
        <input type="text" placeholder="pesquisar pelo titulo"
        onChange={e => setSearch(e.target.value)}
        />
        <div>
        <h5>{user.name}</h5>
        <p onClick={signOut}>sair</p>

        </div>
        <Link to="/profile"><img src={avatarUrl} alt="Foto do usuario" /></Link>
      </Profile>
    </Container>
  )
}
