import React from 'react'

const Cover = ({ nextPage }) => {
  return (
    <section
      id='cover'
      className={`page h-100 ml-auto d-flex flex-column align-items-center justify-content-between`}
    >
      <div className='side' onClick={nextPage} style={{ right: 0 }}>
        <div className='line'></div>
        <div className='line'></div>
      </div>

      <a href='/'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='64'
          height='64'
          viewBox='0 0 84.518 83.943'
          className='logo mx-auto mt-4'
        >
          <g id='Grupo_14' data-name='Grupo 14' transform='translate(-0.5)'>
            <path
              id='Trazado_3'
              data-name='Trazado 3'
              d='M42.259,0A41.972,41.972,0,1,1,0,41.971,42.116,42.116,0,0,1,42.259,0Z'
              transform='translate(0.5 0)'
              fill='#fff'
            />
            <path
              id='Trazado_4'
              data-name='Trazado 4'
              d='M21.273,0A21.131,21.131,0,0,1,42.546,20.986,21.131,21.131,0,0,1,21.273,41.971,21.131,21.131,0,0,1,0,20.986,21.131,21.131,0,0,1,21.273,0Z'
              transform='translate(35.572 0)'
            />
          </g>
        </svg>
      </a>

      <div className='cover__title d-flex flex-column text-center'>
        <h1 className='title__name w-100 text-light'>
          MATEO <br />
          JACQUES
        </h1>
        <p className='h5 text-danger w-100'>FRONT END DEVELOPER</p>
        <button
          onClick={nextPage}
          className='next-arrow ml-auto d-flex justify-content-end'
        >
          <i className='fas fa-long-arrow-alt-right d-inline-block text-light'></i>
        </button>
      </div>

      <div className='cover__links mx-auto mb-4 d-flex justify-content-around'>
        <a
          href='https://github.com/mateojacques'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fab fa-github'></i>
        </a>
        <a
          href='https://www.behance.net/mateojacques'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fab fa-behance'></i>
        </a>
        <a
          href='https://www.linkedin.com/in/mateoleonjacques/'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fab fa-linkedin'></i>
        </a>
        <a
          href='mailto:mateojacquesweb@gmail.com'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fas fa-envelope'></i>
        </a>
      </div>
    </section>
  )
}

export default Cover
