"use client";

const year = new Date().getFullYear();

export function AppFooter() {
	return (
		<footer className="border-t mt-auto border-black/5 py-5">
			<small className="opacity-50">&copy; {year} F.Avanzzo</small>
		</footer>
	);
}
