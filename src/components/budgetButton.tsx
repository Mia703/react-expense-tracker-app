import { Button } from "@/components/ui/button";


export default function BudgetButton() {
	return (
		<Button type="button" variant={'outline'} className="flex flex-row justify-between items-center w-full">
			<p className="text-sm font-semibold">text</p>
			<p className="text-lg font-bold">$35/$40</p>
		</Button>
	);
}
