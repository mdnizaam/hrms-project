import logo from './logo.svg';
import './App.css';
import Users from './Users';
import Login from './Login';
import Maindashboard from './Maindashboard';
import Admin from './Admin';
import Hr from './Hr';
import Editemp from './Editemp'
import Leavemanagement from './Leavemanagement'
import Dashboard from './Dashboard'
import Addemp from './Addemp'
import Fileupload from './Fileupload'
import Imageupload from './Imageupload'
import Signup from './Signup';
import Hollyday from './Hollyday'
// import Registration from './Registration'
import {Switch,Route} from "react-router-dom"


function App() {
  return (
    <div>
    <Switch>
    <Route exact path ="/" component={Users}/>
    <Route exact path ="/login" component={Login}/>
    <Route exact path ="/maindashboard/" component={Maindashboard}/>
    <Route exact path ="/admin" component={Admin}/>
    <Route exact path ="/hr" component={Hr}/>
    <Route exact path ="/editemployee" component={Editemp}/>
    <Route exact path ="/leavemanagement" component={Leavemanagement}/>
    <Route exact path ="/dashboard" component={Dashboard}/>
    <Route exact path ="/fileupload" component={Fileupload}/>
    <Route exact path ="/imageupload" component={Imageupload}/>
    <Route exact path ="/addemp" component={Addemp}/>
    <Route exact path ="/signup" component={Signup}/>
    <Route exact path ="/hollyday" component={Hollyday}/>
    {/* <Route exact path ="/registration" component={Registration}/> */}

    </Switch>
    
    </div>
  );
}

export default App;
