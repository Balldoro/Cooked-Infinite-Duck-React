import React from 'react'

import { Helmet } from 'react-helmet'

import InputField from '../components/input-field'
import ButtonIconSecondary from '../components/button-icon-secondary'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Cooked Infinite Duck</title>
        <meta property="og:title" content="Cooked Infinite Duck" />
      </Helmet>
      <div className="home-container1">
        <img
          alt="image"
          src="/playground_assets/group%2059.svg"
          className="home-image"
        />
      </div>
      <div className="home-container2">
        <span className="Heading home-text">Create an account</span>
        <div className="home-container3">
          <span className="Subheading home-text1">Already a member? </span>
          <a
            href="https://example.com"
            target="_blank"
            rel="noreferrer noopener"
            className="Subheading home-link"
          >
            Sign In
          </a>
        </div>
        <form className="home-form">
          <div className="home-container4">
            <InputField rootClassName="input-field-root-class-name1"></InputField>
            <InputField
              rootClassName="input-field-root-class-name"
              textinput_placeholder="Last name"
            ></InputField>
          </div>
          <InputField
            rootClassName="input-field-root-class-name2"
            textinput_placeholder="Email"
          ></InputField>
          <InputField
            rootClassName="input-field-root-class-name3"
            textinput_placeholder="Password"
          ></InputField>
          <button type="submit" className="home-button button Button">
            <span className="home-text2">
              <span>Register</span>
              <br></br>
            </span>
          </button>
        </form>
        <span className="home-text5">or register with</span>
        <div className="home-container5">
          <ButtonIconSecondary></ButtonIconSecondary>
          <div className="home-container6">
            <button className="home-button1 button">
              <svg viewBox="0 0 860.0137142857142 1024" className="home-icon">
                <path d="M438.857 449.143h414.286c4 22.286 6.857 44 6.857 73.143 0 250.286-168 428.571-421.143 428.571-242.857 0-438.857-196-438.857-438.857s196-438.857 438.857-438.857c118.286 0 217.714 43.429 294.286 114.857l-119.429 114.857c-32.571-31.429-89.714-68-174.857-68-149.714 0-272 124-272 277.143s122.286 277.143 272 277.143c173.714 0 238.857-124.571 249.143-189.143h-249.143v-150.857z"></path>
              </svg>
              <span className="Content home-text6">Google</span>
            </button>
          </div>
          <ButtonIconSecondary
            text="Apple"
            rootClassName="button-icon-secondary-root-class-name1"
          ></ButtonIconSecondary>
        </div>
      </div>
    </div>
  )
}

export default Home
