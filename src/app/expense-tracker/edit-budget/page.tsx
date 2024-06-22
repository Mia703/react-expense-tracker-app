import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
	return (
		<div>
			edit budget
			<Button>
				<Link href="/">Click Me</Link>
			</Button>
		</div>
	);
}