import {AiOutlinePlus} from 'react-icons/ai';

import {Container,Content} from "./styles.js";

import { Header } from "../../components/Header/index.jsx";

import {Note} from "../../components/Note"
import {Button} from "../../components/Button"

import {Link, useNavigate} from 'react-router-dom'

import { useState, useEffect} from 'react';
import { api } from '../../services/api.js';


export function Home(){

  const [notes,setNotes] = useState([]);
  const [search,setSearch] = useState("");

  const navigate = useNavigate();

  function handleDetails(id){
    navigate(`/moviePreview/${id}`)
  }

  useEffect(() => {
    async function fetchNotes(){
      const response = await api.get(`/movie_notes?title=${search}`);
      setNotes(response.data)
    }

    fetchNotes()
  },[search])

  return(
  <Container>
    <Header setSearch={setSearch}/>
    <main> 
      <Content>
        <div>
          <h1>Meus Filmes</h1>
          <Link to="/createMovie"><Button title="Adicionar filme" icon={AiOutlinePlus}/></Link>
        </div>

        {
          notes.map(note =>(
          <Note
          key={note.id}
          data={note}
          onClick={() => handleDetails(note.id)}
          /> 
          ))
          }
      </Content>
    </main>
  </Container>)
}