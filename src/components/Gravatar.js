import React from 'react'
import md5 from 'md5'

function Gravatar(props){
  const email = props.email
  let hash = md5(email)

  return (
    <img className={props.className} src={`https://gravatar.com/avatar/${hash}?d=identicon`} alt=""/>
  )
}

export default Gravatar