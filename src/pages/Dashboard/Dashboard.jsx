import React, { Fragment } from "react";

const Dashboard = () => {
  return (
    <Fragment>
      <div className="flex h-full">
        <div className="w-64 border-r h-full bg-gray-200"></div>
        <div className="flex-1 flex flex-col px-5  pt-5">
          <div className="flex w-full justify-between py-3">
            <div>
              <h1 className="font-semibold font-serif text-2xl">Clients</h1>
            </div>
            <div className="flex">
              <button className="bg-gray-400 outline-none focus:outline-none p-1 rounded shadow-md">
                <svg
                  className="h-6 w-6 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                  />
                </svg>
              </button>
              <button className="ml-2 outline-none opacity-1/2 focus:outline-none bg-indigo-600 text-white px-3 rounded shadow-md">
                Add Client
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
