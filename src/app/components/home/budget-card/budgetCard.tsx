import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function budgetCard() {
	return (
		<Card>
			<CardContent>
				<div className="budget name container">
					<p>Groceries</p>
					<p>All food related groceries</p>
				</div>
				<div className="spent container">
					<CardTitle>-$30.0</CardTitle>
				</div>
				<div className="progress container">
					<p>Spent $30 out of $50</p>
				</div>
				<div className="button container">
					<Button className="w-full">Edit Budget</Button>
				</div>
			</CardContent>
		</Card>
	);
}
