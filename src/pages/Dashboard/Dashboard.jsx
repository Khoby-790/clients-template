import React, { Fragment } from "react";

const Dashboard = () => {
  return (
    <Fragment>
      <div className="flex h-full">
        <div className="w-64 border-r h-full bg-gray-200"></div>
        <div className="flex-1 flex flex-col">
          <div className="flex w-full justify-between">
              <div></div>
              <div className="flex"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
