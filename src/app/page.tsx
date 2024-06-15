import './style.css';
import BalanceCard from "./components/home/balanceCard";
import SalaryCard from "./components/home/salaryCard";
import Divider from "./components/home/divider";
import TotalCard from "./components/home/total-card/totalCard";

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

	return (
		<main id="homepage">
			<div className="navigation mobile"></div>
			<div className="navigation desktop"></div>
			<div className="body container">
				<div className="header container">
					<p id="header">Good morning</p>
					<p id="date">
						Today is {date}, {time}.
					</p>
				</div>
				<div className="balance container">
					<BalanceCard />
				</div>
				<div className="salary container">
					<SalaryCard />
				</div>
				<div className="expenses container">
					<Divider title={"Expenses"} />
					<div className="needs container">
						<h3>Needs</h3>
						<div className="totals container">
							<TotalCard title={"Total Actual Expenses"} number={-41} />
							<TotalCard title={"Total Budgeted Expenses"} number={-41} />
						</div>
						<div className="budgets container"></div>
					</div>
					<div className="wants container">
						<h3>Wants</h3>
						<div className="totals container">
							<TotalCard title={"Total Actual Expenses"} number={-41} />
							<TotalCard title={"Total Budgeted Expenses"} number={-41} />
						</div>
						<div className="budgets container"></div>
					</div>
				</div>
			</div>
		</main>
	);
}
