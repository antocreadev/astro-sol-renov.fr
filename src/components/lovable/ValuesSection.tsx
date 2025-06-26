
import { useState, useEffect, useRef } from "react";
import { Globe, Zap, Users, Heart } from "lucide-react";

const ValuesSection = () => {
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

  const values = [
    {
      icon: <Globe className="w-8 h-8 text-green-500" />,
      title: "Réduire l'empreinte carbone du logement français",
      description: "Chaque projet contribue à un avenir plus vert",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027"
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: "Promouvoir les énergies renouvelables accessibles",
      description: "Démocratiser l'accès aux solutions durables",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Innover pour un habitat intelligent et résilient",
      description: "Technologies de pointe pour votre confort",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Placer l'humain et l'environnement au cœur de chaque projet",
      description: "Votre bien-être et celui de la planète",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-br from-green-900 to-green-800 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-400/10 to-orange-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-400/10 to-green-400/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
            <Heart className="w-5 h-5 text-green-400" />
            <span className="text-white font-medium">Nos valeurs & engagements</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Un avenir durable{" "}
            <span className="bg-gradient-to-r from-green-400 to-orange-400 bg-clip-text text-transparent">
              se construit
            </span>
            <br />
            chez vous
          </h2>
          
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            SolRenov s'engage pour un habitat qui respecte l'environnement et améliore votre qualité de vie.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border border-white/10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Image background */}
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${value.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Icon floating */}
                <div className="absolute top-6 left-6 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                  {value.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors">
                  🌎 {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
