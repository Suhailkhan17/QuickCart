"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { useRouter } from "next/navigation";

const headphonesData = [
  {
    id: 1,
    name: "Noise Cancelling Headphones",
    price: "$199",
    image: assets.headphone1,
  },
  {
    id: 2,
    name: "Wireless Over-Ear Headphones",
    price: "$149",
    image: assets.headphone2,
  },
  {
    id: 3,
    name: "Gaming Headset RGB",
    price: "$129",
    image: assets.headphone3,
  },
];

const HeadphonesPage = () => {
  const router = useRouter();

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <section className="bg-[#E6E9F2] py-12 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-32 rounded-xl mt-6 gap-6">
        <div className="flex-1 md:pr-10">
          <p className="text-orange-600 font-medium pb-2">Limited Offer 30% Off</p>
          <h1 className="text-3xl md:text-5xl font-semibold mb-4">
            Experience Pure Sound - Your Perfect Headphones Awaits!
          </h1>
          <p className="text-gray-600 mb-6">
            Explore our premium collection of headphones designed for superior sound quality, comfort, and style. Find your perfect match today!
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => router.push("/all-products")}
              className="bg-orange-600 text-white px-6 py-2 rounded-full font-medium"
            >
              Buy Now
            </button>
            <button
              onClick={() => router.push("/macbook")}
              className="px-6 py-2 border border-gray-400 rounded-full font-medium hover:bg-gray-100 transition"
            >
              Explore More
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src={assets.header_headphone_image}
            alt="Headphones Banner"
            className="md:w-80 w-56"
          />
        </div>
      </section>

      {/* Products Section */}
      <section className="px-6 md:px-16 lg:px-32 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Our Headphones Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {headphonesData.map((item) => (
            <div
              key={item.id}
              className="border rounded-xl p-4 hover:shadow-lg transition cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="font-medium text-lg">{item.name}</h3>
              <p className="text-orange-600 font-semibold">{item.price}</p>
              <button
                onClick={() => router.push("/checkout")}
                className="mt-3 w-full bg-orange-600 text-white py-2 rounded-full font-medium"
              >
                Order Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Related Products */}
      <section className="bg-gray-50 py-12 px-6 md:px-16 lg:px-32 mt-12 rounded-xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">You may also like</h2>
        <div className="flex gap-6 overflow-x-auto pb-4">
          <div className="min-w-[200px] border rounded-xl p-4">
            <Image src={assets.header_playstation_image} alt="PlayStation" className="w-full h-40 object-contain mb-2" />
            <h3 className="font-medium">PlayStation 5</h3>
            <p className="text-orange-600 font-semibold">$499</p>
          </div>
          <div className="min-w-[200px] border rounded-xl p-4">
            <Image src={assets.header_macbook_image} alt="MacBook" className="w-full h-40 object-contain mb-2" />
            <h3 className="font-medium">MacBook Pro</h3>
            <p className="text-orange-600 font-semibold">$1299</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HeadphonesPage;


