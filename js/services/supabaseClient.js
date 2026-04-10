const { createClient } = supabase;  // from the CDN global

const supabaseClient = createClient(
    "https://pjyhhatzgxkwhaeqjbpb.supabase.co",
    "sb_publishable_C7u3K3zi0N9eQWBd-5qsvw_-ah7Bnjl"
);

export default supabaseClient;