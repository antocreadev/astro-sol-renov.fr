import {
  MapPin,
  Phone,
  Mail,
  Shield,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-bold">SolRenov</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Rénovation énergétique tout-en-un pour un habitat durable,
              économique et confortable.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <Youtube className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-green-400">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">
                  📍 Interventions France entière
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">📞 01 23 45 67 89</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">✉️ contact@solrenov.fr</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-green-400">
              Nos Services
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>Isolation thermique</li>
              <li>Panneaux solaires</li>
              <li>Pompe à chaleur</li>
              <li>Menuiserie</li>
              <li>Audit énergétique</li>
              <li>Accompagnement aides</li>
            </ul>
          </div>

          {/* Ressources & Blog */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-green-400">Ressources</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a 
                  href="https://sol-renov.fr/blog" 
                  className="hover:text-white transition-colors"
                  rel="noopener"
                >
                  📰 Blog rénovation énergétique
                </a>
              </li>
              <li>
                <a 
                  href="https://sol-renov.fr/guides" 
                  className="hover:text-white transition-colors"
                  rel="noopener"
                >
                  📖 Guides pratiques
                </a>
              </li>
              <li>
                <a 
                  href="https://sol-renov.fr/actualites" 
                  className="hover:text-white transition-colors"
                  rel="noopener"
                >
                  📢 Actualités aides & primes
                </a>
              </li>
              <li>Calculateur d'économies</li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-green-400">
              Certifications
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">🔒 Certifié RGE</span>
              </div>
              <div className="text-gray-300 text-sm">
                Aides & primes garanties :
                <ul className="mt-2 space-y-1 ml-4">
                  <li>• MaPrimeRénov'</li>
                  <li>• CEE</li>
                  <li>• Eco-PTZ</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 SolRenov. Tous droits réservés.
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a
                href="/mentions-legales"
                className="hover:text-white transition-colors"
              >
                📄 Mentions légales
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Politique RGPD
              </a>
              <a href="#" className="hover:text-white transition-colors">
                CGV
              </a>
              <a
                href="/sitemap.xml"
                className="hover:text-white transition-colors"
              >
                Plan du site
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
