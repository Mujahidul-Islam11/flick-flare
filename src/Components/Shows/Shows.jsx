import { useEffect, useState } from "react";
import { FaPlay, FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const Shows = () => {
    const [shows, setShows] = useState([]);
  const [sliceCards, setSliceCards] = useState(false);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => setShows(data));
  }, []);
    return (
        <div className="md:w-[1300px] mx-auto">
            <div className="my-10">
      {/* your favourite shows here */}
      <div className="border border-black mb-6">
        <h3 className="text-xl md:text-2xl border-l-4 border-sky-300 px-3 py-3 font-semibold">
          Shows
        </h3>
      </div>

      {/* Show's cards */}
      <div className="grid px-4 md:grid-cols-4 gap-6">
        {sliceCards
          ? shows?.map((show) => (
              <div key={show.show.id}>
                <div className="card card-compact border bg-base-100 rounded-none mb-4">
                  <figure>
                    <img
                      className="md:h-[296px]"
                      src={show.show?.image?.medium}
                      alt={show.show.name}
                    />
                  </figure>
                  <div className="card-body">
                    <div className="flex justify-between">
                      <h2 className="flex items-center gap-2">
                        <FaStar />
                        {show.show.rating.average}
                      </h2>{" "}
                      <h2>{show.show.genres}</h2>
                    </div>
                    <h2 className="card-title">{show.show.name}</h2>
                    <div className="card-actions justify-center ">
                      <NavLink to={`/details/${show.show.id}`}>
                        <button className="btn btn-primary w-full">
                          <FaPlay></FaPlay> View Details
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : shows?.slice(0, 7).map((show) => (
              <div key={show.show.id}>
                <div className="card card-compact border bg-base-100 rounded-none mb-4">
                  <figure>
                    <img
                      className="md:h-[296px]"
                      src={show.show?.image?.medium}
                      alt={show.show.name}
                    />
                  </figure>
                  <div className="card-body">
                    <div className="flex justify-between">
                      <h2 className="flex items-center gap-2">
                        <FaStar />
                        {show.show.rating.average}
                      </h2>{" "}
                      <h2>{show.show.genres}</h2>
                    </div>
                    <h2 className="card-title">{show.show.name}</h2>
                    <div className="card-actions justify-center w-full">
                      <NavLink to={`/details/${show.show.id}`}>
                        <button className="btn btn-primary">
                          <FaPlay></FaPlay> View Details
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>
      {sliceCards ? (
        <button
          onClick={() => setSliceCards(false)}
          className="btn btn-accent text-center mx-auto flex justify-center"
        >
          Show Less
        </button>
      ) : (
        <button
          onClick={() => setSliceCards(true)}
          className="btn btn-accent text-center mx-auto flex justify-center"
        >
          Show More
        </button>
      )}
    </div>
        </div>
    );
};

export default Shows;