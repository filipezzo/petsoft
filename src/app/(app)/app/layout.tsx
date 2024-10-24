import { PetContextProvider } from "@/app/contexts/pet-context-provider";
import { AppFooter } from "@/components/app-footer";
import { BgPattern } from "@/components/bg-pattern";
import { Header } from "@/components/header";
import { Pet } from "@/types/pets";
import { ReactNode } from "react";

export default async function AppLayout({ children }: { children: ReactNode }) {
	const response = await fetch(
		"https://bytegrad.com/course-assets/projects/petsoft/api/pets"
	);

	if (!response.ok) {
		throw new Error("Erro ao buscar pets");
	}

	const data: Pet[] = await response.json();

	return (
		<>
			<BgPattern />
			<div className="max-w-6xl  flex min-h-screen flex-col mx-auto px-4">
				<Header />
				<PetContextProvider petsData={data}>
					<main>{children}</main>
				</PetContextProvider>

				<AppFooter />
			</div>
		</>
	);
}
