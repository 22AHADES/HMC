import supabaseClient from "./supabaseClient.js";

export async function login(email, password) {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password,
    });
    return { data, error };
}
    
export async function logout() {
    const { error } = await supabaseClient.auth.signOut();
    return { error };
}

export async function getSession() {
    const { data: { session } } = await supabaseClient.auth.getSession();
    return session;
}