import React from "react";
import AddBanner from "../BannerSection/AddBanner";
import Deals from "../Deals/Deals";
import Footer from "../Footer/Footer";
import Heartch from "../../View/heartech";
import Working from "../Working/Working";
import Topcities from "../Topcities/Topcities";

const LandingPage = () => {
  return (
    <div>
      <Heartch />
      <Deals />
      <AddBanner />
      <Working />
      <Topcities />
      <Footer />
    </div>
  );
};

export default LandingPage;
