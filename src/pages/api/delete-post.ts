import type { APIRoute } from "astro";

export const DELETE: APIRoute = async ({ request, url }) => {
  const postId = url.searchParams.get("id");

  if (!postId) {
    return new Response(JSON.stringify({ error: "ID du post requis" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  try {
    const response = await fetch(
      `https://kainotomiaprodbackend-brbzd3f2gjbugtcd.francecentral-01.azurewebsites.net/socialPost/deleteJob?id=${postId}`,
      {
        method: "DELETE",
        headers: {
          accept: "application/json",
          "x-api-key":
            "32d776c2ae185fb4d6f31bcf34ae40370fc89282fd790c393cdf29beec5011d8",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Erreur lors de la suppression du post:", error);
    return new Response(
      JSON.stringify({
        error: "Erreur lors de la suppression du post",
        details: error instanceof Error ? error.message : "Erreur inconnue",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};
