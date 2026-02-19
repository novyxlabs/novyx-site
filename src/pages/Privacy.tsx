export default function Privacy() {
  return (
    <div className="animate-fade-in py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-400 mb-10">
          Last updated: February 1, 2026
        </p>

        <div className="prose prose-invert prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="text-gray-300 mb-4">
              When you use Novyx, we collect the following information:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong>Account Information:</strong> Email address when you sign up for an API key</li>
              <li><strong>Usage Data:</strong> API call logs, including timestamps and endpoints accessed</li>
              <li><strong>Stored Content:</strong> Memories and data you store through our API</li>
              <li><strong>Technical Data:</strong> IP addresses, browser type, and device information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-300 mb-4">
              We use your information to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Provide and maintain the Novyx service</li>
              <li>Process API requests and store memories</li>
              <li>Send service-related communications</li>
              <li>Monitor and improve service performance</li>
              <li>Detect and prevent abuse or security issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Data Retention</h2>
            <p className="text-gray-300 mb-4">
              We retain your data according to the following schedule:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong>Memories:</strong> Stored until you delete them or close your account</li>
              <li><strong>API Logs:</strong> Retained for 30 days</li>
              <li><strong>Audit Trails:</strong> Retained according to your plan tier (7 days Free, 14 days Starter, 30 days Pro, 90 days Enterprise)</li>
              <li><strong>Account Information:</strong> Retained while your account is active</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Data Sharing</h2>
            <p className="text-gray-300 mb-4">
              We do not sell your personal information or stored memories to third parties. We may share data only in these circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>With service providers who help us operate Novyx (hosting, analytics)</li>
              <li>When required by law or to respond to legal process</li>
              <li>To protect our rights, privacy, safety, or property</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Security</h2>
            <p className="text-gray-300">
              We implement industry-standard security measures to protect your data. All memories are cryptographically hashed using SHA-256. Data is encrypted in transit using TLS 1.3. Access to production systems is restricted and logged.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Your Rights (GDPR)</h2>
            <p className="text-gray-300 mb-4">
              If you are located in the European Union, you have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Export your data in a portable format</li>
              <li>Object to processing of your data</li>
            </ul>
            <p className="text-gray-300 mt-4">
              To exercise these rights, contact us at{' '}
              <a href="mailto:support@novyxlabs.com" className="text-primary hover:text-primary-hover">
                support@novyxlabs.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Changes to This Policy</h2>
            <p className="text-gray-300">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
            <p className="text-gray-300">
              If you have questions about this privacy policy, contact us at{' '}
              <a href="mailto:support@novyxlabs.com" className="text-primary hover:text-primary-hover">
                support@novyxlabs.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
