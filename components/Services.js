import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Trash2, Recycle, Container } from 'lucide-react';

const services = [
    {
      icon: <Trash2 className="h-8 w-8 text-green-600" />,
      title: "Garbage Pickup",
      description: "Professional waste disposal services for residential and commercial properties.",
    },
    {
      icon: <Container className="h-8 w-8 text-green-600" />,
      title: "Dumpster Rental",
      description: "Convenient dumpster rental solutions for construction and renovation projects.",
    },
    {
      icon: <Recycle className="h-8 w-8 text-green-600" />,
      title: "Waste Collection",
      description: "Efficient waste collection services tailored to your specific needs.",
    },
    {
      icon: <Trash2 className="h-8 w-8 text-green-600" />,
      title: "Garbage Pickup",
      description: "Professional waste disposal services for residential and commercial properties.",
    },
    {
      icon: <Container className="h-8 w-8 text-green-600" />,
      title: "Dumpster Rental",
      description: "Convenient dumpster rental solutions for construction and renovation projects.",
    },
    {
      icon: <Recycle className="h-8 w-8 text-green-600" />,
      title: "Waste Collection",
      description: "Efficient waste collection services tailored to your specific needs.",
    },
  ];

const ServicesSection = () => {
  return (
    <section className="w-full">
    {/* Hero Section */}
    <div className="relative h-[400px] w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-800 to-green-600">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/placeholder.svg?height=300&width=1200')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>
      <div className="relative flex h-full items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Our Services</h1>
      </div>
    </div>

    {/* Services Grid */}
    <div className="mx-auto max-w-7xl px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">A wide range of waste disposal services</h2>
        <p className="text-gray-600">Featured Services</p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div className="mb-4 text-green-600 transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="mb-4 text-gray-600">{service.description}</p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-green-600 transition-all duration-300 group-hover:w-full"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium text-lg rounded-md hover:bg-green-700">
            View All Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
    </div>
  </section>
  );
};

export default ServicesSection;
