import data from "./data.json";
import "./style.css";

const $dayShort = document.querySelectorAll(".day span") as NodeListOf<HTMLSpanElement>;
const showChart = () => {
	let currentDay: string = new Intl.DateTimeFormat("en-US", { weekday: "long" })
		.format()
		.toLowerCase(); //We get friday for example
	const $dayLong = document.getElementById(`${currentDay}`)!
		.previousElementSibling as HTMLDivElement;
	$dayShort.forEach((item, index) => {
		let sibling = item.previousElementSibling as HTMLDivElement;
		sibling.style.height = `${data[index].amount}%`;
	});
	$dayLong.style.backgroundColor = "var(--cyan)";
};

window.onload = () => {
	showChart();
};
