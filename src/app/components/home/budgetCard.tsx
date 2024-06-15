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
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function budgetCard({
	title,
	description,
	budgeted_amount,
	spent_amount,
}: {
	title: string;
	description: string;
	budgeted_amount: string;
	spent_amount: string;
}) {
	// -------- component styles --------
	const card_content_top = {
		padding: "0",
		marginBottom: "0.5rem",
	};

	const card_content_bottom = {
		padding: "0",
		marginBottom: "0.5rem",
	};

	const card_content_header = {
		display: "flex" as "flex",
		flexDirection: "row" as "row",
		justifyContent: "space-between",
		marginBottom: "0.5rem",
		fontWeight: "600",
	};

	const card_content_header_spent = {
		whiteSpace: "nowrap" as "nowrap",
	};

	return (
		<Card>
			<CardHeader className="card-content">
				<div className="container" style={card_content_top}>
					<div style={card_content_header}>
						<p className="card-title">{title}</p>
						<p className="spent" style={card_content_header_spent}>
							-${Number(spent_amount).toFixed(2)}
						</p>
					</div>
					<CardDescription>{description}</CardDescription>
				</div>
				<div className="progress container" style={card_content_bottom}>
					<ProgressBar
						outOf={Number(spent_amount)}
						total={Number(budgeted_amount)}
					/>
					<CardDescription>
						Spent ${spent_amount} out of ${budgeted_amount}
					</CardDescription>
				</div>
				{/* dialog */}
				<Dialog>
					<DialogTrigger>
						<Button className="w-full">Edit Budget</Button>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Edit Budget</DialogTitle>
							<div className="form">
								<Label htmlFor="text">Budget Name</Label>
								<Input type="text" placeholder="Budget Name" />
							</div>
						</DialogHeader>
					</DialogContent>
				</Dialog>
			</CardHeader>
		</Card>
	);
}
