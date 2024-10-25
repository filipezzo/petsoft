"use client";

import { useDebounce } from "@/hooks/use-debounce";
import { createContext, ReactNode, useCallback, useState } from "react";

interface FilterContextProviderProps {
	children: ReactNode;
}

interface FilterContextProps {
	onSearchPet: (text: string) => void;
	searchPet: string;
	debouncedSearch: string;
}

export const FilterContext = createContext<FilterContextProps | null>(null);

export function FilterContextProvider({
	children,
}: FilterContextProviderProps) {
	const [searchPet, setSearchPet] = useState("");
	const debouncedSearch = useDebounce(searchPet, 200);

	const handleSearchPet = useCallback((text: string) => {
		setSearchPet(text);
	}, []);

	return (
		<FilterContext.Provider
			value={{
				onSearchPet: handleSearchPet,
				searchPet,
				debouncedSearch,
			}}
		>
			{children}
		</FilterContext.Provider>
	);
}
