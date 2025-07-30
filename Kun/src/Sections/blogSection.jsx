import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const blogPosts = [
  {
    image: "/images/about1.jpg",
    title: "Help the ecosystems",
    desc: "We focus on restoring ecosystems and creating awareness for long-term sustainability.",
  },
  {
    image: "/images/card-img1.webp",
    title: "Support the homeless",
    desc: "We offer shelter, food, and support to those living on the streets in dire conditions.",
  },
  {
    image: "/images/about3.jpg",
    title: "Promote education",
    desc: "Our initiatives provide learning resources and mentorship for underprivileged youth.",
  },
  {
    image: "/images/card-img2.webp",
    title: "Promote education",
    desc: "Our initiatives provide learning resources and mentorship for underprivileged youth.",
  },
  {
    image: "/images/card-img3.webp",
    title: "Promote education",
    desc: "Our initiatives provide learning resources and mentorship for underprivileged youth.",
  },
  {
    image: "/images/card-img3.webp",
    title: "Promote education",
    desc: "Our initiatives provide learning resources and mentorship for underprivileged youth.",
  },
  {
    image: "/images/card-img3.webp",
    title: "Promote education",
    desc: "Our initiatives provide learning resources and mentorship for underprivileged youth.",
  },
  {
    image: "/images/card-img3.webp",
    title: "Promote education",
    desc: "Our initiatives provide learning resources and mentorship for underprivileged youth.",
  },
  {
    image: "/images/card-img3.webp",
    title: "Promote education",
    desc: "Our initiatives provide learning resources and mentorship for underprivileged youth.",
  },
];

const BlogCarousel = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const container = carouselRef.current;
    const scrollAmount = 321;

    if (!container) return;

    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    if (direction === "right") {
      if (Math.ceil(container.scrollLeft) >= maxScrollLeft) {
        // if at end, go to start
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    } else {
      if (Math.floor(container.scrollLeft) <= 0) {
        // if at start, go to end
        container.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
      } else {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-teal-500 text-sm font-medium mb-2">News</p>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-semibold text-gray-800">Latest Blog</h2>
          <div className="space-x-3">
            <button
              onClick={() => scroll("left")}
              className="border px-4 py-3 rounded-sm hover:bg-gray-100"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => scroll("right")}
              className="border px-4 py-3 rounded-sm hover:bg-gray-100"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="flex overflow-x-auto gap-6 scroll-smooth no-scrollbar"
        >
          {blogPosts.map((post, i) => (
            <div
              key={i}
              className="min-w-[300px] bg-gray-50 rounded shadow-sm"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover rounded-t"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{post.desc}</p>
                <button className="text-red-600 font-semibold text-sm hover:underline">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;
