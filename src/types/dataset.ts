export type DataSet = {
	id: string,
	rating: string,
	title: {
		AR: string,
		EN: string,
	},
	image: string,
	price: {
		value: string,
		original_value: string,
		currency: "IQD" | "USD",
	},
	brand: string,
	colors: string[],
	slug: number,
	category: string,
	brand_alias: string,
}