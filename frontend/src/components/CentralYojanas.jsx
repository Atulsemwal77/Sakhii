import React from 'react'
import YojanaSection from './YojanaSection'

const CentralYojanas = () => {
  const centralData = [
    {
      title: 'Beti Bachao Beti Padhao',
      description: 'For girl child protection and education',
    },
    {
      title: 'Pradhan Mantri Matru Vandana Yojana',
      description: '₹5000 Support For Pregnant Women',
    },
    {
      title: 'Janani Suraksha Yojana',
      description: 'For Safe Institutional Deliveries',
    },
     {
      title: 'Sukanya Samriddhi Yojana',
      description: 'For the girl child’s future',
    },
  ]

  return <YojanaSection heading="Central Government Yojanas" data={centralData} />
}

export default CentralYojanas
