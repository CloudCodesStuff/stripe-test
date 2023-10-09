import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const listingRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        link: z.string(),
        company: z.string(),
        title: z.string(),
        image: z.string(),
        location: z.string(),
        compensation: z.string(),
        description: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const createdListing = await ctx.prisma.post.create({
        data: {
          link: input.link,
          company: input.company,
          title: input.title,
          image: input.image,
          location: input.location,
          compensation: input.compensation,
          description: input.description,
          userId: ctx.session.user.id,
        },
      });

      return createdListing;
    }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        link: z.string(),
        company: z.string(),
        title: z.string(),
        location: z.string(),
        image: z.string(),
        compensation: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const updatedListing = await ctx.prisma.post.update({
        where: { id: input.id },
        data: {
          link: input.link,
          company: input.company,
          title: input.title,
          location: input.location,
          compensation: input.compensation,
        },
      });

      return updatedListing;
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const deletedListing = await ctx.prisma.post.delete({
        where: { id: input.id },
      });

      return deletedListing;
    }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.post.findMany({
      select: {
        title: true,
        location: true,
        link: true,
        company: true,
        compensation: true,
        image: true,
        createdAt: true,
        description: true,
        tags: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }),
  getForUser: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.post.findMany({
      where: { userId: ctx.session.user.id },
      select: {
        id: true,
        title: true,
        location: true,
        link: true,
        company: true,
        image: true,
        compensation: true,
        createdAt: true,
        description: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }),
});
