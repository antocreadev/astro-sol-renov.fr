import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();
  const { email, password } = data;

  // Vérification des identifiants
  const validEmail = "solrenovfrance@gmail.com";
  const validPassword = "anthony20290";

  if (email === validEmail && password === validPassword) {
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } else {
    return new Response(
      JSON.stringify({ success: false, message: "Identifiants incorrects" }),
      {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};
