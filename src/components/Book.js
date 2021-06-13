import { React, useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import Page from './Page'

const Book = () => {
  const [currentPage, setCurrentPage] = useState(0)

  const desktopView = useMediaQuery({ query: '(min-width: 1024px)' })

  const mobileView = useMediaQuery({ query: '(max-width: 1023px)' })

  const nextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const prevPage = () => {
    setCurrentPage(currentPage - 1)
  }

  const goToPage = (number) => {
    if (desktopView) setCurrentPage(3)
    if (mobileView && number) setCurrentPage(number)
  }

  const homePage = () => {
    setCurrentPage(0)
  }

  return (
    <section id='book' className='w-100 h-100 d-flex'>
      {desktopView && (
        <>
          {currentPage === 0 ? (
            <Page number='0' type='cover' nextPage={nextPage} />
          ) : (
            ''
          )}
          {currentPage === 1 ? (
            <>
              <Page number='1' type='introduction' homePage={homePage} />
              <Page
                number='2'
                type='index'
                nextPage={nextPage}
                goToPage={goToPage}
              />
            </>
          ) : (
            ''
          )}
          {currentPage === 2 ? (
            <>
              <Page number='3' type='about' prevPage={prevPage} />
              <Page number='4' type='works' nextPage={nextPage} />
            </>
          ) : (
            ''
          )}
          {currentPage === 3 ? (
            <>
              <Page number='5' type='tools' prevPage={prevPage} />
              <Page
                number='6'
                type='contact'
                homePage={homePage}
                nextPage={nextPage}
              />
            </>
          ) : (
            ''
          )}
          {currentPage === 4 ? (
            <Page
              number='7'
              type='back'
              prevPage={prevPage}
              homePage={homePage}
            />
          ) : (
            ''
          )}
        </>
      )}

      {mobileView && (
        <>
          {currentPage === 0 ? (
            <Page number='0' type='cover' nextPage={nextPage} />
          ) : (
            ''
          )}
          {currentPage === 1 ? (
            <Page
              number='1'
              type='introduction'
              nextPage={nextPage}
              homePage={homePage}
            />
          ) : (
            ''
          )}
          {currentPage === 2 ? (
            <Page
              number='2'
              type='index'
              prevPage={prevPage}
              nextPage={nextPage}
              goToPage={goToPage}
            />
          ) : (
            ''
          )}
          {currentPage === 3 ? (
            <Page
              number='3'
              type='about'
              prevPage={prevPage}
              nextPage={nextPage}
            />
          ) : (
            ''
          )}
          {currentPage === 4 ? (
            <Page
              number='4'
              type='works'
              prevPage={prevPage}
              nextPage={nextPage}
            />
          ) : (
            ''
          )}
          {currentPage === 5 ? (
            <Page
              number='5'
              type='tools'
              prevPage={prevPage}
              nextPage={nextPage}
            />
          ) : (
            ''
          )}
          {currentPage === 6 ? (
            <Page
              number='6'
              type='contact'
              prevPage={prevPage}
              nextPage={nextPage}
              homePage={homePage}
            />
          ) : (
            ''
          )}
          {currentPage === 7 ? (
            <Page number='7' type='back' prevPage={prevPage} />
          ) : (
            ''
          )}
        </>
      )}
    </section>
  )
}

export default Book
