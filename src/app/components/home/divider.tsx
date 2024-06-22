import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function divider({ title }: { title: string }) {
	return (
		<div className="divider flex flex-row justify-between items-center pb-3 mt-8 mb-4 border-b-2 border-[var(--primary-black)]">
			<h2 className="uppercase font-semibold">{title}</h2>
			<Button>
				<Link href="/expense-tracker/add-budget">Add Budget</Link>
			</Button>
		</div>
	);
}