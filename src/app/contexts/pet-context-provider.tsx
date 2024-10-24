"use client";

import { Pet } from "@/types/pets";
import { createContext, ReactNode, useCallback, useState } from "react";

interface PetContextProviderProps {
	petsData: Pet[];
	children: ReactNode;
}

interface PetContextProps {
	pets: Pet[];
	selectedPet: string | null;
	onSelectPet: (newId: string) => void;
	petDetails: Pet | undefined;
	numberOfPets: number;
}

export const PetContext = createContext<PetContextProps | null>(null);

export function PetContextProvider({
	children,
	petsData,
}: PetContextProviderProps) {
	const [pets, setPets] = useState(petsData);
	const [selectedPet, setSelectedPet] = useState<string | null>(null);
	const petDetails = pets?.find((pet) => pet.id === selectedPet);
	const numberOfPets = pets.length;

	console.log(setPets);

	const handleSelectPet = useCallback((newId: string) => {
		setSelectedPet(newId);
	}, []);

	return (
		<PetContext.Provider
			value={{
				pets,
				selectedPet,
				onSelectPet: handleSelectPet,
				petDetails,
				numberOfPets,
			}}
		>
			{children}
		</PetContext.Provider>
	);
}
