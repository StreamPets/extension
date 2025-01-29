import "./Config.css";

const Config = () => {
	return (
		<div className="container">
			<h1 className="title">StreamPets</h1>
			<button
				className="launch-button"
				type="button"
				onClick={() => window.open(import.meta.env.VITE_DASH_URL, "_blank")}
			>
				<h1>Dashboard</h1>
			</button>
		</div>
	);
};

export default Config;
