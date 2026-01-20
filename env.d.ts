declare namespace NodeJS {
  interface ProcessEnv {
    // App
    NEXT_PUBLIC_APP_URL: string;
    NEXT_PUBLIC_API_URL: string;

    // Database
    DATABASE_URL: string;

    // Auth
    JWT_SECRET: string;
    JWT_EXPIRES_IN: string;

    // Optional
    NEXT_PUBLIC_GA_ID?: string;
  }
}
