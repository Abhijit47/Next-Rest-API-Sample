console.log(process.env);
export async function GET() {
  return new Response(
    JSON.stringify({
      hello: "world",
    }),
    {
      status: 200,
      statusText: "success",
      headers: { "content-type": "application/json" },
    },
  );
}
