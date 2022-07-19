import {AiOutlineArrowLeft ,AiFillStar,AiOutlineStar, AiOutlineClockCircle} from 'react-icons/ai'

import {Container,Content} from "./styles.js";

import { api } from '../../services/api.js';

import {Header} from "../../components/Header"
import { ButtonText } from "../../components/ButtonText";
import { Button } from '../../components/Button';
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";

import {Link, useNavigate, useParams} from 'react-router-dom'
import { useState,useEffect } from 'react';

import { useAuth } from "../../hooks/auth";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"


const five = [0,1,2,3,4]

export function MoviePreview(){
  const [data,setData] = useState(null);
  const {user} = useAuth();
  const params = useParams();

  const navigate = useNavigate();
  useEffect(() =>{
    async function fetchNotes(){
      const response = await api.get(`movie_notes/${params.id}`);
      setData(response.data);
      console.log(response.data)
    }

    fetchNotes();
  },[])

  async function handleDelete(){
    const confirm = window.confirm("Deseja realmente remover a nota")
    if ( confirm){
      await api.delete(`movie_notes/${params.id}`)
      navigate("/")
    }
  }
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  return(
<Container>

  <Header/>
  { data &&
  <main>
    <Content>
      <Link to="/">
        <AiOutlineArrowLeft/>
        <ButtonText title="Voltar"/>
      </Link>
      <Section title={data.title}>
        {/* resolver o fato de q o numero 3 aqui e pra ser a starcount desse filme */}
        {five.map((index) => {
return (

index + 1 <= data.rating ? <AiFillStar key={index}/> : <AiOutlineStar key={index}/>
)
   })
 }
        <br />
        <h3> <img src={avatarUrl} alt="" /> Por {user.name}   <AiOutlineClockCircle/> na data {data.created_at}</h3>
        {/* é necessario mudar esse timestamp depois*/}
        <div>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </div>
      </Section>
      <p>{data.description}</p>
      <Button title="excluir filme" onClick={handleDelete}/>
    </Content>
  </main>
  }
</Container>
  )
}
