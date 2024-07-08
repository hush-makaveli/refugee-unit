import Header from "./Header"
import "../App.css"

function FirstPage() {
  return (
    <div className='h-screen  bg-[#e8e8e8] relative' id="home">
        <div>
            <div id="firstbg">
                <div className="flex justify-center pt-[150px] lg:pt-[250px]">
                    <div>
                        <div className="w-[100%] lg:w-[70%] flex mx-auto">
                        <p className="text-white text-[35px] lg:text-[50px] font-bold text-center">Welcome to Refugee Relocation Unit: Building New Begining</p>
                        </div>
                        <div className="flex justify-center pt-[50px]">
                            <button class="btn">
                                <span class="btn-text-one">Read More...</span>
                                <span class="btn-text-two">.....</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FirstPage