import { FC, PropsWithChildren } from 'react'
import cn from 'clsx'
const Heading: FC<PropsWithChildren<{ className?: string }>> = ({
	children,
	className,
}) => {
	return (
		<h2 className={cn(' text-[#281E31], mt-10' , className)}>
			<span>{children}</span>
		</h2>
	)
}

export default Heading
