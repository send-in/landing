// #region Imports
import Logo from '../icons/Logo';
// #endregion

const Navbar = () => {

	return (
		<nav 
			className="
				p-5 py-3 min-w-[40%] text-lg mb-12
				flex items-center gap-10 justify-between
				bg-white rounded-full font-medium text-charcoal-100
			"
		>
			<Logo 
				size={100} 
				fill="#2F2F2F"
			/>

			<aside 
				className="flex gap-5"
			>
				<a
					href="/"
					className="
						opacity-70 hover:opacity-100
						transition-all ease-in-out delay-100 
						cursor-pointer
					"
				>
					Use Cases
				</a>
				<a
					href="/"
					className="
						opacity-70 hover:opacity-100
						transition-all ease-in-out delay-100 
						cursor-pointer
					"
				>
					Resources
				</a>
				<a
					href="/"
					className="
						opacity-70 hover:opacity-100
						transition-all ease-in-out delay-100 
						cursor-pointer
					"
				>
					Pricing
				</a>
			</aside>

			<a
				href="/"
				className="
					px-10 py-1 rounded-full
					text-white hover:bg-blue-200 bg-blue-100
					transition-all ease-in-out delay-100 
					cursor-pointer
				"
			>
				Signup
			</a>
		</nav>
	)
}

export default Navbar