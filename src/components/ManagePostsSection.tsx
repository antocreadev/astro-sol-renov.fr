"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Trash2,
  ExternalLink,
  Search,
  LogOut,
  Shield,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface Post {
  _id: string;
  caption: string;
  date: string;
  media_type: string;
  media_url: string[];
  platforms: string[];
  status: string;
}

interface ManagePostsSectionProps {
  onLogout: () => void;
}

export default function ManagePostsSection({
  onLogout,
}: ManagePostsSectionProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [deletingPostId, setDeletingPostId] = useState<string | null>(null);

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

  const deletePost = async (postId: string) => {
    setDeletingPostId(postId);
    try {
      const response = await fetch(`/api/delete-post?id=${postId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error || "Erreur lors de la suppression du post"
        );
      }

      const deletedPost = await response.json();
      console.log("Post supprimé:", deletedPost);

      // Mise à jour de la liste des posts
      const updatedPosts = posts.filter((post) => post._id !== postId);
      setPosts(updatedPosts);
      setFilteredPosts(updatedPosts);

      // Notification de succès (optionnel)
      setError(null);
    } catch (err) {
      console.error("Erreur lors de la suppression:", err);
      setError(
        err instanceof Error ? err.message : "Erreur lors de la suppression"
      );
    } finally {
      setDeletingPostId(null);
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

  const extractPreview = (caption: string) => {
    const words = caption.split(" ");
    if (words.length <= 30) return caption;
    return words.slice(0, 30).join(" ") + "...";
  };

  if (loading) {
    return (
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
            <p className="mt-4 text-gray-600">Chargement des posts...</p>
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
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
              <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-red-800 mb-2">
                Erreur de chargement
              </h3>
              <p className="text-red-600">{error}</p>
              <Button
                onClick={fetchPosts}
                className="mt-4 bg-red-600 hover:bg-red-700"
              >
                Réessayer
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <Shield className="h-8 w-8 text-emerald-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Gestion des Posts
              </h1>
              <p className="text-gray-600 mt-1">
                {filteredPosts.length} post{filteredPosts.length > 1 ? "s" : ""}{" "}
                trouvé{filteredPosts.length > 1 ? "s" : ""}
              </p>
            </div>
          </div>
          <Button
            onClick={onLogout}
            variant="outline"
            className="flex items-center gap-2"
          >
            <LogOut className="h-4 w-4" />
            Se déconnecter
          </Button>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="Rechercher dans les posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-3 text-lg border-2 border-gray-200 focus:border-emerald-500 rounded-xl"
          />
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image */}
              {post.media_url && post.media_url.length > 0 && (
                <div className="relative overflow-hidden h-48">
                  <img
                    src={post.media_url[0]}
                    alt="Post visual"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              )}

              <div className="p-6">
                {/* Meta info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex gap-1">
                    {post.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs capitalize"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Caption */}
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {extractPreview(post.caption)}
                </p>

                {/* Status */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      post.status === "shared"
                        ? "bg-green-100 text-green-700"
                        : post.status === "scheduled"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {post.status === "shared"
                      ? "Publié"
                      : post.status === "scheduled"
                      ? "Programmé"
                      : post.status}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="flex-1"
                  >
                    <a href={`/posts/${post._id}`} target="_blank">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Voir
                    </a>
                  </Button>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        size="sm"
                        variant="destructive"
                        disabled={deletingPostId === post._id}
                        className="flex items-center gap-2"
                      >
                        {deletingPostId === post._id ? (
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        ) : (
                          <Trash2 className="h-4 w-4" />
                        )}
                        Supprimer
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Confirmer la suppression
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          Êtes-vous sûr de vouloir supprimer ce post ? Cette
                          action est irréversible.
                          <br />
                          <br />
                          <strong>Post :</strong> {extractPreview(post.caption)}
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Annuler</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => deletePost(post._id)}
                          style={{ background: "red" }}
                        >
                          Supprimer définitivement
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredPosts.length === 0 && !loading && (
          <div className="text-center py-12">
            <div className="bg-gray-50 rounded-2xl p-8 max-w-md mx-auto">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Aucun post trouvé
              </h3>
              <p className="text-gray-500">
                {searchTerm
                  ? `Aucun résultat pour "${searchTerm}"`
                  : "Aucun post disponible pour le moment"}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
