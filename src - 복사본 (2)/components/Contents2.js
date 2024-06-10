import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react'


function Contents2(props){


  let [m,setM] = useState(true);

  return ( 
      <section className="contents2">
            <h2>멋진 수영장</h2>
            <p className="slogan">당신의 공간을 에어비앤비하세요</p>

            <div className="products">
            {
                props.pool.map((item)=>

                  <Card idx={item.id} g={item.image}  t={item.title} c={item.content} s={item.star} p={item.price} />

                )                  
              }
            </div>


      </section>
  )
}



//속성
function Card(props){
  return(
    <div className="card">
     
      <Link to={"/detail/"+props.idx}><img src={props.g} /></Link>

      <p>{props.t}</p>
      <p>{props.c}</p>
      <span>{props.s}</span>
      <p className="price">&#8361;{props.p}</p>
    </div>
  )
}


export default Contents2;


