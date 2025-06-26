import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Rocket,
  MessageCircle,
  MapPin,
  CheckCircle,
  Zap,
  Heart,
} from "lucide-react";

const CtaSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-br from-green-600 via-green-700 to-orange-600 relative overflow-hidden"
    >
      {/* Éléments décoratifs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Header */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/30">
            <Rocket className="w-5 h-5 text-white" />
            <span className="text-white font-medium">
              Transformez votre habitat. Dès maintenant.
            </span>
          </div>

          <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight">
            🎯 Vous voulez un habitat plus{" "}
            <span className="text-yellow-300">intelligent,</span>
            <br />
            plus <span className="text-yellow-300">rentable,</span> plus{" "}
            <span className="text-yellow-300">durable ?</span>
          </h2>

          <p className="text-2xl text-green-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            🟢 Passez à l'action avec un partenaire de confiance.
            <br />
            SolRenov gère tout votre projet de rénovation énergétique, du
            conseil à la pose.
          </p>

          {/* Value proposition */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Heart className="w-8 h-8 text-red-300" />
              <h3 className="text-3xl font-bold text-white">
                Nous transformons votre maison.
              </h3>
            </div>
            <p className="text-2xl text-green-200 font-semibold">
              Vous transformez votre quotidien. ✨
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col lg:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              className="bg-white text-green-700 hover:bg-green-50 px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 min-h-[80px] flex items-center gap-4"
            >
              <Zap className="w-8 h-8" />⚡ Je veux mon bilan énergétique
              gratuit
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-3 border-white text-white hover:bg-white/10 px-12 py-6 text-xl font-bold rounded-2xl backdrop-blur-sm min-h-[80px] flex items-center gap-4"
            >
              <MessageCircle className="w-8 h-8" />
              📞 Être rappelé par un conseiller
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-3 border-white text-white hover:bg-white/10 px-12 py-6 text-xl font-bold rounded-2xl backdrop-blur-sm min-h-[80px] flex items-center gap-4"
            >
              <MapPin className="w-8 h-8" />
              📍 Tester mon éligibilité aux aides
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <CheckCircle className="w-8 h-8 text-green-300 mx-auto mb-4" />
              <h4 className="text-white font-bold text-lg mb-2">
                100% Gratuit & Sans Engagement
              </h4>
              <p className="text-green-100">
                Votre étude personnalisée offerte
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Zap className="w-8 h-8 text-yellow-300 mx-auto mb-4" />
              <h4 className="text-white font-bold text-lg mb-2">
                Réponse Sous 24h
              </h4>
              <p className="text-green-100">
                Prise de contact express garantie
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <CheckCircle className="w-8 h-8 text-green-300 mx-auto mb-4" />
              <h4 className="text-white font-bold text-lg mb-2">
                Certifié RGE
              </h4>
              <p className="text-green-100">Aides & primes garanties</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
