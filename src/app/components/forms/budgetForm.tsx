"use client";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";

export default function budgetForm({ type }: { type: string }) {
	const formik = useFormik({
		initialValues: {
			budget: "",
			description: "",
			budgetType: "",
			acctName: "",
			targetAmt: "",
		},
		onSubmit: (values) => {
			console.log(values);
		},
	});
	return (
		<Card className="p-0">
			<CardContent className="pt-6">
				<form id="add-budget-form" onSubmit={formik.handleSubmit}>
					{/* budget name */}
					<div className="input mb-4">
						<Label htmlFor="budget" className="uppercase font-medium">
							Budget
						</Label>
						<Input
							type="text"
							id="budget"
							name="budget"
							className="mt-2"
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							value={formik.values.budget}
						/>
					</div>
					{/* budget description */}
					<div className="input mb-4">
						<Label htmlFor="description" className="uppercase font-medium">
							Description
						</Label>
						<Textarea
							id="description"
							name="description"
							className="mt-2"
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							value={formik.values.description}
						/>
					</div>
					{/* savings or expense? */}
					<div className="input mt-6 mb-4">
						<select
							name="budgetType"
							id="budgetType"
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							value={formik.values.budgetType}
							className="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 [&>span]:line-clamp-1 w-full cursor-pointer"
						>
							<option value="salary">Salary</option>
							<option value="expenseNeeds">Expenses - Needs</option>
							<option value="expenseWants">Expenses - Wants</option>
						</select>
					</div>
					{/* account name */}
					<div className="input mb-4">
						<Label htmlFor="acctName" className="uppercase font-medium">
							Account Name
						</Label>
						<Input
							type="text"
							id="acctName"
							name="acctName"
							className="mt-2"
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							value={formik.values.acctName}
						/>
					</div>
					{/* target amount */}
					<div className="input mb-4">
						<Label htmlFor="targetAmt" className="uppercase font-medium">
							Target Amount
						</Label>
						<div className="relative w-full mt-4">
							<span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--primary-slate)]">
								$
							</span>
							<Input
								type="text"
								id="targetAmt"
								name="targetAmt"
								className="pl-7 pr-2 py-2 w-full border rounded-md text-center placeholder:text-center"
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								value={formik.values.targetAmt}
								// required
							/>
						</div>
					</div>
					<Button type="submit" className="w-full">
						{type == "add" ? "Add Budget" : "Update Budget"}
					</Button>
				</form>
			</CardContent>
		</Card>
	);
}
