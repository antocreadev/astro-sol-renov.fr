"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Zap } from "lucide-react";

export default function CTASection() {
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-orange-600 text-white px-6 py-3 rounded-full text-lg font-medium mb-6">
            🎯 Vous voulez un habitat plus intelligent, plus rentable, plus
            durable ?
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Nous le réalisons
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-orange-500">
              pour vous
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            <strong className="text-emerald-600">SolRenov</strong> gère tout
            votre projet de rénovation énergétique, du conseil à la pose, en
            passant par les aides et subventions.
            <br />
            <span className="text-2xl font-semibold text-gray-900 mt-4 block">
              Nous transformons votre maison. Vous transformez votre quotidien.
            </span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-8 rounded-2xl text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 group h-auto flex-col gap-4"
          >
            <Zap className="w-12 h-12 group-hover:scale-110 transition-transform" />
            <div>
              <div className="text-2xl mb-2">
                🚀 Demandez votre étude gratuite
              </div>
              <div className="text-emerald-200 text-sm font-normal">
                Bilan énergétique complet offert
              </div>
            </div>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-3 border-orange-400 text-orange-700 hover:bg-orange-50 hover:text-orange-800 px-8 py-8 rounded-2xl text-xl font-bold transition-all duration-300 group h-auto flex-col gap-4 bg-white"
          >
            <Phone className="w-12 h-12 group-hover:rotate-12 transition-transform text-orange-600" />
            <div>
              <div className="text-2xl mb-2">💬 Être rappelé dans l'heure</div>
              <div className="text-orange-600 text-sm font-normal">
                Conseil personnalisé immédiat
              </div>
            </div>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-3 border-emerald-400 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800 px-8 py-8 rounded-2xl text-xl font-bold transition-all duration-300 group h-auto flex-col gap-4 bg-white"
          >
            <div>
              <div className="text-2xl mb-2">
                📍 Simulez vos aides en 2 minutes
              </div>
              <div className="text-emerald-600 text-sm font-normal">
                Calcul personnalisé gratuit
              </div>
            </div>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-900 via-emerald-900 to-gray-900 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-orange-600/20"></div>
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Prêt à transformer votre habitat en investissement rentable ?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Rejoignez les milliers de propriétaires qui ont fait confiance à
                SolRenov pour leur transition énergétique
              </p>

              <div className="flex items-center justify-center gap-8 text-emerald-300">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span>Certifié RGE</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                  <span>Aides garanties</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span>SAV 10 ans</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
