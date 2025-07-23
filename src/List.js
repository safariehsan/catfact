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
  const [perPage] = useState(8);
  const catsImages = [
    "neo",
    "millie",
    "millie_neo",
    "neo_banana",
    "neo_2",
    "bella",
    "g",
    "poppy",
    "louie",
  ];

  /* Function to generate random and repeating cat images: */
  // const generateRandomImage = () => {
  //   const randomIndex = Math.floor(Math.random() * catsImages.length);
  //   return catsImages[randomIndex];
  // };

  /* Function to generate random and non-repeating cat images: */
  const createRandomSelector = () => {
    const availableItems = [...catsImages];

    return function () {
      if (availableItems.length === 0) {
        throw new Error("No items remaining");
      }

      const randomIndex = Math.floor(Math.random() * availableItems.length);
      const [selectedItem] = availableItems.splice(randomIndex, 1);
      return selectedItem;
    };
  };
  const generateRandomImage = createRandomSelector();
  const getFacts = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://catfact.ninja/facts", {
        params: {
          limit: perPage,
          page: currentPage,
        },
      });
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
            facts.data?.map((fact, index) => (
              <div
                key={index}
                className="group relative border border-gray-200 rounded-lg shadow-md hover:bg-cyan-50 hover:shadow-xl transition-shadow duration-300"
              >
                <Link to={`/facts/${fact.length}`} state={{ fact: fact.fact }}>
                  <img
                    className="rounded-t-lg"
                    src={`https://placecats.com/${generateRandomImage()}/300/200`}
                    alt={`cat-${index}`}
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
          list={facts.data}
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
