import { useState, useEffect, useRef } from "react";
import { CheckCircle, Award, Users, Zap, Shield, Heart } from "lucide-react";

const WhySection = () => {
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

  const advantages = [
    {
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      title: "Approche tout-en-un : rénovation + énergie = résultats concrets",
      description: "Une solution globale pour des performances maximales",
    },
    {
      icon: <Award className="w-6 h-6 text-green-500" />,
      title: "Expertise locale & certifiée",
      description: "Des professionnels qualifiés RGE près de chez vous",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
      title: "Confort et économies dès le premier jour",
      description: "Des bénéfices immédiats et durables",
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      title: "Haute qualité des matériaux et finitions",
      description: "Excellence garantie pour votre investissement",
    },
    {
      icon: <Users className="w-6 h-6 text-teal-500" />,
      title: "Zéro paperasse : on s'occupe de tout",
      description: "Accompagnement administratif complet",
    },
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      title: "Suivi personnalisé de A à Z",
      description: "Une relation de confiance sur le long terme",
    },
  ];

  return (
    <section
      id="pourquoi-nous"
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-purple-50 rounded-full px-4 py-2 mb-6">
            <CheckCircle className="w-5 h-5 text-purple-600" />
            <span className="text-purple-600 font-medium">
              Pourquoi nous choisir
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            Pourquoi choisir{" "}
            <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
              SolRenov ?
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border-l-4 border-transparent hover:border-green-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-green-50 transition-colors">
                  {advantage.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission statement */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl md:text-5xl font-bold mb-6">
              Notre mission
            </h3>
            <p className="text-2xl text-green-100 font-semibold max-w-4xl mx-auto leading-relaxed mb-8">
              Transformer votre habitat en moteur d'économies et de confort
              durable.
              <br />
              <span className="text-yellow-200">
                Parce que vous méritez un avenir énergétique maîtrisé.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                onClick={() =>
                  window.open("https://simulation.sol-renov.com", "_blank")
                }
              >
                <CheckCircle className="w-5 h-5" />
                Prendre contact pour rénovation énergétique
              </button>

              <button
                className="bg-orange-500 text-white hover:bg-orange-600 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                onClick={() =>
                  window.open(
                    "https://simulation-solaire.sol-renov.com",
                    "_blank"
                  )
                }
              >
                <Zap className="w-5 h-5" />
                Prendre contact pour panneaux solaires
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
