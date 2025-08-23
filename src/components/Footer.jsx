import Logo from "../icons/Logo"
import OnboardingCluster from "./OnboardingCluster"

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
				name: "Timezone based scheduling",
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
			{
				name: "Use cases",
				href: "/"
			},
		],
	},
	{
		title: "Assistance",
		items: [
			{
				name: "Help center",
				href: "/"
			},
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
	{
		title: "Socials",
		items: [
			{
				name: "Linkedin",
				href: "/"
			},
			{
				name: "Twitter",
				href: "/"
			},
			{
				name: "Youtube",
				href: "/"
			},
			{
				name: "Medium",
				href: "/"
			},
		],
	},
]

const Footer = () => {
	return (
		<section
			className="w-full my-8 text-white"
		>
			<div
				className="
					flex flex-col items-center bg-grainy bg-cover w-full
					rounded-3xl p-10 gap-20
				"
			>
				<Logo
					size={110}
				/>

				<OnboardingCluster/>


				<aside 
					className="
						large:flex small:px-10  justify-between 
						px-10 w-[50%] text-right py-20 small:py-0 
						small:grid small:grid-cols-2 small:gap-4
						font-normal 
					"
				>
					{links.map((category, index) => (
						<div 
							key={index} 
							className="small:w-[70%] text-lg flex flex-col items-start"
						>
							<p 
								className="text-3xl"
							>
								{category.title}
							</p>

							{category.items.map((link, idx) => (
								<a
									className="
										opacity-70 hover:opacity-100
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