import { NavBar , Hero , About, Service, Downloadapp,Contactus, Footer } from "./components";


function App() {
  return (
    <div className="bg-[#F5F5F5;] w-full overflow-hidden">
    {/* navbar */}
    <div className="sm:px-16 px-6  flex justify-center items-center">
      <div className="xl:max-w-[1280px] w-full">
        <NavBar />
      </div>
    </div>

    <div className="bg-primary flex justify-center items-start sm:px-16 px-6 ">
      <div className="xl:max-w-[1280px] w-full">
        <Hero />
      </div>
    </div>

    <div className="bg-primary flex justify-center items-start sm:px-16 px-6 ">
      <div className="xl:max-w-[1280px] w-full">
        <About />
      </div>
    </div>

    <div className="bg-primary flex justify-center items-start sm:px-16 px-6 ">
      <div className="xl:max-w-[1280px] w-full">
        <Service />
      </div>
    </div>

    <div className="bg-primary flex justify-center items-start sm:px-16 px-6 ">
      <div className="xl:max-w-[1280px] w-full">
        <Downloadapp />
      </div>
    </div>

    <div className="bg-primary flex justify-center items-start sm:px-16 px-6 ">
      <div className="xl:max-w-[1280px] w-full">
        <Contactus />
      </div>
    </div>

    <div className="bg-[#FEE395]
 flex justify-center items-start sm:px-16 px-6 ">
      <div className="xl:max-w-[1280px] w-full">
        <Footer />
      </div>
    </div>

  </div>
  )
}

export default App
