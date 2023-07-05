import PropTypes from 'prop-types';

const handleClick =() =>{
  location.href = 'https://form.jotform.com/231740625396055'
}

export const PButton = ({id, className, content}) => {
  return (
    <button id ={id} className={className} onClick={handleClick}> {content}</button>
  )
}

PButton.propTypes={
  id: PropTypes.string,
  className: PropTypes.string,
  content: PropTypes.string
}