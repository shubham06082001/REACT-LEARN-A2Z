import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const Cockpit = (props) => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // http request
    const timer = setTimeout(() => {
      alert("Saved data to cloud");
    }, 1000);
    return () => {
      clearTimeout(timer);
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []);

  let assignedClasses = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = classes.Red;
  }
  btnClass = classes.Red;

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
    // classes = ['red];
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
    // classes = ['red', 'bold'];
  }
  return (
    <div className={classes.Cockpit}>
      <h1>PERSON MANAGER</h1>
      <p className={assignedClasses.join(" ")}>this is really working!!</p>
      <button onClick={props.clicked} className={btnClass}>
        Toggle Persons{" "}
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
