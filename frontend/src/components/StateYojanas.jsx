import React from 'react'
import YojanaSection from './YojanaSection'

const StateYojanas = () => {
  const stateData = [
    {
      title: 'Majhi Kanya Bhagyashree',
      description: 'Financial assistance for girl child education',
    },
    {
      title: 'Manodhairya Yojana',
      description: 'Support for survivors of sexual assault',
    },
      {
      title: 'Savitribai Phule Scholarship',
      description: 'For girls from marginalized communities',
    },
  ]

  return (
    <YojanaSection heading="State specific-Schemes" data={stateData} showStateInput />
  )
}

export default StateYojanas
