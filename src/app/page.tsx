function page(){
  return(
  <body className="flex justify-center items-center flex-col mb-100 ">

     <div className="bg-amber-50 w-80 h-40 m-8 flex flex-col  rounded-2xl" >
       <div className="flex justify-baseline items-center m-3">
       <img src="https://imageio.forbes.com/specials-images/imageserve/5ed00f17d4a99d0006d2e738/0x0.jpg?format=jpg&crop=4666,4663,x154,y651,safe&height=416&width=416&fit=bounds" alt="" className="w-15 h-15 rounded-full " />
        <div className="flex flex-col ml-3">
          <h1 className=" text-black">Kanye West</h1>
          <p className="  text-gray-600">this is you?</p>
        </div>
     </div>
      <div className="flex ml-3">
        <button className="bg-blue-700 m-1 w-20 h-10  rounded-2xl cursor-pointer border-1 border-gray-300 text-black">yes</button>
        <button className="bg-white m-1 w-20 h-10  rounded-2xl cursor-pointer border-1 border-gray-300 text-black ">no</button>
      </div>
     </div>

    <div className="bg-gray-900 w-200 h-100">
      <div className="flex justify-center items-center  ">
         <h1 className="text-xl m-5 font-bold">Login</h1>
      </div>

      <div className="p-2">
        <p className="font-medium">E-mail</p>
        <input type="email" placeholder="" className="p-2  border-1 border-gray-700 text-white  w-full bg-[#1F2936] rounded-b-lg" />
      </div>
      <div className="p-2">
      <p className="font-medium">Password</p>
        <input type="password" placeholder="" className="p-2  border-1 border-gray-700 text-white w-full bg-[#1F2936] rounded-b-lg" />
      </div>

      <div className="flex justify-center items-center m-2">
        <input type="submit" placeholder="username" className=" bg-amber-400 text-white w-full rounded-b-lg cursor-pointer mt-8" />
      </div>

       <div className="flex items-center justify-center mt-5">Are you member? <a href="" className="ml-1 text-amber-400 font-light ">make your register</a></div>

    </div>


   <div className="flex  justify-center items-center  m-8"> 
    <div className=" mt-5 w-14 h-14 border-8 border-blue-200 border-r-blue-600 rounded-full animate-spin"></div>

    <div className=" mt-5 w-20 h-20 animate-spin"><img src="https://png.pngtree.com/png-vector/20231016/ourmid/pngtree-vinyl-disc-png-image_10188179.png" alt="" /></div>

    <div className=" mt-5 w-20 h-20 animate-bounce"><img src="https://static.vecteezy.com/system/resources/thumbnails/049/883/193/small_2x/a-white-and-black-soccer-ball-isolated-on-transparent-background-png.png" alt="" /></div>

   </div>


   <div>
    <div className=" w-80 h-60 flex items-center justify-center bg-gray-900 flex-col rounded-3xl">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/BenFranklinDuplessis.jpg/640px-BenFranklinDuplessis.jpg" className="h-20 w-20 mb-5 rounded-full" />

      <h3>"Bla Bla Ble Blu Blu Blu"</h3>
      <p className="text-blue-400">Benjamin Franklim</p>
      <h6 className="text-gray-400 text-sm">Politico,Eua</h6>

    </div>
   </div>



    </body>
  );
}
export default page;