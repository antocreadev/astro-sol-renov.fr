"use client"

import { motion } from "framer-motion"
import { Home, Leaf, Zap, Target } from "lucide-react"

export default function VisionSection() {
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
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Une maison plus performante.
            <span className="block text-emerald-600">Une planète préservée.</span>
            <span className="block text-orange-500">Un quotidien transformé.</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Chez SolRenov, nous croyons qu'un habitat moderne est à la fois économe, confortable et durable. C'est
            pourquoi nous réunissons rénovation et solutions énergétiques de nouvelle génération pour créer des espaces
            de vie efficients et résilients.
          </p>

          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold">
            <Target className="w-6 h-6" />✨ Un seul interlocuteur, pour un projet global qui a du sens.
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Home className="w-12 h-12" />,
              title: "Habitat performant",
              description: "Isolation, menuiserie, ravalement pour un confort optimal",
              color: "emerald",
            },
            {
              icon: <Zap className="w-12 h-12" />,
              title: "Énergie intelligente",
              description: "Solaire, pompes à chaleur, domotique pour l'autonomie",
              color: "orange",
            },
            {
              icon: <Leaf className="w-12 h-12" />,
              title: "Impact durable",
              description: "Solutions écologiques pour préserver l'environnement",
              color: "emerald",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-emerald-200 text-center">
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-6 ${
                    item.color === "emerald" ? "bg-emerald-100 text-emerald-600" : "bg-orange-100 text-orange-600"
                  } group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
