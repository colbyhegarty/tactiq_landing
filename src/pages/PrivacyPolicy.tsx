import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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

        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-muted-foreground [&_h2]:text-foreground [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:text-foreground [&_h3]:text-base [&_h3]:font-medium [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:leading-relaxed [&_li]:leading-relaxed">
          <p>
            Tactiq ("we," "our," or "us") is a mobile application that helps soccer coaches plan training sessions and browse drill libraries. We respect your privacy and are committed to being transparent about how we handle your information. This Privacy Policy explains what data Tactiq collects, how it is used, and your choices regarding that data.
          </p>

          <h2>1. Information We Collect</h2>

          <h3>Information You Provide</h3>
          <p>
            When you use Tactiq, you may choose to enter the following information into the app:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Profile information (name, email address, team name)</li>
            <li>Contact information for people you share sessions with (name, email, phone number)</li>
            <li>Custom drills and training sessions you create</li>
            <li>App preferences such as default age group, skill level, and player count</li>
          </ul>
          <p>
            All of this information is stored locally on your device using on-device storage. We do not transmit your profile, contacts, sessions, or custom drills to any external server.
          </p>

          <h3>Information Collected Automatically</h3>
          <p>
            Tactiq does not use analytics SDKs, tracking pixels, or any third-party analytics tools. We do not collect device identifiers, usage statistics, crash reports, or behavioral data.
          </p>

          <h3>Drill Library Data</h3>
          <p>
            The app fetches drill content from our hosted database (Supabase) to display the drill library. These requests are read-only and do not include any personally identifiable information. No user data is sent to our servers during these requests.
          </p>

          <h3>Subscription Information</h3>
          <p>
            If you subscribe to Tactiq Pro, your purchase is processed entirely through Apple's App Store and our subscription management provider, RevenueCat. We do not collect or store your payment information, credit card number, or Apple ID. RevenueCat receives a anonymous app user ID to manage your subscription entitlements. For details on how Apple and RevenueCat handle your data, please refer to their respective privacy policies:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><a href="https://www.apple.com/legal/privacy/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Apple Privacy Policy</a></li>
            <li><a href="https://www.revenuecat.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">RevenueCat Privacy Policy</a></li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>
            Since your data is stored locally on your device, we use it solely to provide the app's functionality:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Displaying your profile and preferences within the app</li>
            <li>Saving and organizing your training sessions and custom drills</li>
            <li>Enabling you to share session PDFs with contacts you have entered</li>
            <li>Managing your subscription status (free or Pro tier)</li>
          </ul>
          <p>
            We do not sell, rent, or share your personal information with any third parties for marketing or advertising purposes.
          </p>

          <h2>3. Data Storage and Security</h2>
          <p>
            All personal data (profile, contacts, sessions, custom drills, and preferences) is stored on your device using AsyncStorage, which is the standard local storage mechanism for React Native applications. This data is not backed up to our servers. If you delete the app or clear its data, this information will be permanently lost.
          </p>
          <p>
            We do not operate user accounts or authentication systems. There is no cloud sync, no server-side user database, and no way for us to access the data stored on your device.
          </p>

          <h2>4. Data Sharing</h2>
          <p>
            Tactiq does not share your data with third parties except in the following limited circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong className="text-foreground">Session sharing:</strong> When you choose to export a session as a PDF and share it, the PDF is generated locally on your device and shared through your device's native share functionality (email, messaging, etc.). We do not process or store shared PDFs on any server.</li>
            <li><strong className="text-foreground">Subscription processing:</strong> Subscription purchases are handled by Apple and RevenueCat as described above.</li>
          </ul>

          <h2>5. Children's Privacy</h2>
          <p>
            Tactiq is designed for soccer coaches and is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will take steps to address the situation.
          </p>

          <h2>6. Your Choices</h2>
          <p>
            Since all data is stored locally on your device, you have full control over it:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong className="text-foreground">Delete your data:</strong> Use the "Clear All Data" option in the app's Profile settings to remove all locally stored information.</li>
            <li><strong className="text-foreground">Uninstall the app:</strong> Removing Tactiq from your device will delete all associated data.</li>
            <li><strong className="text-foreground">Manage subscriptions:</strong> You can manage or cancel your subscription through your Apple ID settings.</li>
          </ul>

          <h2>7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. If we make material changes, we will update the "Last updated" date at the top of this page. We encourage you to review this policy periodically.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or how Tactiq handles your data, please contact us at:
          </p>
          <p>
            <a href="mailto:support@tactiqapp.com" className="text-primary hover:underline">support@tactiqapp.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
