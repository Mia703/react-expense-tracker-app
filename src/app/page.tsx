import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
	return (
		<main
			id="home-page"
			className="sm:col-span-4 md:col-span-6 lg:col-span-6"
		>
			<div className="group h-screen flex flex-col justify-end pb-20">
				<div className="login group text-center">
					<h3 className="capitalize">Expense Tracker</h3>
					<p>Login or sign up to get started budgeting.</p>
					<div className="button group flex flex-col py-4">
						<Button variant="outline" className="mb-4" asChild>
							<Link href={"/pages/signup"}>Sign Up</Link>
						</Button>
						<Button className="mb-4" asChild>
							<Link href={"/pages/login"}>Login</Link>
						</Button>
					</div>
				</div>
			</div>
		</main>
	);
}
