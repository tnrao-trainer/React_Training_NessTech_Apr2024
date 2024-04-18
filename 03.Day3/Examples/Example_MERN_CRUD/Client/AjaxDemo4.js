import { useState } from 'react';
import { deptService } from '../services/deptService';


function AjaxDemo4() {

    const [Deptno, setDeptno] = useState("");
    const [Dname, setDname] = useState("");
    const [Loc, setLoc] = useState("");
    const [deptsArray, setDeptsArray] = useState([]);

    function getData() {
        deptService.getAllDepts().then((resData) => {
            setDeptsArray(resData.data);
        });
    }

    function addDept() {
        let deptObj = {};
        deptObj.Deptno = Deptno;
        deptObj.Dname = Dname;
        deptObj.Loc = Loc;

        deptService.createDept(deptObj).then((resData) => {
            alert("New Dept is added to database");
            clearFields();
            getData();
        })
            .catch(() => {
                // error handle statement
            });
    }

    function selectDept(dno)
    {
        deptService.getDeptById(dno).then(resData => 
            {
              let deptObj = resData.data;        
              setDeptno(deptObj.Deptno);
              setDname(deptObj.Dname);
              setLoc(deptObj.Loc);
            })
            .catch((error) => {
                alert(error);
                console.log(error);
            });
    }

    function removeDept(dno)
    {
        let confirmDelete  = window.confirm("Are you sure you want to delete?");

        if(confirmDelete == true)
        {
          deptService.deleteDept(dno).then( resData => 
            {
               alert("Selected Dept details are deleted from server...!");
               getData();
            });
        }
    }


    function updateDept()
    {
      let deptObj = {};
      deptObj.Deptno = Deptno;
      deptObj.Dname = Dname;
      deptObj.Loc = Loc; 

      deptService.updateDept(deptObj).then( resData => {       
        alert("Selected Dept are updated to database");
        getData();
        clearFields();
      });  
    }


    function clearFields()
    {
        setDeptno("")   ;
        setDname("")  ;
        setLoc("")   ;
    }

    var resultArray = deptsArray.map((item, index) =>
        <tr key={index}>
            <td> {item.Deptno}  </td>
            <td> {item.Dname}  </td>
            <td> {item.Loc}  </td>
            <td align='center'>
               <a href="javascript:void(0);" onClick={ () => selectDept(item.Deptno)}> Select </a>  |   
               <a href="javascript:void(0);" onClick={ () => removeDept(item.Deptno)}> Delete </a>     
          </td>
        </tr>);


    return (
        <>
            <h3>AJAX Calls in React using Axios Package with React Service</h3>
            <hr />

            <input type="text" value={Deptno} placeholder="Deptno"
                onChange={(e) => setDeptno(e.target.value)} />

            <input type="text" value={Dname} placeholder="Dname"
                onChange={(e) => setDname(e.target.value)} />

            <input type="text" value={Loc} placeholder="Loc"
                onChange={(e) => setLoc(e.target.value)} />
            <br /><br />

            <input type="button" onClick={getData} value="Get Depts" />
            <input type="button" onClick={addDept} value="Add Dept" />
            <input type="button" onClick={updateDept} value="Update Dept" />
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


export default AjaxDemo4;
