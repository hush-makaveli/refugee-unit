import { FaRegHeart } from "react-icons/fa";
import { BiDonateHeart } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { VscWorkspaceTrusted } from "react-icons/vsc";

function Contact() {
    return (
        <div div className="mt-1" id="contact">
            <div className="flex">
                <div className='lg:flex justify-center mx-auto bg-white'>
                    <div className='w-[400px] lg:w-[300px] h-[200px] lg:h-[250px] bg-[#1f556e] text-white font-bold '>
                        <div className="pt-9 lg:pt-[20%] space-y-3 single-fact-counter wow fadeInUp">
                            <p className="text-[50px] pl-[42%]"><FaRegHeart /></p>
                            <div className="space-y-3">
                                <p className="text-center text-[30px]">3820</p>
                                <p className="text-center font-serif">PROJECT COMPLETED</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[400px] lg:w-[300px] h-[200px] lg:h-[250px] bg-[#1f556e] text-white font-bold'>
                        <div className="pt-9 lg:pt-[20%] space-y-3">
                            <p className="text-[50px] pl-[42%]"><IoIosPeople /></p>
                            <div className="space-y-3">
                                <p className="text-center text-[30px]">2055</p>
                                <p className="text-center font-serif">TOTAL VOLUNTEER</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[400px] lg:w-[300px] h-[200px] lg:h-[250px] bg-[#1f556e] text-white font-bold'>
                        <div className="pt-9 lg:pt-[20%] space-y-3">
                            <p className="text-[50px] pl-[42%]"><VscWorkspaceTrusted /></p>
                            <div className="space-y-3">
                                <p className="text-center text-[30px]">1340</p>
                                <p className="text-center font-serif">TRUSTED FUNDS</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[400px] lg:w-[300px] h-[200px] lg:h-[250px] bg-[#1f556e] text-white font-bold'>
                        <div className="pt-9 lg:pt-[20%] space-y-3">
                            <p className="text-[50px] pl-[42%]"><BiDonateHeart /></p>
                            <div className="space-y-3">
                                <p className="text-center text-[30px]">7560</p>
                                <p className="text-center font-serif">DONATION PEOPLE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#f7f3f3] lg:h-[80vh] lg:flex pt-9">
                <div className="lg:w-[800px]">
                    <div className="lg:w-[90%] text-wrap lg:mx-auto lg:pt-5">
                        <h4 className="font-bold text-2xl">ABOUT US</h4>
                        <p className="text-[#575555] lg:text-xl">We are an independent refugee relocation organization helping save lives and giving hope and solace to people experiencing poverty and suffering , reaching out to give them back the opportunity of a second chance to live by fostering a safe relocation process for them to reunite with loved ones in other countries We relocate from refugee camps in Turkey, Syria, Yemen, Sudan, and Libya, as well as the supply of Medicine and Bed Covers. For more information, see our approved and authorized officers:</p>
                        <p className="text-[#575555]"><span className="font-bold">CEO : Sam Gomez :</span> relocationunitoffice1@zohomail.com</p>
                        <p className="text-[#575555]"><span className="font-bold">Relocation Officer:</span>  info@refugeerelo.com</p>
                        <p className="text-[#575555]"><span className="font-bold">Asst. Officer: Lorem, ipsum.:</span> Loremipsumdolorsit@updatelater</p>
                    </div>
                </div>
                <div className="w-[400px] mt-4 rounded bg-white h-[500px] space-y-10 p-4">
                    <h1 className="font-bold text-[50px] font-sans ">CONTACT <br /> DETAILS</h1>
                    <div className="flex">
                        <h3 className="font-bold flex ">ADDRESS</h3>
                        <p className="w-[350px]">: Ataç-1 Sokak No: 32 Yenişehir 06420 ANKARA / TÜRKİYE Merkez District, Hatay Province, Antakya Turkey P.M.B. 304, CH-1201 Boynuyogun Antakya Turkey Ataç Sokak 1 No. 32 Yenisehir, Cankaya 06420 Ankara  </p>
                    </div> <hr />
                    <div className="flex">
                        <h3 className="font-bold">WHATSAPP :</h3>
                        <p>+90 531 500 09 46</p>
                    </div> <hr />
                    <div className="flex">
                        <h3 className="font-bold ">EMAIL :</h3>
                        <div>
                            <p>relocationunitoffice1@zohomail.com </p>
                            <p>info@refugeerelo.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#f7f3f3] pt-4 pl-8">
                <form action="">
                    <div className="flex flex-col mb-3">
                        <label htmlFor="name" className="text-[#575555]"> YOUR NAME</label>
                        <input type="text" className=" p-3 w-[300px] h-[40px]" />
                    </div>
                    <div className="flex flex-col mb-3">
                        <label htmlFor="email" className="text-[#575555]"> EMAIL</label>
                        <input type="text" className="p-3 w-[300px] h-[40px]" />
                    </div>
                    <div className="flex flex-col mb-3">
                        <label htmlFor="subject" className="text-[#575555]">SUBJECT</label>
                        <input type="text" className="p-3 w-[300px] h-[40px]" />
                    </div>
                    <div className="flex flex-col mb-3">
                        <label htmlFor="message" className="text-[#575555]">your messsage (optional)</label>
                        <textarea name="" className="p-3 w-[300px] h-[300px] text-wrap " id=""></textarea>
                    </div>
                    <div className="bg-[#4c6688] p-3  rounded-lg mt-3 hover:bg-[#5679eb] w-[100px] text-center text-white">
                        <button><a href="mailto:relocationunitoffice1@zohomail.com">SUBMIT</a></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact