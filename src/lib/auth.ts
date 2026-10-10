import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.MONGODB_CONNECTION_BASE_URL!);
const db = client.db("Bazar-Dor");

export const auth = betterAuth({
    emailAndPassword: { 
    enabled: true, 
  },

  socialProviders: {
        google: { 
            clientId: process.env.BETTER_AUTH_GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.BETTER_AUTH_GOOGLE_CLIENT_SECRET as string, 
        }, 
         github: { 
            clientId: process.env.BETTER_AUTH_GITHUB_CLIENT_ID as string, 
            clientSecret: process.env.BETTER_AUTH_GITHUB_CLIENT_SECRET as string, 
        }, 
    },
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
});
