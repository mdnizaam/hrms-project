// import React, { useState } from 'react';
// import axios from "axios";
// // import 'bootstrap/dist/css/bootstrap.min.css';
 
// function Registration() {
 
//   const [name, setName] = useState('');
//   const [job, setJob] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [isError, setIsError] = useState(false);
//   const [data, setData] = useState(null);
 
//   const handleSubmit = () => {
//     setLoading(true);
//     setIsError(false);

//     const data = {
//          name:name,
//         email: email,
//         password:password,
    
//         phone_number:phone_number ,
//         joining_date: joining_date,
//         leaving_date: leaving_date,
        
//         user_type: user_type,
//         aadhar_number: aadhar_number,
//         pan_number: pan_number,
//         permanent_address:permanent_address,
//         qualification: qualification,
//         age: age  };
    
//     axios.post('http://api.localhost:8000/v1/register', data).then(res => {
     
      
//     }).catch(err => {
//       setLoading(false);
//       setIsError(true);
//     });
//   }
 
//   return (
//     <div className="container p-3">
//       <h5 className="d-inline-block mb-3">POST request using axios with React Hooks - <a href="https://www.cluemediator.com" target="_blank" rel="noopener noreferrer">Clue Mediator</a></h5>
//       <div style={{ maxWidth: 350 }}>
//         <div classNames="form-group">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             placeholder="Enter name"
//             value={name}
//             onChange={e => setName(e.target.value)} />
//         </div>
//         <div classNames="form-group">
//           <label htmlFor="job" className="mt-2">Job</label>
//           <input
//             type="text"
//             className="form-control"
//             id="job"
//             placeholder="Enter job"
//             value={job}
//             onChange={e => setJob(e.target.value)} />
//         </div>
//         {isError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}
//         <button
//           type="submit"
//           className="btn btn-primary mt-3"
//           onClick={handleSubmit}
//           disabled={loading}
//         >{loading ? 'Loading...' : 'Submit'}</button>
//         {data && <div className="mt-3">
//           <strong>Output:</strong><br />
//           <pre>{JSON.stringify(data, null, 2)}</pre>
//         </div>
//         }
//       </div>
//     </div>
//   );
// }
 
// export default Registration;
