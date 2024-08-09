import React from 'react'
import Gallery1 from '../utils/img/gallery1.JPG'
import Gallery2 from '../utils/img/gallery2.JPG'
import Gallery3 from '../utils/img/gallery3.JPG'
import Gallery4 from '../utils/img/gallery4.JPG'

export  function ImageGallery() {
  return (
    <div className='container py-5'>
      <h2 className='text-center fs-1 mb-5 text-uppercase fw-bold'>Image Gallery</h2>
      <div className='row'>
        <div className='col-md-4 px-2'>
          <div className='my-3'>
          <img src={Gallery1} className="img-fluid" alt=""/>
          </div>
          <div className='my-3'>
          <img src={Gallery2} className="img-fluid" alt=""/>
          </div>
        </div>
         <div className='col-md-4 px-2'>
          <div className='my-3'>
          <img src={Gallery3} className="img-fluid" alt=""/>
          </div>
          <div className='my-3'>
          <img src={Gallery4} className="img-fluid" alt=""/>
          </div>
        </div>
        <div className='col-md-4 px-2'>
          <div className='my-3'>
          <img src={Gallery4} className="img-fluid" alt=""/>
          </div>
          <div className='my-3'>
          <img src={Gallery4} className="img-fluid" alt=""/>
          </div>
        </div>

      </div>

    </div>
  )
}
