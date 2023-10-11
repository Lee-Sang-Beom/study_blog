import { authOptions } from '@/lib/auth';
export const dynamic = 'auto';
import NextAuth from 'next-auth';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
