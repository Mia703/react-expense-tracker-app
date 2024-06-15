import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function balanceCard() {
	const total_assets = 34.0;
	const liabilities = 12.0;
	const current_balance = total_assets - liabilities;

	// -------- component styles --------
	const card_description = {
		textTransform: "capitalize" as "capitalize",
		fontSize: "0.8em",
	};

	const card_title = {
		textAlign: "center" as "center",
		fontSize: "2em",
	};

	const card_content = {
		display: "grid",
		gridTemplateColumns: "repeat(2, 1fr)",
		fontSize: "0.8em",
		color: "var(--primary-slate)",
	};

	const card_content_right = {
		textAlign: "right" as "right",
	};

	return (
		<Card className="balance-card">
			<CardHeader>
				<CardDescription style={card_description}>
					Total Balance
				</CardDescription>
				<CardTitle className="current-balance" style={card_title}>
					${current_balance.toFixed(2)}
				</CardTitle>
			</CardHeader>
			<CardContent style={card_content}>
				<p className="balance subtitle">Total Assets</p>
				<p className="balance total" style={card_content_right}>
					${total_assets.toFixed(2)}
				</p>
				<p className="balance subtitle">Liabilities</p>
				<p className="balance liabilities" style={card_content_right}>
					-${liabilities.toFixed(2)}
				</p>
			</CardContent>
		</Card>
	);
}
