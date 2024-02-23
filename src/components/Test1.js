import React from "react";
import Flipkartlogo1 from "../pic/Flipkartlogo1.png";
import Vector1 from "../pic/Vector1.png";
import Vector2 from "../pic/Vector2.png";
import Ellipse9 from "../pic/Ellipse9.png";
import Rectangle41 from "../pic/Rectangle41.png";
import add from "../pic/add.png";
import star from "../pic/star.png";
import food from "../pic/food.png";
import makeup from "../pic/makeup.png";
import phone from "../pic/phone.png";
import responsive from "../pic/responsive.png";
import shoe from "../pic/shoe.png";
import sofa from "../pic/sofa.png";
import image1 from "../pic/image1.png";
import image3 from "../pic/image3.png";
import Ellipse5 from "../pic/Ellipse5.png";
import Ellipse6 from "../pic/Ellipse6.png";
import image13 from "../pic/image13.png";
import camera from "../pic/camera.png";
import headphone from "../pic/headphone.png";
import image32 from "../pic/image32.png";
import image4 from "../pic/image4.png";
import image5 from "../pic/image5.png";
import image7 from "../pic/image7.png";
import image8 from "../pic/image8.png";
import image10 from "../pic/image10.png";
import image23 from "../pic/image23.png";
import plus1 from "../pic/plus1.png";
import image14 from "../pic/image14.png";
import image12 from "../pic/image12.png";
import image15 from "../pic/image15.png";
import image31 from "../pic/image31.png";
import image24 from "../pic/image24.png";
import image25 from "../pic/image25.png";
import image26 from "../pic/image26.png";
import image27 from "../pic/image27.png";
import image29 from "../pic/image29.png";
import image30 from "../pic/image30.png";
import Aarav from "../pic/Aarav.png";
import Prestige from "../pic/Prestige.png";
import watch from "../pic/watch.png";
import printer from "../pic/printer.png";
import Line13 from "../pic/Line13.png";
import Line14 from "../pic/Line14.png";
import image16 from "../pic/image16.png";
import image17 from "../pic/image17.png";
import image18 from "../pic/image18.png";

