
function  Greeting( props )
{
    return (
        <>              
                <p style={ {color:"blue", margin : "5px", padding : "5px", border:"2px solid blue"} }>
                    Hi {props.uname}, Good afternoon...!
                </p>
        </>
    );
}


export default Greeting;