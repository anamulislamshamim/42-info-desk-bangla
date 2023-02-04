import React from 'react'
import CourseBanner from './CourseBanner'
import HowToEnroll from './courseQuestions/HowToEnroll'
import OverPrice from './courseQuestions/OverPrice'

const Course = () => {
  return (
    <div>
        <CourseBanner />
        <OverPrice />
        <HowToEnroll />
    </div>
  )
}

export default Course