function Test1() {
  const Product_data = [
    {
      point: 4.2,
      pic: image7,
      name: "Sponsored",
      color: "#E1FFE4",
      desc: "STREE MANTRA Women Printed Georgette, Crepe A-line Kurta Grey",
      price: 599,
      full: 1699,
      off: 65,
    },
    {
      point: 3.1,
      pic: image8,
      name: "BIRDE",
      color: "#FFEBE0",
      desc: "Premium Casual Shoes For Men Casuals For Men (Grey)",
      price: 350,
      full: 499,
      off: 35,
    },
    {
      point: 4.2,
      pic: image10,
      name: "Sponsored",
      color: "#f2f0f0",
      desc: "STREE MANTRA Women Printed Georgette, Crepe A-line Kurta Grey",
      price: 1799,
      full: 3999,
      off: 55,
    },
    {
      point: 4.2,
      pic: image23,
      name: "Sponsored",
      color: "#FCF8CC",
      desc: "STREE MANTRA Women Printed Georgette, Crepe A-line Kurta Grey",
      price: 6367,
      full: 12000,
      off: 46,
    },
    {
      point: 4.2,
      pic: image12,
      name: "Sponsored",
      color: "#FFE7E8",
      desc: "STREE MANTRA Women Printed Georgette, Crepe A-line Kurta Grey",
      price: 499,
      full: 1099,
      off: 54,
    },
  ];
  const Product1_data = [
    {
      point: 4.2,
      pic: image24,
      name: "Roadster ",
      color: "#F3ECD6",
      desc: "Men Striped Padded Jacket Men Casuals For Men - girl (gray)",
      price: 891,
      full: 3999,
      off: 72,
    },
    {
      point: 3.1,
      pic: image25,
      name: "BIRDE",
      color: "#FFEBE0",
      desc: "Premium Casual Shoes For Men Casuals For Men (Grey)",
      price: 265,
      full: 499,
      off: 46,
    },
    {
      point: 4.2,
      pic: image26,
      name: "BIG FOX",
      color: "#F0F0F0",
      desc: "Big Fox Anglo-2 Chelsea Boots For Men - girl (Maroon)",
      price: 800,
      full: 2245,
      off: 65,
    },
    {
      point: 4.1,
      pic: image27,
      name: "Heater",
      color: "#FCF8CC",
      desc: "HILTON ?HQ-1-800 | ISI Certified |Multi Mode | Grey QuartzRoom Heater",
      price: 1200,
      full: 1899,
      off: 36,
    },
    {
      point: 5.1,
      pic: Aarav,
      name: "kamble",
      color: "#F0F0F0",
      desc: "MAGICAL Floral Double Mink Blanket for Heavy Winter (Microfiber, Brown)",
      price: 479,
      full: 1999,
      off: 76,
    },
  ];
  const Product2_data = [
    {
      point: 4.2,
      pic: image29,
      name: "Sponsored",
      color: "#E1FFE4",
      desc: "STREE MANTRA Women Printed Georgette, Crepe A-line Kurta Grey",
      price: 920,
      full: 1897,
      off: 51,
    },
    {
      point: 3.7,
      pic: watch,
      name: "LIMESTONE",
      color: "#FFEBE0",
      desc: "Bleed Blue Day and Date Functioning Strap Adult QuartzAnalog Watch",
      price: 280,
      full: 1999,
      off: 85,
    },
    {
      point: 4.7,
      pic: printer,
      name: "Canon",
      color: "#f2f0f0",
      desc: "Canon PIXMA E3370 Multi-function WiFi Color Inkjet Printer (BorderlessPrinting)",
      price: 5599,
      full: 6996,
      off: 15,
    },
    {
      point: 4.4,
      pic: Prestige,
      name: "Prestige",
      color: "#FCF8CC",
      desc: "Prestige PKOSS Electric Kettle (1.5 L, white) (1.5 L, Silver)",
      price: 699,
      full: 1245,
      off: 43,
    },
    {
      point: 5.6,
      pic: image30,
      name: "Apple",
      color: "#FFE7E8",
      desc: "Apple iPad (10th Gen) 64 GB  ROM 10.9 inch with Wi-Fi Only (Silver)",
      price: 37499,
      full: 39900,
      off: 6,
    },
  ];
  return (
    <>
      <div className="flex flex-row justify-around  items-center w-[full] h-[13vh] border-b-[1px] border-[#ccc] max-sm:justify-between">
        <div className=" flex flex-row w-[13vw] justify-between ml-[8vw] max-sm:ml-[4vw] max-sm:w-[25vw]">
          <img src={Flipkartlogo1} />
          <div className="w-[40vw] flex flex-row gap-[0.5vw] items-center max-sm:hidden">
            <img src={Vector1} />
            <p className="font-bold text-lg">Menu</p>
          </div>
        </div>
        <input className="w-[50vw] h-[5vh] bg-white border-[1px] border-[#ccc] rounded-3xl max-sm:w-[full] max-sm:ml-[0vw]"/>
        <div className="flex-row flex items-center w-[16vw] justify-evenly mr-[8vw] max-sm:mr-0">
          <div className="flex flex-row items-center max-sm:scale-75">
            <img src={Vector2} />
            <img className="relative left-[-1vh] top-[-1.5vh]" src={Ellipse9} />
            <p className="text-white relative left-[-2.2vh] top-[-1.5vh]">5</p>
          </div>
          <div>
            <p className="text-[#6F6F6F] max-sm:hidden">Cart</p>
            <p className="font-bold max-sm:hidden">$240</p>
          </div >
          <img className="max-sm:hidden"src={Rectangle41} />
          <img className="max-sm:hidden"src={add} />
          <div className="max-sm:hidden" >
            <p >ACCOUNT</p>
            <p className="font-bold">Sign in</p>
          </div>
        </div>
      </div>

      <div className=" w-[full] h-[6vh] items-center flex justify-around max-sm:hidden">
        <div className="flex flex-row items-center w-[6vw] h-[6vh] bg-white justify-around border-[#fff] hover:border-[#1A89DB] border-t-4 hover:border-t-4 ml-[10vw] cursor-pointer">
          <img src={star} />
          <p className="text-[#1A89DB] font-bold ">Top Offers</p>
        </div>
        <div className="flex flex-row items-center w-[6vw] h-[6vh] border-[#fff] hover:border-[#1A89DB] border-t-4 hover:border-t-4 cursor-pointer bg-white justify-around ">
          <img src={food} />
          <p className="text-lg">Grocery</p>
        </div>
        <div className="flex flex-row items-center w-[5vw] h-[6vh] border-[#fff] hover:border-[#1A89DB] border-t-4 hover:border-t-4 cursor-pointer bg-white bg-white justify-around ">
          <img src={phone} />
          <p className="text-lg">mobiles</p>
        </div>
        <div className="flex flex-row items-center w-[6vw] h-[6vh] border-[#fff] hover:border-[#1A89DB] border-t-4 hover:border-t-4 cursor-pointer bg-white bg-white justify-around ">
          <img src={sofa} />
          <p className="text-lg">Home</p>
        </div>
        <div className="flex flex-row items-center w-[7vw] h-[6vh] border-[#fff] hover:border-[#1A89DB] border-t-4 hover:border-t-4 cursor-pointer bg-white bg-white justify-around ">
          <img src={responsive} />
          <p className="text-lg">Electronics</p>
        </div>
        <div className="flex flex-row items-center w-[6vw] h-[6vh] border-[#fff] hover:border-[#1A89DB] border-t-4 hover:border-t-4 cursor-pointer bg-white bg-white justify-around ">
          <img src={shoe} />
          <p className="text-lg">Fashion</p>
        </div>
        <div className="flex flex-row items-center w-[11vw] h-[6vh] border-[#fff] hover:border-[#1A89DB] border-t-4 hover:border-t-4 cursor-pointer bg-white bg-white justify-around mr-[10vw]">
          <img src={makeup} />
          <p className="text-lg">Beauty & Accesories</p>
        </div>
      </div>
      <div className="bg-[#f2f0f0] w-[full] h-[70vh] flex-row flex p-[1.5vh] max-sm:flex-col max-sm:items-center max-sm:h-[120vh]">
        <div className="h-[65vh] w-[40vw] justify-around flex flex-col items-center ml-[5vw] max-sm:w-[100vw] max-sm:ml-0">
          <div className="bg-[#CAF2FF] w-[30vw] h-[30vh] rounded-2xl mt-[1vw] flex max-sm:w-[90vw]">
            <div className="h-[30vh] w-[20vw] flex-col flex justify-around max-sm:w-[60vw]">
              <p className="bg-[#FCDF5B] text-center w-[7vw] h-[2.5vh] text-center text-[#6F6F6F] mt-[1vw] ml-[1.5vw]">
                50% Discout
              </p>
              <div className="h-[23vh] justify-evenly flex flex-col m-[1vw] mt-[1vw] max-sm:w-[50vw] max-sm:h-[50vh]">
                <p className="font-bold text-4xl ml-[1vw] max-sm:text-[6vw]">iphone 14</p>
                <p className="text-[#6F6F6F] text-base leading-[1vw] ml-[1vw] max-sm:leading-[5vw]">
                  Now Available on <br />
                  affordable price
                </p>
                <div className="flex flex-row justify-around w-[10vw] ml-[1vw] max-sm:w-[50vw]">
                  <p className="text-[#6F6F6F] line-through">₹1,00,000 </p>
                  <p>From</p>
                  <p className="font-bold">₹99,500*</p>
                </div>
                <button className="ml-[1vw] items-center w-[7vw] h-[3vh] bg-[#198ADA] text-[#fff] text-lg cursor-pointer rounded-xl shadow-md shadow-blue-500/30 transition ease-in-out delay-150 hover:scale-110 duration-300 max-sm:w-[35vw]">
                  Buy Now
                </button>
              </div>
            </div>
            <div className="w-[15vw] h-[30vh] flex justify-end items-end max-sm:w-[40vw]">
              <img className="mr-[1vw]" src={image1} />
            </div>
          </div>

          <div className="bg-[#E4D6FB] w-[30vw] h-[30vh] rounded-2xl max-sm:w-[90vw]">
            <div className="flex justify-between">
              <div className="h-[25vh] w[3vw] justify-evenly flex flex-col mt-[1.5vw]">
                <p className="font-bold text-4xl ml-[1vw] max-sm:text-[6vw]">Ultra HD 4K TVs</p>
                <div className="flex flex-row justify-around w-[10vw] ml-[1vw] max-sm:w-[50vw]">
                  <p className="font-bold text-4xl ml-[1.5vw]">From</p>
                  <p className="font-bold text-4xl text-[#680CFB]">₹5,000*</p>
                </div>
                <p className="text-[#6F6F6F] text-base leading-[1vw] ml-[1vw] max-sm:leading-[5vw]">
                  Sony, Samsung, LG and
                  <br />
                  more. Instant 10% Offer on
                  <br />
                  CitiBank
                </p>
              </div>
              <div className="w-[12vw] h-[30vh] bg-[#cfb0ff] rounded-2xl flex items-center max-sm:w-[35vw] max-sm:justify-end">
                <img className="w-[30vw] ml-[0.5vw]" src={image3} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[60vw] h-[65vh] flex items-center">
          <div className="w-[50vw] h-[60vh] bg-[#FFE1E3] ml-[-1vw] rounded-2xl mt-[1vw] max-sm:h-[50vh] max-sm:w-[100vw]">
            <div className="w-[30vw] h-[25vh] flex justify-around flex-col p-[1vw] m-[1vw]">
              <p className="font-bold text-5xl">Lifelong Tribe 20T</p>
              <p className="text-[#6F6F6F] text-base leading-[1vw] ml-[1vw]">
                Matte Black And Fluorescent yellow 20 T
                <br />
                Road Cycle (Single Speed, Black
              </p>
              <div className="flex flex-row justify-around w-[9vw] ml-[1vw]">
                <p className="text-[#6F6F6F] line-through">₹5,000</p>
                <p className="font-bold">From</p>
                <p className="font-bold">₹2,000*</p>
              </div>
              <button
                className="ml-[1vw] items-center w-[7vw] h-[3vh] bg-red-500 text-[#fff] text-lg cursor-pointer 
            rounded-xl shadow-md shadow-red-500/30 transition ease-in-out delay-150 hover:scale-110 duration-300"
              >
                Buy Now
              </button>
            </div>
            <img className="relative left-[27vw] top-[-10vh]" src={Ellipse5} />
            <img className="relative left-[17vw] top-[-17vh]" src={Ellipse6} />
            <img className="relative left-[10vw] top-[-52vh]" src={image13} />
          </div>
        </div>
      </div>
      <div className="w-[full] h-[66vh]">
        <p className="font-bold text-4xl p-[2vw] ml-[13vw]">Feature Product</p>
        <div className="flex ">
          <div className="w-[24vw] h-[49vh] ml-[15vw] flex flex-col justify-between bg-my-rectan bg-cover rounded-lg">
            <div className="w-[full] flex flex-col justify-start p-[1vw]">
              <p className="text-[#FF0000] font-bold text-lg bg-white w-[7vw]">
                FURNITURE
              </p>
              <p className="text-[#FFF] font-bold text-2xl">
                Create your own
                <br />
                space with Flipkart <br />
                Furniture
              </p>
            </div>
            <div className="flex justify-end">
              <p className="text-[#FFF] mb-[1vw] font-bold text-lg bg-[#FF0000] w-[8vw] items-center flex justify-center h-[4vh]">
                From ₹1,200
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 ml-[3vw] gap-4">
            <div className="w-[15vw] h-[24vh] bg-[#FCF8CC] items-center flex flex-col gap-y-[-0.5vw] rounded-xl drop-shadow-sm cursor-pointer">
              <p className="bg-[#474748] w-[4vw] text-center rounded-2xl text-[#fff] ml-[9vw] mt-[1vh] text-sm">
                ₹23,000
              </p>
              <img className="mt-[-0.3vw]" src={camera} />
              <p className="font-bold">NIKON DSLR Camera</p>
            </div>
            <div className="w-[15vw] h-[24vh] bg-[#DBF6FF] rounded-xl items-center flex flex-col gap-y-[-0.5vw] drop-shadow-sm cursor-pointer">
              <p className="bg-[#474748] w-[4vw] text-center rounded-2xl text-[#fff] ml-[9vw] mt-[1vh] text-sm">
                ₹1,200
              </p>
              <img className="mt-[-0.3vw]" src={headphone} />
              <p className="font-bold">NIKON DSLR Camera</p>
            </div>

            <div className="w-[15vw] h-[24vh] bg-[#FFE7E8] rounded-xl items-center flex flex-col gap-y-[-0.5vw] drop-shadow-sm cursor-pointer">
              <p className="bg-[#474748] w-[4vw] text-center rounded-2xl text-[#fff] ml-[9vw] mt-[1vh] text-sm">
                ₹1,200
              </p>
              <img className="mt-[1vw]" src={image32} />
              <p className="mr-[6vw] mt-[0.7vw] font-bold">
                Mj Furniture Bed
                <br />
                with 4 Drawer{" "}
              </p>
            </div>

            <div className="w-[15vw] h-[24vh] bg-[#D3FFD8] rounded-xl items-center flex flex-col gap-y-[-0.5vw] drop-shadow-sm cursor-pointer">
              <p className="bg-[#474748] w-[4vw] text-center rounded-2xl text-[#fff] ml-[9vw] mt-[1vh] text-sm">
                ₹2,900
              </p>
              <img className="mt-[1vw]" src={image4} />
              <p className="font-bold">Cooker Aluminium</p>
            </div>
            <div className="col-span-2 bg-[#DDEBFF] rounded-xl flex drop-shadow-sm cursor-pointer">
              <div className="mt-[2vw] ml-[2vw]">
                <p className="font-bold text-2xl">Samsung Washing Machine</p>
                <p className="text-[#6F6F6F] text-base mt-[0.5vw] leading-[1vw] ">
                  lorem ipsum dolor sit amet,
                  <br />
                  consectetur adiposcing elit.Vel eros,
                  <br />
                  Sollicitudin a nulla.
                </p>
                <p className="bg-[#474748] w-[6vw] text-center rounded-2xl text-[#fff] ml-[3vw] mt-[3vh] text-lg">
                  ₹60,000
                </p>
              </div>
              <img className="ml-[1vw] h-[23vh] mt-[0.5vw]" src={image5} />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[full] h-[50vh]">
        <p className="font-bold text-4xl p-[2vw] ml-[13vw]">
          Last View Products
        </p>
        <div className="flex justify-center">
          <div className="h-[34vh] w-[80vw] flex flex-row justify-between bg-[#E1FFE4] bg-opacity-0 max-sm:flex-col max-sm:h-[160vh] max-sm:items-center">
            {Product_data.map((item, index) => (
              <div
                className={`h-[34vh] w-[14vw] bg-[${item.color}] rounded-2xl drop-shadow-sm cursor-pointer max-sm:w-[60vw] max-sm:h-[30vh]`}
                key={index}
              >
                <p className="bg-[#04BB00] text-[#fff] w-[3vw] text-center rounded-2xl m-[0.2vw] ">
                  {item.point}
                </p>
                <div className="flex justify-center item-center mt-[-1vw]">
                  <div className="w-[60%] h-[8.5vw] flex justify-center items-center">
                    <img className="w-[full]" src={item.pic} />
                  </div>
                </div>
                <p className="text-[#8B8B8B] px-[1.5vw]">{item.name}</p>
                <p className="leading-[1vw] font-bold px-[1.5vw]">
                  {item.desc}
                </p>
                <p className="font-bold text-2xl px-[1.5vw]">₹{item.price}</p>
                <div className="flex text-sm px-[1.5vw]">
                  <p className="line-through text-[#8B8B8B]">₹{item.full}</p>
                  <p className="ml-[0.2vw] text-[#1DC31A]">{item.off}% off</p>
                </div>
              </div>
            ))}
            <p className="font-bold items-center flex cursor-pointer text-[#6F6F6F] bg-[#FFEBE0] bg-opacity-0">
              view more
            </p>
          </div>
        </div>
      </div>

      <div className="h-[55vh] bg-gradient-to-r from-[#c9d1ff] from-60% to-[#f9f4bb] items-center flex justify-center gap-x-[1vw]">
        <div
          className="h-[50vh] w-[30vw] bg-gradient-to-b from-[#7697e3] from-1% to-[#1c4aba] to-99% rounded-3xl flex flex-col
        justify-between"
        >
          <div>
            <p className="font-bold text-4xl text-[#fff] mt-[5vw] ml-[2vw]">
              Become a <a className="text-[#FFE602]">Plus Member</a> Now &
              <br />
              Enjoy amazing brnefits
            </p>
          </div>
          <p className="text-[#fff] text-lg ml-[2vw] mt-[-2vw]">
            Shop on Flipkart and pay using supercoins
          </p>
          <img src={plus1} />
        </div>
        <div className="h-[50vh] w-[30vw] bg-gradient-to-b from-[#8668da] from-1% to-[#321977] to-99% rounded-3xl">
          <p className=" text-6xl text-[#fff] mt-[4vw] ml-[2vw]">
            Gift Card for
            <br />
            Corporate and
            <br />
            Business needs
          </p>
          <p className="text-[#fff] text-lg leading-[1vw] ml-[2vw] ">
            Special occasions call for special gifts. Whether it's a birthday
            <br />
            or an anniversary, finding the right gift for your loved ones is
            <br />
            always a difficult task.
          </p>
          <img className="rounded-2xl w-[99%] mt-[2vh]" src={image14} />
        </div>
      </div>
      <div className="h-[57vh] w-[full] ">
        <p className="font-bold text-4xl p-[2vw] ml-[13vw]">
          Shop By Categories
        </p>
        <div className="flex justify-center">
          <div className="w-[75vw] h-[-42vh] flex flex-row justify-around">
            <div className="h-[42vh] w-[17vw] bg-[#FFE99D] flex justify-between flex-col rounded-3xl cursor-pointer">
              <p className="font-bold text-3xl m-[1vw]">Fashion</p>
              <img className="h-[90%] mt-[-3vw]" src={image15} />
            </div>
            <div className="h-[42vh] w-[17vw] bg-[#FFC7CA] flex justify-between flex-col rounded-3xl cursor-pointer">
              <p className="font-bold text-3xl m-[1vw]">Beauty & Accessories</p>
              < img className="h-[90%] mt-[-2vw]" src={image16}/>
            </div>
            <div className="h-[42vh] w-[17vw] bg-[#D1E4FF] flex justify-between flex-col rounded-3xl cursor-pointer">
              <p className="font-bold text-3xl m-[1vw]">Electronics</p>
              < img className="h-[90%] mt-[-2vw]" src={image17}/>
            </div>
            <div className="h-[42vh] w-[17vw] bg-[#CBFFD0] flex justify-between flex-col rounded-3xl cursor-pointer">
              <p className="font-bold text-3xl m-[1vw]">Grocery</p>
              < img className="h-[90%] mt-[-1vw]" src={image18}/>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[full] h-[50vh]">
        <p className="font-bold text-4xl p-[2vw] ml-[13vw]">
          Winter Essentials
        </p>
        <div className="flex justify-center">
          <div className="h-[34vh] w-[80vw] flex flex-row justify-between">
            {Product1_data.map((item, index) => (
              <div
                className={`h-[34vh] w-[14vw] bg-[${item.color}] rounded-2xl drop-shadow-sm cursor-pointer`}
                key={index}
              >
                <p className="bg-[#04BB00] text-[#fff] w-[3vw] text-center rounded-2xl m-[0.2vw] ">
                  {item.point}
                </p>
                <div className="flex justify-center item-center mt-[-1vw]">
                  <div className="w-[60%] h-[8.5vw] flex justify-center items-center">
                    <img className="w-[full]" src={item.pic} />
                  </div>
                </div>
                <p className="text-[#8B8B8B] px-[1.5vw]">{item.name}</p>
                <p className="leading-[1vw] font-bold px-[1.5vw]">
                  {item.desc}
                </p>
                <p className="font-bold text-2xl px-[1.5vw]">₹{item.price}</p>
                <div className="flex text-sm px-[1.5vw]">
                  <p className="line-through text-[#8B8B8B]">₹{item.full}</p>
                  <p className="ml-[0.2vw] text-[#1DC31A]">{item.off}% off</p>
                </div>
              </div>
            ))}
            <p className="font-bold items-center flex cursor-pointer text-[#6F6F6F] bg-[#F0F0F0] bg-opacity-0">
              view more
            </p>
          </div>
        </div>
      </div>

      <div className="w-[full] h-[50vh]">
        <p className="font-bold text-4xl p-[2vw] ml-[13vw]">
          Flipkart Recommendation
        </p>
        <div className="flex justify-center">
          <div className="h-[34vh] w-[80vw] flex flex-row justify-between">
            {Product2_data.map((item, index) => (
              <div
                className={`h-[34vh] w-[14vw] bg-[${item.color}] rounded-2xl drop-shadow-sm cursor-pointer`}
                key={index}
              >
                <p className="bg-[#04BB00] text-[#fff] w-[3vw] text-center rounded-2xl m-[0.2vw] ">
                  {item.point}
                </p>
                <div className="flex justify-center item-center mt-[-1vw]">
                  <div className="w-[60%] h-[8.5vw] flex justify-center items-center">
                    <img className="w-[full]" src={item.pic} />
                  </div>
                </div>
                <p className="text-[#8B8B8B] px-[1.5vw]">{item.name}</p>
                <p className="leading-[1vw] font-bold px-[1.5vw]">
                  {item.desc}
                </p>
                <p className="font-bold text-2xl px-[1.5vw]">₹{item.price}</p>
                <div className="flex text-sm px-[1.5vw]">
                  <p className="line-through text-[#8B8B8B]">₹{item.full}</p>
                  <p className="ml-[0.2vw] text-[#1DC31A]">{item.off}% off</p>
                </div>
              </div>
            ))}
            <p className="font-bold items-center flex cursor-pointer text-[#6F6F6F] bg-[#F3ECD6] bg-opacity-0">
              view more
            </p>
          </div>
        </div>
      </div>

      <div className="h-[60vh] w-[full] flex justify-center items-center">
        <div className="h-[50vh] w-[70vw] bg-gradient-to-r from-[#40a9e2] to-[#67df88] rounded-3xl flex">
          <div className="h-[40vh] w-[60vh] flex flex-col justify-around m-[3vw]">
            <p className="font-bold text-5xl text-[#082C4D]">
              Flipkart Grocery:{" "}
              <a className="text-[#fff]">
                Your
                <br />
                New Go-to Online
                <br />
                Grocery Store
              </a>
            </p>
            <p className="text-[#fff] text-lg">
              Whether you work from home or office or other
              <br />
              workplaces, daily items are a requsite foe everybody
            </p>
            <button className="text-[#04BB00] text-2xl font-bold ml-[1vw] items-center w-[12vw] h-[7vh] bg-[#fff] text-lg cursor-pointer rounded-3xl shadow-md shadow-[#000]/30 transition ease-in-out delay-150 hover:scale-110 duration-300">
              UP TO 30% OF
            </button>
          </div>
          <img className="items-center flex h-[90%]" src={image31} />
        </div>
      </div>

      <div className="w-[full] h-[45vh] bg-[#031828] flex justify-center items-center flex-col">
        <div className="h-[30vh] w-[75vw] flex flex-row justify-around items-center">
          <div className="h-25vh w-[20vh] mt-[-1vw]">
            <p className="font-bold text-[#fff] text-lg cursor-pointer">
              ABOUT
            </p>
            <p className="text-[#fff] text-lg cursor-pointer">Contact Us</p>
            <p className="text-[#fff] text-lg cursor-pointer">About Us</p>
            <p className="text-[#fff] text-lg cursor-pointer">Careers</p>
            <p className="text-[#fff] text-lg cursor-pointer">
              Flipkart Stories Press
            </p>
            <p className="text-[#fff] text-lg cursor-pointer">
              Flipkart Wholesale
            </p>
            <p className="text-[#fff] text-lg cursor-pointer">
              Corporate Information
            </p>
          </div>
          <div className="h-25vh w-[20vh] mt-[-2vw]">
            <p className="font-bold text-[#fff] text-lg cursor-pointer">HELP</p>
            <p className="text-[#fff] text-lg cursor-pointer">Payments</p>
            <p className="text-[#fff] text-lg cursor-pointer">Shipping</p>
            <p className="text-[#fff] text-lg cursor-pointer">
              Cancellation & Returns
            </p>
            <p className="text-[#fff] text-lg cursor-pointer">FAQ</p>
            <p className="text-[#fff] text-lg cursor-pointer">
              Report Infringement
            </p>
          </div>
          <div className="h-25vh w-[20vh] mt-[-2vw]">
            <p className="font-bold text-[#fff] text-lg cursor-pointer">
              POLICY
            </p>
            <p className="text-[#fff] text-lg cursor-pointer">Return Policy</p>
            <p className="text-[#fff] text-lg cursor-pointer">Terms Of Use</p>
            <p className="text-[#fff] text-lg cursor-pointer">Security</p>
            <p className="text-[#fff] text-lg cursor-pointer">Sitemap</p>
            <p className="text-[#fff] text-lg cursor-pointer">EPR Compliance</p>
          </div>
          <div className="h-25vh w-[10vh] mt-[-4.6vw]">
            <p className="font-bold text-[#fff] text-lg cursor-pointer">
              SOCIAL
            </p>
            <p className="text-[#fff] text-lg cursor-pointer">Facebook</p>
            <p className="text-[#fff] text-lg cursor-pointer">YouTube</p>
            <p className="text-[#fff] text-lg cursor-pointer">Twitter</p>
          </div>
          <div className="mt-[1vw]">
            <p className="font-bold text-[#fff] text-lg cursor-pointer">
              MAIL Us:
            </p>
            <p className="text-[#fff] text-lg">
              Flipkart Internet Private Limited,
              <br />
              Buildings Alyssa, Begonia &<br />
              Clove Embassy Tech Village,
              <br />
              Outer Ring Road, <br />
              Devarabeesanahalli Village,
              <br />
              Bengaluru, 560103,
              <br />
              Karnataka, India
            </p>
          </div>
        </div>
        <img className="mt-[1vw]" src={Line13} />
        <div className="h-[4vh] w-[30vw] mr-[22vw] flex flex-row justify-between">
          <div className="flex flex-row items-center gap-x-[0.5vw]">
            <p className="text-[#fff] text-sm">Become a Seller</p>
            <img src={Line14} />
            <p className="text-[#fff] text-sm">Advertise</p>
            <img src={Line14} />
            <p className="text-[#fff] text-sm">Gift Cards</p>
            <img src={Line14} />
            <p className="text-[#fff] text-sm">Help Center</p>
          </div>
          <div className="items-center flex">
            <p className="text-[#fff] text-sm">© 2007-2022 Flipkart.com</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Test1;
