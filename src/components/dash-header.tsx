import { H1 } from "./h1";

export function DashHeader() {
	return (
		<header className="text-white flex items-center py-4 justify-between">
			<div className="flex flex-col gap-2">
				<H1>PetSoft</H1>
				<p className="opacity-80 text-lg">Gerenciando seus 🐶 com rapidez.</p>
			</div>
			<div className="flex flex-col items-center gap-2">
				<span className="text-2xl font-bold leading-6">2</span>
				<span className="opacity-80">hóspedes atuais</span>
			</div>
		</header>
	);
}
