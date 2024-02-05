import NextAuth, { User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req): Promise<User | null> {
        // login user
        return { id: '', name: 'J Smith', email: '' };
      },
    }),
  ],
  callbacks: {
    async jwt(params) {
      // refresh token
      return params;
    },
    async session({ token, session }) {
      // set session
      return session;
    },
  },
});

export { handler as GET, handler as POST };
