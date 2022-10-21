import "./style.css";
import data from "./data.json";

const $dayShort = document.querySelectorAll(".day span") as NodeListOf<HTMLSpanElement>,
	$bar = document.querySelectorAll(".day div");

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
	$dayLong.addEventListener("mouseover", () => {
		$dayLong.style.backgroundColor = "#b4ecf1";
	});
	$dayLong.addEventListener("mouseleave", () => {
		$dayLong.style.backgroundColor = "var(--cyan)";
	});
};

const showPrice = (dato: NodeListOf<Element>) => {
	dato.forEach((item, index) => {
		const $price = item.previousElementSibling!;
		item.addEventListener("mouseover", () => {
			$price.classList.remove("hidden");
			$price.textContent = `$${data[index].amount}`;
		});
		item.addEventListener("mouseleave", () => {
			$price.classList.add("hidden");
		});
	});
};

window.onload = () => {
	showChart();
	showPrice($bar);
};
