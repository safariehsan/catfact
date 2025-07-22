import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import { Link } from "react-router";
import Pagination from "./Pagination";

const List = () => {
  const [facts, setFacts] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(12);
  const getFacts = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://catfact.ninja/facts", {
        params: {
          limit: perPage,
          page: currentPage,
        },
      });
      console.log(response);
      setFacts(response.data);
      setTotal(response.data.total);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getFacts();
  }, [currentPage]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 py-8 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          List of Cat Facts
        </h2>
        <div className="my-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {!loading ? (
            facts.data?.map((fact) => (
              <div
                key={fact.length}
                className="group relative border border-gray-200 rounded-lg shadow-md hover:bg-cyan-50 hover:shadow-xl transition-shadow duration-300"
              >
                <Link to={`/list/${fact.length}`}>
                  <img
                    className="rounded-t-lg"
                    src="https://placekittens.com/200/300"
                    alt=""
                  />
                  <div className="mt-4 p-4 pt-0">
                    <b className="text-md text-cyan-600">{fact.length}</b>
                    <h3 className="text-sm text-gray-700 truncate">
                      {fact.fact}
                    </h3>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div className="text-gray-500">
              <Loading />
            </div>
          )}
        </div>
        <Pagination
          total={total}
          perPage={12}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default List;
