import {FiArrowLeft} from 'react-icons/fi'

import { Container, Form } from "./styles";

import {Header} from "../../components/Header"
import {Input} from "../../components/Input"
import {Textarea} from "../../components/Textarea"

import { NoteItem } from '../../components/NoteItem';
import {Button} from "../../components/Button"

import {Link,useNavigate} from 'react-router-dom'

import { api } from '../../services/api';


import { useState } from 'react';


export function CreateMovie(){
  const [title,setTitle] = useState();
  const [description,setDescription] = useState();
  const [rating,setRating] = useState();


  const [tags,setTags] = useState([]);
  const [newTag,setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag(){
    setTags(prevState => [...prevState,newTag]);
    setNewTag("")
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote(){
    if(!title){
      return alert("Digite o titulo da nota.")
    }
    if(!rating){
      return alert("De uma nota ao filme")
    }
    if(newTag){
      return alert("Tag preenchida não adicionada.")
    }
    await api.post("/movie_notes",{
      title,
      description,
      tags,
      rating
    });
    alert("Nota cadastrada!");
    navigate("/")
  }
  
  function leave(){
    navigate("/")
  }

  return(
  <Container>
    <Header/>
    <main>
      <Form>
        <Link to="/"><FiArrowLeft/>
        Voltar</Link>
        <header>
          <h1>Novo Filme</h1>
        </header>
        <div className="input">
          <Input type="text" 
          placeholder="Titulo"
          onChange={e => setTitle(e.target.value)}
          />
          <Input type="number"
          placeholder="Sua nota (de 0 a 5)"
          onChange={e => setRating(e.target.value)}
          />
        </div>
        <Textarea placeholder="Texto"
        onChange={e => setDescription(e.target.value)}
        />
        <h2>Marcadores</h2>
        <div>
          {tags.map( (tag,index) => (
            <NoteItem
            key={String(index)}
            value={tag}
            onClick={() => handleRemoveTag(tag)}
            />
          ))}
          <NoteItem isNew placeholder="Novo Marcador"
          onChange={e => setNewTag(e.target.value)} 
          onClick={handleAddTag}
          value={newTag}/>

        </div>
        <div className="input2">
          <Button title="Excluir Filme" onClick={leave}/>
          <Button title="Salvar alterações" onClick={handleNewNote}/>
        </div>
      </Form>
    </main>
  </Container>)
}