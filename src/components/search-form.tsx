"use client";

import { useFilterContext } from "@/hooks/use-filter-context";
import { ChangeEvent } from "react";

export function SearchForm() {
	const { onSearchPet, searchPet } = useFilterContext();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.trim().toLowerCase();

		onSearchPet(value);
	};
	return (
		<form className="h-full  w-full">
			<input
				value={searchPet}
				onChange={handleChange}
				className=" h-full w-full placeholder:text-white bg-white/30 px-5 outline-none transition rounded-md focus:ring-1 focus:bg-white/60 focus:ring-emerald-900"
				placeholder="Pesquise pets"
				type="search"
			/>
		</form>
	);
}
