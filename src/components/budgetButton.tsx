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
	return (
		<Button
			type="button"
			variant={"outline"}
			className="flex flex-row justify-between items-center w-full p-6"
		>
			<p className="text-sm font-semibold">{budgetName}</p>
			<p className="text-lg font-bold">
				${totalSpent.toFixed(2)} / ${totalBudgeted.toFixed(2)}
			</p>
		</Button>
	);
};

export default BudgetButton;
