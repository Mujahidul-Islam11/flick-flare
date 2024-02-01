import { useEffect, useState } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((data) => setShow(data));
  }, [id]);

  return (
    <div className="bg-black bg-opacity-50 min-h-screen">
      <div className="px-6 md:flex justify-center gap-6 mx-auto py-16">
        <div className="">
          <img className="shadow-xl" src={show?.image?.medium} alt="" />
        </div>
        <div className="md:w-1/3">
          <h3 className="text-xl md:text-3xl text-sky-300 mb-8">
            {show?.name}
          </h3>
          <p className="">
            <span className="text-white">Overview:</span> <br />{" "}
            {show?.summary.slice(0, 265)}
          </p>
          <div className="flex justify-between mt-4">
            <div>
              <p className="text-white">
                <span className="text-white">Premiered:</span> {show?.premiered}
              </p>
              <p className="text-white">
                <span className="text-white">Ended:</span> {show?.ended}
              </p>
            </div>
            <div>
              <p className="text-white">
                <span className="text-white">Runtime:</span> {show?.runtime}
              </p>
              <p className="text-white">
                <span className="text-white">Average Runtime:</span>{" "}
                {show?.averageRuntime}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="w-72 mx-auto flex items-center justify-center">
          <button
            onClick={() => setOpenModal(true)}
            className="btn btn-accent mx-auto flex justify-center"
          >
            <FaRegBookmark></FaRegBookmark>Add to bookmark
          </button>
          <div
            onClick={() => setOpenModal(false)}
            className={`fixed flex justify-center items-center z-[100] ${
              openModal ? "visible opacity-1" : "invisible opacity-0"
            } inset-0 w-full h-full backdrop-blur-sm bg-black/20 duration-100`}
          >
            <div
              onClick={(e_) => e_.stopPropagation()}
              className={`absolute w-full lg:w-[500px] bg-white drop-shadow-2xl rounded-lg ${
                openModal
                  ? "opacity-1 duration-300 translate-y-0"
                  : "-translate-y-20 opacity-0 duration-150"
              }`}
            >
              <form className="p-12">
                <svg
                  onClick={() => setOpenModal(false)}
                  className="w-10 mx-auto mr-0 cursor-pointer"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                      fill="#000000"
                    ></path>
                  </g>
                </svg>
                <div className="space-y-5">
                  <label className="block">Movie Name</label>
                  <div className="">
                    <input
                      id="text"
                      type="text"
                      placeholder="Movie name"
                      defaultValue={show?.name}
                      readOnly
                      className="p-3 block w-full pl-10 drop-shadow-lg rounded-lg outline-none"
                    />
                  </div>
                  <label className="block">Genres</label>
                  <div className="">
                    <input
                      id="text"
                      type="text"
                      placeholder=""
                      defaultValue={show?.genres}
                      readOnly
                      className="p-3 block w-full pl-10 drop-shadow-lg rounded-lg outline-none"
                    />
                  </div>
                  <label className="block">Status</label>
                  <div className="">
                    <input
                      id="text"
                      type="text"
                      placeholder="status"
                      defaultValue={show?.status}
                      readOnly
                      className="p-3 block w-full pl-10 drop-shadow-lg rounded-lg outline-none"
                    />
                  </div>
                </div>
                {/* button type will be submit for handling form submission*/}
                <button
                onClick={()=> localStorage.setItem('bookmarked', show?.name)}
                  type="button"
                  className="py-2 mx-auto flex justify-center text-xl px-6 mb-4 mt-6 shadow-lg rounded-lg before:block before:-left-1 before:-top-1 before:bg-black before:rounded-lg before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-black after:rounded-lg after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block"
                >
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
