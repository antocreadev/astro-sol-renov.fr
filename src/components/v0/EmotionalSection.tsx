"use client"

import { motion } from "framer-motion"
import { Heart, Zap, Shield, TrendingUp } from "lucide-react"

export default function EmotionalSection() {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "réduisent leur facture de chauffage",
      value: "1100 €/an",
      color: "emerald",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "produisent leur propre énergie",
      value: "100% autonome",
      color: "orange",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "gagnent en confort et sécurité",
      value: "Tranquillité",
      color: "emerald",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "valorisent leur patrimoine",
      value: "+30% valeur",
      color: "orange",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-orange-100 text-emerald-800 px-6 py-3 rounded-full text-lg font-medium mb-6">
            <Heart className="w-5 h-5 text-red-500" />
            Et si votre maison devenait votre meilleur investissement ?
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Chaque jour, des milliers de foyers
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-orange-500">
              comme le vôtre
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-emerald-200">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                    benefit.color === "emerald" ? "bg-emerald-100 text-emerald-600" : "bg-orange-100 text-orange-600"
                  } group-hover:scale-110 transition-transform duration-300`}
                >
                  {benefit.icon}
                </div>

                <div
                  className={`text-3xl font-bold mb-2 ${
                    benefit.color === "emerald" ? "text-emerald-600" : "text-orange-600"
                  }`}
                >
                  {benefit.value}
                </div>

                <p className="text-gray-600 leading-relaxed">{benefit.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-orange-600/20"></div>
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Et vous ? Vous pouvez attendre que les prix de l'énergie explosent.
              </h3>
              <p className="text-xl text-gray-300 mb-8">Ou faire le choix de reprendre le contrôle dès aujourd'hui.</p>
              <div className="inline-flex items-center gap-4">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-emerald-400 font-semibold">Le moment d'agir, c'est maintenant</span>
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
