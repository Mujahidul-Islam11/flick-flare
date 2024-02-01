import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"



const Banner = () => {
    
    const [sliderRef] = useKeenSlider(
        {
          loop: true,
        },
        [
          (slider) => {
            let timeout
            let mouseOver = false
            function clearNextTimeout() {
              clearTimeout(timeout)
            }
            function nextTimeout() {
              clearTimeout(timeout)
              if (mouseOver) return
              timeout = setTimeout(() => {
                slider.next()
              }, 2000)
            }
            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
              })
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
              })
              nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
          },
        ]
        )

    return (
        <div className="relative w-full">
            <div className="">
            <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
            <img className="md:h-[600px] w-full" 
            src="https://i.ibb.co/rw3CRXv/1300732.jpg" alt="" />
            </div>
        <div className="keen-slider__slide number-slide2">
            <img className="md:h-[600px] w-full"
             src="https://i.ibb.co/T13281s/1318289.jpg" alt="" />
             </div>
        <div className="keen-slider__slide number-slide3">
            <img className="md:h-[600px] w-full" 
            src="https://i.ibb.co/1LdSgcR/1306937.jpg" alt="" />
            </div>
        <div className="keen-slider__slide number-slide4">
            <img className="md:h-[600px] w-full"
             src="https://i.ibb.co/sFLJTQW/wp4310765.png
" alt="" /></div>
        <div className="keen-slider__slide number-slide5">
            <img className="md:h-[600px] w-full" 
            src="https://i.ibb.co/GJbYyGv/wp4166602.jpg" alt="" /></div>
      </div>
        </div>
        </div>
    );
};




export default Banner;