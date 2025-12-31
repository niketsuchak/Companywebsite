"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Wind, Shield, Zap, Factory, CheckCircle, ArrowRight, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

const products = [
  {
    id: "ry2500bx",
    name: "RY2500BX",
    description: "Compact electrostatic air cleaner for light to medium pollution control in kitchens, workshops, and AHUs. Handles up to 4600 CMH airflow.",
    features: ["UL Listed (E532141)", "MERV 14 Rating", "Digital Power Supply with PWM"],
    image: "/ry2500.jpeg",
    capacity: "2500-4600 CMH",
    efficiency: "Up to 96% (ASHRAE 52.2-2012)",
    applications: ["Small Commercial Kitchens", "Workshops", "Light Industrial"]
  },
  {
    id: "ry5000bx",
    name: "RY5000BX",
    description: "Mid-size unit ideal for larger kitchens and factories. Effectively filters dust, fumes, and mist with up to 9200 CMH airflow.",
    features: ["Dual Electrostatic Cells", "BMS Integration", "Auto Power Cut-off"],
    image: "/ry5000.jpeg",
    capacity: "5000-9200 CMH",
    efficiency: "Up to 96% (ASHRAE 52.2-2012)",
    applications: ["Large Commercial Kitchens", "Manufacturing", "Food Processing"]
  },
  {
    id: "ry7500bx",
    name: "RY7500BX",
    description: "High-capacity cleaner for industrial settings. Captures heavy pollutants like oil mist and smoke. Supports up to 13,800 CMH airflow.",
    features: ["Triple Cell Configuration", "Industrial Grade Construction", "Remote Monitoring"],
    image: "/ry7500.jpeg",
    capacity: "7500-13,800 CMH",
    efficiency: "Up to 96% (ASHRAE 52.2-2012)",
    applications: ["Heavy Industry", "Oil Mist Filtration", "Welding Shops"]
  },
  {
    id: "ry10000bx",
    name: "RY10000BX",
    description: "Largest model for intensive industrial use. Filters large volumes of air up to 18,400 CMH, ideal for heavy-duty applications.",
    features: ["Quad Cell Design", "Maximum Collecting Area", "Heavy-Duty Performance"],
    image: "/ry10000.jpeg",
    capacity: "10,000-18,400 CMH",
    efficiency: "Up to 96% (ASHRAE 52.2-2012)",
    applications: ["Large Industrial Facilities", "Power Plants", "Steel Mills"]
  },
]

const clients = [
  { name: "Industrial Corp", logo: "/amazon.png" },
  { name: "Kitchen Solutions", logo: "/accenture.png" },
  { name: "Manufacturing Ltd", logo: "/hilton.png" },
  { name: "Restaurant Group", logo: "/itc.jpeg" },
  { name: "Factory Systems", logo: "/mcd.png" },
  { name: "Commercial Kitchens", logo: "/novotel.jpeg" },
]

