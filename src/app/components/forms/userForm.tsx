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

export default function userForm({ type }: { type: boolean }) {
	const login_validation = Yup.object({
		email: Yup.string()
			.email("Please enter a valid email.")
			.required("Email is a required field."),
		password: Yup.string()
			.min(4)
			.max(8)
			.required("Password is a required field."),
	});

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: login_validation,
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<Card className="login container text-center">
			<CardHeader className="pb-2">
				<CardTitle className="mb-2">
					{type == true ? "Login" : "Sign-up"}
				</CardTitle>
				<CardDescription>
					{type == true
						? "Welcome back. Please enter your email and password to access your account."
						: "Welcome. To create your account enter a email and password."}
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
						{type == true ? (
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
							maxLength={8}
							required
						/>
						{type == true ? (
							""
						) : (
							<small className="text-[var(--primary-slate)] text-sm">
								{formik.errors.password
									? formik.errors.password
									: "Please enter a 4-8 character password."}
							</small>
						)}
					</div>
					<Button type="submit" className="w-full">
						{type == true ? "Login" : "Sign-up"}
					</Button>
				</form>
			</CardContent>
		</Card>
	);
}
