import { SubscriptionPlan } from "types";
import { env } from "@/env.mjs";

export const freePlan: SubscriptionPlan = {
  name: "FREE",
  description: "Please upgrade to post.",
  stripePriceId: "",
};

export const proPlan: SubscriptionPlan = {
  name: "PRO",
  description: "The PRO plan has unlimited posts.",
  stripePriceId: env.STRIPE_PRICE_ID || "",
};
