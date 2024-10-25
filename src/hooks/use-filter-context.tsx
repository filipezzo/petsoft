import { FilterContext } from "@/app/contexts/filter-context-provider";
import { useContext } from "react";

export function useFilterContext() {
	const context = useContext(FilterContext);
	if (!context) {
		throw new Error("Contexto sendo utilizado fora de um provider");
	}
	return context;
}
