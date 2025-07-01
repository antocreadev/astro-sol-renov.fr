import { useState, useEffect, useRef } from "react";
import { TrendingUp, Users, Award, Euro } from "lucide-react";
import { useInViewAnimation } from "@/hooks/use-in-view-animation";

const StatsSection = () => {
  const { isVisible, sectionRef } = useInViewAnimation(0.05, 0.1);
  const [counters, setCounters] = useState({
    savings: 0,
    value: 0,
    payback: 0,
    satisfaction: 0,
    grants: 0,
    support: 0,
  });

  const finalValues = {
    savings: 72,
    value: 30,
    payback: 3,
    satisfaction: 98.7,
    grants: 9000,
    support: 100,
  };

  useEffect(() => {
    if (isVisible) {
      animateCounters();
    }
  }, [isVisible]);

  const animateCounters = () => {
    const duration = 2000;
    const interval = 50;
    const steps = duration / interval;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        savings: Math.floor(finalValues.savings * progress),
        value: Math.floor(finalValues.value * progress),
        payback: Math.floor(finalValues.payback * progress),
        satisfaction: +(finalValues.satisfaction * progress).toFixed(1),
        grants: Math.floor(finalValues.grants * progress),
        support: Math.floor(finalValues.support * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(finalValues);
      }
    }, interval);
  };

  const stats = [
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      value: `${counters.savings}%`,
      label: "moyenne des économies",
      description: "sur la facture annuelle énergie",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
      value: `+${counters.value}%`,
      label: "valeur ajoutée",
      description: "au bien immobilier rénové",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
      value: `${counters.payback} mois`,
      label: "retour sur investissement",
      description: "isolation + PAC",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      value: `${counters.satisfaction}%`,
      label: "taux de satisfaction",
      description: "sur plus de 2000 projets",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Euro className="w-8 h-8 text-green-500" />,
      value: `${counters.grants.toLocaleString()} €`,
      label: "aides et primes",
      description: "accessibles en moyenne",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: <Award className="w-8 h-8 text-blue-500" />,
      value: `${counters.support}%`,
      label: "prise en charge",
      description: "administrative par notre équipe",
      color: "from-blue-500 to-cyan-600",
    },
  ];

  return (
    <section
      id="statistiques"
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            <span className="text-blue-600 font-medium">
              Résultats mesurables
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Des résultats <span className="text-green-600">réels.</span>
            <br />
            Pour des gens <span className="text-orange-600">réels.</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Plus de 2000 familles nous font confiance. Découvrez l'impact
            concret de nos rénovations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 overflow-hidden ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                <div className="mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Certification badge */}
        <div
          className={`text-center mt-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button
            className="inline-flex items-center gap-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() =>
              window.open("https://simulation.sol-renov.com", "_blank")
            }
          >
            <Award className="w-6 h-6" />
            <span className="font-semibold">
              🟢 Certifié RGE – Tester votre éligibilité aux aides MaPrimeRénov', CEE, Eco PTZ
     
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
