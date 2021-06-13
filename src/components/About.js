import React from 'react'

const About = ({ prevPage, nextPage }) => {
  return (
    <section id='about' className='page h-100 d-flex flex-column'>
      <div className='side' onClick={prevPage}>
        <div className='line'></div>
      </div>

      <h4 className='section__label'>about me</h4>

      <p className='text-light h4 ml-5 mt-4'>1</p>

      <article className='about__item w-75 h-100 mx-auto d-flex flex-column align-items-center'>
        <img src='https://i.imgur.com/FtkYjnl.png' alt='Profile pic' />
        <div className='about__info h-100 text-center px-4  mb-4 d-flex flex-column justify-content-center'>
          <div className='info__title bg-light px-3 py-1'>
            <h2 className='h4 text-danger'>MATEO JACQUES</h2>
          </div>

          <p className='text-light mt-4'>
            I am a self-taught Front End Web Developer and Web Designer since
            2019. I've been coding since I was 13.
          </p>

          <p className='text-light'>
            I have a passion for writing clean and concise code that, in
            conjuction with a good understanding of web design principles,
            allows me to create work that I'm proud of.
          </p>

          <p className='text-light'>
            I <b>always</b> keep learning (and <b>always</b> will).
          </p>
        </div>
      </article>

      <div className='arrows--mobile w-100'>
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

export default About
