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

	return (
		<Card className="balance-card mb-4">
			<CardHeader>
				<CardDescription className="capitalize text-sm">
					Total Balance
				</CardDescription>
				<CardTitle className="current-balance text-center text-4xl">
					${current_balance.toFixed(2)}
				</CardTitle>
			</CardHeader>
			<CardContent className="grid grid-cols-2 text-xs text-[var(--primary-slate)]">
				<p className="balance subtitle">Total Assets</p>
				<p className="balance total text-right">${total_assets.toFixed(2)}</p>
				<p className="balance subtitle">Liabilities</p>
				<p className="balance liabilities text-right">
					-${liabilities.toFixed(2)}
				</p>
			</CardContent>
		</Card>
	);
}