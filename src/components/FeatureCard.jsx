const FeatureCard = ({ 
  title, 
  description, 
  children, 
  className = ""
}) => {
	return (
		<aside
			className={`
				bg-bluewash rounded-2xl p-8 pt-10 xlarge:pt-12
				flex flex-col justify-start items-center gap-2
				${className} small:p-4 xlarge:text-4xl xlarge:gap-4
			`}
		>
			<h3 
				className="
					w-[80%] leading-6 xlarge:leading-7 
					small:w-full xlarge:w-[60%]
				"
			>
				{title}
			</h3>

			<p
				className="
					font-normal tracking-tight
					text-sm text-grey-300 w-[80%]
					mb-10 small:mb-5 small:w-full
					small:leading-4 xlarge:text-xl
					xlarge:w-[60%] xlarge:leading-6
				"
			>
				{description}
			</p>

			<div 
				className="
					relative flex justify-center 
					items-center w-full mt-2 small:mt-0
					small:mb-5 xlarge:mt-2
				"
			>
				{children}
			</div>
		</aside>
	)
}

export default FeatureCard