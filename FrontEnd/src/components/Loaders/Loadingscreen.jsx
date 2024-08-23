import React from "react";
import "../../../public/css/components/LoadingScreen.css";
import { useLoading } from "../../context/LoadingContext.jsx"; // Nuevo
import gif from "../../../public/img/loading.gif";

const Loadingscreen = () => {
  const { isLoading } = useLoading();

  return (
    <>
      {isLoading && (
        <div className="loading-screen">
          <img src={gif} alt="loading" />
        </div>
      )}
    </>
  );
};

export default Loadingscreen;
