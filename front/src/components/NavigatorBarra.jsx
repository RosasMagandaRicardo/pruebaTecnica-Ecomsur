import MiniCart from "./MiniCart";

const NavigatorBarra = ({ carrito }) => {

  const myFunction = () => {
  var x = document.getElementsByClassName("mini-cart")[0];
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  }

  return (
    <div>
      <div className="act-des">
        
      </div>
      <nav className="navbar">
      
        <div className="logo">
          <h3>
            <a href="/">Logo</a>
          </h3>
        </div>
        <button className="btn-mini-cart" onClick={myFunction}>MINI CART ({carrito.length})</button>
        
      </nav>
      <div className="mini-cart" style={{display: "none"}}>
          {carrito.map((item, index) => (
            <MiniCart key={index} data={item} />
          ))}
        </div>
    </div>
  );
};

export default NavigatorBarra;
