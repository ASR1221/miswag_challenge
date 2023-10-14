import { DataSet } from "../types/dataset";

import CategoryButton from "../components/categoryLink";
import ProductCard from "../components/productCard";
import { redirect } from "next/navigation";

export default async function Home({ searchParams }: { searchParams: { category: string }}) {

	const res = await fetch("https://file.notion.so/f/f/f9a09310-af94-4993-bbca-d051d7b65e1d/63e6d4c9-1412-45e9-903a-f139e889bc5d/dataset.json?id=b435b37b-cba5-4374-875f-332e895a872c&table=block&spaceId=f9a09310-af94-4993-bbca-d051d7b65e1d&expirationTimestamp=1697227200000&signature=p2ccyGew1zHns14QfF0cTAhqXqkdhwbWfS_ldrEGkzo&downloadName=dataset.json");
	if (!res.ok) {
		return <div>
			<center className="my-12">
				<h1 className="mb-3 text-[46px] text-text-header-color">Miswag New Arrivals</h1>
				<p className="text-text-sub-header-color">Stay Ahead of the Curve with Miswag&#39;s Fresh Arrivals!</p>
			</center>
			<div>
				<center>
					<p className="mt-10 text-[40px] text-red-600">Something went wrong, please try refreshing the page.</p>
				</center>
			</div>
		</div>
	}

	const dataSet = await res.json() as DataSet[];
	
	const categoies: string[] = [];
	dataSet.forEach(d => {
		if (!categoies.includes(d.category)) categoies.push(d.category);
	});

	if (!searchParams.category) redirect(`/?category=${categoies[0]}`);


	return (
		<div>
			<center className="my-12">
				<h1 className="mb-3 text-[46px] text-text-header-color">Miswag New Arrivals</h1>
				<p className="text-text-sub-header-color">Stay Ahead of the Curve with Miswag&#39;s Fresh Arrivals!</p>
			</center>
			<nav className={`mt-16 mb-8 mx-auto w-[90vw] flex items-center justify-around flex-wrap`}>
				{
					categoies.length > 1 && categoies.map(c => (
						<CategoryButton key={c} category={c} current={searchParams.category} />
					))
				}
			</nav>
			<main className="w-[85vw] mx-auto grid grid-cols-5 gap-4">
				{
					dataSet && dataSet.length < 1 ? <center><p>No items found</p></center>
					: dataSet.filter(d => d.category === searchParams.category).map(d => (
						<ProductCard key={d.slug} data={d} />
					))
				}
			</main>
		</div>
	);
}
