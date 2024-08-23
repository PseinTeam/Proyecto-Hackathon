import React from "react";
import { Navbar } from "../components/header/Navbar";
import Footer from "../components/Footer/Footer";
import { EmergencyModal } from "../components/EmergencyModal/EmergencyModal";

export const Awareness = () => {
  return (
    <div>
      <Navbar />
      Awareness
      <Footer />
      <EmergencyModal />
    </div>
  );
};
