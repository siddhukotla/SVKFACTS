import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8 sm:px-6 lg:px-8 fade-in-on-load">
      <Card className="max-w-3xl mx-auto shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl sm:text-4xl font-headline text-primary text-center">Privacy Policy</CardTitle>
          <CardDescription className="text-center font-body text-sm sm:text-base pt-2">Last updated: {new Date().toLocaleDateString()}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 text-sm sm:text-base leading-relaxed font-body">
          <p>
            SVKFACTS ("us", "we", or "our") operates the SVKFACTS website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
          </p>

          <h2 className="text-xl sm:text-2xl font-headline text-primary pt-4">Information Collection and Use</h2>
          <p>
            We do not collect any personally identifiable information from our users. Our website is designed to provide factual content without requiring user registration or data submission.
          </p>
          
          <h2 className="text-xl sm:text-2xl font-headline text-primary pt-4">Log Data</h2>
          <p>
            Like many site operators, we may collect information that your browser sends whenever you visit our Service ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address (anonymized where possible), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics. This data is used for analytical purposes to improve our service and is not used to personally identify users.
          </p>

          <h2 className="text-xl sm:text-2xl font-headline text-primary pt-4">Cookies</h2>
          <p>
            Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive.
          </p>
          <p>
            We may use cookies for the functionality of our website, such as remembering preferences or for analytics. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
          </p>

          <h2 className="text-xl sm:text-2xl font-headline text-primary pt-4">Advertisements</h2>
          <p>
            Our website displays advertisements, which may be served by third-party advertising partners. These partners may use cookies and similar technologies to collect information about your visits to this and other websites to provide targeted advertisements. We do not control the cookies used by third-party advertisers. Please refer to their respective privacy policies for more information.
          </p>
          
          <h2 className="text-xl sm:text-2xl font-headline text-primary pt-4">Google AdSense</h2>
          <p>
            We use Google AdSense to display ads on our website. Google, as a third-party vendor, uses cookies to serve ads on our Service. Google's use of the DART cookie enables it to serve ads to our users based on their visit to our Service and other sites on the Internet. Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy.
          </p>

          <h2 className="text-xl sm:text-2xl font-headline text-primary pt-4">Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </p>

          <h2 className="text-xl sm:text-2xl font-headline text-primary pt-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us via the email provided on our Contact Us page.
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
