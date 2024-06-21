"use client";
import React, { useEffect } from "react";
import { bouncy } from "ldrs";
import "./../Loader/Styles.css";

const Loader = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      bouncy.register();
    }
  }, []);

  return (
    <div className="container-loader">
      <l-bouncy size="45" speed="1.75" color="purple"></l-bouncy>
    </div>
  );
};

export default Loader;
