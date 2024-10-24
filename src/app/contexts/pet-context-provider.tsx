"use client";

import { useDebounce } from "@/hooks/use-debounce";
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
	onSearchPet: (text: string) => void;
	petDetails: Pet | undefined;
	numberOfPets: number;
	searchPet: string;
}

export const PetContext = createContext<PetContextProps | null>(null);

export function PetContextProvider({
	children,
	petsData,
}: PetContextProviderProps) {
	const [pets, setPets] = useState(petsData);
	const [selectedPet, setSelectedPet] = useState<string | null>(null);
	const [searchPet, setSearchPet] = useState("");
	const debouncedSearch = useDebounce(searchPet, 250);
	const petDetails = pets?.find((pet) => pet.id === selectedPet);
	const numberOfPets = pets.length;
	const searchPets = pets.filter((pet) =>
		pet.name.toLowerCase().includes(debouncedSearch)
	);

	console.log(setPets);

	const handleSearchPet = useCallback((text: string) => {
		setSearchPet(text);
	}, []);

	const handleSelectPet = useCallback((newId: string) => {
		setSelectedPet(newId);
	}, []);

	return (
		<PetContext.Provider
			value={{
				pets: searchPets,
				selectedPet,
				onSelectPet: handleSelectPet,
				petDetails,
				numberOfPets,
				onSearchPet: handleSearchPet,
				searchPet,
			}}
		>
			{children}
		</PetContext.Provider>
	);
}
