import "./style.css";
import UserForm from "./components/forms/userForm";
import Link from "next/link";

export default function Home() {
	return (
		<section id="login" className="login container my-auto">
			<UserForm type={false} />
		</section>
	);
}
