import {
    FaArtstation,
    FaCalendar,
    FaCartShopping,
    FaHouseMedical,
    FaMoneyBill,
  } from "react-icons/fa6";
  import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

  const DashBoard = () => {
    const {user}=useAuth();
    console.log(user);
    return (
      <div className="flex">
        <div className="w-64 min-h-screen bg-orange-500 hidden lg:block">
          <ul className="menu">
        
              <>
               <h2 className="text-center font-bold">Task</h2>
                <li className="mb-2">
                  <NavLink to={"/dashboard"}>
                    <div className="flex items-center gap-3">
                    <FaHouseMedical></FaHouseMedical>
                    <p>Home</p>
                    </div>
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to={"/dashboard/payment"}>
                    <div className="flex items-center gap-3">
                    <FaMoneyBill></FaMoneyBill>
                    <p>Assign task</p>
                    </div>
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to={"/dashboard/list"}>
                    <div className="flex items-center gap-3">
                    <FaCartShopping></FaCartShopping>
                    <p>All Task</p>
                    </div>
                  </NavLink>
                </li>
                <li className="mb-2">
                  <NavLink to={"/dashboard/booking"}>
                    <div className="flex items-center gap-3">
                    <FaCalendar></FaCalendar>
                    <p>TO-DO List</p>
                    </div>
                  </NavLink>
                </li>
              
                <li className="mb-2">
                  <NavLink to={"/dashboard/review"}>
                    <div className="flex items-center gap-3">
                    <FaArtstation></FaArtstation>
                    <p> Add Review</p>
                    </div>
                  </NavLink>
                </li>
              </>
 
          
  
  <hr className="border-gray-800 dark:border-white mx-10 my-5"/>
            {/* Shared navlinks */}
            <li className="mb-2">
              <NavLink to={"/"}>
                <div className="flex items-center gap-3">
                <FaHouseMedical></FaHouseMedical>
                    <p>Home</p>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1 ">
          <Outlet></Outlet>
        </div>
      </div>
    );
  };
  
  export default DashBoard;
  