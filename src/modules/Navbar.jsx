import PropTypes from 'prop-types'
import './Navbar.modules.css'

const Navbar = ({ imageLink, alt = 'Logo de la Wild', size }) => {
  return (
    <header className="header">
      <img src={imageLink} alt={alt} width={size} height={size} />
      <h1>Wild Chickens' School</h1>
    </header>
  )
}

Navbar.propTypes = {
  imageLink: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.string,
}

export default Navbar
