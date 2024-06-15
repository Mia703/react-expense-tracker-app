import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function salaryCard() {
	const current_salary = 250.0;

	const per_needs = (50 * current_salary) / 100;
	const per_wants = (30 * current_salary) / 100;
	const per_other = (20 * current_salary) / 100;

	// -------- component styles --------
	const card_header_top = {
		display: "flex" as "flex",
		flexDirection: "row" as "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "0",
		marginBottom: "0.5rem",
		textTransform: "capitalize" as "capitalize"
	};

	const card_title = {
		textAlign: "center" as "center",
		fontSize: "2em",
	};

	const card_content = {
		display: "grid",
		gridTemplateColumns: "repeat(2, 1fr)",
		color: "var(--primary-slate)",
		fontSize: "0.8em",
	};

	const card_content_right = {
		textAlign: "right" as "right",
	};

	return (
		<Card>
			<CardHeader>
				<div className="container top" style={card_header_top}>
					<CardDescription id="card-title">Salary</CardDescription>
					<Button id="new-salary-btn">New Salary</Button>
				</div>
				<div className="container bottom">
					<CardTitle id="current-salary" style={card_title}>
						${current_salary.toFixed(2)}
					</CardTitle>
				</div>
			</CardHeader>
			<CardContent style={card_content}>
				<p className="percentage subtitle">50% for needs</p>
				<p className="percentage subtitle needs" style={card_content_right}>
					${per_needs.toFixed(2)}
				</p>
				<p className="percentage subtitle">30% for wants</p>
				<p className="percentage subtitle wants" style={card_content_right}>
					${per_wants.toFixed(2)}
				</p>
				<p className="percentage subtitle">20% for other</p>
				<p className="percentage subtitle other" style={card_content_right}>
					${per_other.toFixed(2)}
				</p>
			</CardContent>
		</Card>
	);
}
