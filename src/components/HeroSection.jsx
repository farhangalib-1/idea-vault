"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination} from 'swiper/modules';
import Image from 'next/image';
import { Button } from '@heroui/react';
import {ArrowUpRightFromSquare} from '@gravity-ui/icons';
import Link from 'next/link';
const HeroSection = () => {
  return (
    <div className="w-full flex items-center justify-center">
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="h-[30vh] md:h-[79vh]"
      >
        <SwiperSlide>
  <div className="relative h-full w-full">
    <Image
      src="/images/hero-bg-1.png"
      alt="Hero Background"
      fill
      priority
      className="object-center md:object-cover"
    />

    {/* Optional Dark Overlay */}
    <div className="absolute inset-0 " />

    {/* Content */}
    <div className="relative z-10 flex h-full items-center px-6 md:px-12 lg:px-20">
      <div className="max-w-xl mt-2 md:mt-0">
        <h1 className="text-xl font-bold  md:text-6xl">
          Share <span className="text-[#8479fc]">Ideas</span> <br /> Spark <span className="text-[#8479fc]">Innovation</span>
        </h1>

        <p className="mt-2 md:mt-4 text-[7px] w-2/4 md:w-full  md:text-lg">
          Discover innovative ideas, collaborate with creators, and
          validate concepts through community feedback.
        </p>
        <Link href="/ideas">
        <Button variant='primary' color="brand" className="mt-2 md:mt-6 text-[10px] md:text-xl md:px-8 md:py-6">
          Explore Ideas
          <ArrowUpRightFromSquare className="w-3 h-3 md:w-4 md:h-4" />
        </Button>
        </Link>
      </div>
    </div>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="relative h-full w-full">
    <Image
      src="/images/hero-bg-2.png"
      alt="Hero Background"
      fill
      priority
      className=" object-center  md:object-cover"
    />
    <div className="absolute inset-0 bg-black/20" />
    <div className="relative z-10 flex h-full items-center px-6 md:px-12 lg:px-20">
      <div className="max-w-xl mt-2 md:mt-0">
        <h1 className="text-xl font-bold text-white md:text-6xl">
          Ideas <span className="text-[#517df5]">Connect</span> <br /> Startup <span className="text-[#517df5]">Evolves</span>
        </h1>

        <p className="mt-2 md:mt-4 text-sm w-2/4 md:w-full text-[7px] md:text-lg text-gray-200">
         Share your startup ideas, explore what others are building, and engage in discussions that help ideas grow stronger. Your feedback today can shape tomorrow’s success
        </p>
        <Link href="/ideas">
          <Button variant='primary' color="primary" className="mt-2 md:mt-6 text-[10px] md:text-xl md:px-8 md:py-6">
            Explore Ideas
            <ArrowUpRightFromSquare className="w-3 h-3 md:w-4 md:h-4" />
          </Button>
        </Link>
      </div>
    </div>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="relative h-full w-full">
    <Image
      src="/images/hero-bg-3.png"
      alt="Hero Background"
      fill
      priority
      className=" object-center md:object-cover"
    />

    <div className="absolute inset-0" />
    <div className="relative z-10 flex h-full items-center px-6 md:px-12 lg:px-20">
      <div className="max-w-xl mt-2 md:mt-0">
        <h1 className="text-xl font-bold md:text-6xl">
          Think. Share. <br /> Collaborate. <span className="text-[#517df5]">Innovate</span>
        </h1>

        <p className="mt-2 md:mt-4 text-sm w-2/4 md:w-full text-[7px] md:text-lg">
          A community-driven platform for idea validation and engagement. Share, explore, provide feedback, and refine concepts collectively.
        </p>
        <Link href="/ideas">
          <Button variant='primary' color="primary" className="mt-2 md:mt-6 text-[10px] md:text-xl md:px-8 md:py-6">
            Explore Ideas
            <ArrowUpRightFromSquare className="w-3 h-3 md:w-4 md:h-4" />
          </Button>
        </Link>
      </div>
    </div>
  </div>
</SwiperSlide>
      </Swiper>
      </div>
  )
}

export default HeroSection
