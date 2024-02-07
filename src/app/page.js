import Image from "next/image";
import Sidebar from "./Components/Sidebar";

const Home=()=> {
  return (
    <main className="flex ">
      <div className="basis-[12%] h-[100vh] ">
        <Sidebar />
        </div>
      <div className="basis-[88%] border">d</div>
    </main>
  );
}

export default Home;