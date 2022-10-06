import React from 'react'
import InputWithLabel from '../../shared/components/InputWithLabel'

const LoginPageInputs = ({ mail, setMail, password, setPassword }) => {
  return (
    <>
      <InputWithLabel
        value={mail}
        setValue={setMail}
        label="E-mail"
        type="text"
        placeholder="Enter you'r E-mail address"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter you'r password"
      />
    </>
  )
}

export default LoginPageInputs
