import { BiDonateHeart } from "react-icons/bi";
import 'animate.css';

function About() {
  return (
    <div className='h-screen bg-[#e8e8e8] mt-1 justify-end ' id="about">
       <div id="aboutbg">
            <div className="pt-[70px] text-center animate__animated animate__fadeInLeft animate__delay-2s">
                <div className="flex justify-center">
                    <span className=" bg-[#23487f] h-[100px] w-[100px] text-white rounded-md"><BiDonateHeart className="mx-auto text-[80px] pt-3"/></span>
                </div>
                <h2 className="text-white text-[35px] lg:text-[60px] font-italic font-bold pt-8 lg:pt-10">7 Ways You Can <br />Make a Donation to Charity.</h2>
             </div>
            <div className="lg:flex justify-center align-bottom lg:mt-[140px] bottom-0 text-white animate__animated animate__delay-3s animate__bounceInUp">
                <div className="h-[100px] lg:h-[150px] w-[400px] bg-[#1f556e] p-5">
                    <p className="">01. Use Your Checkbook</p>
                    <p>02. Donate Your Car, Food, or Clothing</p>
                </div>
                <div className="h-[100px] lg:h-[150px] w-[400px] bg-[#77202f] p-5">
                    <p>03. Set Up a Private or Family Foundation</p>
                    <p>04. Join a Giving Circle</p>
                </div>
                <div className="h-[100px] lg:h-[150px] w-[400px] bg-[#5b631b] p-5">
                    <p>05. Give Through a Donor-Advised Fund</p>
                    <p>06. Give Online And Take Time</p>
                </div>
            </div>
       </div>
    </div>
  )
}

export default About