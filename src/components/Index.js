import React from 'react'

const Index = ({ number, nextPage, goToPage, prevPage }) => {
  return (
    <section
      id='index'
      className='page index--mobile h-100 d-flex flex-column justify-content-between p-5'
    >
      <div className='side' style={{ right: 0 }} onClick={nextPage}>
        <div className='line'></div>
      </div>

      <h1 className='section__title'>INDEX</h1>

      <div className='index__items d-flex flex-column'>
        <a
          href='#'
          onClick={nextPage}
          className='index__item py-2 px-3 mb-5 bg-light d-inline-block'
        >
          <h2 className='h4 text-danger'>about me</h2>
          <p className='text-dark'>1</p>
        </a>

        <a
          href='#'
          onClick={() => {
            goToPage(4)
          }}
          className='index__item py-2 px-3 mb-5 ml-auto bg-danger d-inline-block'
        >
          <h2 className='h4 text-light'>my work</h2>
          <p className='text-light'>2</p>
        </a>

        <a
          href='#'
          onClick={() => {
            goToPage(5)
          }}
          className='index__item py-2 px-3 mb-5 bg-light d-inline-block'
        >
          <h2 className='h4 text-danger'>my stack</h2>
          <p className='text-dark'>3</p>
        </a>

        <a
          href='#'
          onClick={() => {
            goToPage(6)
          }}
          className='index__item py-2 px-3 mb-5 ml-auto bg-danger d-inline-block'
        >
          <h2 className='h4 text-light'>contact</h2>
          <p className='text-light'>4</p>
        </a>
      </div>

      <button
        className='prev-arrow prev-arrow--mobile mr-auto'
        onClick={prevPage}
      >
        <i
          className='fas fa-long-arrow-alt-right text-light'
          style={{
            transform: 'scaleX(2) rotate(180deg)',
            position: 'absolute',
            bottom: '53px',
            left: '80px',
          }}
        ></i>
      </button>

      <button className='next-arrow ml-auto' onClick={nextPage}>
        <i className='fas fa-long-arrow-alt-right text-light'></i>
      </button>
    </section>
  )
}

export default Index
