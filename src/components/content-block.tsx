import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function ContentBlock({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<div
			className={cn(
				"bg-[#F7F8FA] shadow-sm rounded-md w-full h-full overflow-hidden",
				className
			)}
		>
			{children}
		</div>
	);
}
