import React from 'react'

const Contact = ({ nextPage, homePage, prevPage }) => {
  return (
    <section id='contact' className='page h-100 d-flex flex-column px-5 py-4'>
      <div className='side' style={{ right: 0 }} onClick={nextPage}>
        <div className='line'></div>
      </div>

      <h4 className='section__label'>contact</h4>

      <p className='text-light h4'>4</p>

      <div className='speech-bubble d-flex justify-content-center align-items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='400'
          height='235'
          viewBox='0 0 415.312 272.042'
        >
          <path
            id='Icon_metro-bubble'
            data-name='Icon metro-bubble'
            d='M205.375,0C318.8,0,410.751,51.42,410.751,114.85S318.8,229.7,205.375,229.7q-16.339,0-32.019-1.393c-44.115,30.363-96.771,35.808-147.684,36.607v-7.431c27.491-9.27,51.344-26.156,51.344-45.453a37.1,37.1,0,0,0-.868-7.922C29.7,183.052,0,150.892,0,114.85,0,51.42,91.95,0,205.375,0Z'
            transform='translate(0 7.169) rotate(-1)'
            fill='#fff'
          />
        </svg>

        <p className='text-center'>
          Feel free to reach out to me using the links at the bottom of the{' '}
          <a onClick={homePage} className='text-danger'>
            homepage
          </a>
          ... or try out this form that I've built.
        </p>
      </div>

      <form netlify id='contact-form' className='pb-3'>
        <div className='w-75 d-flex flex-column mb-3'>
          <label htmlFor='email'>E-MAIL</label>
          <input type='email' name='email' className='form-control' />
        </div>

        <div className='w-75 d-flex flex-column mb-3'>
          <label htmlFor='subject'>SUBJECT</label>
          <input type='text' name='subject' className='form-control' />
        </div>

        <div className='w-100 d-flex flex-column mb-3'>
          <label htmlFor='message'>MESSAGE</label>
          <textarea
            style={{ minHeight: '150px', maxHeight: '150px' }}
            name='message'
            cols='30'
            rows='10'
            className='form-control'
          ></textarea>
        </div>

        <input
          type='submit'
          value='SEND'
          className='btn btn-danger py-1 px-3 border-0'
        />
      </form>

      <div className='arrows--mobile w-100' style={{ marginTop: 'auto' }}>
        <button
          className='prev-arrow prev-arrow--mobile mr-auto'
          onClick={prevPage}
          style={{ bottom: '3px' }}
        >
          <i
            className='fas fa-long-arrow-alt-right text-light'
            style={{
              transform: 'scaleX(2) rotate(180deg)',
              marginLeft: '30px',
            }}
          ></i>
        </button>
        <button
          className='next-arrow next-arrow--mobile ml-auto'
          onClick={nextPage}
        >
          <i className='fas fa-long-arrow-alt-right text-light'></i>
        </button>
      </div>
    </section>
  )
}

export default Contact
