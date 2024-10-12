import React from 'react'
import { useParams } from 'react-router-dom'
export default function Course() {
    const {course_name} = useParams()
  return (
    <div>
       <h1>Enrollment form for {course_name}</h1>
    </div>
  )
}
