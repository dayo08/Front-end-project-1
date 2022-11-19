import React, { useEffect } from "react";
import JOURNEY from "./JOURNEY";
import SERVICE from "./SERVICE";
import Clients from "../Home/Clients";
function Aboutus() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <SERVICE />
      <JOURNEY />
      <Clients />
    </div>
  );
}

export default Aboutus;
