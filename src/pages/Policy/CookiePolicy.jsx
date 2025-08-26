// #region Imports
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
// #endregion

const CookiePolicy = () => {
	const lastUpdated = "Aug 26, 2025"

	return (
		<main>
			<aside className="mx-auto max-w-4xl px-6 py-14 text-left text-gray-800 text-charcoal-100">
				<Navbar
                    bg="bg-bluewash"
                />

				<header className="mt-24 small:mt-12 mb-8">
					<h1 className="text-3xl font-normal tracking-tight">Cookie Policy</h1>
					<p className="mt-2 text-sm text-gray-500">Last updated: {lastUpdated}</p>
				</header>

				<section className="prose max-w-none">
					<p>
						This Cookie Policy explains how <strong>SendIn</strong> (“we”, “us”, “our”) uses cookies
						and similar technologies on our website and application (collectively, the “Service”).
						Cookies are small text files placed on your device that help us operate and improve the
						Service. Some cookies are essential and cannot be switched off in our systems others are
						optional and used only with your consent.
					</p>
				</section>

				<section className="mt-10 grid gap-4 md:grid-cols-2">
					<div className="rounded-2xl bg-bluewash p-5">
						<h2 className="text-lg font-medium">How we use cookies</h2>
						<ul className="mt-3 list-disc space-y-1 pl-5">
							<li><strong>Essential:</strong> sign-in, security, load balancing.</li>
							<li><strong>Preferences:</strong> language, theme, UI state.</li>
							<li><strong>Analytics:</strong> product usage and performance.</li>
							<li><strong>Payments/Functionality:</strong> checkout, support widgets.</li>
						</ul>
					</div>

					<div className="rounded-2xl bg-bluewash p-5">
						<h2 className="text-lg font-medium">Your choices</h2>
						<ul className="mt-3 list-disc space-y-1 pl-5">
							<li>Use our cookie banner to accept or reject non-essential cookies.</li>
							<li>Control cookies in your browser settings (block, delete, limit).</li>
							<li>You can withdraw consent anytime from the banner or account settings.</li>
						</ul>
					</div>
				</section>

				<section className="mt-12 space-y-8 ">
					<div>
						<h3 className="text-xl font-semibold">Types of cookies we use</h3>
						<div className="mt-4 overflow-x-auto bg-bluewash rounded-2xl p-5">
							<table className="min-w-full border-separate border-spacing-y-2 text-sm">
							<thead>
								<tr className="text-left text-gray-600">
								<th className="pr-6">Category</th>
								<th className="pr-6">Examples</th>
								<th className="pr-6">Purpose</th>
								<th>Duration</th>
								</tr>
							</thead>
							<tbody>
								<tr className="align-top">
								<td className="pr-6 font-medium">Essential</td>
								<td className="pr-6">__session, csrf_token, lb_route</td>
								<td className="pr-6">Authentication, security, load balancing</td>
								<td>Session to 12 months</td>
								</tr>
								<tr className="align-top">
								<td className="pr-6 font-medium">Preferences</td>
								<td className="pr-6">theme, locale</td>
								<td className="pr-6">Remember UI and language choices</td>
								<td>Up to 12 months</td>
								</tr>
								<tr className="align-top">
								<td className="pr-6 font-medium">Analytics</td>
								<td className="pr-6">ph_* / _ga / _gid (provider-dependent)</td>
								<td className="pr-6">Usage and performance insights</td>
								<td>1 day to 12 months</td>
								</tr>
								<tr className="align-top">
								<td className="pr-6 font-medium">Payments/Functionality</td>
								<td className="pr-6">__stripe_mid / ls_checkout / paddle_session</td>
								<td className="pr-6">Hosted checkout, fraud prevention</td>
								<td>Up to 12 months</td>
								</tr>
							</tbody>
							</table>
						</div>
						<p className="mt-3 text-xs text-gray-500">
							Notes: Actual cookie names depend on the tools you enable (e.g., Stripe, LemonSqueezy,
							Paddle, PostHog, Plausible, Google Analytics). We only set non-essential cookies with
							your consent where required.
						</p>
					</div>

					<div>
						<h3 className="text-xl font-semibold">Third-party cookies</h3>
						<p className="mt-2">
							Some features are provided by third parties that may set cookies when their components
							load. Examples include analytics, payment processors, and in-app support widgets. You
							can block these via our banner or your browser. Blocking them may limit certain features
							(e.g., checkout).
						</p>
					</div>

					<div>
						<h3 className="text-xl font-semibold">Managing cookies</h3>
						<p className="mt-2">
							Most browsers let you control cookies through settings (e.g., block third-party cookies,
							clear site data). For detailed steps, see your browser’s help pages. If you disable
							essential cookies, parts of the Service may not function properly.
						</p>
					</div>

					<div>
						<h3 className="text-xl font-semibold">Changes to this policy</h3>
						<p className="mt-2">
							We may update this policy from time to time to reflect changes in our practices or
							applicable laws. We will post the updated version on this page and adjust the “Last
							updated” date above.
						</p>
					</div>

					<div>
						<h3 className="text-xl font-semibold">Contact us</h3>
						<p className="mt-2">
							If you have questions about this Cookie Policy, contact us at{" "}
							<a href="mailto:privacy@yourdomain.com" className="text-blue-600 underline">
							privacy@yourdomain.com
							</a>.
						</p>
					</div>
				</section>
			</aside>

			<Footer
				fixed={false}
			/>
		</main>
	)
}

export default CookiePolicy