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

export default function SignUpPage() {
	const router = useRouter();

	async function signup(fname: string, email: string) {
		const data = {
			fname,
			email,
		};
		
		const { error } = await supabase.from("users").insert({
			fname: data.fname,
			email: data.email,
		});

		if (error) {
			console.log(
				"Error: user was not signed up successfully: ",
				error.message
			);
		} else {
			// TODO: navigate to dashboard page
			router.push('/pages/dashboard');
		}
	}

	const signupValidation = Yup.object({
		fname: Yup.string()
			.min(1, "first name is too short")
			.max(20, "first name is too long")
			.required("please enter your first name"),
		email: Yup.string()
			.email("please enter a valid email")
			.required("please enter your email"),
	});

	const formik = useFormik({
		initialValues: {
			fname: "",
			email: "",
		},
		validationSchema: signupValidation,
		onSubmit: async (values) => {
			// submit user credentials
			console.log(values.fname);
			console.log(values.email);
			signup(values.fname, values.email);
		},
	});

	return (
		<section
			id="sign-up-page"
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
						<ChevronLeft className="w-4 h-4" />
					</Link>
				</Button>
			</div>

			<div className="sign-up-form group my-20 text-center">
				<Card>
					<CardHeader>
						<CardTitle className="capitalize">Sign Up</CardTitle>
					</CardHeader>
					<CardContent>
						<form action="" id="sign-up-form" onSubmit={formik.handleSubmit}>
							<Input
								type="text"
								name="fname"
								id="fname"
								placeholder="first name"
								className={`mb-4 placeholder:capitalize ${
									!formik.errors.fname && formik.touched.fname
										? "focus-visible:ring-green-600"
										: "focus-visible:ring-red-600"
								}`}
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								value={formik.values.fname}
							/>
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
						<p>Already have an account?</p>
						<Link href={"/pages/login"} className="underline text-[0.8em] ml-1">
							Login
						</Link>
					</CardFooter>
				</Card>
			</div>
		</section>
	);
}
