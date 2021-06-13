import React from 'react'

const Introduction = ({ homePage, nextPage }) => {
  return (
    <section id='introduction' className={`page h-100`}>
      <div className='side' style={{ left: 0 }} onClick={homePage}>
        <div className='line'></div>
      </div>

      <p>
        ...dedicated to my loving mother, an incredible graphic and people
        designer.
      </p>

      <button
        className='home'
        style={{
          border: 'none',
          background: 'none',
          position: 'absolute',
          bottom: '45px',
          left: '60px',
          color: '#fff',
        }}
        onClick={homePage}
      >
        <i className='fas fa-home' style={{ fontSize: '1.5rem' }}></i>
      </button>

      <button
        className='next-arrow next-arrow--mobile ml-auto'
        onClick={nextPage}
        style={{ position: 'absolute', bottom: '40px', right: '30px' }}
      >
        <i className='fas fa-long-arrow-alt-right text-light'></i>
      </button>
    </section>
  )
}

export default Introduction
