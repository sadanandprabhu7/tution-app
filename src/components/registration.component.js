import React from "react";
import Subjects from "./subjects.component";
import Times from "./times.component";
import Address from "./address.component";
function Registration() {
  const [gender, setGender] = React.useState("1"); // Initial value 'male'
  return <>{gender === "1" ? <Address /> : <Times />}</>;
}

export default Registration;
