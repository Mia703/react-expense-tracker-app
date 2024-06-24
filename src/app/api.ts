import { supabase } from "@/lib/supabase";

async function signup_user(signup_data: {
	email: string;
	password: string;
}): Promise<any> {
	try {
		const { data, error } = await supabase.auth.signUp({
			email: signup_data.email,
			password: signup_data.password,
		});

		if (error) {
			throw error;
		}

		return { data };
	} catch (error) {
		console.error("Error signing up:", error);
		throw error;
	}
}

async function login_user(login_data: {
	email: string;
	password: string;
}): Promise<any> {
	try {
		const { data, error } = await supabase.auth.signInWithPassword({
			email: login_data.email,
			password: login_data.password,
		});

		if (error) {
			throw error;
		}

		return { data };
	} catch (error) {
		console.error("Error logging in:", error);
		throw error;
	}
}

export { signup_user, login_user };
