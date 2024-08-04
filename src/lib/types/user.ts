
/**
 * The `User` interface represents a user object within the application.
 * 
 * User information is populated from sessionStorage.getItem("user").
 * 
 * This interface defines the properties of a user object, which includes:
 * - `id`: A string representing the user's uuid. This is a required property.
 * - `fname`: A string representing the user's first name. This is a required property.
 * - `email`: A string representing the user's email address. This is a required property.
 * 
 * Additional properties can be added as needed to accommodate more user-related data,
 * such as a user's name, ID, or preferences.
 * 
 */

export interface User {
	id: string;
	fname: string;
	email: string;
}