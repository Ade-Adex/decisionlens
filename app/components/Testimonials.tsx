'use client'

import { useRef, useState } from 'react'
import SwiperCore from 'swiper'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { motion } from 'framer-motion'

import 'swiper/css'
import 'swiper/css/navigation'

import SectionHeader from '@/app/components/shared/SectionHeader'
import { testimonials } from '@/app/data/testimonials'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi'
import { fadeUp, scaleUp, stagger } from '@/app/lib/animations'

export default function Testimonials() {
  const swiperRef = useRef<SwiperCore | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const handleSwiperInit = (swiper: SwiperCore) => {
    swiperRef.current = swiper
    setIsBeginning(swiper.isBeginning)
    setIsEnd(swiper.isEnd)
    setActiveIndex(swiper.realIndex)
  }

  const handleSlideChange = (swiper: SwiperCore) => {
    setActiveIndex(swiper.realIndex)
    setIsBeginning(swiper.isBeginning)
    setIsEnd(swiper.isEnd)
  }

  return (
    <motion.section
      id="testimonials"
      className="py-10 bg-slate-50 px-6 md:px-0"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.div
        variants={fadeUp}
        className="text-center mb-12 max-w-7xl mx-auto px-6"
      >
        <SectionHeader title="What Our Clients Say" />
      </motion.div>

      <motion.div className="relative max-w-4xl mx-auto">
        {/* Main Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={handleSwiperInit}
          onSlideChange={handleSlideChange}
          navigation={{
            nextEl: '.testimonial-next',
            prevEl: '.testimonial-prev',
          }}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          className="pb-12 bg-white rounded-4xl shadow-xl"
        >
          {testimonials.map((testimonial, idx) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                variants={scaleUp}
                key={testimonial.id}
                className="p-10 md:p-16 relative min-h-42 flex flex-col justify-center"
              >
                <BiSolidQuoteAltLeft className="absolute top-10 left-4 md:left-8 text-slate-400 w-6 h-6" />

                <div className="relative z-10 text-center">
                  <p className="text-sm md:text-base text-slate-700 italic leading-relaxed mb-3">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="flex flex-col md:flex-row justify-center items-center gap-2">
                    <span className="font-bold text-[#030b1b] text-sm md:text-base uppercase">
                      {testimonial.author}
                    </span>
                    <span className="hidden md:block text-slate-300">|</span>
                    <span className="text-slate-400 font-medium italic text-xs md:text-sm">
                      {testimonial.position}
                    </span>
                  </div>
                </div>

                <BiSolidQuoteAltRight className="absolute right-4 md:right-8 text-slate-400 w-6 h-6" />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <motion.button
          className={`testimonial-prev absolute -left-3 md:-left-8.5 top-1/3 z-30 p-2 md:p-3 bg-white rounded-full shadow-lg transition-all ${
            isBeginning
              ? 'opacity-20 hover:cursor-not-allowed'
              : 'opacity-100 hover:cursor-pointer'
          }`}
          variants={fadeUp}
        >
          <ChevronLeft size={28} className="text-slate-600" />
        </motion.button>

        <motion.button
          className={`testimonial-next absolute -right-3 md:-right-8.5 top-1/3 z-30 p-2 md:p-3 bg-white rounded-full shadow-lg transition-all ${
            isEnd
              ? 'opacity-20 hover:cursor-not-allowed'
              : 'opacity-100 hover:cursor-pointer'
          }`}
          variants={fadeUp}
        >
          <ChevronRight size={28} className="text-slate-600" />
        </motion.button>

        {/* Pagination Dots */}
        <motion.div
          className="absolute flex justify-center items-center gap-3 bottom-5 left-1/3 md:left-1/2 z-30"
          variants={fadeUp}
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => swiperRef.current?.slideTo(index)}
              className={`transition-all duration-300 rounded-full ${
                activeIndex === index
                  ? 'w-6 md:w-10 h-1.5 md:h-2.5 bg-blue-900'
                  : 'w-1.5 md:w-2.5 h-1.5 md:h-2.5 bg-yellow-500 hover:bg-yellow-600'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
