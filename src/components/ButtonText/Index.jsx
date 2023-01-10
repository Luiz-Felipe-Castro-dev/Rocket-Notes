import {Container} from './styles'
// oioio
export function ButtonText({title,...rest}){

  return(
<Container type="button" 
{...rest}
>


 { title}
</Container>
  )
}