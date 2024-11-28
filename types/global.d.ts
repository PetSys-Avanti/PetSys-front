declare global{

    namespace NodeJS{

        interface ProcessEnv{
            NEXT_PUBLIC_SUPABASE_URL: string;
            NEXT_PUBLIC_SUPABASE_ANON_KEY: string
            NEXT_PUBLIC_SUPABASE_APP_BUCKET_IMAGE_URL: string;
            NEXT_PUBLIC_SUPABASE_APP_BUCKET_IMAGE_FOLDER: string;
            NEXT_PUBLIC_SUPABASE_APP_BUCKET_IMAGE_TO_SEND:string;
        }
    }
}