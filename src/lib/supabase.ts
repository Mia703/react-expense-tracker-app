import { createClient } from "@supabase/supabase-js";

const supabase_url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabase_anon_key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// if (supabase_url !== undefined && supabase_anon_key !== undefined) {
// 	const supabase = createClient(supabase_url, supabase_anon_key);
// }

export const supabase = createClient(
	supabase_url as string,
	supabase_anon_key as string
);

/**
 * Typescript Error: 
 * Argument of type 'string | undefined' is not assignable to parameter of type 'string'. 
 * Type 'undefined' is not assignable to type 'string'.ts(2345)
 * 
 * The occurs because TypeScript's type system is strict about the types of values passed to functions or assigned to variables.
 * When a variable is either a 'string' or 'undefined' you must explicity handle both cases to ensure that the code is type-safe.
 * 
 * The union type 'string | undefined' means the variable is either a 'string' or 'undefined'.
 * 
 * Possible Solutions:
 * Using the non-null assertion operator (!): supabase_url!
 * This asserts that the value will NOT be 'null' or 'undefined' at runtime. 
 * It's a simple and concise choice, but if you are wrong and the value is 'undefined' it will result in a runtime error.
 * 
 * Type assertion ('as string'): supabase_url as string
 * This tells TypeScript to treat the variable as a specific type.
 * It explicitly tells TypeScript how to treat the value, but if the value is 'undefined' it could cause an error at runtime.
 * Or if the value is not actually a string, it could be an incorrect assumption on your part.
 * 
 * The best solution is to do an 'if' statement checking to ensure the value is not 'undefined'
 */
