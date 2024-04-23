import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './FormsDemo2.css';



function FormsDemo2() {
 
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      return (

        <>

        <h3>Form validations using react-hook-form  library</h3>
        <hr/>


        <fieldset>
          <legend>User Form</legend>

        <form onSubmit={handleSubmit((data) => console.log(data))}>
          
          First Name  :  <input {...register('firstName', {required:true})} />
          {errors.firstName && <span className='error'>First name is required.</span>}
          <br/><br/>
          
          Last Name  : <input {...register('lastName', { required: true })} />
          {errors.lastName && <span className='error'>Last name is required.</span>}
          <br/><br/>      
          
          Age :  <input {...register('age', { pattern: /\d+/ })} />
          {errors.age && <span className='error'>Please enter number for age.</span>}
          
          <br/><br/>
          <input type="submit" />
        </form>
        </fieldset>
        </>
      );
}


export default FormsDemo2;