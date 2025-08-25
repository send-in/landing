// #region Imports
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
// #endregion

const TermsAndConditions = () => {
    const lastUpdated = "Aug 26, 2025"

    return (
        <main 
            className="bg-white"
        >
            <aside 
                className="
                    mx-auto max-w-4xl px-6 py-14 
                    text-left text-gray-800 text-charcoal-100
                "
            >
                <Navbar
                    bg="bg-bluewash"
                />

                <header 
                    className="mt-24 mb-8"
                >
                    <h1 
                        className="text-3xl font-normal tracking-tight"
                    >
                        Terms and Conditions
                    </h1>

                    <p 
                        className="mt-2 text-sm text-gray-500"
                    >
                        Last updated: {lastUpdated}
                    </p>
                </header>

                <section 
                    className="prose max-w-none"
                >
                    <p>
                        These Terms and Conditions (“Terms”) govern your access to and use of <strong>SendIn</strong> 
                        (“we”, “us”, “our”) and its services, including our LinkedIn scheduling tools and related 
                        features (collectively, the “Service”). By using the Service, you agree to be bound by these Terms. 
                        If you do not agree, you must discontinue use of the Service.
                    </p>
                </section>

                <section 
                    className="mt-12 space-y-8"
                >
                    <aside>
                        <h2 
                            className="text-xl font-semibold"
                        >
                            1. Eligibility
                        </h2>
                        <p 
                            className="mt-2"
                        >
                            You must be at least 18 years old to use SendIn. By using the Service, you represent and 
                            warrant that you meet this requirement and have the legal authority to enter into these Terms.
                        </p>
                    </aside>

                    <aside>
                        <h2 
                            className="text-xl font-semibold"
                        >
                            2. Your Account
                        </h2>
                        <p 
                            className="mt-2"
                        >
                            To use the Service, you may need to connect your LinkedIn account. You are responsible for:
                        </p>
                        <ul 
                            className="mt-3 list-disc space-y-1 pl-5"
                        >
                            <li>Maintaining the confidentiality of your login credentials.</li>
                            <li>All activities performed under your account.</li>
                            <li>Providing accurate, current, and complete information.</li>
                        </ul>
                    </aside>

                    <aside>
                        <h2 
                            className="text-xl font-semibold"
                        >
                            3. Acceptable Use
                        </h2>
                        <p 
                            className="mt-2"
                        >You agree not to misuse the Service, including (but not limited to):</p>
                        <ul 
                            className="mt-3 list-disc space-y-1 pl-5">
                            <li>Violating LinkedIn’s terms of service or community guidelines.</li>
                            <li>Automating actions beyond scheduling (e.g., mass messaging, scraping).</li>
                            <li>Uploading unlawful, harmful, or misleading content.</li>
                            <li>Attempting to disrupt or damage our systems or networks.</li>
                        </ul>
                    </aside>

                    <aside>
                        <h2 
                            className="text-xl font-semibold"
                        >
                            4. Subscription and Payments
                        </h2>
                        <p 
                            className="mt-2"
                        >
                            Some features of the Service may require a paid subscription. By subscribing, you agree to:
                        </p>
                        <ul 
                            className="mt-3 list-disc space-y-1 pl-5">
                            <li>Pay all applicable fees according to the selected plan.</li>
                            <li>Provide accurate billing and payment information.</li>
                            <li>Automatic renewal of subscriptions unless canceled before the renewal date.</li>
                        </ul>
                        <p 
                            className="mt-2 text-sm text-gray-500">
                            Fees are non-refundable except as required by law or explicitly stated in our refund policy.
                        </p>
                    </aside>

                    <aside>
                        <h2 
                            className="text-xl font-semibold"
                        >
                            5. Refund Policy
                        </h2>
                        <p 
                            className="mt-2"
                        >
                            We want you to be satisfied with SendIn. However, due to the nature of our service 
                            (instant access to scheduling features), all subscription fees are generally non-refundable. 
                            Refunds may only be considered in the following limited circumstances:
                        </p>
                        <ul 
                            className="mt-3 list-disc space-y-1 pl-5">
                            <li>You were mistakenly charged more than once.</li>
                            <li>There was a verified technical issue preventing you from accessing the Service.</li>
                            <li>A refund is required by applicable law in your jurisdiction.</li>
                        </ul>
                        <p 
                            className="mt-2"
                        >
                            Refund requests must be submitted within <strong>7 days</strong> of the billing date 
                            by contacting us at{" "}
                            <a href="mailto:billing@yourdomain.com" 
                                className="text-blue-600 underline">
                                billing@yourdomain.com
                            </a>. 
                            Refunds are issued at our sole discretion.
                        </p>
                    </aside>

                    <aside>
                        <h2 
                            className="text-xl font-semibold"
                        >
                            6. Intellectual Property
                        </h2>
                        <p 
                            className="mt-2"
                        >
                            SendIn retains all rights, title, and interest in and to the Service, including all 
                            associated intellectual property. You are granted a limited, non-exclusive, 
                            non-transferable license to use the Service for your business or personal use.
                        </p>
                    </aside>

                    <aside>
                        <h2 
                            className="text-xl font-semibold"
                        >
                            7. Third-Party Services
                        </h2>
                        <p 
                            className="mt-2"
                        >
                            The Service integrates with LinkedIn and may rely on other third-party providers 
                            (e.g., analytics, payment processors). Your use of such services is subject to 
                            the third-party’s own terms and privacy policies. We are not responsible for 
                            third-party services or their actions.
                        </p>
                    </aside>

                    <aside>
                        <h2 
                            className="text-xl font-semibold"
                        >
                            8. Termination
                        </h2>
                        <p 
                            className="mt-2"
                        >
                            We reserve the right to suspend or terminate your access to the Service, 
                            without notice, if you breach these Terms or misuse the Service. You may 
                            also stop using the Service at any time by disconnecting your account.
                        </p>
                    </aside>

                    <aside>
                        <h2 
                            className="text-xl font-semibold"
                        >
                            9. Disclaimer of Warranties
                        </h2>
                        <p 
                            className="mt-2"
                        >
                            The Service is provided “as is” and “as available.” We do not warrant that 
                            the Service will be uninterrupted, error-free, or secure. To the fullest extent 
                            permitted by law, we disclaim all warranties, whether express or implied.
                        </p>
                    </aside>

                    <aside>
                        <h2 
                            className="text-xl font-semibold"
                        >
                            10. Limitation of Liability
                        </h2>
                        <p 
                            className="mt-2"
                        >
                            To the maximum extent permitted by law, SendIn and its affiliates shall not be 
                            liable for any indirect, incidental, consequential, or punitive damages, or 
                            for any loss of profits, data, or business opportunities, arising out of your 
                            use or inability to use the Service.
                        </p>
                    </aside>

                    <aside>
                        <h2 
                            className="text-xl font-semibold"
                        >
                            11. Changes to These Terms
                        </h2>
                        <p 
                            className="mt-2"
                        >
                            We may update these Terms from time to time. The latest version will always be 
                            available on this page. Continued use of the Service after changes are posted 
                            constitutes your acceptance of the revised Terms.
                        </p>
                    </aside>

                    <aside>
                        <h2 
                            className="text-xl font-semibold"
                        >
                            12. Governing Law
                        </h2>
                        <p 
                            className="mt-2"
                        >
                            These Terms shall be governed by and construed in accordance with the laws of 
                            your jurisdiction of residence, without regard to conflict of law principles.
                        </p>
                    </aside>

                    <aside>
                        <h2 
                            className="text-xl font-semibold"
                        >
                            13. Contact Us
                        </h2>
                        <p 
                            className="mt-2"
                        >
                            If you have any questions about these Terms, please contact us at{" "}
                            <a href="mailto:legal@yourdomain.com" className="text-blue-600 underline">
                                legal@yourdomain.com
                            </a>.
                        </p>
                    </aside>
                </section>
            </aside>

            <Footer 
                fixed={false}
            />
        </main>
    )
}

export default TermsAndConditions
