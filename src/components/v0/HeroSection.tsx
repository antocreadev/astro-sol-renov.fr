"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Home, Euro, Calculator, Sun } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-orange-50 mt-4"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 relative  top-[11%]"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mt-6 md:mt-4 sm:mt-0"
            >
              <Zap className="w-4 h-4 " />
              Expert en rénovation énergétique et énergies renouvelables.
            </motion.div>

            {/* Main Headline - SEO optimisé */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-7xl font-bold leading-tight"
              >
                <span className="block text-gray-900">Rénovez,</span>
                <span className="block text-emerald-600">Économisez,</span>
                <span className="block text-orange-500">Respirez.</span>
              </motion.h1>
            </div>

            {/* Services Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-emerald-100 shadow-lg space-y-4"
            >
              {/* Header */}
              <div></div>

              {/* Services */}
              <div className="space-y-6">
                {/* Rénovation énergétique */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-emerald-600" />
                    Rénovation énergétique complète
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Isolation, chauffage, ventilation - Un projet global pour
                    maximiser vos économies
                  </p>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                    onClick={() =>
                      window.open("https://simulation.sol-renov.com", "_blank")
                    }
                  >
                    Simuler mon projet
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Panneaux solaires */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <Sun className="w-5 h-5 text-orange-600" />
                    Installation panneaux solaires
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Autoconsommation, revente d'énergie - Devenez producteur
                    d'électricité verte
                  </p>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-orange-400 text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                    onClick={() =>
                      window.open(
                        "https://simulation-solaire.sol-renov.com",
                        "_blank"
                      )
                    }
                  >
                    Simuler mon projet
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Trust Indicators */}
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative  top-[10%]"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[600px] flex items-center justify-center ">
              <img
                src="hero.png"
                alt="Maison moderne avec panneaux solaires"
                className="w-[90%] h-auto object-cover p-4"
              />

              {/* Floating Cards */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
