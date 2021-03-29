import React, { Fragment } from "react";

const Dashboard = () => {
  return (
    <Fragment>
      <div className="flex h-full">
        <div className="w-64 border-r h-full bg-gray-200"></div>
        <div className="flex-1 flex flex-col px-3">
          <div className="flex w-full justify-between py-3">
              <div></div>
              <div className="flex">
                  <button className="bg-indigo-400">Hello</button>
              </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
