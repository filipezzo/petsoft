import { PetContext } from "@/app/contexts/pet-context-provider";
import { useContext } from "react";

export function usePetsContext() {
	const context = useContext(PetContext);

	if (!context) {
		throw new Error(
			"ops, você esta tentando acessar um contexto fora de um provider"
		);
	}

	return context;
}
