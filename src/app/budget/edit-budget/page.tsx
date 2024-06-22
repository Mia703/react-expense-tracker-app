import BudgetCard from "../../components/home/budgetCard.tsx"

export default function editBudget() {
	return (
		<section>
			<BudgetCard
				title={"Groceries"}
				description={"lorem ipsum"}
				budgeted_amount={"100"}
				spent_amount={"80"}
			/>
			<div className="transaction history container">
				<h2>Transaction History</h2>
			</div>
		</section>
	);
}