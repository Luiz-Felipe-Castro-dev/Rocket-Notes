import { Tag } from "../Tag";
import { Container } from "./styles";

import {AiFillStar,AiOutlineStar} from 'react-icons/ai'


const five = [0,1,2,3,4]
export function Note({data, ...rest}){

  return(
    <Container {...rest}>
      <h1>{data.title}</h1>
      <section>{
five.map((index) => {
  return (

index + 1 <= data.rating ? <AiFillStar key={index}/> : <AiOutlineStar key={index}/>
)
   })
 }</section>

      <p>{data.description}</p>
      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  )
}


