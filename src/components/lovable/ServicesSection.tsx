
import { useState, useEffect, useRef } from "react";
import { Home, Zap, Settings, Hammer, Users, Shield } from "lucide-react";

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Rénovation globale",
      subtitle: "🔧 Une transformation complète",
      features: [
        "Isolation intérieure & extérieure",
        "Ravalement, bardage, toiture",
        "Menuiseries haute performance",
        "Amélioration thermique & esthétique"
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Solutions énergétiques intelligentes",
      subtitle: "⚡ L'autonomie énergétique",
      features: [
        "Panneaux solaires & autoconsommation",
        "Pompes à chaleur, ballons solaires",
        "Systèmes thermodynamiques & domotique",
        "Récupération d'eau de pluie & climat intelligent"
      ],
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Accompagnement & aides",
      subtitle: "🧩 Votre projet clé en main",
      features: [
        "Bilan énergétique offert",
        "Étude de faisabilité technique et financière",
        "Prise en charge des démarches administratives",
        "Optimisation des aides d'État et primes CEE"
      ],
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-green-50 rounded-full px-4 py-2 mb-6">
            <Settings className="w-5 h-5 text-green-600" />
            <span className="text-green-600 font-medium">Services complets</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            SolRenov, c'est l'offre{" "}
            <span className="bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent">
              tout-en-un
            </span>
            <br />
            pour transformer votre habitat
          </h2>
          
          <div className="flex items-center justify-center gap-2 text-green-600">
            <Shield className="w-6 h-6" />
            <span className="text-xl font-semibold">🎯 Un seul interlocuteur, un projet 100% maîtrisé</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${service.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setActiveService(index)}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} text-white mb-6 shadow-lg`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              
              <p className="text-lg font-semibold text-gray-700 mb-6">
                {service.subtitle}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mission statement */}
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-green-600 to-orange-600 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl md:text-5xl font-bold mb-6">
              🧠 Notre mission
            </h3>
            <p className="text-2xl text-green-100 font-semibold max-w-3xl mx-auto">
              Transformer votre habitat en moteur d'économies et de confort durable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
