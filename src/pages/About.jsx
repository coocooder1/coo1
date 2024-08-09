import React from 'react'
import './About.css';

import Gallery1 from '../utils/img/gallery1.JPG'
import Gallery2 from '../utils/img/gallery2.JPG'
import Gallery3 from '../utils/img/gallery3.JPG'

import { ImageGallery } from '../components/ImageGallery';
function About() {
  return (
    <div className='about-page'>
      <header className='mt-5'>
        <div className='container h-100 d-flex align-items-center justify-content-center'>
          <h1 className='text-light'>About</h1>
        </div>
      </header>
      <div className='container my-5'>
        <p>目前在澳洲、美國、越南及台灣都有分店的Ten Thousand Coffee，其實是發跡於澳洲，在紐約打開知名度，黑白酷帥的外觀設計希望能呈現最佳的精品咖啡，台灣目前已有台北微風南山店、2023年12月松菸及台中陸續登場，下次經過不妨外帶一杯時髦包裝的維也納咖啡嚐鮮。
        </p>
        <div className='col-lg-6'>
          <img src={Gallery1} className='img-fluid my-4' alt=""/>
        </div>
        <div className='col-lg-6'>
          <img src={Gallery2} className='img-fluid my-4' alt=""/>
        </div>
        <div className='col-lg-6'>
          <img src={Gallery3} className='img-fluid my-4' alt=""/>
        </div>
        

      </div>
      <div className='bg-dark text-light'>
        <ImageGallery/>

      </div>
      
    </div>
  )
}

export default About