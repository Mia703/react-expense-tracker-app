
export default function budgetForm({type}:{type:string;}) {

	function returnTitle (type:string) {
		if (type == "add") {
			return "add"
		}
		return "edit"
	}

	return(
		<div className="form">
			<h3 className="uppercase text-center">{returnTitle(type)} budget</h3>
		</div>
	);
}