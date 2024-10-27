import { prisma } from '@/services/database';
import { createStripeCustomer } from '@/services/stripe/stripe';
import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth',
    signOut: '/auth',
    error: '/auth',
    verifyRequest: '/auth',
    newUser: '/system',
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  events: {
    createUser: async (message) => {
      await createStripeCustomer({
        name: message.user.name || '',
        email: message.user.email || '',
      });
    },
  },
  secret: process.env.NEXTAUTH_URL,
  callbacks: {
    async session ({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }
      if (session.user) {
        session.user.name = token.name || '';
        session.user.email = token.email || '';
      }

      return session;
    },
    async jwt ({ token }) {
      if (!token.sub) return token;
      return token;
    },
  },
});
