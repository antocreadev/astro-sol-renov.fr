"use client"

import { motion } from "framer-motion"
import { TrendingDown, TrendingUp, Clock, Users, Euro, CheckCircle } from "lucide-react"
// import CountUp from "@/components/ui/CountUp"

export default function StatsSection() {
  const stats = [
    {
      icon: <TrendingDown className="w-8 h-8" />,
      value: 72,
      suffix: "%",
      label: "moyenne des économies sur la facture annuelle énergie",
      color: "emerald",
      description: "Nos clients réduisent drastiquement leurs coûts énergétiques",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: 30,
      suffix: "%",
      label: "valeur moyenne ajoutée au bien immobilier rénové",
      color: "orange",
      description: "Votre investissement se transforme en plus-value immédiate",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: 2.5,
      suffix: " mois",
      label: "retour sur investissement sur l'isolation + PAC",
      color: "emerald",
      description: "Rentabilité ultra-rapide de vos travaux",
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: 98.7,
      suffix: "%",
      label: "taux de satisfaction client sur plus de 2000 projets",
      color: "orange",
      description: "Une expertise reconnue et approuvée",
    },
    {
      icon: <Euro className="w-8 h-8" />,
      value: 9000,
      suffix: "€",
      label: "aides et primes accessibles en moyenne",
      color: "emerald",
      description: "Nous maximisons vos subventions",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      value: 100,
      suffix: "%",
      label: "prise en charge administrative par notre équipe",
      color: "orange",
      description: "Zéro stress, zéro paperasse pour vous",
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
            📊 Des résultats réels. Pour des gens réels.
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Les chiffres qui
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-orange-500">
              changent tout
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chaque projet SolRenov génère des résultats mesurables et durables. Voici la preuve par les chiffres.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-emerald-200 relative overflow-hidden">
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${
                    stat.color === "emerald"
                      ? "bg-gradient-to-br from-emerald-400 to-emerald-600"
                      : "bg-gradient-to-br from-orange-400 to-orange-600"
                  }`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                      stat.color === "emerald" ? "bg-emerald-100 text-emerald-600" : "bg-orange-100 text-orange-600"
                    } group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stat.icon}
                  </div>

                  <div className="mb-4">
                    <div
                      className={`text-5xl font-bold mb-2 ${
                        stat.color === "emerald" ? "text-emerald-600" : "text-orange-600"
                      }`}
                    >
                      <span>{stat.value}</span>
                      <span className="text-3xl">{stat.suffix}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</h3>

                    <p className="text-gray-600 text-sm leading-relaxed">{stat.description}</p>
                  </div>
                </div>
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
          <div className="bg-gradient-to-r from-emerald-600 to-orange-600 rounded-3xl p-8 text-white">
            <div className="flex items-center justify-center gap-4 mb-4">
              <CheckCircle className="w-8 h-8" />
              <span className="text-2xl font-bold">Certifié RGE – Éligible MaPrimeRénov', CEE, Eco PTZ</span>
            </div>
            <p className="text-emerald-100 text-lg">
              Toutes nos installations respectent les normes les plus strictes et vous donnent accès aux aides maximales
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
