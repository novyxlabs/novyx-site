export default function Terms() {
  return (
    <div className="animate-fade-in py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-gray-400 mb-10">
          Last updated: February 1, 2026
        </p>

        <div className="prose prose-invert prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Service Description</h2>
            <p className="text-gray-300">
              Novyx provides an API service for AI memory storage and retrieval, including semantic search, cryptographic hashing, and security monitoring features. The service is provided on a tiered pricing model with varying feature sets.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Account Terms</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>You must provide a valid email address to create an account</li>
              <li>You are responsible for maintaining the security of your API key</li>
              <li>You are responsible for all activity that occurs under your account</li>
              <li>You must be 18 years or older to use this service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Acceptable Use</h2>
            <p className="text-gray-300 mb-4">
              You agree not to use Novyx to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Store or transmit illegal content</li>
              <li>Store personally identifiable information without proper consent</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the service</li>
              <li>Exceed rate limits or abuse the API</li>
              <li>Resell or redistribute the service without authorization</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Service Availability</h2>
            <p className="text-gray-300">
              We strive to maintain high availability but do not guarantee uninterrupted service. The service is provided "as is" and "as available." Scheduled maintenance will be announced in advance when possible. SLA guarantees apply only to paid tiers as specified in your plan.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Pricing and Payment</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Free tier is available with usage limits as specified on our pricing page</li>
              <li>Paid plans are billed monthly in advance</li>
              <li>Prices may change with 30 days notice</li>
              <li>Refunds are handled on a case-by-case basis</li>
              <li>Exceeding plan limits may result in service throttling or additional charges</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Data Ownership</h2>
            <p className="text-gray-300">
              You retain all rights to the data you store through Novyx. We do not claim ownership of your memories or content. You grant us a limited license to store, process, and transmit your data solely to provide the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
            <p className="text-gray-300 mb-4">
              We may suspend or terminate your account if:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>You violate these terms of service</li>
              <li>You fail to pay for a paid plan</li>
              <li>Your use poses a security risk to other users</li>
            </ul>
            <p className="text-gray-300 mt-4">
              You may terminate your account at any time by contacting us. Upon termination, your data will be deleted within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-300">
              To the maximum extent permitted by law, Novyx Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Indemnification</h2>
            <p className="text-gray-300">
              You agree to indemnify and hold harmless Novyx Labs from any claims, damages, or expenses arising from your use of the service or violation of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Changes to Terms</h2>
            <p className="text-gray-300">
              We may modify these terms at any time. We will notify you of material changes by email or through the service. Continued use after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Governing Law</h2>
            <p className="text-gray-300">
              These terms are governed by the laws of the State of Delaware, United States, without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Contact</h2>
            <p className="text-gray-300">
              For questions about these terms, contact us at{' '}
              <a href="mailto:blake@novyxlabs.com" className="text-primary hover:text-primary-hover">
                blake@novyxlabs.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
