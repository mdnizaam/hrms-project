import React, { useState } from 'react';
import './App.css';
import logo from '../src/images/Ellipse 3.png';
import save from '../src/images/save.png';
import logout from '../src/images/log-out.png';
import { NavLink, useHistory } from 'react-router-dom';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { useFormik } from 'formik';
import axios from 'axios';
import {reactLocalStorage} from 'reactjs-localstorage';


const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Required';
    } else if (values.name.length > 15) {
        errors.name = 'Must be 15 characters or less';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length > 20) {
        errors.password = 'Must be 20 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};



function Users() {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password:"",
        
            phone_number:"" ,
            joining_date: "",
            leaving_date: "",
            
            user_type: "",
            aadhar_number: "",
            pan_number: "",
            permanent_address: "",
            qualification: "",
            age: ""
        },
        validate,
         onSubmit: values => {
            (JSON.stringify(values, null, 2));
            console.log(values);

            // reactLocalStorage.setObject("");
           
            
                     
         
           
            

            

axios.post('http://api.localhost:8000/v1/register',formik.values)
  .then(response => {
    console.log("Status: ", response.status);
    console.log("Data: ", response.formik);
   
  }).catch(error => {
    console.error('Something went wrong!', error);
  });
        
        
        
        },
    });


    const [state, setState] = useState("2");

    const [show1, setShow1] = useState("block");

    const [show2, setShow2] = useState("none");

    const [sidemenu1, setSidemenu1] = useState("block");
    const [sidemenu2, setSidemenu2] = useState("none");
    // const [logosmall, setLogosmall] = useState("logo");
    // const [logosmall1, setLogosmall1] = useState("")

    const [small1, setSmall1] = useState('77px');
    const [small2, SetSmall2] = useState("");

    const [marL, setMarL] = useState("")
    const [marR, setMarR] = useState("43px");


    


    const toggleOpen = () => {
        setState("1")
        setState12("11")
        setShow1("none")
        setShow2("block")
        setSidemenu1("none")
        setSidemenu2("block")
        // setLogosmall("logo1")
        // setLogosmall1("logo")
        setSmall1('40px')
        setMarL("30px");
        setMarR("")




    };

    const [state2, setState2] = useState("1");
    const [state12, setState12] = useState("10");


    const toggleOpen2 = () => {
        setState2("2");
        setState("2");
        setState12("10");
        setShow1("block")
        setShow2("none")
        setSidemenu2("block")
        setSidemenu1("block")
        // setLogosmall1('logo2')
        // setLogosmall("logo")
        SetSmall2("77px")
        setSmall1("77px")
        setMarR("43px")
        setMarL("30px");





    }


    return (


        <div>

            <div className="container-fluid">
                <div className="row">
                    <div className={`col-sm-${state} col-md-${state} p-0 m-0 col-lg-${state}`} style={{ backgroundColor: "#1D2A48" }}>
                        <div className="row">
                            <div className="col-lg-5 col-sm-12">

                            </div>

                            <div className="col-lg-6 d-flex-end">
                                <button type="button" className="navbar-toggle" onClick={toggleOpen} style={{ display: `${show1}` }} >
                                    <span className="float-end px-3 my-3" >
                                        <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 3V0H0V3H20ZM20 9V6H0V9H20ZM20 15V12H0V15H20Z" fill="white" />
                                        </svg>
                                    </span>
                                </button>

                                <button type="button" className={`navbar-toggle ${show2}`} onClick={toggleOpen2} style={{ display: `${show2}` }} >
                                    <span className="float-end px-3 my-3" style={{ marginRight: "12px" }}>
                                        <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 3V0H0V3H20ZM20 9V6H0V9H20ZM20 15V12H0V15H20Z" fill="white" />
                                        </svg>
                                    </span>
                                </button>

                            </div>
                        </div>

                        <div className="container-fluid ">
                            <div className="row ">
                                <div></div>

                                <div className="mt-5  ">

                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <img className="" src={logo} style={{ width: `${small1}`, marginLeft: `${marL}`, marginLeft: `${marR}` }} />
                                            </div>
                                        </div>




                                    </div>

                                </div>
                                {/* 
                        Company logo Starts from here */}

                                <div className="container">
                                    <div className="textmenu1" style={{ display: `${sidemenu1}` }}>
                                        <p className="text-white text-center mait my-2 ">MAITRETECH</p>
                                        <p className="text-center text-white">maitretechsolution@gmail.com</p>

                                    </div>
                                </div>

                                {/* side menu icon bar starts from here */}

                                <div className="col-lg-2 col-md-2 col-sm-2 " >
                                    <div className="d-flex justify-content-center my-5 float-start textmenu">
                                        <ul ><li><span>
                                         {/* <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15 5V3.33333H13.5V1.66667C13.5 0.75 12.825 0 12 0H1.5C0.675 0 0 0.75 0 1.66667V13.3333C0 14.25 0.675 15 1.5 15H12C12.825 15 13.5 14.25 13.5 13.3333V11.6667H15V10H13.5V8.33333H15V6.66667H13.5V5H15ZM12 13.3333H1.5V1.66667H12V13.3333ZM3 8.33333H6.75V11.6667H3V8.33333ZM7.5 3.33333H10.5V5.83333H7.5V3.33333ZM3 3.33333H6.75V7.5H3V3.33333ZM7.5 6.66667H10.5V11.6667H7.5V6.66667Z" fill="white" />
                                        </svg> */}
                                        </span></li><br></br>

                                            <li><span>
                                             {/* <svg width="20" height="20" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 1.88889V15.1111C0 15.6121 0.187301 16.0925 0.520699 16.4468C0.854097 16.801 1.30628 17 1.77778 17H14.2222C15.2 17 16 16.15 16 15.1111V1.88889C16 0.85 15.2 0 14.2222 0H1.77778C1.30628 0 0.854097 0.199007 0.520699 0.553243C0.187301 0.907478 0 1.38792 0 1.88889V1.88889ZM10.6667 5.66667C10.6667 7.23444 9.47556 8.5 8 8.5C6.52444 8.5 5.33333 7.23444 5.33333 5.66667C5.33333 4.09889 6.52444 2.83333 8 2.83333C9.47556 2.83333 10.6667 4.09889 10.6667 5.66667ZM2.66667 13.2222C2.66667 11.3333 6.22222 10.2944 8 10.2944C9.77778 10.2944 13.3333 11.3333 13.3333 13.2222V14.1667H2.66667V13.2222Z" fill="#BCC4C8" />
                                            </svg> */}

                                            </span></li><br></br>



                                            <li><span>

                                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
                                                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                    <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                                                </svg> */}
                                            </span></li>

                                            <br></br>

                                            <li>
                                                <span>

                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                                                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                        <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                                                        <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                                                    </svg> */}

                                                </span></li><br></br>

                                            <li><span>


                                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-hr" viewBox="0 0 16 16">
                                                    <path d="M12 3H4a1 1 0 0 0-1 1v2.5H2V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2.5h-1V4a1 1 0 0 0-1-1zM2 9.5h1V12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9.5h1V12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5zm-1.5-2a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H.5z" />
                                                </svg> */}

                                            </span></li><br></br>

                                        </ul>
                                    </div>

                                </div>

                                {/* side text menu bar starts from here */}
                                <div className="col-lg-10 col-md-10 col-sm-10" style={{ display: `${sidemenu1}` }}>

                                    <div className=" my-5  textmenu">
                                        <ul>
                                            {/* <NavLink to="/dashboard" activeStyle={{ color: "red" }}><li ><span >Dashboard</span></li></NavLink><br></br>
                                            <NavLink to="/login" activeStyle={{ color: "red" }}><li><span >Admin</span></li></NavLink><br></br>


                                            <NavLink to="/" activeStyle={{ color: "red" }}><li><span >Registration</span></li></NavLink> <br></br>
                                            <NavLink to="" activeStyle={{ color: "red" }}><li><span >Employee</span></li></NavLink> <br></br>
                                            <NavLink exact to="/hr" activeStyle={{ color: "red" }}><li><span >HR</span></li></NavLink> */}
                                        </ul>
                                    </div>
                                </div>




                            </div>

                        </div>

                    </div>


                    {/* main billing dashboard starts from here */}

                    <div className={`col-lg-${state12} col-md-${state12} col-sm-${state12}`} style={{ backgroundColor: "#E5E7EB" }}>


                        <div className=" float-end mx-5">
                            <ul className="menu-bar my-5 mx-5">
                                <NavLink to="/dashboard"> <li>
                                    HOME

                                </li>
                                </NavLink>
                                {/* <li>HOME</li> */}

                                <li>
                                    SUPPORT
                                </li>
                                <li>
                                    ACCOUNT
                                </li>


                                <botton className="logout p-1" >

                                    <NavLink to="/login"><img src={logout} style={{ marginTop: "-4px" }} />LOG-IN</NavLink>


                                </botton>

                            </ul>
                        </div>
                        <div ><h1 className="bill my-5 mx-4">User Registration</h1></div>
                        {/* <h1 className="bill">Billing</h1> */}
                        <div className="row">

                            <div className="col-6">






                            </div>

                        </div>
                        <div className="row  justify-content-center my-5">
                            <div className="col-6 mx-5 ">
                                {/* <form>
                                    <div className="mb-3 infont">
                                        <label for="exampleFormControlInput1" className="form-label">First Name</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your First Name" />
       



                                    </div>
                                    <div className="mb-3 infont ">
                                        <label for="exampleFormControlInput1" className="form-label">Last Name</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Last Name" />
                                    </div>

                                    <div className="mb-3 infont ">
                                        <label for="exampleFormControlInput1" className="form-label">E-Mail Address</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your E-Mail Address" />
                                    </div>

                                    <div className="mb-3 infont ">
                                        <label for="exampleFormControlInput1" className="form-label">Age</label>
                                        <input type="num" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Age" />
                                    </div>

                                    <div className="mb-3 infont ">
                                        <label for="exampleFormControlInput1" className="form-label">Gender</label>
                                     <div>
                                     <label class="radio-inline">
                                            <input type="radio" name="optradio" checked/>Male</label>
    
                                            <label class="radio-inline">
                                                <input type="radio" name="optradio"/>Female </label>
                                     </div>

                                </div>
                                <div className="mb-3 infont ">
                                        <label for="exampleFormControlInput1" className="form-label">Mobile Number</label>
                                        <input type="num" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Mobile Number" />
                                    </div>


                                    <div className="mb-3 infont ">
                                        <label for="exampleFormControlInput1" className="form-label">Qualification</label>
                                        <input type="num" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Qualification" />
                                    </div>


                                    <div class="form-group form-check">
                                        <label class="form-check-label">
                                            <input class="form-check-input" type="checkbox" /> Remember me
                                        </label>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </form> */}
                                {/* <div className="container"> */}

                                <form onSubmit={formik.handleSubmit} className="infont">

                                <div className="mb-3 infont ">
                                        <label htmlFor="name" className="form-label"> Name:</label>
                                        <input type="text" className="form-control" id="name" name="name" placeholder="Enter Your Name" onChange={formik.handleChange}
                                        value={formik.values.name}
                                        />
                                        {formik.errors.name ? <div>{formik.errors.name}</div> : null}
                                    </div>

                                {/* <div className="mb-3 infont ">
                                        <label htmlFor="lastName" className="form-label">Last Name:</label>
                                        <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Enter Your lastName" onChange={formik.handleChange}
                                        value={formik.values.lastName}
                                        />
                                        {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
                                    </div> */}

                                    <div className="mb-3 infont ">
                                        <label htmlFor="email" className="form-label">Email Address:</label>
                                        <input type="text" className="form-control" id="email" name="email" placeholder="Enter Your Email" onChange={formik.handleChange}
                                        value={formik.values.email}
                                        />
                                        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                                    </div>

                                    <div className="mb-3 infont ">
                                        <label htmlFor="password" className="form-label">Password:</label>
                                        <input type="password" className="form-control" id="password" name="password" placeholder="Enter Your Password" onChange={formik.handleChange}
                                        value={formik.values.password}
                                        />
                                        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                                    </div>


                                    <div className="mb-3 infont ">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Mobile Number:</label>
                                        <input type="text" className="form-control" id="phone_number" name="phone_number" placeholder="Enter Your Pan Number" onChange={formik.handleChange}
                                        value={formik.values.mobile}
                                        />
                                        {formik.errors.mobile ? <div>{formik.errors.mobile}</div> : null}
                                    </div>

                                    <div className="mb-3 infont ">
                                        <label htmlFor="joining Date" className="form-label">Joining Date</label>
                                        <input type="text" className="form-control" id="joining_date" name="joining_date" placeholder="Enter Your Pan Number" onChange={formik.handleChange}
                                        value={formik.values.joining_date}
                                        />
                                        {formik.errors.joining_date ? <div>{formik.errors.joining_date}</div> : null}
                                    </div>


                                    <div className="mb-3 infont ">
                                        <label htmlFor="joining Date" className="form-label">Leaving Date</label>
                                        <input type="text" className="form-control" id="leaving_date" name="leaving_date" placeholder="Enter Your Pan Number" onChange={formik.handleChange}
                                        value={formik.values.leaving_date}
                                        />
                                        {formik.errors.leaving_date ? <div>{formik.errors.leaving_date}</div> : null}
                                    </div>

                                    <div className="mb-3 infont ">
                                        <label htmlFor="joining Date" className="form-label">User Type</label>
                                        <input type="text" className="form-control" id="user_type" name="user_type" placeholder="Enter Your Pan Number" onChange={formik.handleChange}
                                        value={formik.values.user_type}
                                        />
                                        {formik.errors.user_type ? <div>{formik.errors.user_type}</div> : null}
                                    </div>


                                    
                                    <div className="mb-3 infont ">
                                        <label htmlFor="adhaar" className="form-label">Adhaar Number:</label>
                                        <input type="text" className="form-control" id="aadhar_number" name="aadhar_number" placeholder="Enter Your Pan Number" onChange={formik.handleChange}
                                        value={formik.values.adhaar}
                                        />
                                        {formik.errors.adhaar ? <div>{formik.errors.adhaar}</div> : null}
                                    </div>

                                   

                                    <div className="mb-3 infont ">
                                        <label htmlFor="pannumber" className="form-label">Pan Number</label>
                                        <input type="text" className="form-control" id="pan_number" name="pan_number" placeholder="Enter Your Pan Number" onChange={formik.handleChange}
                                        value={formik.values.pannumber}
                                        />
                                        {formik.errors.pannumber ? <div>{formik.errors.pannumber}</div> : null}
                                    </div>
                                    <div className="mb-3 infont ">
                                        <label htmlFor="permanent_address" className="form-label">Permanent Address:</label>
                                        <input type="text" className="form-control" id="permanent_address" name="permanent_address" placeholder="Enter Your Pan Number" onChange={formik.handleChange}
                                        value={formik.values.permanent_address}
                                        />
                                        {formik.errors.permanent_address ? <div>{formik.errors.permanent_address}</div> : null}
                                    </div>

                                   

                                    <div className="mb-3 infont ">
                                        <label htmlFor="qualification" className="form-label">Qualification:</label>
                                        <input type="text" className="form-control" id="qualification" name="qualification" placeholder="Enter Your Pan Number" onChange={formik.handleChange}
                                        value={formik.values.qualification}
                                        />
                                        {formik.errors.qualification ? <div>{formik.errors.qualification}</div> : null}
                                    </div>
                                    <div className="mb-3 infont ">
                                        <label htmlForr="age" className="form-label">Age:</label>
                                        <input type="text" className="form-control" id="age" name="age" placeholder="Enter Your Pan Number" onChange={formik.handleChange}
                                        value={formik.values.age}
                                        />
                                        {formik.errors.age ? <div>{formik.errors.age}</div> : null}
                                    </div>


                                {/* <div clasName=" form-group">
                                <label htmlFor="firstName" clasName="">First Name</label>
                                    <input id="firstName"
                                        name="firstName"
                                        type="text"
                                        placeholder="Enter your First Name"
                                        onChange={formik.handleChange}
                                        value={formik.values.firstName} />
                                    {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
                                </div> */}
                                 
                                    {/* <div clasName="form-group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        placeholder="Enter your Last Name"
                                        onChange={formik.handleChange}
                                        value={formik.values.lastName}
                                    />
                                    {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
                                        
                                    </div> */}

                                  

                                    {/* <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Enter your Email"
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                    />
                                    {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                                    </div> */}

                                   

                                    {/* <div className="form-group">
                                    <label htmlFor="age">Age</label>
                                    <input
                                        id="age"
                                        name="age"
                                        type="text"
                                        placeholder="Enter your Age"
                                        onChange={formik.handleChange}
                                        value={formik.values.age}
                                    />
                                    {formik.errors.age ? <div>{formik.errors.age}</div> : null}
                                    </div> */}

                                    {/* <div className="form-group">
                                    <label htmlFor="mobile">Mobile Number</label>
                                    <input
                                        id="mobile"
                                        name="mobile"
                                        type="text"
                                        placeholder="Enter your Mobile Number"
                                        onChange={formik.handleChange}
                                        value={formik.values.mobile}
                                    />
                                    {formik.errors.mobile ? <div>{formik.errors.mobile}</div> : null}
                                    </div> */}

                                    {/* <div className="form-group">
                                    <label htmlFor="qualification">Qualification</label>
                                    <input
                                        id="qualification"
                                        name="qualification"
                                        type="text"
                                        placeholder="Enter your Qualification"
                                        onChange={formik.handleChange}
                                        value={formik.values.qualification}
                                    />
                                    {formik.errors.qualification ? <div>{formik.errors.qualification}</div> : null}
                                    </div> */}

                                    {/* <div className="form-group">
                                    <label htmlFor="adhaar">Adhaar Number</label>
                                    <input
                                        id="adhaar"
                                        name="adhaar"
                                        type="text"
                                        placeholder="Enter your Adhaar"
                                        onChange={formik.handleChange}
                                        value={formik.values.adhaar}
                                    />
                                    {formik.errors.adhaar ? <div>{formik.errors.adhaar}</div> : null}
                                    </div> */}

                                    {/* <div className="form-group">
                                    <label htmlFor="Pannumber">Pan Number</label>
                                    <input
                                        id="Pannumber"
                                        name="Pannumber"
                                        type="text"
                                        placeholder="Enter your Pannumber"
                                        onChange={formik.handleChange}
                                        value={formik.values.Pannumber}
                                    />
                                    {formik.errors.Pannumber ? <div>{formik.errors.Pannumber}</div> : null}
                                    </div> */}

                                  

                                    <button type="submit" className="btn btn-primary">SignUp</button>

                                 

                                </form>
                                {/* </div> */}


           

                                



                            </div>

                        </div>
                        <div className="container-fluid ">
                            <div className="row">
                                <div className="col-lg-2">

                                </div>



                                {/* New footer */}

                                <div clasName="container">
                                    <div clasName="row ">


                                        <div className="col-sm-3 col-lg-3 f-menu ">
                                            <h3 >Company </h3>


                                            <p> About Us</p>

                                            <p>Contact Us</p>




                                        </div>
                                        <div className="col-sm-3  col-md-3 col-lg-3 f-menu">
                                            <h3 >Product</h3>


                                            <p> Features</p>

                                            <p>Pricing</p>



                                        </div>
                                        <div className="col-sm-3 col-lg-3 f-menu">
                                            <h3 >Services</h3>

                                            <p> Support</p>




                                        </div>
                                        <div className="col-sm-3 col-lg-3 f-menu">
                                            <h3 >Company Name</h3>

                                            <p> Privacy Policy</p>

                                            <p>Privacy Policy</p>

                                            <p>Terms And Conditions</p>

                                        </div>
                                    </div>
                                </div>


                            </div>











                        </div>

                    </div>

                </div>

            </div>



        </div>
    )
}

export default Users;

