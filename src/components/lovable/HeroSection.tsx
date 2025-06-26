
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Phone, Zap, Leaf, TrendingUp, Home } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background avec gradient animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-green-800/80 to-orange-900/90" />
      
      {/* Image de fond placeholder */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518495973542-4542c06a5843')] bg-cover bg-center opacity-20" />
      
      {/* Éléments flottants animés */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-green-400/20 rounded-full animate-pulse" />
      <div className="absolute bottom-40 right-20 w-16 h-16 bg-orange-400/20 rounded-full animate-bounce" />
      
      <div className={`relative z-10 text-center px-6 max-w-6xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Badge d'expertise */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
          <Leaf className="w-4 h-4 text-green-400" />
          <span className="text-white text-sm font-medium">Expert Rénovation Énergétique & Énergies Renouvelables</span>
        </div>

        {/* Titre principal avec effet gradient */}
        <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="block text-white mb-2">Rénovez.</span>
          <span className="block bg-gradient-to-r from-green-400 to-orange-400 bg-clip-text text-transparent">
            Économisez.
          </span>
          <span className="block text-white text-3xl md:text-5xl mt-4">
            Respirez. <span className="text-green-400">🌱</span>
          </span>
        </h1>

        {/* Sous-titre émotionnel mixé */}
        <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-4xl mx-auto leading-relaxed">
          SolRenov transforme votre habitat en un <span className="text-orange-300 font-semibold">cocon autonome, durable et économique</span>. 
          <br />
          🏡 Donnez une nouvelle vie à votre habitat. 💶 Maîtrisez vos dépenses.
        </p>

        {/* Chiffres clés en highlight */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-orange-400" />
              <span className="text-2xl font-bold text-white">70%</span>
            </div>
            <p className="text-green-100 text-sm">d'économies d'énergie</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-green-400" />
              <span className="text-2xl font-bold text-white">9 000€</span>
            </div>
            <p className="text-green-100 text-sm">d'aides cumulables</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center gap-2">
              <Home className="w-5 h-5 text-orange-400" />
              <span className="text-2xl font-bold text-white">+30%</span>
            </div>
            <p className="text-green-100 text-sm">valeur immobilière</p>
          </div>
        </div>

        {/* CTA Buttons améliorés */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            📞 Obtenir mon devis gratuit
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm">
            <Phone className="w-5 h-5 mr-2" />
            📍 Éligibilité aides & primes
          </Button>
        </div>

        {/* Bonus offer amélioré */}
        <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-2xl p-6 border border-orange-400/30 max-w-2xl mx-auto">
          <p className="text-white text-lg font-medium">
            🎁 <span className="text-orange-300">Bilan énergétique offert</span> & accompagnement complet
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/60" />
      </div>
    </section>
  );
};

export default HeroSection;
