"use client";
import { useFilterContext } from "@/hooks/use-filter-context";
import { usePetsContext } from "@/hooks/use-pets-context";
import Image from "next/image";

export function DashList() {
	const { pets, onSelectPet } = usePetsContext();
	const { debouncedSearch } = useFilterContext();

	const searchPets = pets.filter((pet) =>
		pet.name.toLowerCase().includes(debouncedSearch)
	);

	return (
		<ul className="bg-white w-full h-full border-b border-light">
			{searchPets.map((pet) => (
				<li key={pet.id}>
					<button
						onClick={() => onSelectPet(pet.id)}
						className="flex items-center gap-3 h-[70px] w-full cursor-pointer px-5 text-base hover:bg-[#EFF1F2] transition focus:bg-[#EFF1F2]"
					>
						<Image
							className="rounded-full size-11 object-cover"
							src={pet.imageUrl}
							alt="imagem placeholder"
							width={45}
							height={45}
						/>
						<p className="font-semibold">{pet.name}</p>
					</button>
				</li>
			))}
		</ul>
	);
}
