import { Link, useParams } from 'react-router-dom';


function Detail(props){

    let {page} = useParams(); //detail/0 의 0자리를 가져온다
    //console.log(page)
    

    return(
        <section className="detail">
            
                <div className="photo">
                    <img src={props.woman[page].image} />
                </div>

                <div className="description">
                    <h4>{ props.woman[page].title} </h4>
                    <p>{ props.woman[page].content}</p>
                    <p>{ props.woman[page].price}원</p>
                    
                    <button>Order</button> 
                </div>

        </section> 
    )

}

export default Detail;