import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-12 md:flex-row md:justify-between'>
    <ul className='flex gap-6 text-gray-400'>
      <li>
        <a href="#">Facebook</a>
      </li>
      <li>
        <a href="#">Instagram</a>
      </li>
      <li>
        <a href="#">Twitter</a>
      </li>
    </ul>
    <div className='flex gap-2'>
      <img src="/Help-Avatar.svg" alt="help" />
      <div>
        <p className=''>have any question </p>
        <a href="" className=''>Talk to specialist</a>
      </div>
    </div>
    </div>
  )
}

export default Footer
