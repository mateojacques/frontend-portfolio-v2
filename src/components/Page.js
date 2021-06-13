import React from 'react'
import Cover from './Cover'
import Introduction from './Introduction'
import Index from './Index'
import About from './About'
import Works from './Works'
import Tools from './Tools'
import Contact from './Contact'
import Back from './Back'

const Page = ({ number, type, nextPage, prevPage, homePage, goToPage }) => {
  return (
    <>
      {type === 'cover' && <Cover nextPage={nextPage} />}
      {type === 'introduction' && (
        <Introduction homePage={homePage} nextPage={nextPage} />
      )}
      {type === 'index' && (
        <Index
          number={number}
          prevPage={prevPage}
          nextPage={nextPage}
          goToPage={goToPage}
        />
      )}
      {type === 'about' && <About prevPage={prevPage} nextPage={nextPage} />}
      {type === 'works' && <Works prevPage={prevPage} nextPage={nextPage} />}
      {type === 'tools' && <Tools prevPage={prevPage} nextPage={nextPage} />}
      {type === 'contact' && (
        <Contact homePage={homePage} nextPage={nextPage} prevPage={prevPage} />
      )}
      {type === 'back' && <Back prevPage={prevPage} />}
    </>
  )
}

export default Page
