"use client";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BudgetButton from "@/components/budgetButton";
import { useEffect, useState } from "react";
import { User } from "@/lib/types/user";
import { supabase } from "@/lib/api/supabase/supabase";
import Link from "next/link";

export default function Dashboard() {
	// get the current user's information
	const [currUser, setUser] = useState<User | null>(null);
	// ge the user's current salary
	const [salary, setSalary] = useState<number | null>(null);
	const [needs, setNeeds] = useState(0);
	const [wants, setWants] = useState(0);
	const [other, setOther] = useState(0);

	useEffect(() => {
		const user = sessionStorage.getItem("user") as string;
		// console.log('got from sessionStorage: ', user);
		if (user) {
			setUser(JSON.parse(user) as User);
		}
	}, []);

	// fetches the current user's salary and updates the 'salary' variable
	useEffect(() => {
		const fetchSalary = async () => {
			if (currUser != null) {
				const { data, error } = await supabase
					.from("salaries")
					.select("salary")
					.eq("user_id", currUser.id);

				if (error) {
					console.log("Error: could not get user's salary: ", error.message);
				} else if (data) {
					console.log("got user's salary");
					setSalary(data[0].salary);
				}
			}
		};
		fetchSalary();
	}, [currUser]);

	// updates the needs, wants, and other variables based on the information from the 'salary' variable
	useEffect(() => {
		if (salary != null) {
			const calculatedNeeds = salary * 0.5;
			const calculatedWants = salary * 0.3;
			const calculatedOther = salary * 0.2;

			setNeeds(calculatedNeeds);
			setWants(calculatedWants);
			setOther(calculatedOther);
		}
	}, [salary]);

	return (
		<section
			id="dashboard-page"
			className="p-4 col-span-4 md:col-start-2 md:col-end-6 lg:col-start-5 lg:col-end-9"
		>
			<div className="header group">
				<h3>Hey, {currUser ? currUser.fname : "No Name"}</h3>
				<p>Here you can see an overview of your budget.</p>
			</div>
			<div className="salary-card group my-4">
				<Card className="">
					<CardHeader className="flex flex-row justify-between items-end">
						<CardDescription>Salary</CardDescription>
						<Button type="button" asChild>
							<Link href={"/pages/forms/newSalaryForm"}>New Salary</Link>
						</Button>
					</CardHeader>
					<CardContent className="text-center">
						<CardTitle className="text-4xl">
							${salary ? salary.toFixed(2) : 0.0}
						</CardTitle>
					</CardContent>
					<CardFooter>
						<div className="percentages group flex flex-row justify-between w-full text-gray-500">
							<div className="left group">
								<p>50% for needs</p>
								<p>30% for wants</p>
								<p>20% for other</p>
							</div>
							<div className="right group">
								<p>${needs.toFixed(2)}</p>
								<p>${wants.toFixed(2)}</p>
								<p>${other.toFixed(2)}</p>
							</div>
						</div>
					</CardFooter>
				</Card>
			</div>
			<div id="savings" className="category">
				<h3 className="uppercase">Savings</h3>
				<div className="budgets group my-2 grid gap-2 md:grid-cols-1 lg:grid-cols-2">
					<BudgetButton
						budgetName="Budget"
						totalSpent={81.45}
						totalBudgeted={750}
					/>
				</div>
			</div>
			<div id="expenses-needs" className="category">
				<h3 className="uppercase">Expenses - Needs</h3>
			</div>
			<div id="expenses-wants" className="category">
				<h3 className="uppercase">Expenses - Wants</h3>
			</div>
		</section>
	);
}
