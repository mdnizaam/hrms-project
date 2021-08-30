import React, { useState, useEffect } from 'react';
import './App.css';
import logo from '../src/images/Ellipse 3.png';
import save from '../src/images/save.png';
import logout from '../src/images/log-out.png';
import { NavLink, useHistory } from 'react-router-dom';
import AddBoxIcon from '@material-ui/icons/AddBox';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import axios from "axios";
import { reactLocalStorage } from 'reactjs-localstorage';




function Admin() {



    const user = reactLocalStorage.getObject("data");

    console.log(user);


    let history = useHistory();
    const Logout = () => {

        reactLocalStorage.remove();
        history.push("/login");

    }



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

    //  api call from below here
    // const [employee, setEmployee] = useState([]);

    // useEffect(() => {
    //  async function getAllEmployee() {
    //   try {
    //    const employee = await axios.get("http://api.localhost:8000/v1/users/")
    //    // console.log(students.data);
    //    setEmployee(employee.data);
    //    console.log(employee.data);
    //   } catch (error) {
    //    console.log("Something is Wrong");
    //   }
    //  }
    //  getAllEmployee();
    // }, []);

    // const handleDelete = async id => {
    //     await axios.delete(`http://api.localhost:8000/v1/users/${id}`);
    //     var newemployee = employee.filter((item) => {
    //      // console.log(item);
    //      return item.id !== id;
    //     })
    //     setEmployee(newemployee);
    //    }


    async function makeGetRequest() {

        var config = {
            headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiMDk1MDIwYmIyYWJhNmZkMTNjM2I4Nzg4YTNkMDhiMmM1MDgxYjE2Y2MzOTNjMWNkZjZiM2JhODRiODEzYTEzNzZmODI1Y2IzZmRhMWQzNWEiLCJpYXQiOjE2MzAwNDIxNjAsIm5iZiI6MTYzMDA0MjE2MCwiZXhwIjoxNjMwMTI4NTYwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.r9VMxFxFdkLuDlKD_DWBovc7na6EYVNSyvkrpna-8G9bOhSwShxoRROPvXCPn7nAR-d3UnQCRLZZzp4FKzUqlh3Si1i65BzWLHWi5vlGoJ3aVDp9-PVHg2Q3wqAFzRRkqZXZ02kJQDszivLrZllMHdDVS_2ajyv5k21BxmQqyzc16ZJFlut062nLCTkWNGucFW88qg-1DMbBGu6SgXLwzYplbC1LPQQbZmuJlHIwTLLZI3rl7I_PTiDCSFgvvyG28QfgpTLBBtTl3cjaMirUeGGjpXTw436mvixkQwhGrS-TcNBKD9-O_AvjXecAHoxIYs-93PvTMHCxflAIAxRItZatQi3Ysm4oKDV-GIrN0W2rix8qUQdQE1ue4K9-QHQeoYOipneqPwvSfe75xMjl11685RzA31Vxe0YUzDu8qFIAY9IyHug0pSDoqcAMWM4VZkvrCH302XyXaiCgw6iXUzEZ8-HCIprUEaiuNOieTU_t6CMhWzfeK2ruPfv5bqTBXdS6q1wXQdiO9f0tsGBHjjXqdXCJxhVvqGH0xJXxdp19U3OTLalKOihznH4NHNaTHrC3d0hnRgk_7M7dDT2lBGdUflMPEhOsjDeek629XP8BdgPJ55TYqYSTAJEERIlhgAaGzSD1CefGqHGNXxtzZgbPDh_tqOzWyKA-bW5Al8s'
            },

        };

        var res = await axios.get('http://api.localhost:8000/v1/users/', config);
        reactLocalStorage.setObject("data", res.config);

        const user = reactLocalStorage.getObject("data");

        console.log(user)

        var Data = res.data;
        console.log(Data);
    }

    makeGetRequest();



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
                                        <ul ><li><span> <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15 5V3.33333H13.5V1.66667C13.5 0.75 12.825 0 12 0H1.5C0.675 0 0 0.75 0 1.66667V13.3333C0 14.25 0.675 15 1.5 15H12C12.825 15 13.5 14.25 13.5 13.3333V11.6667H15V10H13.5V8.33333H15V6.66667H13.5V5H15ZM12 13.3333H1.5V1.66667H12V13.3333ZM3 8.33333H6.75V11.6667H3V8.33333ZM7.5 3.33333H10.5V5.83333H7.5V3.33333ZM3 3.33333H6.75V7.5H3V3.33333ZM7.5 6.66667H10.5V11.6667H7.5V6.66667Z" fill="white" />
                                        </svg>
                                        </span></li><br></br>

                                            <li><span> <svg width="20" height="20" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 1.88889V15.1111C0 15.6121 0.187301 16.0925 0.520699 16.4468C0.854097 16.801 1.30628 17 1.77778 17H14.2222C15.2 17 16 16.15 16 15.1111V1.88889C16 0.85 15.2 0 14.2222 0H1.77778C1.30628 0 0.854097 0.199007 0.520699 0.553243C0.187301 0.907478 0 1.38792 0 1.88889V1.88889ZM10.6667 5.66667C10.6667 7.23444 9.47556 8.5 8 8.5C6.52444 8.5 5.33333 7.23444 5.33333 5.66667C5.33333 4.09889 6.52444 2.83333 8 2.83333C9.47556 2.83333 10.6667 4.09889 10.6667 5.66667ZM2.66667 13.2222C2.66667 11.3333 6.22222 10.2944 8 10.2944C9.77778 10.2944 13.3333 11.3333 13.3333 13.2222V14.1667H2.66667V13.2222Z" fill="#BCC4C8" />
                                            </svg>

                                            </span></li><br></br>



                                            <li><span>

                                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
