"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Home, Euro } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-orange-50 mt-4"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium"
            >
              <Zap className="w-4 h-4" />
              Expert tout-en-un en rénovation énergétique
            </motion.div>

            {/* Main Headline - SEO optimisé */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-7xl font-bold leading-tight"
              >
                <span className="block text-gray-900">
                  Rénovation Énergétique
                </span>
                <span className="block text-emerald-600">
                  Panneaux Solaires
                </span>
                <span className="block text-orange-500">
                  Expert Certifié RGE
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                🏡 Isolation thermique, pompe à chaleur, autoconsommation
                solaire. 🌱 Jusqu'à 70% d'économies d'énergie. 💶 Jusqu'à 9000€
                d'aides cumulables.
              </motion.p>
            </div>

            {/* Value Proposition */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-emerald-100 shadow-lg"
            >
              <p className="text-lg text-gray-700 mb-4">
                <strong className="text-emerald-600">SolRenov</strong>, expert
                en rénovation énergétique et énergies renouvelables.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Home className="w-5 h-5 text-emerald-500" />
                  <span>Rénovation globale</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-orange-500" />
                  <span>Solutions énergétiques</span>
                </div>
                <div className="flex items-center gap-2">
                  <Euro className="w-5 h-5 text-emerald-500" />
                  <span>Aides & accompagnement</span>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                📞 Obtenir mon devis gratuit
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-orange-400 text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 group"
              >
                📍 Éligibilité aides & primes
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-center p-4 bg-gradient-to-r from-emerald-50 to-orange-50 rounded-xl"
            >
              <p className="text-sm text-gray-600 mb-2">
                👉 Bilan énergétique offert & accompagnement complet
              </p>
              <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
                <span>✅ Certifié RGE</span>
                <span>✅ 2000+ projets</span>
                <span>✅ Accompagnement total</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bottom-[80px] rounded-3xl overflow-hidden shadow-2xl h-[700px] flex items-center justify-center">
              <img
                src="hero.png"
                alt="Maison moderne avec panneaux solaires"
                className="w-[90%] h-auto object-cover p-4"
              />

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
              >
                <div className="text-2xl font-bold text-emerald-600">70%</div>
                <div className="text-sm text-gray-600">d'économies</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
              >
                <div className="text-2xl font-bold text-orange-600">+30%</div>
                <div className="text-sm text-gray-600">valeur ajoutée</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
