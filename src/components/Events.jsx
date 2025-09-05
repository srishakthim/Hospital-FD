import React from "react";
import { ArrowRight } from "lucide-react";

const upcomingEvent = {
    date: "28",
    month: "SEP",
    title: "Run for Little Hearts",
};

const featuredNews = {
    date: "Aug 14, 2025",
    title:
        "GKNM Hospital Successfully Hosted the Asthma Training Module for Paediatricians",
    description:
        "GKNM Hospital successfully held the Asthma Training Module on 14 August 2025, as a Pre Event Workshop of Kongu Pedicon 2025, in the IOP Auditorium and organized by the IAP National Respiratory Chapter, the full-day program featured accessible, easy-to-follow lectures and live demonstrations covering essential aspects of childhood asthma. Participated More than 40 Delegates Across the Region.",
    img: "/images/news/asthma-training.jpg", // replace with your image
};

const recentNews = [
    {
        date: "Jul 11, 2025",
        title:
            "Indian Society of Neuroradiology (ISNR) Midterm Conference 2025 hosted by GKNM",
        img: "/images/news/isnr.jpg",
    },
    {
        date: "Jun 28, 2025",
        title:
            "GKNM Hospital’s 73rd Founder’s day event with vision and commitment to healthcare excellence",
        img: "/images/news/founders-day.jpg",
    },
    {
        date: "Jun 14, 2025",
        title: "Thoracic Ultrasound Workshop 2025",
        img: "/images/news/ultrasound.jpg",
    },
];

const Events = () => {
    return (
        <div className="bg-white py-10 px-6">
            {/* Header */}
            <div className="max-w-7xl mx-auto flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">News & Events</h2>
                <button className="relative px-6 py-2 rounded-full border-2 border-blue-800 text-blue-800 font-medium overflow-hidden group">
                    <span className="relative z-10 group-hover:text-white transition duration-300">
                        View All News & Events
                    </span>
                    <span className="absolute inset-0 bg-blue-800 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"></span>
                </button>
            </div>

            {/* Content Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Upcoming Events */}
                <div className="bg-gray-100 rounded-2xl p-6 flex flex-col min-h-full">
                    <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
                    <div className="flex gap-2 mb-6">
                        <span className="px-3 py-1 rounded-full border text-sm">Work shop</span>
                        <span className="px-3 py-1 rounded-full border text-sm">CME</span>
                        <span className="px-3 py-1 rounded-full border text-sm bg-green-600 text-white">
                            Event
                        </span>
                    </div>
                    <div className="flex items-center gap-4 mt-auto">
                        <div className="bg-white rounded-lg shadow px-4 py-2 text-center">
                            <p className="text-xl font-bold text-gray-800">{upcomingEvent.date}</p>
                            <p className="text-sm text-gray-500">{upcomingEvent.month}</p>
                        </div>
                        <div>
                            <h4 className="font-medium text-gray-800">{upcomingEvent.title}</h4>
                            <button className="flex items-center text-sm text-blue-800 font-medium mt-1 hover:underline">
                                View Details <ArrowRight className="ml-1 w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Featured News */}
                <div className="md:col-span-2 bg-gray-100 rounded-2xl p-6 flex flex-col min-h-full">
                    <img
                        src={featuredNews.img}
                        alt={featuredNews.title}
                        className="rounded-xl w-full h-64 object-cover mb-4"
                    />
                    <p className="text-sm text-gray-500">{featuredNews.date}</p>
                    <h3 className="font-semibold text-lg text-gray-900 mt-2">
                        {featuredNews.title}
                    </h3>
                    <p className="text-gray-700 mt-2">{featuredNews.description}</p>
                    <div className="mt-auto"></div>
                </div>

                {/* Recent News */}
                <div className="flex flex-col gap-4">
                    {recentNews.map((news, i) => (
                        <div key={i} className="flex gap-4 items-start">
                            <img
                                src={news.img}
                                alt={news.title}
                                className="w-28 h-20 rounded-lg object-cover flex-shrink-0"
                            />
                            <div>
                                <p className="text-sm text-gray-500">{news.date}</p>
                                <h4 className="text-gray-800 font-medium">{news.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default Events;
