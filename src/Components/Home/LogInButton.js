import React from "react";
import Card from "./Card";


import doctorlogin from "./../image/col1.jpg";
import patientlogin from "./../image/col2.jpg";

const LoginButton = () => {
  return (
    <div className="d-flex flex-md-row flex-column justify-content-around align-items-center my-4">
      <Card Image={doctorlogin} link={"/doctorlogin"} />
      <Card
        LoginButton="Patient"
        Image={patientlogin}
        link={"/patient"}
        login="Patient"
      />
    </div>
  );
};

export default LoginButton;