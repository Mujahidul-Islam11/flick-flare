import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiMenuLine } from "react-icons/ri";
import { MdClose } from "react-icons/md";


const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const links = (
        <>
      <NavLink
        to={"/"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "border-b-2 border-sky-300"
            : ""
        }
      >
        <button className="md:text-xl px-2">Home</button>
      </NavLink>{" "}
      <br />
      <NavLink
        to={"/Shows"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "border-b-2 border-sky-300"
            : ""
        }
      >
        <button className="md:text-xl px-2">Shows</button>
      </NavLink>{" "}
      <br />
      <NavLink
        to={"/About"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "border-b-2 border-sky-300"
            : ""
        }
      >
        <button className="md:text-xl px-2">About</button>
      </NavLink>
      <br />
      <NavLink
        to={"/Contact"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "border-b-2 border-sky-300"
            : ""
        }
      >
        <button className="md:text-xl px-2">Contact</button>
      </NavLink>
        </>
    )

    return (
        <div>
            <div className="bg-[#0C2D57] w-full">
            <div className="flex justify-between items-center px-4 md:w-[1300px] py-2 md:p-0 mx-auto text-white">
                {/* Logo */}
                
                <div className="flex items-center">
                <div>
                {menu ? (
              <MdClose
                onClick={() => setMenu(false)}
                className="text-2xl md:hidden cursor-pointer"
              />
            ) : (
              <RiMenuLine
                onClick={() => setMenu(true)}
                className="text-2xl md:hidden cursor-pointer"
              />
            )}
                </div>
                    <img className="w-28 md:w-48" 
                    src="https://i.postimg.cc/v8LL12Cr/f-removebg-preview.png"
                     alt="" />
                </div>
                

                {/* Navbar Routes */}
                <div className="hidden md:flex items-center gap-3">
                    {links}
                </div>
            </div>
        </div>

        {/* responsive menu bar */}
        <div>
        {menu && (
        <div className="flex justify-end md:hidden md:w-[1324px] absolute z-10">
          <div className="bg-white rounded-lg shadow-xl w-[230px] space-y-4 px-4 py-4">
            {links}
          </div>
        </div>
      )}
        </div>

        </div>
    );
};

export default Navbar;