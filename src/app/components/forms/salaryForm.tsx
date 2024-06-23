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
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";

export default function salaryForm() {
	const formik = useFormik({
		initialValues: {
			salary: "",
		},
		onSubmit: (values) => {
			console.log(values.salary);
		},
	});

	return (
		<Card>
			<CardContent className="pt-6">
				<form onSubmit={formik.handleSubmit} id="salary-form">
					<Label htmlFor="salary" className="uppercase font-medium">
						How much did you earn?
					</Label>
					<div className="relative w-full my-6 mt-4">
						<span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--primary-slate)]">
							$
						</span>
						<Input
							type="text"
							id="salary"
							name="salary"
							className="pl-7 pr-2 py-2 w-full border rounded-md text-center placeholder:text-center"
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							value={formik.values.salary}
							required
						/>
					</div>
					<Button type="submit" className="w-full">
						Add Salary
					</Button>
				</form>
			</CardContent>
		</Card>
	);
}
