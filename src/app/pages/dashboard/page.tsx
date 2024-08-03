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

export default function Dashboard() {
	return (
		<section
			id="dashboard-page"
			className="sm:col-span-4 md:col-span-6 lg:col-span-12"
		>
			<div className="header group">
				<h3>Hey, firstname</h3>
				<p>Here you can see an overview of your budget.</p>
			</div>
			<div className="salary-card group my-4">
				<Card className="">
					<CardHeader className="flex flex-row justify-between items-end">
						<CardDescription>Salary</CardDescription>
						<Button type="button">New Salary</Button>
					</CardHeader>
					<CardContent className="text-center">
						<CardTitle className="text-4xl">$750.00</CardTitle>
					</CardContent>
					<CardFooter>
						<div className="percentages group flex flex-row justify-between w-full text-gray-500">
							<div className="left group">
								<p>50% for needs</p>
								<p>30% for wants</p>
								<p>20% for other</p>
							</div>
							<div className="right group">
								<p>$</p>
								<p>$</p>
								<p>$</p>
							</div>
						</div>
					</CardFooter>
				</Card>
			</div>
			<div id="savings" className="category">
				<h3 className="uppercase">Savings</h3>
				<div className="budgets group my-2 grid gap-2 md:grid-cols-1 lg:grid-cols-2">
					<BudgetButton />
					<BudgetButton />
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
