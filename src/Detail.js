import React from "react";
import { useParams, Link, useLocation } from "react-router";

const Detail = () => {
  let { length } = useParams();
  const location = useLocation();
  const fact = location.state?.fact;
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <div className="flex flex-row bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <img
            className="rounded-t-lg"
            src="https://placecats.com/300/200"
            alt="cat"
          />
          <div className="p-5 flex flex-col justify-between">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Cat Fact #{length}
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {fact}
            </p>
            <Link
              to="/facts"
              className="inline-flex items-center w-fit px-3 py-2 text-sm hover:text-white font-medium text-center text-gray-700 bg-gray-200 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="rotate-180 w-3.5 h-3.5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
              <span className="ml-2">Back to List</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
