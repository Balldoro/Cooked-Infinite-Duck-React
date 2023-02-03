import React from 'react'

import PropTypes from 'prop-types'

import './input-field.css'

const InputField = (props) => {
  return (
    <div className={`input-field-container ${props.rootClassName} `}>
      <input
        type="text"
        name="firstName"
        required
        placeholder={props.textinput_placeholder}
        className="Content input input-field-textinput"
      />
    </div>
  )
}

InputField.defaultProps = {
  textinput_placeholder: 'First name',
  rootClassName: '',
}

InputField.propTypes = {
  textinput_placeholder: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default InputField
