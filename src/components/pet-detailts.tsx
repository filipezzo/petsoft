"use client";

import { usePetsContext } from "@/hooks/use-pets-context";
import Image from "next/image";
import { ContentBlock } from "./content-block";
import { Button } from "./ui/button";

export function PetDetails() {
	const { selectedPet, petDetails } = usePetsContext();

	if (!selectedPet) {
		return (
			<ContentBlock className="flex items-center justify-center">
				<h3 className="text-xl font-semibold">Nenhum pet selecionado</h3>
			</ContentBlock>
		);
	}

	if (!petDetails) {
		return (
			<ContentBlock className="flex items-center justify-center">
				<h3 className="text-xl font-semibold">Pet não encontrado</h3>
			</ContentBlock>
		);
	}

	return (
		<ContentBlock className="bg-[#F7F8FA]  flex flex-col">
			<header className="border-b bg-white px-8 py-5 flex items-center justify-between border-light">
				<div className="flex items-center  gap-5">
					<Image
						className="object-cover size-16  rounded-full"
						src={petDetails.imageUrl}
						alt={`imagem do pet ${petDetails.name}`}
						width={64}
						height={64}
					/>
					<h2 className="font-semibold text-pretty text-3xl leading-7">
						{petDetails.name}
					</h2>
				</div>
				<div className="space-x-2">
					<Button className="rounded-full">Editar</Button>
					<Button className="rounded-full" variant="outline">
						Checkout
					</Button>
				</div>
			</header>
			<section className="py-10 max-w-lg w-full flex justify-between items-center mx-auto ">
				<div className="flex flex-col justify-center gap-2">
					<h3 className="text-[13px] font-medium uppercase text-zinc-700">
						owner name
					</h3>
					<p className="mt-1 text-lg text-zinc-800">{petDetails.ownerName}</p>
				</div>

				<div className="flex flex-col items-center gap-2">
					<h3 className="text-[13px] font-medium uppercase text-zinc-700">
						age
					</h3>
					<p className="mt-1 text-lg text-zinc-800">{petDetails.age}</p>
				</div>
			</section>
			<section className="border bg-white rounded-md m-5 shadow-sm p-5 flex-1">
				<p>{petDetails.notes}</p>
			</section>
		</ContentBlock>
	);
}
