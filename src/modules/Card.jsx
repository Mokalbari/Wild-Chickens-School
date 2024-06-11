import './Cards.modules.css'

const Card = ({ name, profession, content }) => {
  return (
    <div className="card">
      <img
        className="card__image"
        src="./public/assets/AlexCoqaux-vins.png"
        alt=""
      />
      <div className="card__content">
        <h2 className="card__name">Isabelle</h2>
        <p className="card__profession">Professeur</p>
        <p className="card__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
          nesciunt maxime ducimus deleniti inventore facilis.
        </p>
      </div>
    </div>
  )
}

export default Card
