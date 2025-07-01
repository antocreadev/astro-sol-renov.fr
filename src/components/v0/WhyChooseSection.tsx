"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Target,
  Award,
  Shield,
  FileText,
  Users,
} from "lucide-react";

export default function WhyChooseSection() {
  const reasons = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Approche tout-en-un : rénovation + énergie = résultats concrets",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Expertise locale & certifiée",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Confort et économies dès le premier jour",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Haute qualité des matériaux et finitions",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Zéro paperasse : on s'occupe de tout",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Suivi personnalisé de A à Z",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-3 rounded-full text-lg font-medium mb-6">
            💡 Style manifeste
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Pourquoi choisir
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-orange-500">
              SolRenov ?
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-emerald-200 h-full">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {reason.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span className="text-emerald-600 font-semibold text-sm"></span>
                    </div>
                    <p className="text-gray-900 font-medium leading-relaxed">
                      {reason.title}
                    </p>
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
          <div className="bg-gradient-to-r from-emerald-600 to-orange-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <Target className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Notre mission
              </h3>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Transformer votre habitat en moteur d'économies et de confort
                durable.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
