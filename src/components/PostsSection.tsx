"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Eye,
  Share2,
  ArrowRight,
  ExternalLink,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";

interface Post {
  _id: string;
  caption: string;
  date: string;
  media_type: string;
  media_url: string[];
  platforms: string[];
  status: string;
}

export default function PostsSection() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter(
        (post) =>
          post.caption.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.platforms.some((platform) =>
            platform.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
      setFilteredPosts(filtered);
    }
  }, [searchTerm, posts]);

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/posts");

      if (!response.ok) {
        throw new Error("Erreur lors du chargement des posts");
      }

      const data = await response.json();
      setPosts(data);
      setFilteredPosts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const extractPreview = (caption: string) => {
    const words = caption.split(" ");
    if (words.length <= 30) return caption;
    return words.slice(0, 30).join(" ") + "...";
  };

  const createSlug = (id: string) => {
    return id;
  };

  if (loading) {
    return (
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
            <p className="mt-4 text-gray-600">Chargement des actualités...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-red-600">Erreur: {error}</p>
            <Button onClick={fetchPosts} className="mt-4">
              Réessayer
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 px-4 py-2 rounded-full text-base font-medium mb-4">
            📰 Nos Dernières Actualités
          </div>

          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Actualités &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-500">
              Conseils Rénovation
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Découvrez nos derniers projets, conseils d'experts et actualités du
            secteur de la rénovation énergétique
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Rechercher dans nos actualités..."
              className="pl-10 pr-4 py-3 rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>

        {/* Search Results Info */}
        {searchTerm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-8"
          >
            <p className="text-gray-600">
              {filteredPosts.length} résultat
              {filteredPosts.length > 1 ? "s" : ""} pour "{searchTerm}"
            </p>
          </motion.div>
        )}

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-emerald-200 h-full flex flex-col">
                {/* Image */}
                {post.media_url && post.media_url.length > 0 && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.media_url[0]}
                      alt="Image du post"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.platforms.join(", ")}
                      </span>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </div>

                  {/* Caption Preview */}
                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {extractPreview(post.caption)}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        Publié
                      </span>
                      <span className="flex items-center gap-1">
                        <Share2 className="w-4 h-4" />
                        {post.platforms.length} réseaux
                      </span>
                    </div>

                    <a
                      href={`/posts/${createSlug(post._id)}`}
                      className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors group"
                    >
                      Lire plus
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredPosts.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              {searchTerm
                ? `Aucun résultat trouvé pour "${searchTerm}"`
                : "Aucun post disponible pour le moment."}
            </p>
            {searchTerm && (
              <Button
                variant="outline"
                onClick={() => setSearchTerm("")}
                className="mt-4"
              >
                Effacer la recherche
              </Button>
            )}
          </div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl p-8 text-white max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Envie de transformer votre habitat ?
            </h2>
            <p className="text-white/90 text-lg mb-6">
              Découvrez comment nos experts peuvent vous accompagner dans votre projet de rénovation énergétique
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition-all duration-300 group"
                onClick={() =>
                  window.open("https://simulation.sol-renov.com", "_blank")
                }
              >
                <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Simuler ma rénovation énergétique
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-3 rounded-xl font-semibold transition-all duration-300 group bg-transparent"
                onClick={() =>
                  window.open("https://simulation-solaire.sol-renov.com", "_blank")
                }
              >
                <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform text-white group-hover:text-emerald-600" />
                Simuler mes panneaux solaires
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
