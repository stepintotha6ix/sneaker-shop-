import { EnumSorting, ISortingItem } from './Sorting.interface'

export const sortingData: ISortingItem[] = [
	{ label: 'Price: High-Low', value: EnumSorting.HIGH_TO_LOW_PRICE },
	{ label: 'Price: Low-High', value: EnumSorting.LOW_TO_HIGH_PRICE },
	{ label: 'Newest', value: EnumSorting.NEWEST },
]
