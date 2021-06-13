import React from 'react'

const Works = ({ nextPage, prevPage }) => {
  return (
    <section id='works' className='page h-100 px-5 py-4 d-flex flex-column'>
      <div className='side' style={{ right: 0 }} onClick={nextPage}>
        <div className='line'></div>
      </div>

      <h4 className='section__label'>my work</h4>

      <p className='text-light h4'>2</p>

      <div className='works__items w-100 h-100 d-flex flex-column justify-content-center'>
        <div id='row1' className='row w-100 mb-3 mx-0'>
          <div className='col'>
            <a
              href='https://github.com/mateojacques/frontend-portfolio-v2'
              className='work__item w-100 p-3 border border-light d-flex justify-content-center align-items-center'
              style={{ backgroundColor: '#000' }}
              target='_blank'
              rel='noreferrer'
            >
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 147 146'>
                <g id='portfolio' transform='translate(-0.5 0)'>
                  <path
                    id='Trazado_3'
                    data-name='Trazado 3'
                    d='M73.5,0C114.093,0,147,32.683,147,73s-32.907,73-73.5,73S0,113.317,0,73,32.907,0,73.5,0Z'
                    transform='translate(0.5 0)'
                    fill='#fff'
                  />
                  <path
                    id='Trazado_4'
                    data-name='Trazado 4'
                    d='M37,0C57.435,0,74,16.342,74,36.5S57.435,73,37,73,0,56.658,0,36.5,16.565,0,37,0Z'
                    transform='translate(61.5 0)'
                  />
                </g>
              </svg>
            </a>

            <a
              href='https://github.com/mateojacques/frontend-portfolio-v2'
              className='work__item--name'
            >
              <h1>PORTFOLIO</h1>
            </a>
          </div>
        </div>
        <div id='row2' className='row w-100 mb-3 mx-0'>
          <div className='col'>
            <a
              href='https://github.com/mateojacques/airhitect-landing-page'
              className='work__item w-100 p-3 border border-light d-flex justify-content-center align-items-center'
              style={{ backgroundColor: '#ED145B' }}
              target='_blank'
              rel='noreferrer'
            >
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 123 124'>
                <g id='airhitect' transform='translate(0 124)'>
                  <path
                    id='Trazado_6'
                    data-name='Trazado 6'
                    d='M0-62V0H123V-124H0ZM97.5-82.4C99.4-81.6,116-49,116-46c0,2.6-4.3,5.4-7,4.5-1.4-.4-4-4.4-7.8-12.1L95.4-65.1l-3.9,8.2C87.1-47.9,84.2-45,79.8-45c-3.8,0-6.4-2.9-10.7-11.9C67.2-60.8,65.3-64,65-64c-.4,0-1.5,1.8-2.5,3.9-5.2,11.6-17.8,13.5-23.7,3.5-2.6-4.5-5-4.3-9.6.5-4.2,4.4-7.5,5.6-12.7,4.7C12.3-52.2,7-57.3,7-60.5A5.373,5.373,0,0,1,16.5-64c2.4,2.7,3.9,2.5,5.9-.5,5.7-8.7,19.3-8.4,24.4.5.9,1.6,2.3,3,2.9,3,.7,0,2.6-2.7,4.3-5.9,3.5-6.9,6.1-9.1,11-9.1,5.1,0,7.6,2.2,11.7,10.3l3.6,7.2,5.4-11C92.1-82.3,93.5-83.9,97.5-82.4Z'
                    fill='#fff'
                  />
                </g>
              </svg>
            </a>

            <a
              href='https://github.com/mateojacques/airhitect-landing-page'
              className='work__item--name'
            >
              <h1 className='h3'>AIRhitect</h1>
            </a>
          </div>
          <div className='col'>
            <a
              href='https://github.com/mateojacques/gayo-football-app'
              className='work__item w-100 p-3 border border-light d-flex justify-content-center align-items-center'
              style={{ backgroundColor: '#90DCEF' }}
              target='_blank'
              rel='noreferrer'
            >
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 83.1 78.574'>
                <g id='gayo' transform='translate(0.54 0.545)'>
                  <path
                    id='Trazado_66'
                    data-name='Trazado 66'
                    d='M32.939,8.121,49.067,4.2l11.115,9.188L57.239,25.12,44.89,30.859,29.271,26.718l-2.325-9.553,5.993-9.048Z'
                    transform='translate(-14.197 -4.2)'
                    fill='#28a745'
                    stroke='#fff'
                    strokeMiterlimit='10'
                    strokeWidth='1'
                    fillRule='evenodd'
                  />
                  <path
                    id='Trazado_67'
                    data-name='Trazado 67'
                    d='M63.359,14.071,61.4,25.185,73.64,37.426l13.079-1.961L90.749,20.79,76.436,9.058,63.357,14.071Z'
                    transform='translate(-13.888 -4.156)'
                    fill='#ffc107'
                    stroke='#fff'
                    strokeMiterlimit='10'
                    strokeWidth='1'
                    fillRule='evenodd'
                  />
                  <path
                    id='Trazado_68'
                    data-name='Trazado 68'
                    d='M76.116,41.3l12.349-2.216L95.8,51.431,85.672,68.176l-12.713-1.2L68.311,56.334Z'
                    transform='translate(-13.826 -3.887)'
                    fill='#dc3545'
                    stroke='#fff'
                    strokeMiterlimit='10'
                    strokeWidth='1'
                    fillRule='evenodd'
                  />
                  <path
                    id='Trazado_70'
                    data-name='Trazado 70'
                    d='M33.894,63.514,48.458,52.762,64.84,57.048l5.231,12.315L61.022,81.239,40.614,76.953Z'
                    transform='translate(-14.134 -3.765)'
                    fill='#007bff'
                    stroke='#fff'
                    strokeMiterlimit='10'
                    strokeWidth='1'
                    fillRule='evenodd'
                  />
                  <path
                    id='Trazado_72'
                    data-name='Trazado 72'
                    d='M14.31,43.847,27.641,30.3l14.42,4.031L45.729,49.95,30.692,61.573l-13.079-.364Z'
                    transform='translate(-14.31 -3.966)'
                    fill='#343a40'
                    stroke='#fff'
                    strokeMiterlimit='10'
                    strokeWidth='1'
                    fillRule='evenodd'
                  />
                </g>
              </svg>
            </a>

            <a
              href='https://github.com/mateojacques/gayo-football-app'
              className='work__item--name'
            >
              <h1 className='h3'>GAYO APP</h1>
            </a>
          </div>
        </div>
        <div id='row3' className='row w-100 mb-3 mx-0'>
          <div className='col'>
            <a
              href='https://github.com/mateojacques/shia-just-do-it'
              className='work__item w-100 p-3 border border-light d-flex justify-content-center align-items-center'
              style={{ backgroundColor: '#fff' }}
              target='_blank'
              rel='noreferrer'
            >
              <svg
                viewBox='0 0 96 169'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g id='#292932ff'>
                  <path
                    fill='#292932'
                    opacity='1.00'
                    d=' M 42.34 5.58 C 48.22 3.14 55.43 3.44 60.55 7.44 C 64.58 11.53 65.34 17.47 64.97 22.94 C 60.49 22.27 61.06 17.39 59.79 14.17 C 57.13 11.21 52.75 11.13 49.07 11.06 C 42.93 10.88 39.29 17.43 38.94 22.88 C 38.51 23.29 37.65 24.11 37.22 24.53 C 36.78 24.06 35.92 23.11 35.48 22.64 L 35.24 22.38 C 34.70 15.93 38.85 10.57 42.34 5.58 Z'
                  />
                  <path
                    fill='#292932'
                    opacity='1.00'
                    d=' M 58.06 38.06 C 60.08 36.41 61.40 34.10 62.95 32.03 C 62.73 33.70 62.59 35.41 61.96 36.99 C 60.58 42.53 54.97 46.78 49.21 45.86 C 44.89 44.92 42.31 40.61 41.04 36.70 L 40.84 35.59 L 40.82 34.29 C 43.47 36.19 45.69 39.14 49.09 39.64 C 52.12 39.64 55.29 39.36 58.06 38.06 Z'
                  />
                  <path
                    fill='#292932'
                    opacity='1.00'
                    d=' M 32.23 48.15 C 35.43 45.47 37.32 41.11 41.51 39.74 C 41.24 42.66 39.70 45.21 39.04 48.03 C 38.83 51.45 40.90 54.54 43.04 57.02 C 45.90 60.41 51.03 60.30 54.88 58.93 C 60.59 56.42 62.75 49.82 63.77 44.14 C 68.17 45.20 71.92 47.92 75.39 50.71 C 80.84 55.11 83.71 61.67 87.09 67.63 C 63.11 67.87 39.13 67.60 15.14 67.59 C 17.66 63.08 19.42 57.83 23.63 54.55 C 26.39 52.27 29.45 50.40 32.23 48.15 Z'
                  />
                  <path
                    fill='#292932'
                    opacity='1.00'
                    d=' M 13.10 83.96 C 13.44 75.36 29.78 76.07 28.58 84.96 C 26.44 83.71 25.79 80.47 23.07 80.18 C 21.19 79.81 19.20 79.89 17.37 80.49 C 14.84 81.45 14.50 85.76 17.04 86.91 C 20.13 88.74 23.84 89.14 26.94 90.98 C 30.51 92.88 30.05 98.76 26.53 100.50 C 21.46 102.94 13.55 101.81 12.05 95.46 C 15.27 94.25 15.17 99.31 18.14 99.38 C 21.55 100.35 27.82 99.90 27.29 94.97 C 24.99 88.83 13.45 91.77 13.10 83.96 Z'
                  />
                  <path
                    fill='#292932'
                    opacity='1.00'
                    d=' M 61.21 78.10 C 63.51 78.07 62.83 80.44 62.96 81.98 C 62.85 88.39 63.08 94.80 62.84 101.21 C 62.43 101.24 61.62 101.30 61.22 101.33 C 61.01 93.59 61.07 85.84 61.21 78.10 Z'
                  />
                  <path
                    fill='#292932'
                    opacity='1.00'
                    d=' M 36.20 78.81 C 36.70 78.67 37.68 78.38 38.18 78.23 C 38.20 81.71 38.18 85.20 38.19 88.68 C 42.51 88.64 46.84 88.65 51.16 88.65 C 51.14 85.02 50.94 81.37 51.52 77.76 C 53.94 78.53 52.93 81.19 53.20 82.99 C 52.98 88.96 53.49 94.97 52.95 100.93 L 51.42 101.83 C 51.10 98.11 51.17 94.37 51.24 90.65 C 46.90 90.63 42.57 90.65 38.24 90.59 C 38.17 94.25 38.19 97.91 38.09 101.57 C 37.65 101.44 36.77 101.17 36.32 101.04 C 36.12 93.64 36.15 86.22 36.20 78.81 Z'
                  />
                  <path
                    fill='#292932'
                    opacity='1.00'
                    d=' M 78.08 78.42 C 78.78 78.48 80.17 78.61 80.87 78.67 C 83.93 86.15 87.03 93.64 89.62 101.30 C 86.24 101.94 86.99 97.13 85.09 95.60 C 81.32 95.32 77.53 95.55 73.75 95.48 C 72.50 97.65 72.39 101.13 69.47 101.79 C 71.57 93.76 75.44 86.29 78.08 78.42 M 74.59 93.44 C 77.89 93.49 81.20 93.47 84.50 93.39 C 82.89 89.22 81.28 85.04 79.62 80.89 C 77.58 84.92 76.08 89.19 74.59 93.44 Z'
                  />
                  <path
                    fill='#292932'
                    opacity='1.00'
                    d=' M 27.98 112.77 C 43.88 111.33 59.87 112.44 75.80 112.77 C 74.30 116.47 72.20 120.03 71.57 124.01 C 73.56 126.25 76.17 127.78 78.55 129.57 C 82.85 133.37 84.20 139.23 86.99 144.06 C 90.83 150.70 91.04 158.52 92.59 165.85 C 88.07 165.70 83.54 164.93 79.02 165.39 C 76.60 165.39 75.13 167.53 73.53 169.00 L 73.42 169.00 C 67.06 162.99 61.18 156.35 53.59 151.79 C 51.97 149.96 50.50 148.01 48.91 146.14 C 51.97 148.69 56.19 150.28 60.13 149.15 C 66.46 145.94 71.34 140.59 76.60 135.94 C 73.95 134.07 72.17 131.36 70.05 128.98 C 65.48 125.60 59.44 125.76 54.18 124.15 C 54.24 125.55 54.31 126.96 54.38 128.37 C 56.52 129.50 58.71 130.50 60.93 131.44 C 58.19 135.85 53.13 138.05 48.97 140.90 C 46.05 140.30 44.50 137.23 43.18 134.83 C 46.29 133.07 50.74 132.31 50.97 127.97 C 45.80 128.50 40.75 129.81 35.61 130.53 C 32.23 125.00 29.95 118.91 27.98 112.77 Z'
                  />
                  <path
                    fill='#292932'
                    opacity='1.00'
                    d=' M 18.24 121.38 C 18.42 121.50 18.79 121.74 18.97 121.86 C 22.97 128.02 25.94 134.79 30.03 140.91 C 33.17 145.63 35.86 151.03 35.56 156.86 C 32.54 159.44 29.67 162.20 26.73 164.87 C 18.82 165.51 10.77 164.98 2.88 164.08 C 3.53 156.21 6.07 148.56 9.60 141.53 C 13.19 136.17 15.12 129.94 18.44 124.42 C 18.37 123.41 18.30 122.39 18.24 121.38 Z'
                  />
                  <path
                    fill='#292932'
                    opacity='1.00'
                    d=' M 39.36 154.49 C 38.99 152.06 38.59 149.63 38.24 147.20 C 39.78 148.94 41.33 150.70 42.49 152.74 C 41.46 153.34 40.41 153.92 39.36 154.49 Z'
                  />
                  <path
                    fill='#292932'
                    opacity='1.00'
                    d=' M 44.22 148.15 C 45.83 148.16 48.21 149.62 48.03 151.42 C 46.38 152.01 44.18 149.71 44.22 148.15 Z'
                  />
                </g>
                <g id='#ffebd3ff'>
                  <path
                    fill='#ffebd3'
                    opacity='1.00'
                    d=' M 38.94 22.88 C 39.29 17.43 42.93 10.88 49.07 11.06 C 52.75 11.13 57.13 11.21 59.79 14.17 C 61.06 17.39 60.49 22.27 64.97 22.94 C 65.45 26.08 64.41 29.29 62.95 32.03 C 61.40 34.10 60.08 36.41 58.06 38.06 C 55.29 39.36 52.12 39.64 49.09 39.64 C 45.69 39.14 43.47 36.19 40.82 34.29 L 40.84 35.59 L 40.84 36.19 C 39.98 31.73 33.84 30.10 34.45 24.78 L 35.48 22.64 C 35.92 23.11 36.78 24.06 37.22 24.53 C 37.65 24.11 38.51 23.29 38.94 22.88 Z'
                  />
                  <path
                    fill='#ffebd3'
                    opacity='1.00'
                    d=' M 41.04 36.70 C 42.31 40.61 44.89 44.92 49.21 45.86 C 54.97 46.78 60.58 42.53 61.96 36.99 C 61.72 38.32 61.47 39.65 61.20 40.98 C 62.03 42.05 62.86 43.13 63.77 44.14 C 62.75 49.82 60.59 56.42 54.88 58.93 C 51.03 60.30 45.90 60.41 43.04 57.02 C 40.90 54.54 38.83 51.45 39.04 48.03 C 39.70 45.21 41.24 42.66 41.51 39.74 C 41.40 38.98 41.16 37.46 41.04 36.70 Z'
                  />
                  <path
                    fill='#ffebd3'
                    opacity='1.00'
                    d=' M 13.51 112.17 C 38.39 112.02 63.28 112.17 88.16 112.20 C 85.48 118.27 81.96 123.90 78.55 129.57 C 76.17 127.78 73.56 126.25 71.57 124.01 C 72.20 120.03 74.30 116.47 75.80 112.77 C 59.87 112.44 43.88 111.33 27.98 112.77 C 29.95 118.91 32.23 125.00 35.61 130.53 C 40.75 129.81 45.80 128.50 50.97 127.97 C 50.74 132.31 46.29 133.07 43.18 134.83 C 44.50 137.23 46.05 140.30 48.97 140.90 C 53.13 138.05 58.19 135.85 60.93 131.44 C 58.71 130.50 56.52 129.50 54.38 128.37 C 54.31 126.96 54.24 125.55 54.18 124.15 C 59.44 125.76 65.48 125.60 70.05 128.98 C 72.17 131.36 73.95 134.07 76.60 135.94 C 71.34 140.59 66.46 145.94 60.13 149.15 C 56.19 150.28 51.97 148.69 48.91 146.14 C 50.50 148.01 51.97 149.96 53.59 151.79 C 50.94 151.92 47.89 151.15 45.93 153.46 C 45.13 153.56 43.52 153.77 42.72 153.88 C 42.67 153.59 42.55 153.02 42.49 152.74 C 41.33 150.70 39.78 148.94 38.24 147.20 C 38.59 149.63 38.99 152.06 39.36 154.49 C 38.05 155.20 36.72 155.91 35.56 156.86 C 35.86 151.03 33.17 145.63 30.03 140.91 C 25.94 134.79 22.97 128.02 18.97 121.86 C 18.79 121.74 18.42 121.50 18.24 121.38 C 16.78 118.25 15.05 115.26 13.51 112.17 M 44.22 148.15 C 44.18 149.71 46.38 152.01 48.03 151.42 C 48.21 149.62 45.83 148.16 44.22 148.15 Z'
                  />
                </g>
              </svg>
            </a>

            <a
              href='https://github.com/mateojacques/shia-just-do-it'
              className='work__item--name'
            >
              <h1>SHIA JUST DO IT</h1>
            </a>
          </div>
        </div>
        <div id='row4' className='row w-100 mb-3 mx-0'>
          <div className='col'>
            <a
              href='https://github.com/mateojacques/mockapp'
              className='work__item w-100 p-3 border border-light d-flex justify-content-center align-items-center'
              style={{ backgroundColor: '#F3CF7A' }}
              target='_blank'
              rel='noreferrer'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 87.422 86.268'
              >
                <g id='apple-touch-icon' transform='translate(-10.88 61.894)'>
                  <path
                    id='Trazado_7'
                    data-name='Trazado 7'
                    d='M58.466-58.7C26.933-47.234,2.482-7.775,13.612,13.809c9.274,17.874,41.145,12.31,64.247-10.961C113.1-32.9,100.286-73.708,58.466-58.7ZM84.435-44.03C79.713-36.61,58.8-15.532,44.808-4.065,13.274,22.072,14.286,17.687,47.674-15.026,80.388-47.234,92.866-57.014,84.435-44.03Z'
                    transform='translate(0 0)'
                    fill='#41210a'
                  />
                </g>
              </svg>
            </a>

            <a
              href='https://github.com/mateojacques/mockapp'
              className='work__item--name'
            >
              <h1>Mockapp</h1>
            </a>
          </div>
        </div>
      </div>

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

export default Works
