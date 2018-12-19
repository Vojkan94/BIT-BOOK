import React from "react";

import WelcomeAbout from "./WelcomeAbout";
import WelcomeList from "./WelcomeList";

const WelcomePage = () => {
  return (
    <>
      <div className="row">
        <div className="mb-4 col-12 col-md-7">
          <WelcomeAbout />
        </div>
        <div className="col-12 col-md-5">
          <WelcomeList />
        </div>
      </div>
    </>
  );
};
export default WelcomePage;
