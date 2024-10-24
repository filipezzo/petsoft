"use client";
import { usePetsContext } from "@/hooks/use-pets-context";
import Image from "next/image";

export function DashList() {
	const { pets, onSelectPet, selectedPet } = usePetsContext();
	console.log(selectedPet);
	return (
		<ul className="bg-white w-full h-full border-b border-light">
			{pets.map((pet) => (
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
