import React, { FC } from 'react'
import styles from './Cart.module.scss'
import { formatToCurrency } from '@/utils/format-to-currency'
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
	Input,
} from '@chakra-ui/react'
import { promocodes } from 'data/promocode.data'

const SummaryBlock: FC<{ total: number }> = ({ total }) => {
	const useTicket = (e) => {
        e.preventDefault()
        console.log(promocodes)
        
        
	}

	return (
		<div className={styles.summary}>
			<h1>Summary</h1>

			<Accordion defaultIndex={[0]} allowMultiple>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" pb={4}>
								Do you have Promo Code?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={6}>
						<input
							
							placeholder="Promo code"
							onSubmit={useTicket}
						/>
						<button type="submit" >
							Apply
						</button>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>

			<div>
				<span>Total </span>
				<span>{formatToCurrency(total)}</span>
			</div>
		</div>
	)
}

export default SummaryBlock
