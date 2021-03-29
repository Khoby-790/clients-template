import React, { Fragment } from "react";
import { Route, Switch } from "react-router";
import Dashboard from "../pages/Dashboard/Dashboard";

const AppContent = () => {
  return (
    <Fragment>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open sidebar</span>
            {/* <!-- Heroicon name: outline/menu --> */}
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <main
          className="flex-1 relative z-0 overflow-y-auto focus:outline-none"
          tabindex="0"
        >
          <Switch>
            <Route path="/" component={Dashboard} />
          </Switch>
        </main>
      </div>
    </Fragment>
  );
};

export default AppContent;
