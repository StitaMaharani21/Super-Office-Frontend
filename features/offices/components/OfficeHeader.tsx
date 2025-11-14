"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { OfficeImage } from "../types/officeSpace.types";

export default function OfficeHeader({ office }: { office: OfficeImage }) {
    return (
        <section id="Gallery" className="-mb-[50px]">
            <div className="swiper w-full">
                <Swiper className="swiper-wrapper"
                    slidesPerView={"auto"}
                    spaceBetween={10}
                    slidesOffsetAfter={10}
                    slidesOffsetBefore={10}>
                    <SwiperSlide className="swiper-slide !w-fit">
                        <div className="w-[700px] h-[550px] overflow-hidden">
                            <Image
                                width={700}
                                height={550}
                                src={office.image}
                                className="w-full h-full object-cover"
                                alt="thumbnail"
                            />
                        </div>
                    </SwiperSlide>
                    {office.images.map((img, index) => (
                        <SwiperSlide key={index} className="swiper-slide !w-fit">
                            <div className="w-[700px] h-[550px] overflow-hidden">
                                <Image
                                    width={700}
                                    height={550}
                                    src={img}
                                    className="w-full h-full object-cover"
                                    alt="thumbnail"
                                />
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </section>
    );
};
