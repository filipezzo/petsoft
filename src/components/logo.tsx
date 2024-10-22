"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../public/logo.svg";

export function Logo() {
	const path = usePathname();
	const isHome = path === "/";

	return (
		<Link
			className={cn("w-full", {
				"flex justify-center xl:justify-start": isHome,
			})}
			href="/"
		>
			<Image src={logo} alt="logo do app petsoft" />
		</Link>
	);
}