const specifications = [
  { feature: "Efficiency Rating", value: "Up to 96% (ASHRAE 52.2-2012)" },
  { feature: "MERV Rating", value: "MERV 14" },
  { feature: "UL Listing", value: "E532141" },
  { feature: "Power Supply", value: "Digital with PWM Control" },
  { feature: "Maintenance", value: "Washable Filters" },
  { feature: "Operating Temperature", value: "-10°C to 60°C" },
]

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mounted, setMounted] = useState(false)
  const images = ['/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg', '/5.jpg', '/6.jpg', '/7.jpg']

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Navbar */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 min-h-screen flex flex-col">
        <div className="absolute inset-0 bg-[url(/tree-background.jpeg)] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 pt-6 pb-20 flex flex-col h-full">
          {/* Navbar */}
          <nav className="flex items-center justify-between mb-10">
            <div className="flex items-center space-x-3">
              <Image src="/logo.png" alt="RydAiR Logo" width={120} height={40} className="h-10 w-auto" />
              <p className="text-sm text-gray-600 hidden sm:block">by Tarang Engineers</p>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="#products" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Products
              </Link>
              <Link href="#specifications" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Specifications
              </Link>
              <Link href="#clients" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Clients
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-20 left-4 right-4 bg-white rounded-lg shadow-lg border p-4 z-50">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="text-gray-900 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
                <Link href="#products" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                  Products
                </Link>
                <Link href="#specifications" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                  Specifications
                </Link>
                <Link href="#clients" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                  Clients
                </Link>
                <Link href="#contact" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
              </div>
            </div>
          )}

          {/* Hero Content */}
          <div className="flex-1 grid lg:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 animate-fade-in">
                  Advanced Air Filtration Technology
                </Badge>
                <div className="flex items-center bg-white rounded-lg px-3 py-2 shadow-md border animate-fade-in delay-100">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-2">
                    <span className="text-white font-bold text-xs">UL</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-700">UL Listed</span>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6 animate-fade-in delay-200">
                RydAiR BX Series
                <br />
                <span className="text-3xl lg:text-5xl text-blue-600 block mt-2">ELECTROSTATIC AIR CLEANERS</span>
                <span className="text-xl lg:text-2xl text-gray-700 font-normal block mt-2">
                  For Commercial & Industrial Applications
                </span>
              </h1>
              
              <p className="text-lg text-gray-700 mb-8 animate-fade-in delay-300 leading-relaxed">
                UL-listed electrostatic air cleaners for commercial kitchens, factories, workshops, and industrial
                facilities. MERV 14 rated with up to 96% efficiency for superior air quality and environmental compliance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-400">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 shadow-lg transition-all hover:scale-105">
                  <a href="#products" className="flex items-center">
                    Explore Products <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="shadow-md transition-all hover:scale-105">
                  <a href="#contact">Get Quote</a>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in delay-500">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-lg blur-3xl opacity-20 animate-float"></div>
              {mounted ? (
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {images.map((image, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <Image
                          src={image}
                          alt={`RydAiR Product ${index + 1}`}
                          width={600}
                          height={500}
                          className="w-full h-[500px] object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentSlide ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <Image
                  src="/1.jpg"
                  alt="RydAiR Electrostatic Air Filter System"
                  width={600}
                  height={500}
                  className="relative rounded-lg shadow-2xl w-full h-[500px] object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose RydAiR Electrostatic Filters?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced electrostatic technology delivers superior air filtration performance with minimal
              maintenance requirements and maximum efficiency.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">UL Listed & MERV 14 Rated</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Advanced electrostatic charging removes particles with up to 96% efficiency, meeting the highest industry standards.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Washable & Low Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Washable filters reduce operating costs and environmental impact while maintaining consistent performance.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Factory className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Digital Power Supply</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">PWM-controlled digital power supply ensures optimal performance and energy efficiency in demanding environments.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Product Range</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of electrostatic air cleaners designed for different capacity requirements and applications.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <Card key={product.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="w-full h-64 md:h-full object-contain bg-gray-50"
                    />
                  </div>
                  <div className="md:w-1/2 p-6">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-2xl text-blue-600">{product.name}</CardTitle>
                        <Badge variant="secondary">{product.capacity}</Badge>
                      </div>
                      <CardDescription className="text-base">{product.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent className="p-0">
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {product.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Applications:</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.applications.map((app, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {app}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="text-sm text-gray-600 mb-4">
                        <strong>Efficiency:</strong> {product.efficiency}
                      </div>
                      
                      <Link href={`/products/${product.id}`} className="w-full">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                          Learn More
                        </Button>
                      </Link>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section id="specifications" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All RydAiR BX Series units meet stringent quality and performance standards.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium text-gray-900">{spec.feature}</span>
                      <span className="text-blue-600 font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-600">
              Join hundreds of satisfied customers who trust RydAiR for their air filtration needs.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={80}
                  className="max-w-full h-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to improve your air quality? Contact us for a consultation and custom quote.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Mail className="w-6 h-6 text-blue-600 mr-3" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">tarangengineershvac@gmail.com</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Phone className="w-6 h-6 text-blue-600 mr-3" />
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">+91 99111 12964</p>
                  <p className="text-gray-600">+91 98111 12964</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                    Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Tarang Engineers<br />
                    Khayala Industrial Area, Vishnu Garden<br />
                    New Delhi, India - 110018
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <Card className="shadow-lg bg-blue-50 mt-8">
              <CardContent className="p-8 text-center">
                <h4 className="font-semibold text-2xl mb-6">Why Choose Us?</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="flex flex-col items-center">
                    <CheckCircle className="w-8 h-8 text-green-500 mb-2" />
                    <span className="font-medium">25+ Years of Experience</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <CheckCircle className="w-8 h-8 text-green-500 mb-2" />
                    <span className="font-medium">UL Listed Products</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <CheckCircle className="w-8 h-8 text-green-500 mb-2" />
                    <span className="font-medium">24/7 Technical Support</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <CheckCircle className="w-8 h-8 text-green-500 mb-2" />
                    <span className="font-medium">Nationwide Service Network</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/logo.png" alt="RydAiR Logo" width={120} height={40} className="h-8 w-auto" />
              </div>
              <p className="text-gray-400 text-sm">
                Leading manufacturer of UL-listed electrostatic air cleaners for commercial and industrial applications.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#products" className="hover:text-white transition-colors">RY2500BX</Link></li>
                <li><Link href="#products" className="hover:text-white transition-colors">RY5000BX</Link></li>
                <li><Link href="#products" className="hover:text-white transition-colors">RY7500BX</Link></li>
                <li><Link href="#products" className="hover:text-white transition-colors">RY10000BX</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#clients" className="hover:text-white transition-colors">Our Clients</Link></li>
                <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>info@tarangengineers.com</li>
                <li>+91 98765 43210</li>
                <li>New Delhi, India</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Tarang Engineers. All rights reserved. RydAiR is a trademark of Tarang Engineers.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}