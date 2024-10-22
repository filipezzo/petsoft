import Image from "next/image";
import placeholder from "../../public/pet-placeholder.png";

export function DashList() {
	return (
		<ul className="bg-white w-full h-full border-b border-black/[0.08]">
			<li>
				<button className="flex items-center gap-3 h-[70px] w-full cursor-pointer px-5 text-base hover:bg-[#EFF1F2] transition focus:bg-[#EFF1F2]">
					<Image
						className="rounded-full size-11 object-cover"
						src={placeholder}
						alt="imagem placeholder"
					/>
					<p className="font-semibold">Benjamin</p>
				</button>
			</li>
		</ul>
	);
}
