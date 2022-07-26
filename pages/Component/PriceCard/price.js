import style from "./price.module.css";
import Image from 'next/image'

function Price() {
  return (
    <div>
    <div className="container">
     <div className={style.mtop}>
    <div className="row row-cols-1 row-cols-md-3 g-1">
      <div className="position-relative">
        <div
          className={`card shadow p-5 mb-5 pb-3 bg-white  ${style.rounded}`}
          style={{ width: "25rem" }}
        >
          <div className={`profile position-absolute  ${style.profile} `}>
          
                  <Image
        src="https://media.istockphoto.com/photos/red-generic-sedan-car-isolated-on-white-background-3d-illustration-picture-id1189903200?k=20&m=1189903200&s=612x612&w=0&h=L2bus_XVwK5_yXI08X6RaprdFKF1U9YjpN_pVYPgS0o="
        alt="Landscape picture"
        width="100px"
        height="100px"
      />
          </div>
          <div className="card-body text-center">
            <h5 className="card-title">Price Gaurantee</h5>
         <div  className={`d-flex justify-content-center ${style.linemargin}`}>   
          <hr className={style.new2}/></div>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </p>
         
          </div>
        </div>
      </div>
      <div className="position-relative">
        <div
          className={`card shadow p-5 pb-3 mb-5 bg-white  ${style.rounded}`}
          style={{ width: "25rem" }}
        >
          <div className={`profile position-absolute  ${style.profile} `}>
         
                <Image
        src="https://media.istockphoto.com/photos/red-generic-sedan-car-isolated-on-white-background-3d-illustration-picture-id1189903200?k=20&m=1189903200&s=612x612&w=0&h=L2bus_XVwK5_yXI08X6RaprdFKF1U9YjpN_pVYPgS0o="
        alt="Landscape picture"
        width="100px"
        height="100px"
      />
          </div>
          <div className="card-body text-center">
            <h5 className="card-title">Easy Booking</h5>
            <div  className={`d-flex justify-content-center ${style.linemargin}`}>   
          <hr className={style.new2}/></div>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </p>
            
          </div>
        </div>
      </div>
      <div className="position-relative">
        <div
          className={`card shadow p-5 pb-3 mb-5 bg-white  ${style.rounded}`}
          style={{ width: "25rem" }}
        >
          <div className={`profile position-absolute  ${style.profile} `}>
         
             <Image
        src="https://media.istockphoto.com/photos/red-generic-sedan-car-isolated-on-white-background-3d-illustration-picture-id1189903200?k=20&m=1189903200&s=612x612&w=0&h=L2bus_XVwK5_yXI08X6RaprdFKF1U9YjpN_pVYPgS0o="
        alt="Landscape picture"
        width="100px"
        height="100px"
      />
          </div>
          <div className="card-body text-center">
            <h5 className="card-title">24 /7 Coustomer Care</h5>

            <div className={`d-flex justify-content-center ${style.linemargin}`}>   
          <hr className={style.new2}/></div> 
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </p>
         
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
    </div>
  );
}

export default Price;
