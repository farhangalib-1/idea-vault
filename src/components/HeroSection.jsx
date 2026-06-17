"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination} from 'swiper/modules';
import Image from 'next/image';
const HeroSection = () => {
  return (
    <div className="h-screen flex items-center justify-center">
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="h-[79vh]"
      >
        <SwiperSlide>
  <div className="relative h-full w-full">
    {/* Background Image */}
    <Image
      src="/images/hero-bg-1.png"
      alt="Hero Background"
      fill
      priority
      className="object-center md:object-cover"
    />

    {/* Optional Dark Overlay */}
    <div className="absolute inset-0 bg-black/20" />

    {/* Content */}
    <div className="relative z-10 flex h-full items-center px-6 md:px-12 lg:px-20">
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold text-white md:text-6xl">
          Share Your Startup Ideas
        </h1>

        <p className="mt-4 text-lg text-gray-200">
          Discover innovative ideas, collaborate with creators, and
          validate concepts through community feedback.
        </p>

        <button className="mt-6 rounded-xl bg-violet-600 px-8 py-4 text-lg font-semibold text-white hover:bg-violet-700">
          Explore Ideas
        </button>
      </div>
    </div>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="relative h-full w-full">
    {/* Background Image */}
    <Image
      src="/images/hero-bg-2.png"
      alt="Hero Background"
      fill
      priority
      className=" object-center  md:object-cover"
    />

    {/* Optional Dark Overlay */}
    <div className="absolute inset-0 bg-black/20" />

    {/* Content */}
    <div className="relative z-10 flex h-full items-center px-6 md:px-12 lg:px-20">
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold text-white md:text-6xl">
          Share Your Startup Ideas
        </h1>

        <p className="mt-4 text-lg text-gray-200">
          Discover innovative ideas, collaborate with creators, and
          validate concepts through community feedback.
        </p>

        <button className="mt-6 rounded-xl bg-violet-600 px-8 py-4 text-lg font-semibold text-white hover:bg-violet-700">
          Explore Ideas
        </button>
      </div>
    </div>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="relative h-full w-full">
    {/* Background Image */}
    <Image
      src="/images/hero-bg-3.png"
      alt="Hero Background"
      fill
      priority
      className=" object-center md:object-cover"
    />

    {/* Optional Dark Overlay */}
    <div className="absolute inset-0 bg-black/20" />

    {/* Content */}
    <div className="relative z-10 flex h-full items-center px-6 md:px-12 lg:px-20">
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold text-white md:text-6xl">
          Share Your Startup Ideas
        </h1>

        <p className="mt-4 text-lg text-gray-200">
          Discover innovative ideas, collaborate with creators, and
          validate concepts through community feedback.
        </p>

        <button className="mt-6 rounded-xl bg-violet-600 px-8 py-4 text-lg font-semibold text-white hover:bg-violet-700">
          Explore Ideas
        </button>
      </div>
    </div>
  </div>
</SwiperSlide>
      </Swiper>
      </div>
  )
}

export default HeroSection
