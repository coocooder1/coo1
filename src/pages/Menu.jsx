import React from 'react'
import './Menu.css';
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import Breakfast from '../utils/img/breakfast.jpg'
import Lunch from '../utils/img/lunch.jpg'
import Dinner from '../utils/img/dinner.jpg'
const breakfast = [
  {
    id:1,
    name:'可頌',
    price:'$120'
  },
   {
    id:2,
    name:'糖霜可頌',
    price:'$140'
  },
   {
    id:3,
    name:'奶油可頌',
    price:'$140'
  }
];
const lunch = [
  {
    id:1,
    name:'肉絲炒大腸',
    price:'$120'
  },
   {
    id:2,
    name:'油豆腐',
    price:'$120'
  },
   {
    id:3,
    name:'炸魷魚',
    price:'$120'
  }
];

const dinner = [
  {
    id:1,
    name:'月亮蝦餅',
    price:'$60'
  },
   {
    id:2,
    name:'牛奶蘑菇湯',
    price:'$120'
  },
   {
    id:3,
    name:'炸蝦捲',
    price:'$80'
  }
]

function Menu() {
  return (
    <div className='menu-page'>
      <header className='mt-5'>
        <div className='container h-100 d-flex align-items-center justify-content-center'>
          <h1 className='text-light'>Menu</h1>
        </div>
      </header>

      <div className='breakfast my-5'>
        <div className='container'>
          <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Breakfast</h2>
          <div className='row flex-column-reverse flex-lg-row'>
          <div className='col-lg-6 d-flex justify-content-center'>
            <img src={Breakfast} className='img-fluid w-75 mt-4 mt-lg-0' alt=""/>

          </div>
          <div className='col-lg-6 d-flex flex-column justify-content-around'>
            {breakfast.map((breakfast) => (
              <div key={breakfast.id}>
                <Card className='border-0'>
                  <CardBody>
                    <CardTitle className='text-center fs-3'>
                      {breakfast.name}

                    </CardTitle>
                  
                    <CardText className='text-center fs-3 fw-bold text-success' >
                      {breakfast.price}
                    </CardText>

                  </CardBody>
                </Card>

              </div>
            ))}
             
          </div>
        </div>
        </div>

      </div>

      <div className='lunch bg-dark py-5'>
        <div className='container'>
          <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Lunch</h2>
          <div className='row flex-column-reverse flex-lg-row'>
          <div className='col-lg-6 d-flex justify-content-center'>
            <img src={Lunch} className='img-fluid w-75 mt-4 mt-lg-0' alt=""/>

          </div>
          <div className='col-lg-6 d-flex flex-column justify-content-around'>
            {lunch.map((lunch) => (
              <div key={lunch.id}>
                <Card className='border-0 bg-dark text-light'>
                  <CardBody>
                    <CardTitle className='text-center fs-3'>
                      {lunch.name}

                    </CardTitle>
                   
                    <CardText className='text-center fs-3 fw-bold text-success' >
                      {lunch.price}
                    </CardText>

                  </CardBody>
                </Card>

              </div>
            ))}
             
          </div>
        </div>
        </div>

      </div>

            <div className='dinner my-5'>
        <div className='container'>
          <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Dinner</h2>
          <div className='row flex-column-reverse flex-lg-row'>
          <div className='col-lg-6 d-flex justify-content-center'>
            <img src={Dinner} className='img-fluid w-75 mt-4 mt-lg-0' alt=""/>

          </div>
          <div className='col-lg-6 d-flex flex-column justify-content-around'>
            {dinner.map((dinner) => (
              <div key={dinner.id}>
                <Card className='border-0'>
                  <CardBody>
                    <CardTitle className='text-center fs-3'>
                      {dinner.name}

                    </CardTitle>
    
                    <CardText className='text-center fs-3 fw-bold text-success' >
                      {dinner.price}
                    </CardText>

                  </CardBody>
                </Card>

              </div>
            ))}
             
          </div>
        </div>
        </div>

      </div>


      
      
    </div>
  )
}

export default Menu