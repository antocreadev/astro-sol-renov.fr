
import { useState, useEffect, useRef } from "react";
import { Star, Quote, Play, Eye } from "lucide-react";

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
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

  const testimonials = [
    {
      name: "Sophie",
      age: "42 ans",
      location: "Bordeaux",
      quote: "J'ai divisé ma facture par deux, j'ai gagné en confort… et ma maison a pris 60 000 € de valeur !",
      rating: 5,
      beforeImage: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      afterImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      savings: "1,200€/an",
      valueIncrease: "60,000€"
    },
    {
      name: "Marc & Julie",
      age: "Couple",
      location: "Montpellier",
      quote: "Une équipe au top, pro, humaine, qui gère tout de A à Z. On dort tranquille.",
      rating: 5,
      beforeImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      afterImage: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
      savings: "980€/an",
      valueIncrease: "45,000€"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1472396961693-142e6e269027')] bg-cover bg-center opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-orange-900/20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-medium">Témoignages clients</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            🥇 Ils ont transformé{" "}
            <span className="bg-gradient-to-r from-green-400 to-orange-400 bg-clip-text text-transparent">
              leur quotidien
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez les histoires réelles de nos clients et leurs transformations spectaculaires.
          </p>
        </div>

        {/* Testimonials carousel */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              {/* Before/After showcase */}
              <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl">
                <div className="grid grid-cols-2 h-64">
                  {/* Before */}
                  <div className="relative">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${testimonial.beforeImage})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 bg-red-500/90 backdrop-blur-sm rounded-lg px-3 py-1 text-white font-semibold">
                      AVANT
                    </div>
                  </div>
                  
                  {/* After */}
                  <div className="relative">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${testimonial.afterImage})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 right-4 bg-green-500/90 backdrop-blur-sm rounded-lg px-3 py-1 text-white font-semibold">
                      APRÈS
                    </div>
                  </div>
                </div>
                
                {/* Divider line */}
                <div className="absolute inset-y-0 left-1/2 w-1 bg-white/50 transform -translate-x-1/2" />
              </div>

              {/* Testimonial content */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                {/* Quote */}
                <div className="flex items-start gap-4 mb-6">
                  <Quote className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
                  <blockquote className="text-2xl font-semibold text-white leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
                
                {/* Author info */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-green-400 font-bold text-lg">
                      — {testimonial.name}, {testimonial.age}
                    </div>
                    <div className="text-gray-300">{testimonial.location}</div>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                {/* Results */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-500/20 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-green-400">{testimonial.savings}</div>
                    <div className="text-green-100 text-sm">d'économies/an</div>
                  </div>
                  <div className="bg-orange-500/20 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-orange-400">{testimonial.valueIncrease}</div>
                    <div className="text-orange-100 text-sm">de plus-value</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action buttons */}
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-3 text-white">
                <Eye className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform" />
                <span className="font-semibold">📸 Voir les transformations avant/après</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-3 text-white">
                <Play className="w-6 h-6 text-orange-400 group-hover:scale-110 transition-transform" />
                <span className="font-semibold">🎤 Écouter les témoignages clients en vidéo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
