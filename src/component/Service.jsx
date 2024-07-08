import { BiDonateHeart } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { VscWorkspaceTrusted } from "react-icons/vsc";


function Service() {
  return (
    <div className=" bg-[#f7f3f3] pt-8" id="service">
        <div>
            <div className='bg-[#23487f] w-[200px] rounded-lg mx-auto text-center text-white font-bold p-2'>
                <h3>DO WHAT I LOVE</h3>
            </div>
            <div className='lg:w-[65%] mx-auto text-2xl font-bold text-center font-mono '>
                <p className="">At Refugee Relocation Agency, <br /> We believe in using compassion and solidarity to help refugees build new beginnings. We offer support and guidance through every challenge and uncertainty they face.</p>
            </div>
        </div>
       <div>
        <div className="lg:w-[90%] justify-center space-x-[100px] space-y-5 lg:space-x-[100px] lg:flex mt-5 lg:pl-[100px]">
            <div className="w-[250px] h-[300px] space-y-3 text-center ml-[100px]">
                <div className="w-[250px] ">
                    <p><BiDonateHeart  className="text-[80px] mx-auto"/></p>
                </div>
                <p className="font-bold">GET HELPS CHILD</p>
                <p className="text-[#575555] text-center">At Refugee Relocation Agency, we're here to provide assistance and support to children who are in need of help and protection.</p>
            </div>
            <div className="w-[250px] h-[300px] space-y-2 text-center">
                <div className="w-[250px] ">
                    <p><VscWorkspaceTrusted  className="text-[80px] mx-auto "/></p>
                </div>
                <p className="font-bold">RELOCATION SERVICES</p>
                <p className="text-[#575555] text-center">Our charity organization is dedicated to providing assistance and support to individuals and families who are in the process of relocating due to various circumstances.</p>
            </div>
            <div className="w-[250px] h-[300px] space-y-2 text-center">
                <div className="w-[250px] ">
                    <p><IoIosPeople  className="text-[80px] mx-auto "/></p>
                </div>
                <p className="font-bold">CHARITY FOR FOOD</p>
                <p className="text-[#575555] text-center">Our charity is dedicated to addressing food insecurity by providing nutritious meals and essential food items to individuals and families in need within our community.</p>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Service