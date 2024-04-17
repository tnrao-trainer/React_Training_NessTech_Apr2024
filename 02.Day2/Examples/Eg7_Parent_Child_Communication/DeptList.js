import { useState } from "react";
import DeptDetails from "./DeptDetails";
 
let dataArray = [
    {deptno : 10, dname : "Accounts",  loc :  "Hyd"} ,
    {deptno : 20, dname : "Sales",  loc :  "Pune"},
    {deptno : 30, dname : "Marketing",  loc :  "Hyd"},
    {deptno : 40, dname : "Operations",  loc :  "Chnnai"},
    {deptno : 50, dname : "Admin",  loc :  "Pune"},
    {deptno : 60, dname : "Finance",  loc :  "Hyd"},
    {deptno : 70, dname : "Testing",  loc :  "Mumbai"},
    {deptno : 80, dname : "Advertise",  loc :  "Goa"}
   ];


function DeptList()
{  
    const [deptsArray, setDeptsArray] = useState(dataArray); 


    function deptRemove_parent(dno)
    {
       // alert("Message from parent : deptRemove. Deptno : " + dno); 
        
        // logic to delete deptObj 
        
        let tempArray = [...deptsArray];  // cloning the deptsArray

        let index = tempArray.findIndex(item => item.deptno == dno);
        tempArray.splice(index, 1);

        setDeptsArray(tempArray);
    }


    let resultArray = deptsArray.map((item, index) =>     
        <DeptDetails 
                    deptObj={item}  
                    onDeptRemove={deptRemove_parent}  
                    key={index} />          
    );



   return(
    <>
        {resultArray}
    </>
   );     

};


export default DeptList;