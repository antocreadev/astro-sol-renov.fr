import type { APIRoute } from "astro";

// Désactive le pré-rendu pour cette route API dynamique
export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  const { id } = params;

  if (!id) {
    return new Response(JSON.stringify({ error: "Post ID is required" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  try {
    const response = await fetch(
      "https://kainotomiaprodbackend-brbzd3f2gjbugtcd.francecentral-01.azurewebsites.net/socialPost/getJobs",
      {
        headers: {
          accept: "*/*",
          "x-api-key":
            "32d776c2ae185fb4d6f31bcf34ae40370fc89282fd790c393cdf29beec5011d8",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const post = data.find((p: any) => p._id === id);

    if (!post) {
      return new Response(JSON.stringify({ error: "Post not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    return new Response(JSON.stringify(post), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error) {
    console.error("Error fetching post:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch post" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
