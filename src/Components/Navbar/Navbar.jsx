import { NavLink } from "react-router-dom";

const Navbar = () => {
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
        <div className="bg-[#0C2D57] w-full">
            <div className="flex justify-between items-center px-4 md:w-[1300px] py-2 md:0 mx-auto text-white">
                {/* Logo */}
                <div>
                    <img className="w-28 md:w-48" 
                    src="https://i.postimg.cc/v8LL12Cr/f-removebg-preview.png"
                     alt="" />
                </div>

                {/* Navbar Routes */}
                <div className="hidden md:flex items-center gap-3">
                    {links}
                </div>

                {/* Authentication routes */}
                <div>
                    <NavLink to={'/Login'}>
                    <button className="btn btn-error btn-sm md:btn-md uppercase text-white md:text-xl
                     border hover:border-white">Login</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;