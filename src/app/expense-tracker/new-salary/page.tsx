"use client";
import { Button } from "@/components/ui/button";
import SalaryForm from "@/app/components/forms/salaryForm";
import Link from "next/link";

export default function Page() {
	return (
		<section id="add-salary" className="p-4">
			<div className="navigation back mb-10">
				<Button>
					<Link href={"/"}>Back</Link>
				</Button>
			</div>
			<div className="form container p-0">
				<h3 className="uppercase text-center font-semibold mb-4">
					Update Salary
				</h3>
				<SalaryForm />
			</div>
		</section>
	);
}
