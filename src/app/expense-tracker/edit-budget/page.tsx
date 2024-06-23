import { Button } from "@/components/ui/button";
import BudgetForm from "@/app/components/forms/budgetForm";
import Link from "next/link";

export default function Page() {
	return (
		<section id="edit-budget" className="p-4 mb-4">
			<div className="navigation back mb-6">
				<Button>
					<Link href={"/"}>Back</Link>
				</Button>
			</div>
			<div className="form container p-0">
				<h3 className="uppercase text-center font-semibold mb-4">
					Edit Budget
				</h3>
				<BudgetForm type="edit" />
			</div>
		</section>
	);
}
