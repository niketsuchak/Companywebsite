import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle, Download, Mail, Zap, Shield, Factory } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

const products = {
  "ry2500bx": {
    name: "RY2500BX",
    description: "Compact electrostatic air cleaner designed for light to medium pollution control in commercial kitchens, workshops, and AHUs. Perfect for smaller facilities requiring reliable air filtration.",
    features: [
      "UL Listed (E532141)",
      "MERV 14 Rating",
      "Digital Power Supply with PWM",
      "Washable Electrostatic Cells",
      "Low Maintenance Design",
      "Energy Efficient Operation"
    ],
    image: "/ry2500.jpeg",
    capacity: "2500-4600 CMH",
    efficiency: "Up to 96% (ASHRAE 52.2-2012)",
    applications: ["Small Commercial Kitchens", "Workshops", "Light Industrial", "AHU Integration"],
    specifications: {
      "Airflow Capacity": "2500-4600 CMH",
      "Efficiency": "Up to 96% (ASHRAE 52.2-2012)",
      "MERV Rating": "MERV 14",
      "Power Supply": "Digital with PWM Control",
      "Operating Temperature": "-10°C to 60°C",
      "Dimensions": "600 x 400 x 300 mm",
      "Weight": "25 kg",
      "Power Consumption": "150W"
    }
  },
  "ry5000bx": {
    name: "RY5000BX",
    description: "Mid-size electrostatic air cleaner ideal for larger commercial kitchens and manufacturing facilities. Features dual electrostatic cells for enhanced filtration performance.",
    features: [
      "Dual Electrostatic Cells",
      "BMS Integration Ready",
      "Auto Power Cut-off Safety",
      "Remote Monitoring Capability",
      "Industrial Grade Construction",
      "Easy Maintenance Access"
    ],
    image: "/ry5000.jpeg",
    capacity: "5000-9200 CMH",
    efficiency: "Up to 96% (ASHRAE 52.2-2012)",
    applications: ["Large Commercial Kitchens", "Manufacturing", "Food Processing", "Pharmaceutical"],
    specifications: {
      "Airflow Capacity": "5000-9200 CMH",
      "Efficiency": "Up to 96% (ASHRAE 52.2-2012)",
      "MERV Rating": "MERV 14",
      "Power Supply": "Digital with PWM Control",
      "Operating Temperature": "-10°C to 60°C",
      "Dimensions": "800 x 600 x 400 mm",
      "Weight": "45 kg",
      "Power Consumption": "300W"
    }
  },
  "ry7500bx": {
    name: "RY7500BX",
    description: "High-capacity electrostatic air cleaner engineered for demanding industrial environments. Effectively captures heavy pollutants including oil mist, smoke, and fine particles.",
    features: [
      "Triple Cell Configuration",
      "Industrial Grade Construction",
      "Remote Monitoring System",
      "Heavy-Duty Performance",
      "Corrosion Resistant Materials",
      "Advanced Control System"
    ],
    image: "/ry7500.jpeg",
    capacity: "7500-13,800 CMH",
    efficiency: "Up to 96% (ASHRAE 52.2-2012)",
    applications: ["Heavy Industry", "Oil Mist Filtration", "Welding Shops", "Metal Processing"],
    specifications: {
      "Airflow Capacity": "7500-13,800 CMH",
      "Efficiency": "Up to 96% (ASHRAE 52.2-2012)",
      "MERV Rating": "MERV 14",
      "Power Supply": "Digital with PWM Control",
      "Operating Temperature": "-10°C to 60°C",
      "Dimensions": "1000 x 800 x 500 mm",
      "Weight": "75 kg",
      "Power Consumption": "450W"
    }
  },
  "ry10000bx": {
    name: "RY10000BX",
    description: "Our largest and most powerful electrostatic air cleaner designed for intensive industrial applications. Handles the highest volumes of contaminated air with maximum efficiency.",
    features: [
      "Quad Cell Design",
      "Maximum Collecting Area",
      "Heavy-Duty Performance",
      "Advanced Monitoring System",
      "Redundant Safety Features",
      "Modular Construction"
    ],
    image: "/ry10000.jpeg",
    capacity: "10,000-18,400 CMH",
    efficiency: "Up to 96% (ASHRAE 52.2-2012)",
    applications: ["Large Industrial Facilities", "Power Plants", "Steel Mills", "Chemical Processing"],
    specifications: {
      "Airflow Capacity": "10,000-18,400 CMH",
      "Efficiency": "Up to 96% (ASHRAE 52.2-2012)",
      "MERV Rating": "MERV 14",
      "Power Supply": "Digital with PWM Control",
      "Operating Temperature": "-10°C to 60°C",
      "Dimensions": "1200 x 1000 x 600 mm",
      "Weight": "120 kg",
      "Power Consumption": "600W"
    }
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products[slug as keyof typeof products]
  
  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <div className="flex items-center space-x-3">
              <Image src="/logo.png" alt="RydAiR Logo" width={120} height={40} className="h-8 w-auto" />
            </div>
          </div>
        </div>
      </header>

      {/* Product Hero */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">
                UL Listed • MERV 14 Rated
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-white rounded-lg px-4 py-2 shadow-sm border">
                  <span className="text-sm text-gray-500">Capacity</span>
                  <div className="font-semibold text-blue-600">{product.capacity}</div>
                </div>
                <div className="bg-white rounded-lg px-4 py-2 shadow-sm border">
                  <span className="text-sm text-gray-500">Efficiency</span>
                  <div className="font-semibold text-green-600">{product.efficiency}</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features & Applications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Key Features */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Key Features</CardTitle>
                <CardDescription>
                  Advanced technology and design features that set this model apart.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Applications */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Ideal Applications</CardTitle>
                <CardDescription>
                  Perfect for these industries and use cases.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4">
                  {product.applications.map((application, index) => (
                    <div key={index} className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="font-medium">{application}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-slate-900 mb-6">Technical Specifications</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technical details and performance metrics for the {product.name} model.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <Card className="shadow-2xl bg-white/90 backdrop-blur-sm border border-white/20 rounded-3xl overflow-hidden">
              <CardContent className="p-0">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-3xl font-bold mb-2">{product.name} Specifications</h3>
                      <p className="text-blue-100 text-lg">UL Listed • MERV 14 Rated • Industrial Grade</p>
                    </div>
                    <div className="hidden md:block">
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center">
                        <div className="text-2xl font-bold">{product.efficiency.split(' ')[2]}</div>
                        <div className="text-sm text-blue-100">Efficiency</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Specifications Grid */}
                <div className="p-10">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {Object.entries(product.specifications).map(([key, value], index) => (
                      <div key={index} className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 bg-slate-50 hover:bg-slate-100 border border-slate-200 shadow-sm hover:shadow-md">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h4 className="font-bold text-lg mb-2 text-slate-900">
                              {key}
                            </h4>
                            <p className="text-xl font-semibold text-slate-700">
                              {value}
                            </p>
                          </div>
                        </div>
                        
                        {/* Hover effect overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Performance Highlights */}
                  <div className="mt-12 p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl border border-green-200">
                    <h4 className="text-2xl font-bold text-slate-900 mb-6 text-center">Performance Highlights</h4>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <CheckCircle className="w-8 h-8 text-white" />
                        </div>
                        <h5 className="font-bold text-lg text-slate-900 mb-2">UL Listed Safety</h5>
                        <p className="text-slate-600">Certified for commercial and industrial use with listing E532141</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <Badge className="w-8 h-8 text-white bg-transparent border-0 p-0 text-lg font-bold">14</Badge>
                        </div>
                        <h5 className="font-bold text-lg text-slate-900 mb-2">MERV 14 Rating</h5>
                        <p className="text-slate-600">Superior filtration efficiency for fine particles and contaminants</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <Zap className="w-8 h-8 text-white" />
                        </div>
                        <h5 className="font-bold text-lg text-slate-900 mb-2">Digital Control</h5>
                        <p className="text-slate-600">PWM-controlled power supply for optimal performance and efficiency</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Improve Your Air Quality?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact our experts for a custom quote and consultation for the {product.name}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Link href="/#contact">Get Quote Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              <Link href="/#products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Image src="/logo.png" alt="RydAiR Logo" width={120} height={40} className="h-6 w-auto brightness-0 invert" />
          </div>
          <p className="text-gray-400 text-sm">
            &copy; 2024 Tarang Engineers. All rights reserved. RydAiR is a trademark of Tarang Engineers.
          </p>
        </div>
      </footer>
    </div>
  )
}

export function generateStaticParams() {
  return Object.keys(products).map((slug) => ({
    slug,
  }))
}