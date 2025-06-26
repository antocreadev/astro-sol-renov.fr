"use client"

import { motion } from "framer-motion"
import { Zap, Users, Wrench } from "lucide-react"
import Image from "next/image"

export default function ServicesSection() {
  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Rénovation globale",
      items: [
        "Isolation intérieure & extérieure",
        "Ravalement, bardage, toiture",
        "Menuiseries haute performance",
        "Amélioration thermique & esthétique",
      ],
      color: "emerald",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Solutions énergétiques intelligentes",
      items: [
        "Panneaux solaires & autoconsommation",
        "Pompes à chaleur, ballons solaires, poêles à granulés",
        "Systèmes thermodynamiques & domotique",
        "Récupération d'eau de pluie & climat intelligent",
      ],
      color: "orange",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Accompagnement & aides",
      items: [
        "Bilan énergétique offert",
        "Étude de faisabilité technique et financière",
        "Prise en charge des démarches administratives",
        "Optimisation des aides d'État et primes CEE",
      ],
      color: "emerald",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-orange-100 text-emerald-800 px-6 py-3 rounded-full text-lg font-medium mb-6">
            🛠️ 3 Blocs de services complets
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Nos solutions
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-orange-500">
              tout-en-un
            </span>
          </h2>
        </motion.div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div
                  className={`inline-flex items-center gap-4 ${
                    service.color === "emerald" ? "bg-emerald-100 text-emerald-600" : "bg-orange-100 text-orange-600"
                  } px-6 py-3 rounded-2xl`}
                >
                  {service.icon}
                  <span className="font-semibold text-lg">{service.title}</span>
                </div>

                <div className="space-y-4">
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <div
                        className={`w-2 h-2 rounded-full mt-2 ${
                          service.color === "emerald" ? "bg-emerald-500" : "bg-orange-500"
                        }`}
                      ></div>
                      <p className="text-gray-700 text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div
                    className={`absolute top-6 right-6 w-12 h-12 rounded-full ${
                      service.color === "emerald" ? "bg-emerald-500" : "bg-orange-500"
                    } flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  >
                    {service.icon}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
