import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and Route
import './App.css';
import FormComponent from './assets/components/formikcomponent';
import { ContentContainer } from './assets/components/contentcontainer';
import Navbar from './assets/components/navbar';



function App() {
  const [formValues, setFormValues] = useState(null);

  // Function to update form values state
  const handleFormSubmit = (values) => {
    setFormValues(values);
  };
  return (
  
    <div className='container' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <h6>Click the below Form link to add books</h6>
    <Navbar values={handleFormSubmit}/>
    {/* <FormComponent/> */}







    </div>
  );
}

export default App;
