export default function progressBar({
	type,
	outOf,
	total,
}: {
	type: string;
	outOf: number;
	total: number;
}) {
	let percentage = (outOf / total) * 100;

	function barColor(type: string, spent: number, total: number) {
		let total_half = total / 2;
		let total_lower_quarter = total_half / 2;
		let total_upper_quarter = total_half + total_lower_quarter;

		if (type == "savings") {
			if (spent >= 0 && spent <= total_lower_quarter) {
				return "#dc2626";
			} else if (spent > total_lower_quarter && spent <= total_half) {
				return "#f97316";
			} else if (spent > total_half && spent <= total_upper_quarter) {
				return "#facc15";
			} else {
				return "#16a34a";
			}
		} else {
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
	}

	const inner_bar = {
		width: `${percentage}%`,
		backgroundColor: barColor(type, outOf, total),
	};

	return (
		<div className="outer-bar w-full bg-[lightgrey] rounded-[5000px] overflow-hidden my-2">
			<div className="inner-bar h-[10px]" style={inner_bar}></div>
		</div>
	);
}