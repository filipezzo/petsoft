"use client";

import { ContentBlock } from "./content-block";
import { DashList } from "./dash-list";
import { PetDetails } from "./pet-detailts";
import { SearchForm } from "./search-form";

export function DashContent() {
	return (
		<section className="grid grid-rows-[45px_300px_500px] grid-cols-1 md:grid-cols-3 md:grid-rows-[45px_1fr] md:h-[600px] gap-4">
			<div className="md:row-start-1  md:row-span-1 md:col-start-1 md:col-span-1">
				<SearchForm />
			</div>
			<div className="md:row-start-2 md:row-span-full md:col-start-1 md:col-span-1">
				<ContentBlock>
					<DashList />
				</ContentBlock>
			</div>

			<div className="md:row-start-1 md:row-span-full md:col-start-2 md:col-span-full">
				<PetDetails />
			</div>
		</section>
	);
}
