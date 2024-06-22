import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
	return (
		<div>
			add-budget
			<Button>
				<Link href="/">Home</Link>
			</Button>
		</div>
	);
}
