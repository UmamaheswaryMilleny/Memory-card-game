
const Card = ({card, onClick}) => {
  return (
    <div className={`card ${card.isFlipped? "flipped":""} ${card.isMatched?"matched":""}`} onClick={()=>onClick(card)}>
      <div className='card-front'>?</div>
      {/* <div ></div> */}
      <img className='card-back' src={card.value} alt="" />
    </div>
  )
}

export default Card
