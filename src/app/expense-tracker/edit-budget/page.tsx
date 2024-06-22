import { Button } from "@/components/ui/button";
import BudgetForm from "@/app/components/forms/budgetForm";
import Link from "next/link";

export default function Page() {
	return (
		<section className="edit-budget">
			<div className="navigation back">
				<Button>
					<Link href={"/"}>Back</Link>
				</Button>
			</div>
			<div className="form container">
				<BudgetForm type="edit"/>
			</div>
		</section>
	);
}