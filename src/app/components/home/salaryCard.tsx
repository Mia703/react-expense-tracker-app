import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function salaryCard() {
	const current_salary = 250.0;

	const per_needs = (50 * current_salary) / 100;
	const per_wants = (30 * current_salary) / 100;
	const per_other = (20 * current_salary) / 100;

	return (
		<Card className="mb-4">
			<CardHeader>
				<div className="container top flex flex-row justify-between items-center p-0 mb-4 capitalize">
					<CardDescription id="card-title">Salary</CardDescription>
					<Button id="new-salary-btn">
						<Link href="/expense-tracker/new-salary">New Salary</Link>
					</Button>
				</div>
				<div className="container bottom">
					<CardTitle id="current-salary" className="text-center text-4xl">
						${current_salary.toFixed(2)}
					</CardTitle>
				</div>
			</CardHeader>
			<CardContent className="grid grid-cols-2 text-xs text-[var(--primary-slate)]">
				<p className="percentage subtitle">50% for needs</p>
				<p className="percentage subtitle needs text-right">
					${per_needs.toFixed(2)}
				</p>
				<p className="percentage subtitle">30% for wants</p>
				<p className="percentage subtitle wants text-right">
					${per_wants.toFixed(2)}
				</p>
				<p className="percentage subtitle">20% for other</p>
				<p className="percentage subtitle other text-right">
					${per_other.toFixed(2)}
				</p>
			</CardContent>
		</Card>
	);
}