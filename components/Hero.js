import React from 'react'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
  return (


    <div className="min-h-screen flex flex-col">
    {/* Header */}


    {/* Hero Section */}
    <div className="relative h-[500px]">
      <div className="absolute inset-0">
        <img
          src="/placeholder.svg?height=500&width=1920"
          alt="Modern office buildings with green trees"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-transparent"></div>
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-4">Products and Services for Global Safety and Sustainability</h1>
          <p className="text-xl mb-8">PEOPLE | TEAM WORK | INTEGRITY | INNOVATION | GROWTH | EXCELLENCE</p>
          <button className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold flex items-center hover:bg-green-50 transition-colors">
            Read More
            <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>

    {/* Bottom Navigation */}
    <div className="bg-white shadow-lg mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-6 divide-x">
          <Link href="/projects" className="flex flex-col items-center p-4 hover:bg-gray-50">
            <img src="/placeholder.svg" alt="" className="h-6 w-6 mb-2" />
            <span className="text-sm text-gray-600">Projects</span>
          </Link>
          <Link href="/directory" className="flex flex-col items-center p-4 hover:bg-gray-50">
            <img src="/placeholder.svg" alt="" className="h-6 w-6 mb-2" />
            <span className="text-sm text-gray-600">Directory</span>
          </Link>
          <Link href="/helpdesk" className="flex flex-col items-center p-4 hover:bg-gray-50">
            <img src="/placeholder.svg" alt="" className="h-6 w-6 mb-2" />
            <span className="text-sm text-gray-600">Helpdesk</span>
          </Link>
          <Link href="/reports" className="flex flex-col items-center p-4 hover:bg-gray-50">
            <img src="/placeholder.svg" alt="" className="h-6 w-6 mb-2" />
            <span className="text-sm text-gray-600">Reports</span>
          </Link>
          <Link href="/org-chart" className="flex flex-col items-center p-4 hover:bg-gray-50">
            <img src="/placeholder.svg" alt="" className="h-6 w-6 mb-2" />
            <span className="text-sm text-gray-600">Org Chart</span>
          </Link>
          <Link href="/time-off" className="flex flex-col items-center p-4 hover:bg-gray-50">
            <img src="/placeholder.svg" alt="" className="h-6 w-6 mb-2" />
            <span className="text-sm text-gray-600">Time Off</span>
          </Link>
        </div>
      </div>
    </div>

    {/* Mission Statement */}
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <blockquote className="text-center max-w-3xl mx-auto">
          <p className="text-2xl text-gray-700 italic mb-4">
           {` "Develop and promote intelligent, AI-driven products that enhance people's comfort and safety, support environmental sustainability, and uplift humanity."`}
          </p>
          <footer className="text-green-700 font-semibold">— Managing Director GSSAR</footer>
        </blockquote>
      </div>
    </section>
  </div>

  )
}

export default Hero