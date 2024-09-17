import { User } from '@prisma/client';

declare module 'next-auth' {
  // eslint-disable-next-line no-unused-vars
  interface Session {
    user: User
  }
}
