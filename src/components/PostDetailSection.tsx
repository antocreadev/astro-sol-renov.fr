"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowLeft, Share2, ExternalLink, Eye } from "lucide-react";
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

interface PostDetailSectionProps {
  postId: string | undefined;
}

export default function PostDetailSection({ postId }: PostDetailSectionProps) {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (postId) {
      fetchPost();
    } else {
      setError("ID du post manquant");
      setLoading(false);
    }
  }, [postId]);

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/posts/${postId}`);

      if (!response.ok) {
        throw new Error("Erreur lors du chargement du post");
      }

      const post = await response.json();
      setPost(post);
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
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatCaption = (caption: string) => {
    // Convertir les liens en liens cliquables
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const formattedCaption = caption.replace(
      linkRegex,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-emerald-600 hover:text-emerald-700 underline">$1</a>'
    );

    // Convertir les hashtags
    const hashtagRegex = /#([a-zA-Z0-9À-ÿ]+)/g;
    return formattedCaption.replace(
      hashtagRegex,
      '<span class="text-emerald-600 font-medium">#$1</span>'
    );
  };

  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: "Post SolRenov",
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Lien copié dans le presse-papiers !");
    }
  };

  if (loading) {
    return (
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
            <p className="mt-4 text-gray-600">Chargement du post...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error || !post) {
    return (
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-red-600 mb-4">
              Erreur: {error || "Post non trouvé"}
            </p>
            <Button onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => window.history.back()}
            className="text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux actualités
          </Button>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-lg overflow-hidden"
          >
            {/* Header */}
            <div className="p-8 border-b border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    {post.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={sharePost}
                    className="ml-2"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Partager
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Eye className="w-4 h-4" />
                <span>Statut: {post.status}</span>
                <span className="mx-2">•</span>
                <span>Type: {post.media_type}</span>
              </div>
            </div>

            {/* Media */}
            {post.media_url && post.media_url.length > 0 && (
              <div className="relative">
                <img
                  src={post.media_url[0]}
                  alt="Image du post"
                  className="w-full h-auto max-h-96 object-cover"
                />
              </div>
            )}

            {/* Content */}
            <div className="p-8">
              <div
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: formatCaption(post.caption),
                }}
              />
            </div>

            {/* Additional media */}
            {post.media_url && post.media_url.length > 1 && (
              <div className="p-8 pt-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Images supplémentaires
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {post.media_url.slice(1).map((url, index) => (
                    <img
                      key={index}
                      src={url}
                      alt={`Image ${index + 2}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>
            )}
          </motion.article>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12"
          >
            <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">
                Intéressé par nos services ?
              </h2>
              <p className="text-white/90 mb-6">
                Découvrez comment nous pouvons vous accompagner dans votre
                projet de rénovation énergétique
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  Obtenir un devis gratuit
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Voir nos réalisations
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
