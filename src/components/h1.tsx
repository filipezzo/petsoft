import { ReactNode } from "react";

export function H1({ children }: { children: ReactNode }) {
	return <h1 className="text-2xl font-medium leading-6">{children}</h1>;
}
