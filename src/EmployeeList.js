import React, { useState, useEffect } from "react";
import Checkbox from "./Checkbox";
import { Employeename } from "./Employeename";
import './EmployeeList.css';
 export const EmployeeList = () => {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(Employeename);
  }, [list]);

  const handleSelectAll = e => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map(li => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = e => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter(item => item !== id));
    }
  };

  console.log(isCheck);

  const catalog = list.map(({ id, name }) => {
    return (
        
      <div>
                 {name}

        <Checkbox
          key={id}
          type="checkbox"
          name={name}
          id={id}
          handleClick={handleClick}
          isChecked={isCheck.includes(id)}
        />
        
      </div>
    );
  });
  const [searchinput,setSearchinput]=useState("");
  const handle=(e)=>{
        e.preventDefault();
        setSearchinput(e.target.value);
  }
 


  return (
    
    <div className="checkboxs">
              <input type="text" placeholder="Search ....." onChange={handle} value={searchinput}/>
<br/>
<div>
    
{Employeename.filter((item)=>{
        if(searchinput===""){
          return;
        }else if(item.name.split(" ").join("").toLowerCase().includes(searchinput.toLowerCase())){
          return item;
        }
      }).map((item,id,name)=> <div>{item.name}{        <Checkbox
        key={id}
        type="checkbox"
        name={name}
        id={id}
        handleClick={handleClick}
        isChecked={isCheck.includes(id)}
      />
      }</div>)}

</div>
<hr/>
<div >
              All particiationers

      <Checkbox
        type="checkbox"
        name="selectAll"
        id="selectAll"
        handleClick={handleSelectAll}
        isChecked={isCheckAll}
      />
      {catalog}
    </div>
    </div>
  );
};


