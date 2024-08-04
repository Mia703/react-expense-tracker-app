import { Button } from "@/components/ui/button";
import React from "react";

interface BudgetButtonProps {
	budgetName: string;
	totalSpent: number;
	totalBudgeted: number;
}

const BudgetButton: React.FC<BudgetButtonProps> = ({
	budgetName,
	totalSpent,
	totalBudgeted,
}) => {
	const amountLeft = totalBudgeted - totalSpent;
	return (
		<Button
			type="button"
			variant={"outline"}
			className="h-full flex flex-row justify-between items-center"
		>
			<p className="text-sm font-semibold mb-4">{budgetName}</p>
			<div className="group text-right">
				<p className="text-lg font-bold">
					${amountLeft <= 0 ? "0.00" : amountLeft.toFixed(2)}
				</p>
				<p className="text-small text-gray-500 text-right">
					${totalSpent.toFixed(2)} out of ${totalBudgeted.toFixed(2)} spent
				</p>
			</div>
		</Button>
	);
};

export default BudgetButton;
