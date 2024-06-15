import { Button } from "@/components/ui/button";

export default function divider({ title }: { title: string }) {
	// -------- component styles --------
	const divider = {
		display: "flex" as "flex",
		flexDirection: "row" as "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingBottom: "0.5rem",
		borderBottom: "2px solid var(--primary-black)",
		marginBottom: "1rem",
	};

	const divider_title = {
		textTransform: "uppercase" as "uppercase",
		fontWeight: "600",
	};

	return (
		<div className="divider" style={divider}>
			<h2 style={divider_title}>{title}</h2>
			<Button variant={"outline"}>+</Button>
		</div>
	);
}
