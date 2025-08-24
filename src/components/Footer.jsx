import Logo from "../icons/Logo"
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
			className="w-full mt-4  text-white fixed bottom-0 small:relative z-0 p-4"
		>
			<div
				className="
					flex flex-col items-center bgGradient bg-cover w-full
					rounded-3xl p-10 gap-20 relative overflow-hidden z-10
				"
			>

				<Logo
					size={110}
				/>

				<OnboardingCluster/>

				<aside 
					className="
						large:flex small:px-10  justify-between 
						px-10 w-[70%] text-right pb-20
						font-normal
					"
				>
					{links.map((category, index) => (
						<div 
							key={index} 
							className="text-md flex flex-col items-start"
						>
							<p 
								className="text-2xl"
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

               <div
                    className="
                        bg-noise absolute inset-0 w-full h-full -z-10 opacity-25 
                        [mask-image:linear-gradient(to_bottom,transparent,black)] 
                        [mask-repeat:no-repeat] [mask-size:100%_100%]
                    "
                />
			</div>

			
		</section>
	)
}

export default Footer