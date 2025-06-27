import { useState, useEffect, useRef } from "react";
import { Lightbulb, Globe, Heart, Zap } from "lucide-react";
import { useInViewAnimation } from "@/hooks/use-in-view-animation";

const VisionSection = () => {
  const { isVisible, sectionRef } = useInViewAnimation(0.05, 0.1);

  return (
    <section
      id="vision"
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-br from-white via-green-50 to-orange-50 relative overflow-hidden"
    >
      {/* Éléments décoratifs */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-green-200/30 rounded-full blur-2xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-orange-200/30 rounded-full blur-2xl" />

      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 mb-6">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <span className="text-blue-600 font-medium">Notre vision</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            Une maison plus{" "}
            <span className="bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent">
              performante.
            </span>
            <br />
            Une planète <span className="text-green-600">préservée.</span>
            <br />
            Un quotidien <span className="text-orange-600">transformé.</span>
          </h2>

          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            Chez SolRenov, nous croyons qu'un habitat moderne est à la fois{" "}
            <span className="font-bold text-green-600">
              économe, confortable et durable
            </span>
            .
            <br />
            C'est pourquoi nous réunissons rénovation et solutions énergétiques
            de nouvelle génération pour créer des espaces de vie efficients et
            résilients.
          </p>

          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-orange-600 text-white rounded-full px-8 py-4 shadow-lg">
            <Zap className="w-6 h-6" />
            <span className="text-xl font-semibold">
              Un seul interlocuteur, pour un projet global qui a du sens.
            </span>
          </div>
        </div>

        {/* Cards des valeurs */}
        <div className="grid md:grid-cols-3 gap-8">
          <div
            className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-green-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <Heart className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Performance
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Des solutions techniques de pointe pour maximiser vos économies
              d'énergie et votre confort au quotidien.
            </p>
          </div>

          <div
            className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-orange-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
              <Globe className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Durabilité
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Chaque projet contribue à la préservation de notre planète avec
              des matériaux et technologies éco-responsables.
            </p>
          </div>

          <div
            className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border-l-4 border-blue-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <Lightbulb className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Innovation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Technologies de pointe et approche globale pour un habitat
              intelligent qui anticipe vos besoins.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
