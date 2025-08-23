// #region Imports

// #endregion

const gridVariation = [
	"col-span-2 row-span-3",
	"col-span-2 row-span-2",
	"col-span-2 row-span-1"
]

const FeatureCard = ({
	index,
	title,
	element,
}) => {
	
	return (
		<aside
			className={`
				bg-white bg-opacity-50 w-full h-full
				rounded-2xl p-5 pt-10 text-2xl font-normal
				flex flex-col justify-start items-center
				gap-10 ${gridVariation[index]}
			`}
		>
			<h3>{title}</h3>
			{element}
		</aside>
	)
}

export default FeatureCard