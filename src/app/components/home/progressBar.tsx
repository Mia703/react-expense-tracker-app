import { Progress } from "@/components/ui/progress";

export default function progressBar({
	outOf,
	total,
}: {
	outOf: number;
	total: number;
}) {
	let percentage = (outOf / total) * 100;

	function barColor(spent: number, total: number) {
		let total_half = total / 2;
		let total_lower_quarter = total_half / 2;
		let total_upper_quarter = total_half + total_lower_quarter;

		if (spent >= 0 && spent <= total_lower_quarter) {
			return "#16a34a";
		} else if (spent > total_lower_quarter && spent <= total_half) {
			return "#facc15";
		} else if (spent > total_half && spent <= total_upper_quarter) {
			return "#f97316";
		} else {
			return "#dc2626";
		}
	}

	const outer_bar = {
		width: "100%",
		backgroundColor: "lightgrey",
		borderRadius: "5000px",
		overflow: "hidden",
		margin: "0.3rem 0",
	};

	const inner_bar = {
		width: `${percentage}%`,
		height: "10px",
		backgroundColor: barColor(outOf, total),
	};

	return (
		<div className="outer-bar" style={outer_bar}>
			<div className="inner-bar" style={inner_bar}></div>
		</div>
	);
}
