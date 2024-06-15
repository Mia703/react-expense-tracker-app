import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";


export default function totalCard({title, number}:{title:string, number:number}) {

	// determines if a number is negative, returns true
	// function isNegative (number) {
	// 	if (number < 0) {
	// 		let formatted_number = number - number * 2;
	// 		return `-${formatted_number.toFixed(2)}`;
	// 	}
	// 	return `-${number.toFixed(2)}`;
	// }

	return(
		<Card>
			<CardHeader>
				<CardDescription>{title}</CardDescription>
				<CardTitle>{}</CardTitle>
			</CardHeader>
		</Card>
	);
}