import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import ProgressBar from "./progressBar";
import Link from "next/link";

export default function budgetCard({
	type,
	title,
	description,
	budgeted_amount,
	spent_amount,
}: {
	type: string;
	title: string;
	description: string;
	budgeted_amount: string;
	spent_amount: string;
}) {
	function formatExpense(type: string, amount: string) {
		if (type == "savings") {
			return `$${Number(spent_amount).toFixed(2)}`;
		}
		return `-$${Number(spent_amount).toFixed(2)}`;
	}

	function formatDescription(type: string) {
		if (type == "savings") {
			return "Saved";
		}
		return "Spent";
	}

	const edit_button = {
		marginTop: "1rem",
	};

	return (
		<Card className="mb-4">
			<CardHeader className="card-content">
				<div className="container mb-1">
					<div className="flex flex-row justify-between items-center mb-4">
						<p className="card-title font-semibold">{title}</p>
						<p className="spent font-semibold text-xl">
							{formatExpense(type, spent_amount)}
						</p>
					</div>
					<CardDescription>{description}</CardDescription>
				</div>
				<div className="progress container">
					<ProgressBar
						type={type}
						outOf={Number(spent_amount)}
						total={Number(budgeted_amount)}
					/>
					<CardDescription>
						{formatDescription(type)} ${spent_amount} out of ${budgeted_amount}
					</CardDescription>
				</div>
				<Button
					variant={"outline"}
					className="w-full border-[var(--primary-black)] hover:bg-[var(--primary-black)] hover:text-white"
					style={edit_button}
				>
					<Link href={"/expense-tracker/edit-budget"}>Edit Budget</Link>
				</Button>
			</CardHeader>
		</Card>
	);
}