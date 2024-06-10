import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'

function Contents1(props){


  let [m,setM] = useState(true);

  return ( 
      <section className="contents1">
            <h2>열대 지역</h2>
            <p className="slogan">당신의 공간을 에어비앤비하세요</p>

            <div className="products">
            {
                props.sea.map((item)=>

                  <Card idx={item.id} g={item.image}  t={item.title} c={item.content} p={item.price} />

                )                  
              }
            </div>


      </section>
  )
}


function Card(props){
  return(
    <div className="card">
     
      <Link to={"/detail/"+props.idx}><img src={props.g} /></Link>

      <p>{props.t}</p>
      <p>{props.c}</p>
      <p className="price">&#8361;{props.p}</p>
    </div>
  )
}


export default Contents1;


