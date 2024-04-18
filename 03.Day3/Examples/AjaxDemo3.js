import axios from 'axios';
import { useState } from 'react';

function AjaxDemo3() {

    const [deptsArray, setDeptsArray] = useState([]);

    function getData() {

        let url = "http://localhost:3002/Depts";
        
        axios.get(url).then((resData) => {           
             setDeptsArray(resData.data);
        });
    }


    var resultArray = deptsArray.map((item, index) =>
    <tr key={index}>
        <td> {item.Deptno}  </td>
        <td> {item.Dname}  </td>
        <td> {item.Loc}  </td>
    </tr>);


    return (
        <>
            <h3>AJAX Calls in React using Axios Package</h3>
            <hr />

            <input type="button" value="Get Data" onClick={getData} />
            <hr />

            <table border="2" width="700">
                <thead>
                    <tr>
                        <th>Dept Number</th>
                        <th>Dept Name</th>
                        <th>Dept Location</th>
                    </tr>
                </thead>
                <tbody>
                    {resultArray}
                </tbody>
            </table>

        </>
    );
}


export default AjaxDemo3;
