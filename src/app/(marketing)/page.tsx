import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import hero from "../../../public/hero.png";

export default function Home() {
	return (
		<div className="min-h-screen p-5 w-full gap-10 bg-emerald-600 flex-col xl:flex-row flex items-center justify-center">
			<Image
				className="order-2 xl:order-1"
				src={hero}
				alt="imagem ilustrativa do app petsoft"
			/>
			<article className=" order-1 flex flex-col gap-5 xl:order-2">
				<Logo />
				<h1 className=" text-3xl xl:text- xl:text-5xl text-center xl:text-start xl:max-w-[500px] text-pretty">
					Gerencie seus <span className="font-semibold">hóspedes 🐕‍🦺 </span>com
					facilidade.
				</h1>
				<p className="text-xl xl:text-2xl text-center xl:text-start xl:max-w-[600px] text-pretty">
					Utilize PetSoft para gerenciar os pets que estão sobre o seu cuidado.
					Pague apenas uma vez e use para sempre.
				</p>
				<div className="flex justify-center xl:justify-normal items-center gap-5">
					<Button asChild className="rounded-full h-10 px-6">
						<Link href="/register">Comece agora</Link>
					</Button>
					<Button
						asChild
						className="rounded-full h-10 px-6"
						variant={"secondary"}
					>
						<Link href={"/login"}>Login</Link>
					</Button>
				</div>
			</article>
		</div>
	);
}