</svg> */}

                                            </span></li>


                                            <br></br>

                                            <li>
                                                <span>
                                                    {/*                                                
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
  <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
</svg> */}


                                                </span></li><br></br>

                                            <li><span>


                                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-hr" viewBox="0 0 16 16">
  <path d="M12 3H4a1 1 0 0 0-1 1v2.5H2V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2.5h-1V4a1 1 0 0 0-1-1zM2 9.5h1V12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9.5h1V12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5zm-1.5-2a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H.5z"/>
</svg> */}

                                            </span></li><br></br>

                                        </ul>
                                    </div>

                                </div>


                                <div className="col-lg-10 col-md-10 col-sm-10" style={{ display: `${sidemenu1}` }}>

                                    <div className=" my-5  textmenu">
                                        <ul>
                                            <NavLink to="/dashboard" activeStyle={{ color: "red" }}><li ><span >Dashboard</span></li></NavLink><br></br>
                                            <NavLink to="/login" activeStyle={{ color: "red" }}><li><span >{user.name}</span></li></NavLink><br></br>


                                            {/* <NavLink to="/" activeStyle={{ color: "red" }}><li><span >Registration</span></li></NavLink> <br></br> */}
                                            {/* <NavLink to="" activeStyle={{ color: "red" }}><li><span >Employee</span></li></NavLink> <br></br>
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

                                <li onClick={Logout}>
                                    LOGOUT
                                </li>

                                <botton className="logout p-1" >

                                    <img src={logout} style={{ marginTop: "-4px" }} />{user.name}

                                </botton>

                            </ul>
                        </div>
                        <div ><h1 className="bill my-5 mx-4">Admin Dashboard</h1></div>

                        <div className="row">

                            <div className="col-lg-6">

                                <div className="container-fluid">
                                    <div className="row">
                                        <div className='col-lg-5 text-dark py-5 ms-5 ' style={{ background: "#BFDBFE" }}>
                                            <h3 className="my-4">Employee's</h3>

                                            {/* <NavLink to="/addemp"><h5 >ADD EMPLOYEE</h5></NavLink> */}

                                        </div>
                                        <div className='col-lg-5  bg-dark text-light py-5 ms-5 '>
                                            <h3 className="my-4">Leave Management</h3>
                                            <NavLink to="/leavemanagement"><h5 >Go To Page</h5></NavLink>
                                        </div>







                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="containr-fluid">

                                    <div className="row">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className='col-lg-10  py-5 '>
                                                    <div class="container shadow">

                                                        <table class="table table-light table-striped">
                                                            <thead>

                                                                <tr>
                                                                    <th>Full Name</th>
                                                                    <th>Email</th>
                                                                    <th>Address</th>
                                                                    <th>Joining Date</th>
                                                                    <th>Leave Date</th>
                                                                    <th>Status</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>

                                                                {/* 
                                                                { 
                                                                    employee.map((emp,i)=>{
                                                                        return (
                                                                            <tr>
                                                                    <td>{emp.name}</td>
                                                                    <td>{emp.email}</td>
                                                                    <td>{emp.address}</td>
                                                                    <td>{emp.joiningDate}</td>
                                                                    <td>{emp.LeaveDate}</td>
                                                                    <td>{emp.status}</td>
                                                                    <td><NavLink className="btn btn-primary me-2 " to={`/maindashboard/${emp.id}`}>
                                                                        View
                                                                    </NavLink>
                                                                        <NavLink
                                                                            className="btn btn-primary me-2" to="/editemployee">
                                                                            Edit
                                                                        </NavLink>
                                                                        <button
                                                                            className="btn btn-danger me-2"  onClick={() => handleDelete(emp.id)}>
                                                                            Delete
                                                                        </button>


                                                                    </td>
                                                                </tr>
                                                                           

                                                                        );
                                                                    })
                                                                } */}


                                                                <tr>
                                                                    <td>{user.name}</td>
                                                                    <td>{user.email}</td>
                                                                    <td>nizam</td>
                                                                    <td>nizam</td>
                                                                    <td>nizam</td>
                                                                    <td>nizam</td>
                                                                </tr>









                                                            </tbody>
                                                        </table>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>

                        </div>
                        <div className="row   my-5">
                            <div className="col-6 mx-5 ">

                            </div>

                        </div>
                        <div className="container-fluid ">
                            <div className="row">
                                <div className="col-lg-2">

                                </div>



                                {/* New footer */}

                                <div clasName="container">


                                    <div clasName="row ">
                                        <div className="my-5">

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



        </div>
    )
}

export default Admin;


