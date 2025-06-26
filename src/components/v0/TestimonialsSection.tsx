"use client";

import { motion } from "framer-motion";
import { Star, Quote, Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sophie",
      age: 42,
      location: "Bordeaux",
      quote:
        "J'ai divisé ma facture par deux, j'ai gagné en confort… et ma maison a pris 60 000 € de valeur !",
      details: "Isolation complète + PAC + panneaux solaires",
      savings: "1200€/an",
      valueIncrease: "60 000€",
      image: "/placeholder.svg?height=400&width=300",
      beforeAfter: "/placeholder.svg?height=200&width=400",
    },
    {
      name: "Marc & Julie",
      location: "Montpellier",
      quote:
        "Une équipe au top, pro, humaine, qui gère tout de A à Z. On dort tranquille.",
      details: "Rénovation globale avec autoconsommation",
      savings: "950€/an",
      valueIncrease: "45 000€",
      image: "/placeholder.svg?height=400&width=300",
      beforeAfter: "/placeholder.svg?height=200&width=400",
    },
    {
      name: "Catherine",
      age: 55,
      location: "Lyon",
      quote:
        "En 6 mois, ma maison est devenue un cocon moderne et écologique. Mes enfants sont fiers !",
      details: "Isolation + menuiserie + domotique",
      savings: "800€/an",
      valueIncrease: "35 000€",
      image: "/placeholder.svg?height=400&width=300",
      beforeAfter: "/placeholder.svg?height=200&width=400",
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800 px-6 py-3 rounded-full text-lg font-medium mb-6">
            🥇 Ils ont transformé leur habitat avec SolRenov
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Des transformations
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-orange-500">
              qui parlent d'elles-mêmes
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les témoignages authentiques de nos clients et leurs
            résultats concrets
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-emerald-200">
                {/* Header with photo */}
                <div className="relative p-6 pb-0">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="w-15 h-15 rounded-full object-cover"
                      />
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                        <Star className="w-3 h-3 text-white fill-current" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">
                        {testimonial.name}
                        {testimonial.age && `, ${testimonial.age} ans`}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="relative">
                    <Quote className="w-8 h-8 text-emerald-200 absolute -top-2 -left-2" />
                    <p className="text-lg font-medium text-gray-900 leading-relaxed pl-6">
                      {testimonial.quote}
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="p-6 pt-4">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-emerald-50 rounded-xl">
                      <div className="text-2xl font-bold text-emerald-600">
                        {testimonial.savings}
                      </div>
                      <div className="text-xs text-emerald-700">économisés</div>
                    </div>
                    <div className="text-center p-3 bg-orange-50 rounded-xl">
                      <div className="text-2xl font-bold text-orange-600">
                        {testimonial.valueIncrease}
                      </div>
                      <div className="text-xs text-orange-700">
                        de plus-value
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">
                    {testimonial.details}
                  </p>

                  {/* Before/After preview */}
                  <div className="relative rounded-xl overflow-hidden mb-4">
                    <img
                      src={testimonial.beforeAfter || "/placeholder.svg"}
                      alt="Avant/Après"
                      width={400}
                      height={200}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">
                      Projet réalisé
                    </span>
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
          className="text-center space-y-8"
        >
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-6 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              📸 Voir les transformations avant/après
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-orange-400 text-orange-600 hover:bg-orange-50 px-8 py-6 rounded-xl text-lg font-semibold transition-all duration-300 group"
            >
              🎤 Écouter les témoignages vidéo
              <Play className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>

          <div className="bg-gradient-to-r from-emerald-600 to-orange-600 rounded-3xl p-8 text-white max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Star className="w-8 h-8 fill-current" />
              <span className="text-3xl font-bold">98.7% de satisfaction</span>
              <Star className="w-8 h-8 fill-current" />
            </div>
            <p className="text-white/90 text-lg">
              Sur plus de 2000 projets réalisés, nos clients recommandent
              SolRenov
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
