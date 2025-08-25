import Logo from "./Logo"
import OnboardingCluster from "./CTACluster"

const links = [
	{
		title: "Solutions",
		items: [
			{
				name: "Chrome extension",
				href: "/"
			},
			{
				name: "Bulk schedule",
				href: "/"
			},
			{
				name: "Message templates",
				href: "/"
			},
			{
				name: "Timezone intelligence",
				href: "/"
			},
		],
	},
	{
		title: "Resources",
		items: [
			{
				name: "Get started",
				href: "/"
			},
			{
				name: "Blog",
				href: "/"
			},
			{
				name: "Tutorials",
				href: "/"
			},
		],
	},
	{
		title: "Assistance",
		items: [
			{
				name: "Support",
				href: "/"
			},
			{
				name: "Custom solution",
				href: "/"
			},
			{
				name: "Cookie Policy",
				href: "/"
			},
		],
	},
	{
		title: "More",
		items: [
			{
				name: "Pricing",
				href: "/"
			},
			{
				name: "Terms",
				href: "/"
			},
			{
				name: "Sitemap",
				href: "/"
			},
			{
				name: "FAQ",
				href: "/"
			},
		],
	},
]

const Footer = () => {
	return (
		<section
			className="w-full mt-4 small:mt-0 text-white fixed bottom-0 small:relative z-10 p-4 small:pt-0"
		>
			<div
				className="
					flex flex-col items-center bg-blue-100 bg-cover w-full
					rounded-3xl p-10 gap-12 xlarge:gap-24 relative overflow-hidden z-10
				"
			>

				<Logo
					size={110}
				/>

				<OnboardingCluster 
					nooffer
				/>

				<aside 
					className="
						flex small:flex-col  justify-between 
						p-10 pt-5 small:px-4 w-[60%] small:w-full text-right font-normal
						small:p-2 small:gap-4
					"
				>
					{links.map((category, index) => (
						<div 
							key={index} 
							className="text-md xlarge:text-lg flex flex-col items-start small:w-fit"
						>
							<p 
								className="text-2xl small:text-xl xlarge:text-3xl"
							>
								{category.title}
							</p>

							{category.items.map((link, idx) => (
								<a
									className="
                                        brightness-90 hover:brightness-200
										transition-all ease-in-out delay-100 
										cursor-pointer
									"
									alt={link.name}
									href={link.href}
									key={idx}
								>
									{link.name}
								</a>
							))}

						</div>
					))}
				</aside>


				<p>2025 © SendIn.  support@sendin.com</p>
			</div>

			
		</section>
	)
}

export default Footer