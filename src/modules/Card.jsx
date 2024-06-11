import './Cards.modules.css'
import PropTypes from 'prop-types'

const Card = ({ name, imageLink, position, text, size = '200px' }) => {
  return (
    <div className="card">
      <img
        className="card__image"
        src={imageLink}
        alt={name}
        width={size}
        height={size}
      />
      <div className="card__content">
        <h2 className="card__name">{name}</h2>
        <p className="card__position">{position}</p>
        <p className="card__text">{text}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Card
