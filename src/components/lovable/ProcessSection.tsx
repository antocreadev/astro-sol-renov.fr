
import { useState, useEffect, useRef } from "react";
import { Phone, Search, PenTool, Hammer, ShieldCheck } from "lucide-react";

const ProcessSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          startStepAnimation();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startStepAnimation = () => {
    let step = 0;
    const interval = setInterval(() => {
      setActiveStep(step);
      step++;
      if (step >= 5) {
        clearInterval(interval);
      }
    }, 800);
  };

  const steps = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Premier contact express",
      description: "@sous 24h max",
      detail: "Prise de contact immédiate, écoute de vos besoins, première évaluation de votre projet.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Audit énergétique & simulation d'aides",
      description: "(gratuit)",
      detail: "Diagnostic complet de votre habitation, identification des potentiels d'amélioration et simulation des aides disponibles.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Conception du projet sur-mesure",
      description: "Personnalisé à 100%",
      detail: "Élaboration de votre projet unique, plans détaillés, choix des matériaux et technologies adaptées.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Réalisation par nos artisans certifiés",
      description: "Qualité garantie",
      detail: "Mise en œuvre par nos équipes d'experts certifiés RGE, respect des délais et normes qualité.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Suivi & SAV réactif pendant 10 ans",
      description: "Tranquillité assurée",
      detail: "Accompagnement continu, maintenance préventive et service après-vente disponible 24/7.",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Ligne de progression */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gray-200">
        <div 
          className="h-full bg-gradient-to-r from-green-500 to-orange-500 transition-all duration-1000"
          style={{ width: isVisible ? '100%' : '0%' }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-green-50 rounded-full px-4 py-2 mb-6">
            <ShieldCheck className="w-5 h-5 text-green-600" />
            <span className="text-green-600 font-medium">Processus maîtrisé</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Un parcours{" "}
            <span className="bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent">
              simple, fluide, accompagné
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            🔒 Transparence totale – Zéro frais caché – Accompagnement administratif complet
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Ligne de connexion */}
          <div className="absolute left-8 top-16 bottom-16 w-1 bg-gradient-to-b from-green-500 to-orange-500 hidden lg:block" />
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-8 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                } ${activeStep >= index ? 'scale-105' : 'scale-100'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Step number and icon */}
                <div className={`relative flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg z-10 transition-all duration-500 ${
                  activeStep >= index ? 'ring-4 ring-green-300 scale-110' : ''
                }`}>
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-sm font-bold text-gray-800 shadow">
                    {index + 1}
                  </div>
                </div>
                
                {/* Content */}
                <div className={`flex-1 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border-l-4 ${
                  activeStep >= index ? 'border-green-500' : 'border-gray-200'
                }`}>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        🛤️ {step.title}
                      </h3>
                      <p className="text-green-600 font-semibold text-lg mb-3">
                        {step.description}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                    
                    {/* Duration indicator */}
                    <div className="flex-shrink-0">
                      <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        activeStep >= index 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        Étape {index + 1}/5
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-green-600 to-orange-600 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Prêt à commencer votre transformation ? 🚀
            </h3>
            <p className="text-xl text-green-100 mb-6">
              Votre projet personnalisé vous attend. Parlons-en ensemble.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">Démarrer maintenant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
