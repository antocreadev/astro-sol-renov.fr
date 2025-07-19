"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, ExternalLink, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
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

export default function LatestPostsSection() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchLatestPosts();
  }, []);

  const fetchLatestPosts = async () => {
    try {
      const response = await fetch('/api/posts');

      if (!response.ok) {
        throw new Error("Erreur lors du chargement des posts");
      }

      const data = await response.json();
      // Ne prendre que les 3 derniers posts
      setPosts(data.slice(0, 3));
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
    if (words.length <= 20) return caption;
    return words.slice(0, 20).join(" ") + "...";
  };

  if (loading) {
    return (
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
            <p className="mt-2 text-gray-600">Chargement des actualités...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error || posts.length === 0) {
    return null; // Ne rien afficher en cas d'erreur ou si pas de posts
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            📰 Nos Dernières Actualités
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Restez informé sur la 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-500">
              rénovation énergétique
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos derniers conseils, actualités sur les aides et projets de rénovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {posts.map((post, index) => (
            <motion.article
              key={post._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group-hover:border-emerald-200 h-full flex flex-col">
                {/* Image */}
                {post.media_url && post.media_url.length > 0 && (
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={post.media_url[0]}
                      alt="Image du post"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-emerald-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                        {post.platforms.join(", ")}
                      </span>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </div>

                  {/* Caption Preview */}
                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                      {extractPreview(post.caption)}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Eye className="w-3 h-3" />
                      <span>Publié</span>
                    </div>

                    <a
                      href={`/posts/${post._id}`}
                      className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 text-sm font-medium transition-colors group"
                    >
                      Lire plus
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA pour voir toutes les actualités */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 group"
            onClick={() => window.location.href = '/posts'}
          >
            <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Voir toutes nos actualités
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
