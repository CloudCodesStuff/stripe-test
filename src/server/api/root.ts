import { stripe } from "./../stripe/client";
import { createTRPCRouter } from "@/server/api/trpc";
import { listingRouter } from "./routers/listing";
import { stripeRouter } from "./routers/stripe";
import { userRouter } from "./routers/user";
/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  listing: listingRouter,
  stripe: stripeRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
