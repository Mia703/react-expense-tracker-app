import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

type total_card_properties = {
	title: string;
	number: string;
};

export default function totalCard({ title, number }: total_card_properties) {
	// determines if a number is negative, returns true
	function isNegative(num: number): string {
		if (num < 0) {
			let formatted_number = num * -1;
			return `-$${formatted_number.toFixed(2)}`;
		}
		return `$${num.toFixed(2)}`;
	}

	// -------- component styles --------
	const card_header = {
		textAlign: "center" as "center",
	};

	const card_description = {
		fontSize: "0.8em",
		marginBottom: "0.5rem",
	};

	return (
		<Card>
			<CardHeader style={card_header}>
				<CardDescription style={card_description}>{title}</CardDescription>
				<CardTitle>{isNegative(Number(number))}</CardTitle>
			</CardHeader>
		</Card>
	);
}
