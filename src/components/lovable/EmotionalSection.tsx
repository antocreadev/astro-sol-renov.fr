import { useState, useEffect, useRef } from "react";
import { Heart, Zap, Shield, Leaf } from "lucide-react";

const EmotionalSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: "Nos clients réduisent leur facture de chauffage",
      value: "1100 €/an",
      description: "d'économies réelles en moyenne",
    },
    {
      icon: <Zap className="w-8 h-8 text-green-500" />,
      title: "Ils produisent leur propre énergie",
      value: "100%",
      description: "autonome grâce au solaire intelligent",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Ils gagnent en confort et sécurité",
      value: "24/7",
      description: "protection et tranquillité d'esprit",
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "Ils valorisent leur patrimoine",
      value: "+30%",
      description: "tout en réduisant leur empreinte carbone",
    },
  ];

  return (
    <section
      id="problemes"
      ref={sectionRef}
      className="py-20 px-6 bg-white relative overflow-hidden"
    >
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-orange-400" />

      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-red-50 rounded-full px-4 py-2 mb-6">
            <Heart className="w-5 h-5 text-red-500" />
            <span className="text-red-600 font-medium">
              Le choix intelligent
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Et si votre maison devenait votre{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
              meilleur investissement ?
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Chaque jour, des milliers de foyers comme le vôtre transforment leur
            quotidien.
            <br />
            <span className="font-semibold text-gray-800">
              Et vous ? Qu'attendez-vous ?
            </span>
          </p>
        </div>

        {/* Grid des bénéfices avec animations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-gray-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="mb-4">{benefit.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {benefit.value}
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                ✨ {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Call to action émotionnel */}
        <div
          className={`bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Vous pouvez attendre que les prix de l'énergie{" "}
            <span className="text-red-400">explosent.</span>
          </h3>
          <p className="text-2xl text-green-400 font-semibold mb-8">
            Ou faire le choix de reprendre le contrôle dès aujourd'hui.
          </p>
          <button
            className="inline-flex items-center gap-2 bg-white/10 rounded-full px-6 py-3 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            onClick={() =>
              window.open("https://simulation.sol-renov.com", "_blank")
            }
          >
            <span className="text-white">
              Le choix intelligent, c'est maintenant ⏰
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmotionalSection;
