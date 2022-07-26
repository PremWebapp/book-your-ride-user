
import styles from './vehicle.module.css';
import { AiOutlineLine } from 'react-icons/ai';    
function Vehicle() {
  return (
    <>
      <div>
 <div className="text-center my-5">
   <h4>Choose Your <span className={styles.textColor}>Vehicle</span></h4>
 
   <div className="d-flex justify-content-center">
  <hr  className={styles.new2}/> 
  
 
   </div>
   <div className="d-flex justify-content-center">
  <hr  className={styles.new3}/>
  
 
   </div>
</div>
   <div className="container">
<div  className="row row-cols-1 row-cols-md-3 g-4">

  <div  className="col">
    <div className={styles.card }>
      <img src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mike-b-170811.jpg&fm=jpg"  className="card-img-top" alt="..."  height="" style={{height:'35vh'}}/>
      <div  className="card-footer text-center">
        <small  className="text-center fs-4">Last </small>
      </div>
    </div>
    
  </div>
  <div  className="col">
    <div className={styles.card }>
      <img src="https://media.istockphoto.com/photos/red-generic-sedan-car-isolated-on-white-background-3d-illustration-picture-id1189903200?k=20&m=1189903200&s=612x612&w=0&h=L2bus_XVwK5_yXI08X6RaprdFKF1U9YjpN_pVYPgS0o="  className="card-img-top" alt="..." height="" style={{height:'35vh'}}/>
      <div  className="card-footer text-center">
        <small  className="text-center fs-4">Last </small>
      </div>
    </div>
  </div>
  <div  className="col">
    <div className={styles.card }>
      <img src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mike-b-170811.jpg&fm=jpg"  className="card-img-top" alt="..." height="" style={{height:'35vh'}}/>
      <div  className="card-footer text-center">
        <small  className="text-center fs-4">Last </small>
      </div>
    </div>
  </div>
  <div  className="col">
    <div className={styles.card }>
      <img src="https://media.istockphoto.com/photos/red-generic-sedan-car-isolated-on-white-background-3d-illustration-picture-id1189903200?k=20&m=1189903200&s=612x612&w=0&h=L2bus_XVwK5_yXI08X6RaprdFKF1U9YjpN_pVYPgS0o="  className="card-img-top" alt="..." height="" style={{height:'35vh'}}/>
      <div  className="card-footer text-center">
        <small  className="text-center fs-4">Last </small>
      </div>
    </div>
  </div>
  <div  className="col">
    <div className={styles.card }>
      <img src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mike-b-170811.jpg&fm=jpg"  className="card-img-top" alt="..." height="" style={{height:'35vh'}}/>
      <div  className="card-footer text-center">
        <small  className="text-center fs-4">Last </small>
      </div>
    </div>
  </div>
  <div  className="col">
    <div className={styles.card }>
      <img src="https://media.istockphoto.com/photos/red-generic-sedan-car-isolated-on-white-background-3d-illustration-picture-id1189903200?k=20&m=1189903200&s=612x612&w=0&h=L2bus_XVwK5_yXI08X6RaprdFKF1U9YjpN_pVYPgS0o="  className="card-img-top" style={{height:'35vh'}} alt="..."/>
      <div  className="card-footer text-center">
        <small  className="text-center fs-4">Last </small>
      </div>
    </div>
  </div>
</div>
</div>

   </div>
        </>
   
  )
}

export default Vehicle;