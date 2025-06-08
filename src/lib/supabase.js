import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zdvkoxtlqmpwpfyrutsy.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkdmtveHRscW1wd3BmeXJ1dHN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzMDg4MzUsImV4cCI6MjA2NDg4NDgzNX0.S6tt-FtoQXEexN2ZoiPik9CT0NjJWwpW7iP4HmllGOk";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
