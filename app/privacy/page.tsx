import Link from "next/link"

export const metadata = {
  title: "Privacy Policy | DevTools",
  description: "Privacy policy for DevTools AI-powered tools",
}

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto pt-8">
      <Link
        href="/"
        className="inline-flex items-center px-4 py-2 mb-8 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Back to Home
      </Link>

      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        This Privacy Policy describes how DevTools (&ldquo;we&rdquo;,
        &ldquo;us&rdquo;, or &ldquo;our&rdquo;) handles information in
        connection with our AI-powered tools and services. By using our
        services, you agree to the collection and use of information in
        accordance with this policy.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        Information Collection and Use
      </h2>
      <p className="mb-4">
        We collect and use information solely for the purpose of providing and
        improving our AI-powered tools. We do not sell, rent, or share your
        personal information with third parties except as described in this
        policy.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Data Processing</h2>
      <p className="mb-4">
        Our AI tools process the data you input to generate results. We do not
        retain or store this input data or the generated results beyond the
        immediate processing required to provide the service, unless explicitly
        stated otherwise for specific tools.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">User Responsibility</h2>
      <p className="mb-4">
        You are solely responsible for ensuring that you have the right to use,
        process, and submit any data you input into our AI tools. Do not submit
        any sensitive, confidential, or personal information unless you have the
        legal right to do so and accept the risks involved.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Data Security</h2>
      <p className="mb-4">
        We implement reasonable security measures to protect against
        unauthorized access, alteration, disclosure, or destruction of your
        information. However, no method of transmission over the Internet or
        electronic storage is 100% secure, and we cannot guarantee absolute
        security.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Third-Party Services</h2>
      <p className="mb-4">
        Our services may use third-party services that collect information used
        to identify you. We do not control and are not responsible for the
        privacy practices of these third parties. We encourage you to review
        their privacy policies.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        Changes to This Privacy Policy
      </h2>
      <p className="mb-4">
        We may update our Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page. You are
        advised to review this Privacy Policy periodically for any changes.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, please contact us
        at support@devtools.tools
      </p>
    </div>
  )
}
