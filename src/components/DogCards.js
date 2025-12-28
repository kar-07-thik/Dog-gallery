function DogCard(props){
  return(
   
  <div class="Dog_card">
      <img src={props.DogImage} />
      <p>{props.DogName}</p>
    </div>
 
  
  )
}
export default DogCard