import React from "react";
import "./../../app/globals.css";
import "./../Header/Styles.css"
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <div className="nav">
      <Image src="./partners.svg" alt="Logo" width={90} height={20}/>
    </div>
  );
};

export default Header;
