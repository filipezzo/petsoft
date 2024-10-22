import { AppFooter } from "@/components/app-footer";
import { BgPattern } from "@/components/bg-pattern";
import { Header } from "@/components/header";
import { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<BgPattern />
			<div className="max-w-6xl  flex min-h-screen flex-col mx-auto px-4">
				<Header />
				<main>{children}</main>
				<AppFooter />
			</div>
		</>
	);
}
