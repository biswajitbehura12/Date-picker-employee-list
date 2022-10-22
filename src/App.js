import React from "react";
//import './App.css';
import { Datep } from "./Date";
import { EmployeeList } from "./EmployeeList";
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const App = () => {
  return (
    <div >
      <Datep/>
      <EmployeeList/>
    </div>
  );
};


export default App;
