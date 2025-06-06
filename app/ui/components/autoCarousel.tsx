'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/app/ui/components/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

export default function AutoCarosel(props: any) {
    const content = props.contents
    return (
        <div>
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 2000,
                    })
                ]}
                opts={{
                    loop: true
                }}
            >
                <CarouselContent>{
                    content.map((item: [ alt: string, img: string, id: number ]) => (
                        <CarouselItem className="basis-1/5 flex justify-between items-center" key={item[2]}>
                            <Image src={item[1]} alt={item[0]} width={150} height={150} />
                        </CarouselItem>
                    ))
                }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}