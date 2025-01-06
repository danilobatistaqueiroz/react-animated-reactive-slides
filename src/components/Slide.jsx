import telas from '../assets/telas.json'
import PropTypes from 'prop-types';

Slide.propTypes = {
  slide: PropTypes.number.isRequired
}

function Slide({slide}) {
  return (
    <div>
      <h1>{telas[slide].title}</h1>
      <p>{telas[slide].description}</p>
    </div>
  )
}

export default Slide