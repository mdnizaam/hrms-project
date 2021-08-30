import { React, useState } from 'react';
import axios from 'axios';
import { reactLocalStorage } from 'reactjs-localstorage';


const Hollyday = () => {

    const [from_date, setFromtdate] = useState("");
    const [to_date, setTodate] = useState("");
    const [reason, setReason] = useState("");


    const handleSubmit1 = (e) => {
        e.preventDefault();
        const data = {
            from_date: from_date,
            to_date: to_date,
            reason: reason
        };


        axios.post('http://api.localhost:8000/v1/userleaves', data)
            .then(response => {
                console.log("Data: ", response.data);
                reactLocalStorage.setObject("data", response.data)
            }).catch(error => {
                console.error('Something went wrong!', error);
            });

    }



    return (
        <div>

            <form onSubmit={(e) => handleSubmit1(e)} >
                <label>Choose Date: From</label>

                <input type="date" value={from_date} name="from_date" id="from_date" onChange={(e) => setFromtdate(e.target.value)} /><br></br><br></br>

                <label>Choose Date: Till</label>

                <input type="date" value={to_date} name="to_date" id="to_date" onChange={(e) => setTodate(e.target.value)} /><br></br> <br></br>

                <label for="comment">Reason For Leave:</label>
                <input type="text" class="form-control" rows="5" id="reason" name="reason" value={reason} onChange={(e) => setReason(e.target.value)}/>

                <button type="submit" className="btn btn-primary">Submit</button>

            </form>
        </div>
    )
}

export default Hollyday;
