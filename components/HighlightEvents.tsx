
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { HighlightEvent } from '../types';
import { MapPin } from 'lucide-react';

interface HighlightEventsProps {
  t: {
    title: string;
    subtitle: string;
    events: HighlightEvent[];
  };
}

const HighlightEvents: React.FC<HighlightEventsProps> = ({ t }) => {
  return (
    <section id="highlight-events" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm">{t.title}</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.subtitle}
          </h3>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="py-4"
          >
            {t.events.map((event, index) => (
              <SwiperSlide key={index}>
                <div className="group rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl h-full">
                    <img src={event.thumbnail} alt={event.name} className="w-full h-64 object-cover" />
                    <div className="p-6 bg-white">
                        <h4 className="text-slate-900 text-xl font-bold mb-2">{event.name}</h4>
                        <div className="flex items-center text-slate-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{event.location}</span>
                        </div>
                    </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-12"></div>
          <div className="swiper-button-next absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-12"></div>
        </div>
      </div>
    </section>
  );
};

export default HighlightEvents;
