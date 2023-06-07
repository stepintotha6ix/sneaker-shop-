import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React, { Dispatch, FC, SetStateAction } from 'react'
import { sortingData } from './sorting.data'
import { EnumSorting } from './Sorting.interface'
interface ISorting {
	sortType: EnumSorting
	setSortType: Dispatch<SetStateAction<EnumSorting>>
}

const Sorting: FC<ISorting> = ({ sortType, setSortType }) => {
	return (
		<div>
			<Menu>
				<MenuButton
					className="text-xl"
					as={Button}
					rightIcon={<ChevronDownIcon />}
				>
					Sort by:{' '}
					<span className="text-gray-550">
						{sortingData.find((sort) => sort.value === sortType)?.label}
					</span>
				</MenuButton>
				<MenuList className="p-6 bg-white rounded-xl">
					{sortingData.map((item) => (
						<MenuItem
							className="text-xl mb-2  text-right last:mb-0 hover:text-gray-550"
							key={item.label}
							onClick={() => setSortType(item.value)}
						>
							{item.label}
						</MenuItem>
					))}
				</MenuList>
			</Menu>
		</div>
	)
}

export default Sorting
