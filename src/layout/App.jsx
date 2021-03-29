/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import AppContent from "./AppContent";
import MobileSidebar from "./MobileSidebar";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <Fragment>
      {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
      <div className="h-screen flex overflow-hidden bg-gray-100">
        {/* <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. --> */}
        <MobileSidebar />
        {/* <!-- Static sidebar for desktop --> */}
        <Sidebar />
        <AppContent />
      </div>
    </Fragment>
  );
};

export default App;
