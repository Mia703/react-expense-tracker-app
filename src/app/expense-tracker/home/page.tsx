import "./style.css";
import BalanceCard from "@/app/components/home/balanceCard";
import SalaryCard from "@/app/components/home/salaryCard";
import Divider from "@/app/components/home/divider";
import TotalCard from "@/app/components/home/totalCard";
import BudgetCard from "@/app/components/home/budgetCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
	// get today's date
	const today = new Date();
	const date = formatDate(today);
	const time = formatTime(today);

	// formats the date
	function formatDate(today: Date) {
		const daysOfWeek_long = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		];
		const daysOfWeek_short = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

		// get the long and short form day of the week
		const dayOfWeek_long = daysOfWeek_long[today.getDay()];
		const dayOfWeek_short = daysOfWeek_short[today.getDay()];

		// replace the short day of week with the long and add a comma
		const today_string = today
			.toDateString()
			.replace(dayOfWeek_short, `${dayOfWeek_long},`);

		return today_string;
	}

	// formats the time
	function formatTime(today: Date) {
		let hours = today.getHours();
		let minutes = today.getMinutes();

		// convert time to the 12-hour format
		const period = hours >= 12 ? "PM" : "AM";
		hours = hours % 12 || 12;

		// adding leading zero to minutes, if needed
		const formattedHours = hours < 10 ? `0${hours}` : hours;
		const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

		return `${formattedHours}:${formattedMinutes} ${period}`;
	}

	// formats day of time response
	function formatResponse() {
		const time = today.getHours();
		// 1.00 AM - 8.00 AM
		if (time < 9) {
			return "Good morning";
		}
		// 9.00 AM - 5.00 PM
		else if (time >= 9 && time <= 17) {
			return "Good afternoon";
		}
		// 6.00 PM - midnight (12.00 AM)
		else {
			return "Good evening";
		}
	}

	return (
		<main id="homepage">
			<div className="navigation mobile">
				<Button>
					<Link href={'/'}>Exit</Link>
				</Button>
			</div>
			<div className="navigation desktop"></div>

			<div className="body container">
				<div className="header container">
					<p id="header">{formatResponse()}</p>
					<p id="date">
						Today is {date}, {time}.
					</p>
				</div>
				<div className="summery container">
					<BalanceCard />
					<SalaryCard />
				</div>
				<div className="savings container">
					<div className="savings header">
						<Divider title={"Savings"} />
					</div>
					<div className="summary container">
						<TotalCard title={"Total Actual Savings"} number={"88"} />
						<TotalCard title={"Total Budgeted Savings"} number={"150"} />
					</div>
					<div className="budget container">
						<BudgetCard
							type={"savings"}
							title={"Ana Luisa"}
							description={"Jewellery"}
							budgeted_amount={"100"}
							spent_amount={"78"}
						/>
						<BudgetCard
							type={"savings"}
							title={"H&M"}
							description={"Summer tops and pants. Maybe dresses."}
							budgeted_amount={"50"}
							spent_amount={"10"}
						/>
					</div>
				</div>
				<div className="expenses container">
					<div className="expenses header col-span-2">
						<Divider title={"Expenses"} />
					</div>
					<div className="needs container">
						<h3 className="font-semibold my-4">Needs</h3>
						<div className="totals container grid grid-cols-2 gap-4 mb-4">
							<TotalCard title={"Total Actual Expenses"} number={"-130"} />
							<TotalCard title={"Total Budgeted Expenses"} number={"150"} />
						</div>
						<div className="budgets container">
							<BudgetCard
								type={"expenses"}
								title={"Groceries"}
								description={"lorem ipsum"}
								budgeted_amount={"100"}
								spent_amount={"80"}
							/>
							<BudgetCard
								type={"expenses"}
								title={"Laundry"}
								description={"lorem ipsum"}
								budgeted_amount={"50"}
								spent_amount={"50"}
							/>
						</div>
					</div>
					<div className="wants container">
						<h3 className="font-semibold my-4">Wants</h3>
						<div className="totals container grid grid-cols-2 gap-4 mb-4">
							<TotalCard title={"Total Actual Expenses"} number={"-14"} />
							<TotalCard title={"Total Budgeted Expenses"} number={"50"} />
						</div>
						<div className="budgets container">
							<BudgetCard
								type={"expenses"}
								title={"Amazon"}
								description={"nail polish, tip-x nails"}
								budgeted_amount={"50"}
								spent_amount={"14"}
							/>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}