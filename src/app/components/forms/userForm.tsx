"use client";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Link from "next/link";
import { signup_user, login_user } from "@/app/api";

export default function userForm() {
	// form validation
	const login_validation = Yup.object({
		email: Yup.string()
			.email("Please enter a valid email.")
			.required("Email is a required field."),
		password: Yup.string()
			.min(6, "Please enter a 6-12 character password.")
			.max(12)
			.required("Password is a required field."),
	});

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: login_validation,
		onSubmit: (values) => {
			// console.log(values);
			const user_credentials = {
				email: values.email,
				password: values.password,
			};
			// if 'type' is true = login page
			if (type) {
				console.log("login page");
				login_user(user_credentials);
			}
			// else, 'type' is false = sign-up page
			else {
				// console.log("sign-up page");
				signup_user(user_credentials);
			}
		},
	});

	// toggles the component between 'login' and 'signup'
	const [type, setType] = useState(true);

	const toggleType = () => {
		setType((prevType) => !prevType);
		formik.resetForm(); // clears form inputs
	};

	return (
		<Card className="login container text-center">
			<CardHeader className="pb-2">
				<CardTitle className="mb-2">{type ? "Login" : "Sign-up"}</CardTitle>
				<CardDescription>
					{type
						? "Enter your email and password to access your account."
						: "Welcome. To create an account, enter your email and a password."}
				</CardDescription>
			</CardHeader>
			<CardContent className="px-3 sm:px-6">
				<form id="login-form" onSubmit={formik.handleSubmit}>
					<div className="input my-4">
						<Input
							type="email"
							name="email"
							id="email"
							placeholder="Email*"
							className="w-full"
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							value={formik.values.email}
							required
						/>
						{type ? (
							""
						) : (
							<small className="text-[var(--primary-slate)] text-sm">
								{formik.errors.email
									? formik.errors.email
									: "Please enter your email."}
							</small>
						)}
					</div>
					<div className="input my-4">
						<Input
							type="password"
							name="password"
							id="password"
							placeholder="Password*"
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							value={formik.values.password}
							maxLength={12}
							required
						/>
						{type ? (
							""
						) : (
							<small className="text-[var(--primary-slate)] text-sm">
								{formik.errors.password
									? formik.errors.password
									: "Please enter a password."}
							</small>
						)}
					</div>
					<Button type="submit" className="w-full">
						{type ? "Login" : "Sign-up"}
					</Button>
				</form>
			</CardContent>
			<CardFooter className="justify-center">
				{type ? (
					<p>
						Don't have an account?{" "}
						<Link href={""} onClick={toggleType} className="underline">
							Sign-up
						</Link>
					</p>
				) : (
					<p>
						Already have an account?{" "}
						<Link href={""} onClick={toggleType} className="underline">
							Login
						</Link>
					</p>
				)}
			</CardFooter>
		</Card>
	);
}
