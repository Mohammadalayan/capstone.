import img from "./cs.png";
import "./tes.css"
import star from "./star.png";
import cs2 from "./cs2.jpeg";
import cs3 from "./cs3.webp";


const Test=()=>{
        return(
            <article className="con">
    <div className="conta">
               <h2 className="h2">Testimonials</h2>

    <article  className="containner">
        <article className="stars">        

    <img src={star} className="star"/><img src={star} className="star"/><img src={star} className="star"/><img src={star} className="star"/>

</article>
    <br></br>
    <img src={img} className="photo"/>
    <article className="parg">
    <p className="par"> Fantastic food and excellent service at Little Lemon</p>
    </article>
    <article className="names">
        <p className="pargre">
        James
        </p>
    </article>
    </article>
    
    </div>
    </article>
        )
    }
    const Ttest=()=>{
        return(
            <article className="con">

    <article  className="containner">
        <article className="stars">        

        <img src={star} className="star"/><img src={star} className="star"/><img src={star} className="star"/><img src={star} className="star"/><img src={star} className="star"/>

</article>
    <br></br>
    <img src={cs2} className="photo"/>
    <article className="parg">
    <p className="par"> Little Lemon is the best restaurant in Chicago </p>
    </article>
    <article className="names">
    <p className="pargre">
    Emma
        </p>
    </article>
    </article>
    
    </article>
        )
    }
    const Tttest=()=>{
        return(
            <article className="con">

    <article  className="containner">
        <article className="stars">        

        <img src={star} className="star"/><img src={star} className="star"/><img src={star} className="star"/><img src={star} className="star"/><img src={star} className="star"/>

</article>
    <br></br>
    <img src={cs3} className="photo"/>
    <article className="parg">
    <p className="par"> Great atmosphere, delicious dishes</p>
    </article>
    <article className="names">
    <p className="pargr">
    Ava
        </p>
    </article>
    </article>
    
    </article>
        )
    }
function Testimonials(){
    return(
        <>
        
        <Test/>
        <article className="fun">
        <Ttest/></article>
        <article className="func">
        <Tttest/></article>

</>
    )

}
export default Testimonials;