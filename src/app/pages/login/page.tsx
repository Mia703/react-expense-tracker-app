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
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { supabase } from "@/lib/api/supabase/supabase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
	const router = useRouter();
	
	async function login(email: string) {

		const { error } = await supabase
			.from("users")
			.select("*")
			.eq("email", email);

		if (error) {
			console.log(
				"Error: user was not logged in successfully: ",
				error.message
			);
		} else {
			console.log("logged in successfully");
			// TODO: route to dashboard page
			router.push('/pages/dashboard');
		}
	}

	const loginValidation = Yup.object({
		email: Yup.string()
			.email("please enter a valid email")
			.required("please enter your email"),
	});

	const formik = useFormik({
		initialValues: {
			email: "",
		},
		validationSchema: loginValidation,
		onSubmit: async (values) => {
			console.log(values.email);
			login(values.email);
		},
	});

	return (
		<section
			id="login-page"
			className="h-screen flex flex-col justify-between sm:col-span-4 md:col-span-6 lg:col-span-12"
		>
			<div className="back button group">
				<Button
					type="button"
					variant={"ghost"}
					size={"icon"}
					id="back-btn"
					asChild
				>
					<Link href={"/"}>
						<ChevronLeft className="w-4 h4" />
					</Link>
				</Button>
			</div>
			<div className="login-form group my-20 text-center">
				<Card>
					<CardHeader>
						<CardTitle className="capitalize">Login</CardTitle>
					</CardHeader>
					<CardContent>
						<form action="" id="login-form" onSubmit={formik.handleSubmit}>
							<Input
								type="email"
								name="email"
								id="email"
								placeholder="email"
								className={`mb-4 placeholder:capitalize ${
									!formik.errors.email && formik.touched.email
										? "focus-visible:ring-green-600"
										: "focus-visible:ring-red-600"
								}`}
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								value={formik.values.email}
							/>
							<Button type="submit" className="w-full mb-4">
								Submit
							</Button>
						</form>
					</CardContent>
					<CardFooter className="justify-center">
						<p>Don't have an account?</p>
						<Link
							href={"/pages/signup"}
							className="underline text-[0.8em] ml-1"
						>
							Sign Up
						</Link>
					</CardFooter>
				</Card>
			</div>
		</section>
	);
}
