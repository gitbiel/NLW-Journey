import fastify from "fastify";
import { prisma } from "./lib/prisma";

const app = fastify();

app.post("/cadastrar", async () => {
  await prisma.trip.create({
    data: {
      destination: "Rio de Janeiro",
      starts_at: new Date(),
      ends_date: new Date(),
    },
  });
});

app.get("/listar", async () => {
  const trips = await prisma.trip.findMany();
  return trips;
});

app.listen({ port: 3333 }).then(() => {
  console.log("Server running!");
});
