import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12 max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-10">
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-muted-foreground [&_h2]:text-foreground [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:text-foreground [&_h3]:text-base [&_h3]:font-medium [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:leading-relaxed [&_li]:leading-relaxed">
          <p>
            These Terms of Service ("Terms") govern your use of the Tactiq mobile application ("App") provided by Tactiq ("we," "our," or "us"). By downloading, installing, or using Tactiq, you agree to be bound by these Terms. If you do not agree, please do not use the App.
          </p>

          <h2>1. Use of the App</h2>
          <p>
            Tactiq is a mobile application designed to help soccer coaches browse drill libraries, create custom drills, and plan training sessions. You may use the App for personal, non-commercial coaching purposes in accordance with these Terms.
          </p>
          <p>
            You agree not to:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Use the App for any unlawful purpose</li>
            <li>Attempt to reverse-engineer, decompile, or extract the source code of the App</li>
            <li>Redistribute, resell, or sublicense the App or its content</li>
            <li>Systematically scrape, copy, or reproduce drill content from the App for use in competing products or services</li>
          </ul>

          <h2>2. Accounts and Data</h2>
          <p>
            Tactiq does not require you to create an account. The App stores your data (profile, sessions, custom drills, and contacts) locally on your device. We do not maintain server-side user accounts or cloud backups of your data.
          </p>
          <p>
            You are responsible for maintaining the security of your device. If you delete the App or clear its data, your locally stored information will be permanently lost and cannot be recovered by us.
          </p>

          <h2>3. Subscriptions and Payments</h2>

          <h3>Free Tier</h3>
          <p>
            Tactiq offers a free tier with limited access to the drill library, a limited number of sessions and custom drills, and restricted features (no PDF export or session sharing).
          </p>

          <h3>Tactiq Pro</h3>
          <p>
            Tactiq Pro is a paid subscription that unlocks the full drill library, unlimited sessions and custom drills, PDF export, and session sharing. Subscriptions are available on a monthly or annual basis.
          </p>

          <h3>Billing</h3>
          <p>
            All subscriptions are processed through Apple's App Store. By subscribing, you agree to Apple's terms and payment processing:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Payment is charged to your Apple ID account at confirmation of purchase.</li>
            <li>Subscriptions automatically renew unless canceled at least 24 hours before the end of the current billing period.</li>
            <li>Your account will be charged for renewal within 24 hours prior to the end of the current period at the rate of your selected plan.</li>
            <li>You can manage and cancel your subscription at any time through your Apple ID account settings.</li>
          </ul>

          <h3>Free Trials</h3>
          <p>
            We may offer free trial periods for Tactiq Pro. If you do not cancel before the trial ends, your subscription will automatically convert to a paid subscription at the advertised rate. Free trial eligibility is determined by Apple and may be limited to one trial per Apple ID.
          </p>

          <h3>Refunds</h3>
          <p>
            All subscription payments are processed by Apple. Refund requests must be submitted directly to Apple in accordance with their refund policies. We do not have the ability to issue refunds for App Store purchases.
          </p>

          <h2>4. Intellectual Property</h2>
          <p>
            All content in the Tactiq app — including drill descriptions, diagrams, field illustrations, icons, and the app's user interface — is the property of Tactiq or its licensors and is protected by intellectual property laws.
          </p>
          <p>
            Custom drills and sessions you create within the App are your own content. By creating content in the App, you retain ownership of that content. We do not claim any rights over user-created drills or sessions.
          </p>

          <h2>5. Disclaimer of Warranties</h2>
          <p>
            Tactiq is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
          </p>
          <p>
            We do not warrant that:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>The App will be uninterrupted, error-free, or free of harmful components</li>
            <li>The drill content is suitable for all coaching contexts, age groups, or skill levels</li>
            <li>The App will be compatible with all devices or operating system versions</li>
          </ul>
          <p>
            You assume all responsibility for your use of drills and training sessions created with the App, including ensuring they are appropriate and safe for your players.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, Tactiq and its owners, officers, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of data, loss of profits, or personal injury, arising out of or related to your use of the App.
          </p>
          <p>
            Our total liability for any claim related to the App shall not exceed the amount you have paid to us in the twelve (12) months preceding the claim.
          </p>

          <h2>7. Third-Party Services</h2>
          <p>
            The App integrates with the following third-party services:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong className="text-foreground">Apple App Store:</strong> For app distribution and subscription payment processing</li>
            <li><strong className="text-foreground">RevenueCat:</strong> For subscription management and entitlement verification</li>
            <li><strong className="text-foreground">Supabase:</strong> For hosting the drill library database (read-only access, no user data transmitted)</li>
          </ul>
          <p>
            Your use of these third-party services is subject to their respective terms and privacy policies. We are not responsible for the practices of third-party service providers.
          </p>

          <h2>8. Modifications</h2>
          <p>
            We reserve the right to modify these Terms at any time. If we make material changes, we will update the "Last updated" date at the top of this page. Your continued use of the App after changes are posted constitutes your acceptance of the revised Terms.
          </p>
          <p>
            We may also update, modify, or discontinue features of the App at any time without notice. We may adjust subscription pricing for future billing periods with reasonable notice.
          </p>

          <h2>9. Termination</h2>
          <p>
            You may stop using Tactiq at any time by deleting the App from your device. If you have an active subscription, you must cancel it through your Apple ID settings to avoid future charges.
          </p>
          <p>
            We reserve the right to suspend or terminate access to the App if we reasonably believe you have violated these Terms.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles. Any disputes arising from these Terms or your use of the App shall be resolved in the courts of the United States.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p>
            <a href="mailto:support@tactiqapp.com" className="text-primary hover:underline">support@tactiqapp.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
