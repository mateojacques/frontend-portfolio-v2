import React from 'react'

const Back = ({ prevPage, homePage }) => {
  return (
    <section
      id='back'
      className='page h-100 d-flex flex-column align-items-center text-center justify-content-center px-5'
    >
      <div className='side' onClick={prevPage} style={{ left: 0 }}>
        <div className='line'></div>
      </div>

      <button
        className='prev-arrow prev-arrow--mobile mr-auto'
        onClick={prevPage}
      >
        <i
          className='fas fa-long-arrow-alt-right'
          style={{
            transform: 'scaleX(2) rotate(180deg)',
            position: 'absolute',
            top: '53px',
            left: '80px',
            color: '#777',
          }}
        ></i>
      </button>

      <h3 className='text-light mb-5'>
        THANK YOU FOR CHECKING OUT MY PORTFOLIO.
      </h3>

      <p className='text-muted mb-5 mt-3'>
        If you ask yourself what more can I do, you can always look through my
        GitHub and Behance profiles for answers.
      </p>

      <div className='back__links w-50 d-flex justify-content-around mt-5'>
        <a
          href='https://github.com/mateojacques'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fab fa-github fa-2x'></i>
        </a>
        <a
          href='https://www.behance.net/mateojacques'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fab fa-behance fa-2x'></i>
        </a>
      </div>
    </section>
  )
}

export default Back
