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
import { Label } from "@/components/ui/label";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useFormik } from "formik";
import { supabase } from "@/lib/api/supabase/supabase";
import { useEffect, useState } from "react";
import { User } from "@/lib/types/user";

export default function NewSalaryForm() {
	// get the current user's information
	const [currUser, setUser] = useState<User | null>(null);

	useEffect(() => {
		const user = sessionStorage.getItem('user') as string;
		if (user) {
			setUser(JSON.parse(user) as User);
		}
	}, []);

	// update the user's current salary
	async function updateSalary(salary: string) {
		const { error } = await supabase.from("salaries").update({
			salary: salary,
		}).eq('user_id', currUser?.id);

		if (error) {
			console.log("Error: could not insert updated salary: ", error.message);
		} else {
			console.log("inserted updated salary successfully");
		}
	}

	const formik = useFormik({
		initialValues: {
			salary: "",
		},
		onSubmit: async (values) => {
			// console.log(values.salary);
			updateSalary(values.salary);
			// route back to dashboard?
		},
	});

	return (
		<section
			id="new-salary-form"
			className="p-4 min-h-screen flex flex-col justify-between col-span-4 md:col-start-2 md:col-end-6 lg:col-start-5 lg:col-end-9"
		>
			<div className="back-button group">
				<Button
					type="button"
					variant={"ghost"}
					size={"icon"}
					id="back-btn"
					asChild
				>
					<Link href={"/pages/dashboard"}>
						<ChevronLeft className="w-4 h-4" />
					</Link>
				</Button>
			</div>
			<div className="salary-form group flex flex-col flex-grow justify-center">
				<Card className="text-center p-4">
					<CardContent>
						<form action="" id="salary-form" onSubmit={formik.handleSubmit}>
							<Label htmlFor="salary" className="uppercase font-bold">
								How much did you earn?
							</Label>
							<Input
								type="number"
								name="salary"
								id="salary"
								placeholder="Enter your new salary"
								className="my-4"
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								value={formik.values.salary}
							/>
							<Button type="submit" className="w-full">
								Update Salary
							</Button>
						</form>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
