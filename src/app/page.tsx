import "./style.css";
import UserForm from "./components/forms/userForm";

export default function Home() {
	return (
		<section id="login" className="login container my-auto">
			<UserForm />
		</section>
	);
}
