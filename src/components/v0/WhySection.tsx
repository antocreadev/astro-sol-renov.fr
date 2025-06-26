"use client"

import { motion } from "framer-motion"
import { Heart, Leaf, TrendingUp, Home } from "lucide-react"

export default function WhySection() {
  const reasons = [
    {
      icon: <Heart className="w-12 h-12" />,
      title: "D'un futur plus sain pour vos enfants",
      description: "Chaque geste compte pour préserver l'environnement de demain",
      color: "red",
    },
    {
      icon: <Home className="w-12 h-12" />,
      title: "D'un chez-vous qui respire la modernité",
      description: "Un habitat connecté, intelligent et parfaitement optimisé",
      color: "emerald",
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "D'un investissement qui rapporte dès le premier hiver",
      description: "Rentabilité immédiate et valorisation patrimoniale garantie",
      color: "orange",
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      title: "D'une maison alignée avec vos valeurs écologiques",
      description: "Réduisez votre empreinte carbone sans compromis sur le confort",
      color: "emerald",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-3 rounded-full text-lg font-medium mb-6">
            🧬 Ce n'est pas qu'un chantier. C'est une transition de vie.
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Chez SolRenov, chaque projet
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-orange-500">
              est une promesse
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-emerald-200 h-full">
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-6 ${
                    reason.color === "red"
                      ? "bg-red-100 text-red-500"
                      : reason.color === "emerald"
                        ? "bg-emerald-100 text-emerald-600"
                        : "bg-orange-100 text-orange-600"
                  } group-hover:scale-110 transition-transform duration-300`}
                >
                  {reason.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{reason.title}</h3>

                <p className="text-gray-600 text-lg leading-relaxed">{reason.description}</p>
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
          <div className="bg-gradient-to-r from-gray-900 via-emerald-900 to-gray-900 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-orange-600/10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                Vous méritez un habitat qui vous ressemble.
              </h3>
              <p className="text-2xl text-emerald-200 mb-8">Et qui respecte ce qui vous entoure.</p>

              <div className="flex items-center justify-center gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-emerald-300">Confort</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                  <span className="text-orange-300">Économies</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-emerald-300">Écologie</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
