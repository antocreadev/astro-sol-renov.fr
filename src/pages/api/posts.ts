import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request }) => {
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

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch posts" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
