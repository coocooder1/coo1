import React from 'react'
import {MenuBtn} from '../components/MenuBtn'
import './Home.css'
import AboutImg from '../utils/img/about-img.JPG';
import { Link } from 'react-router-dom';
import {ImageGallery} from '../components/ImageGallery';
import { ContactInfo } from '../components/ContactInfo';
import Gallery1 from '../utils/img/gallery1.JPG'
function Home() {
  return (
    <div className='home-page'>
      <header className='h-100 min-vh-100 d-flex align-items-center text-light shadow'>
        <div className='container '>
          <div className='row'>
            <div className='col-sm-6 d-flex d-sm-block flex-coulumn align-item-cnter'>
            <h2 className='mb-0 text-black fw-bold'>Welcome To</h2>
            <h1 className='mb-5 text-black fw-bold text-center text-sm-start'>React Restaurant</h1>
            <MenuBtn/>
            </div>

          </div>

        </div>

      </header>
      <div className='container my-5'>
        <div className='row'>
          <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
            <img src={AboutImg} className='img-fluid w-50' alt="about img"/>

          </div>
          <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
            <h2 className='fs-1 mb-5 text-uppercase'>About Us</h2>
            <p>咖啡因(Caffeine) 这是咖啡中最知名的成分之一。咖啡因是一种刺激性物质，可以提高注意力、警觉性和精神状态。
                抗氧化剂： 咖啡含有一些抗氧化剂，如羟基苯甲酸和羟基香豆素。这些化合物有助于对抗自由基，减少氧化应激对身体的损害。
                维生素： 咖啡中含有少量的维生素B2(核黄素)、维生素B3(烟酸)、维生素B5(烟酸)和维生素B6(烟酸)等。
                矿物质： 咖啡也含有一些矿物质，如镁、钾和锰等。
                低热量： 纯咖啡本身几乎不含热量，但如果添加了牛奶、糖或其他配料，则会增加热量。</p>
                <p className='mb-5'>需要注意的是，虽然咖啡含有一些营养成分，但过量摄入可能会对健康产生负面影响。尤其是过多的咖啡因摄入可能会导致焦虑、失眠和消化不适等问题。因此，适度饮用咖啡是明智的选择。</p>
                <Link to="/about">
                  <button type="button" className='btn btn-outline-success btn-lg'>More About US</button>
                </Link>
          </div>

        </div>
      </div>
      <div className='menu-section py-5 text-light shadow'>
        <div className='container d-flex flex-column align-items-center'>
          <h2 className='fs-1 mb-5 text-uppercase fw-bold'>Our Favorites</h2>
          <div className='row mb-5 w-100'>
            <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
              <h3 className='fs-2 mb-5'>食物</h3>
              <ul className='px-0'>
                <li className='d-flex justify-content-between'>
                  <p className='fs-3 mx-2'>早餐</p>
                  <p className='fs-3 mx-2 text-success fw-nold'>$220</p>
                </li>
                <li className='d-flex justify-content-between'>
                  <p className='fs-3 mx-2'>牛排</p>
                  <p className='fs-3 mx-2 text-success fw-nold'>$250</p>
                </li>
                <li className='d-flex justify-content-between'>
                  <p className='fs-3 mx-2'>Saghetti Bolognese</p>
                  <p className='fs-3 mx-2 text-success fw-nold'>$120</p>
                </li>
              </ul>
            </div>
            <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
              <h3 className='fs-2 mb-5'>飲品</h3>
              <ul className='px-0'>
                <li className='d-flex justify-content-between'>
                  <p className='fs-3 mx-2'>咖啡</p>
                  <p className='fs-3 mx-2 text-success fw-nold'>$180</p>
                </li>
                <li className='d-flex justify-content-between'>
                  <p className='fs-3 mx-2'>果汁</p>
                  <p className='fs-3 mx-2 text-success fw-nold'>$120</p>
                </li>
                <li className='d-flex justify-content-between'>
                  <p className='fs-3 mx-2'>啤酒</p>
                  <p className='fs-3 mx-2 text-success fw-nold'>$100</p>
                </li>
              </ul>            
            </div>
          </div>
          <MenuBtn/>
        </div>
      </div> 
      <ImageGallery/>  

      <div className='bg-dark text-light py-5 shadow'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 d-flex flex-column align-itmes-center 
            justify-content-center mb-5 mb-lg-0'>
              <ContactInfo/>
            </div>
            <div className='col-lg-6 d-flex justify-content-center'>
              <img src={Gallery1} className='img-fluid w-100' alt=""/>

            </div>
          </div>

        </div>
      </div>   
    </div>
  )
}

export default Home