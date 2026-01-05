
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    name: "Eduversal Charity Virtual Run & Gowes 2022",
    role: "Event Organizer",
    company: "",
    avatar: "https://picsum.photos/id/64/100/100",
    content: "Venti sangat membantu pelaksanaan event virtual run kami. Integrasi dengan Strava berjalan lancar dan memudahkan peserta dalam mencatat aktivitas mereka. Dari sisi panitia, pengelolaan data peserta jadi lebih rapi dan terpantau."
  },
  {
    name: "Komodo Math Competition 2023",
    role: "Event Organizer",
    company: "",
    avatar: "https://picsum.photos/id/91/100/100",
    content: "Proses ticketing dan pembayaran melalui Venti berjalan sangat baik. Peserta dapat mendaftar dengan mudah dan panitia dapat memantau transaksi secara real time."
  },
  {
    name: "Webinar Festival Sains dan Budaya 2023",
    role: "Event Organizer",
    company: "",
    avatar: "https://picsum.photos/id/129/100/100",
    content: "Penggunaan Venti membuat proses pendaftaran peserta lebih terstruktur. Sistem pembayaran terintegrasi membantu kelancaran pelaksanaan event dengan jumlah peserta yang besar."
  },
  {
    name: "Webinar Nasional Hari Perempuan Dunia",
    role: "Event Organizer",
    company: "",
    avatar: "https://picsum.photos/id/145/100/100",
    content: "Venti mempermudah pengelolaan pendaftaran dan pembayaran peserta webinar. Sistemnya stabil dan membantu panitia fokus pada konten acara."
  },
  {
    name: "Komodo Webinar Series",
    role: "Event Organizer",
    company: "",
    avatar: "https://picsum.photos/id/165/100/100",
    content: "Dengan Venti, pengelolaan webinar series menjadi lebih efisien. Ticketing dan pembayaran terpusat dalam satu platform yang mudah digunakan."
  },
  {
    name: "Semua Membacanya 2025 – Majalah Mata Air",
    role: "Event Organizer",
    company: "",
    avatar: "https://picsum.photos/id/168/100/100",
    content: "Venti memudahkan pengelolaan ticketing dan pembayaran, serta terintegrasi dengan sistem ujian yang dibutuhkan. Platformnya praktis dan mendukung kebutuhan event kami."
  },
  {
    name: "Kindergarten Year End Performance 2025 – Sekolah Semesta",
    role: "Event Organizer",
    company: "",
    avatar: "https://picsum.photos/id/170/100/100",
    content: "Venti membantu orang tua membeli tiket dengan mudah dan memilih tempat duduk. Dari sisi sekolah, pengelolaan data peserta menjadi lebih sederhana."
  },
  {
    name: "Playgroup Year End Performance 2025 – Sekolah Semesta",
    role: "Event Organizer",
    company: "",
    avatar: "https://picsum.photos/id/171/100/100",
    content: "Sistem ticketing, pembayaran, dan seating di Venti berjalan lancar dan memudahkan komunikasi antara panitia dan orang tua."
  },
  {
    name: "Eduversal Charity Virtual Run & Ride 2025",
    role: "Event Organizer",
    company: "",
    avatar: "https://picsum.photos/id/172/100/100",
    content: "Integrasi Strava, ticketing, dan pembayaran dalam Venti membuat event virtual kami berjalan lebih profesional dan efisien."
  },
  {
    name: "Eduversal Charity Virtual Run 2026",
    role: "Event Organizer",
    company: "",
    avatar: "https://picsum.photos/id/173/100/100",
    content: "Venti kembali menjadi solusi yang tepat untuk event virtual run kami. Integrasi Strava, ticketing, dan payment berjalan mulus dari awal hingga akhir."
  },
  {
    name: "STUDENT’S PERFORMANCE 2026 – Sekolah Semesta",
    role: "Event Organizer",
    company: "",
    avatar: "https://picsum.photos/id/175/100/100",
    content: "Venti membantu pengelolaan penjualan tiket, pembayaran, dan seating dengan rapi. Proses check-in peserta menjadi lebih tertib dan terkontrol."
  },
  {
    name: "HARMONY OF THE PROPHET’S LOVE – Alumni SMA Pribadi Depok",
    role: "Event Organizer",
    company: "",
    avatar: "https://picsum.photos/id/178/100/100",
    content: "Sistem ticketing dan seating di Venti sangat membantu pengaturan kehadiran dan tempat duduk peserta pada event yang kami selenggarakan."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Trusted by Top Organizers</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Join thousands of event creators who trust Venti.id to deliver seamless experiences.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i} className="pb-12">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
                <div className="flex gap-1 mb-6 text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-slate-700 italic mb-8 flex-1 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-100"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                    <p className="text-slate-500 text-xs">{t.role}{t.company && `, ${t.company}`}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
