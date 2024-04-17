import './DeptDetails.css';

function DeptDetails(props) {

    function deptRemove_child()
    {

        if (  window.confirm("Do you want to delete?") == false )
        {
            return;
        }

       // alert("Message from child : dept remove. Deptno : " + props.deptObj.deptno);
        // invokes parent component method :  deptRemove_parent()
        props.onDeptRemove(props.deptObj.deptno);  
    }

    return (
        <div className="card">
            <h3 style={{ margin: "2px", color: "Red" }}> {props.deptObj.dname} </h3>
            <u> Deptno : {props.deptObj.deptno} </u>  <br />
            Location : <span style={{ color: "Green" }}> {props.deptObj.loc} </span>   <br />
            <a href="javascript:void(0);"  onClick={deptRemove_child}>Remove</a>
        </div>
    );
}

export default DeptDetails;
