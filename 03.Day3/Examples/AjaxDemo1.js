import axios from 'axios';
import { useState } from 'react';

function AjaxDemo1() {

    const [customersArray, setCustomersArray] = useState([]);

    function getData() {

        let url = "https://www.w3schools.com/angular/customers.php";
        
        axios.get(url).then((resData) => {
             //   console.log(resData.data);
             //   console.log(resData.data.records);
             setCustomersArray(resData.data.records);
        });
    }


    let resultArray = customersArray.map((item, index) => 
        <tr key={index}>
            <td>{item.Name}</td>
            <td>{item.City}</td>
            <td>{item.Country}</td>
        </tr>
    );


    return (
        <>
            <h3>AJAX Calls in React using Axios Package</h3>
            <hr />

            <input type="button" value="Get Data" onClick={getData} />
            <hr />

            <table border="2" width="700">
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>City Name</th>
                        <th>Country Name</th>
                    </tr>
                </thead>
                <tbody>
                    {resultArray}
                </tbody>
            </table>

        </>
    );
}


export default AjaxDemo1;
