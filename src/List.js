import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import { Link } from "react-router";

const List = () => {
  const [facts, setFacts] = useState([]);
  const [images, setImages] = useState([]);
  const getFacts = async () => {
    try {
      const response = await axios.get("https://catfact.ninja/facts");
      console.log(response);
      setFacts(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const getCatsImages = async () => {
    try {
      const response = await axios.get("https://placekittens.com/g/300/200", {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      console.log(response);
      setFacts(response);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getFacts();
    getCatsImages();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          List of Cat Facts
        </h2>
        <div>
          {facts.data && facts.data.length > 0 ? (
            facts.data.map((fact) => (
              <div key={fact.id} className="group relative">
                {/* <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                  /> */}
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link to={`/list/${fact.length}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {fact.fact}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{fact.length}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-gray-500">
              <Loading />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
