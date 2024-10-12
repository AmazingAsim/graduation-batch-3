import React from 'react'
import { Link } from 'react-router-dom'
export default function Card(props) {
  return (
    <div className='card p-2'>
        <h1 className='text-primary'>{props.title}</h1>
        <h1 className='text-secondary'>{props.desc}</h1>
        <Link className='btn btn-primary' role='button' to={`/course/${props.title}`} >Enroll Now ....</Link>
    </div>
  )
}
