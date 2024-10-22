import { ReactNode } from "react";

export function ContentBlock({ children }: { children: ReactNode }) {
	return (
		<div className="bg-[#F7F8FA] shadow-sm rounded-md w-full h-full overflow-hidden ">
			{children}
		</div>
	);
}
