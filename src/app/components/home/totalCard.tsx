import {
	Card,
	CardDescription,
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

	return (
		<Card className="mb-4">
			<CardHeader className="text-center">
				<CardDescription className="text-sm mb-2">{title}</CardDescription>
				<CardTitle className="text-xl sm:text-2xl">
					{isNegative(Number(number))}
				</CardTitle>
			</CardHeader>
		</Card>
	);
}