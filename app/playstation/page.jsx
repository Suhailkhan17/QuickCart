"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { useRouter } from "next/navigation";

const playstationData = [
  {
    id: 1,
    name: "PlayStation 5 Console",
    price: "$499",
    image: assets.playstation1,
  },
  {
    id: 2,
    name: "DualSense Wireless Controller",
    price: "$69",
    image: assets.playstation2,
  },
  {
    id: 3,
    name: "PS5 Digital Edition",
    price: "$399",
    image: assets.playstation3,
  },
];

const PlayStationPage = () => {
  const router = useRouter();

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <section className="bg-[#E6E9F2] py-12 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-32 rounded-xl mt-6 gap-6">
        <div className="flex-1 md:pr-10">
          <p className="text-orange-600 font-medium pb-2">Hurry Up! Only Few Lefts</p>
          <h1 className="text-3xl md:text-5xl font-semibold mb-4">
            Next-Level Gaming Starts Here - Discover PlayStation 5 Today!
          </h1>
          <p className="text-gray-600 mb-6">
            Experience ultra-realistic gaming with the PlayStation 5. Get the latest console, accessories, and games to elevate your gaming setup.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => router.push("/all-products")}
              className="bg-orange-600 text-white px-6 py-2 rounded-full font-medium"
            >
              Shop Now
            </button>
            <button
              onClick={() => router.push("/macbook")}
              className="px-6 py-2 border border-gray-400 rounded-full font-medium hover:bg-gray-100 transition"
            >
              Explore MacBook
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src={assets.header_playstation_image}
            alt="PlayStation Banner"
            className="md:w-80 w-56"
          />
        </div>
      </section>

      {/* Products Section */}
      <section className="px-6 md:px-16 lg:px-32 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Our PlayStation Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {playstationData.map((item) => (
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
            <Image src={assets.header_macbook_image} alt="MacBook" className="w-full h-40 object-contain mb-2" />
            <h3 className="font-medium">MacBook Pro</h3>
            <p className="text-orange-600 font-semibold">$1299</p>
          </div>
          <div className="min-w-[200px] border rounded-xl p-4">
            <Image src={assets.header_headphone_image} alt="Headphones" className="w-full h-40 object-contain mb-2" />
            <h3 className="font-medium">Noise Cancelling Headphones</h3>
            <p className="text-orange-600 font-semibold">$199</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PlayStationPage;
