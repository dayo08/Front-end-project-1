import React, { useEffect } from "react";
import Business from "./Business";
import INTERESTED from "./INTERESTED";import Clients from "../Home/Clients";
function Sectors() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <Business />
      <INTERESTED/>
      <Clients/>
    </div>
  );
}

export default Sectors;
