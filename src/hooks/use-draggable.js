import { useEffect, useState } from "react";

export default function useDraggable(id) {
	const [position, setPosition] = useState({
		x: 0,
		y: 0,
	});
	useEffect(() => {
		const circle = document.getElementById(id);
		circle.addEventListener("mousedown", function (e) {
			e.preventDefault();
			circle.style.pointerEvents = "none";
			document.body.addEventListener("mousemove", move);
			document.body.addEventListener("mouseup", () => {
				document.body.removeEventListener("mousemove", move);
				circle.style.pointerEvents = "initial";
				console.log(e);
			});
		});
		return () => {
			document.body.removeEventListener("mousedown", move);
			document.body.removeEventListener("mouseup", move);
			document.body.removeEventListener("mousemove", move);
		};
	}, []);

	function move(e) {
		const bound = e.target.getBoundingClientRect();
		const pos = {
			x: e.clientX - bound.left,
			y: e.clientY - bound.top,
		};
		console.log(pos);
		setPosition(pos);
	}
	return {
		position,
	};
}
