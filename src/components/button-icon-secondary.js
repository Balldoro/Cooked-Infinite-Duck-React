import React from 'react'

import PropTypes from 'prop-types'

import './button-icon-secondary.css'

const ButtonIconSecondary = (props) => {
  return (
    <div className={`button-icon-secondary-container ${props.rootClassName} `}>
      <button className="button-icon-secondary-button button">
        <svg
          viewBox="0 0 877.7142857142857 1024"
          className="button-icon-secondary-icon"
        >
          <path
            d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"
            className=""
          ></path>
        </svg>
        <span className="Content button-icon-secondary-text">{props.text}</span>
      </button>
    </div>
  )
}

ButtonIconSecondary.defaultProps = {
  rootClassName: '',
  text: 'Facebook',
}

ButtonIconSecondary.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default ButtonIconSecondary
