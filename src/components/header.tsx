"use client";

import { navItems } from "@/constants/nav-items";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";

export function Header() {
	const activePath = usePathname();
	return (
		<header className="flex border-b  py-5 border-black/5 items-center justify-between">
			<Logo />
			<nav>
				<ul className="flex items-center gap-2">
					{navItems.map((route) => (
						<li key={route.path}>
							<Link
								className={cn(
									"text-white/70 rounded-sm  px-2 py-1 hover:text-white transition focus:text-white",
									{
										"bg-black/10 text-white": route.path === activePath,
									}
								)}
								href={route.path}
							>
								{route.label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
