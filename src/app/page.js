import Image from "next/image";
import Sidebar from "./Components/Sidebar";
import DashBoard from "./Components/DashBoard";
import  Main from "@/app/Components/Main";
import Footerx from "./Components/Footerx";
// import { Outlet } from "react-router-dom";

const Home=()=> {
  return (
    <main className="flex ">
      <div className="basis-[12%] h-[100vh] ">
        <Sidebar />
        </div>
      <div className="basis-[88%] border h-[100vh] overflow-scroll">
        <DashBoard/>
        <div>
          {/* <Outlet></Outlet> */}
          <Main/>
         
        </div>
        <div className="flex justify-center items-center">
        <Footerx/>
        </div>
      </div>
    </main>
  );
}

export default Home;