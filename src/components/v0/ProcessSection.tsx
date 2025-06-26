"use client"

import { motion } from "framer-motion"
import { Phone, Search, Wrench, Users, Shield, CheckCircle } from "lucide-react"

export default function ProcessSection() {
  const steps = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Premier contact express",
      description: "Sous 24h max",
      details: "Échange téléphonique pour comprendre vos besoins et objectifs",
      color: "emerald",
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Audit énergétique & simulation d'aides",
      description: "Gratuit",
      details: "Diagnostic complet de votre habitat et calcul précis des subventions",
      color: "orange",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Conception du projet sur-mesure",
      description: "Personnalisé",
      details: "Plan détaillé adapté à votre budget et vos contraintes techniques",
      color: "emerald",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Réalisation par nos artisans certifiés",
      description: "Qualité garantie",
      details: "Équipes RGE expérimentées, matériaux premium, respect des délais",
      color: "orange",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Suivi & SAV réactif pendant 10 ans",
      description: "Tranquillité totale",
      details: "Maintenance préventive et intervention rapide en cas de besoin",
      color: "emerald",
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-orange-600 text-white px-6 py-3 rounded-full text-lg font-medium mb-6">
            🛤️ Un parcours simple, fluide, accompagné
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Votre transformation
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-orange-500">
              en 5 étapes
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            De la première prise de contact à la garantie décennale, nous vous accompagnons à chaque instant
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-200 via-orange-200 to-emerald-200 hidden lg:block"></div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                {/* Step Number & Content */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2 lg:text-right" : ""}`}>
                  <div
                    className={`inline-flex items-center gap-4 mb-6 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                  >
                    <div
                      className={`w-16 h-16 rounded-full ${
                        step.color === "emerald" ? "bg-emerald-600" : "bg-orange-600"
                      } text-white flex items-center justify-center text-2xl font-bold`}
                    >
                      {index + 1}
                    </div>
                    <div
                      className={`w-16 h-16 rounded-2xl ${
                        step.color === "emerald" ? "bg-emerald-100 text-emerald-600" : "bg-orange-100 text-orange-600"
                      } flex items-center justify-center`}
                    >
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{step.title}</h3>

                  <p
                    className={`text-xl font-semibold mb-4 ${
                      step.color === "emerald" ? "text-emerald-600" : "text-orange-600"
                    }`}
                  >
                    {step.description}
                  </p>

                  <p className="text-gray-600 text-lg leading-relaxed">{step.details}</p>
                </div>

                {/* Visual Element */}
                <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div
                    className={`relative rounded-3xl p-8 ${
                      step.color === "emerald"
                        ? "bg-gradient-to-br from-emerald-50 to-emerald-100"
                        : "bg-gradient-to-br from-orange-50 to-orange-100"
                    } border-2 ${step.color === "emerald" ? "border-emerald-200" : "border-orange-200"}`}
                  >
                    <div className="text-center">
                      <div
                        className={`w-24 h-24 mx-auto rounded-full ${
                          step.color === "emerald" ? "bg-emerald-600" : "bg-orange-600"
                        } text-white flex items-center justify-center mb-4`}
                      >
                        {step.icon}
                      </div>
                      <div
                        className={`text-6xl font-bold ${
                          step.color === "emerald" ? "text-emerald-600" : "text-orange-600"
                        } mb-2`}
                      >
                        {index + 1}
                      </div>
                      <div className="text-gray-600 font-medium">Étape {index + 1}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-emerald-600 to-orange-600 rounded-3xl p-12 text-white">
            <div className="flex items-center justify-center gap-6 mb-6">
              <CheckCircle className="w-8 h-8" />
              <span className="text-2xl font-bold">Transparence totale</span>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-2xl font-bold">Zéro frais caché</span>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-2xl font-bold">Accompagnement complet</span>
            </div>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">
              Nous gérons 100% des démarches administratives pour vos aides et subventions. Vous n'avez qu'à profiter de
              votre nouveau confort.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
