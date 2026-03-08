import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Learn how KickDeck collects, uses, and protects your personal information. Read our full GDPR and CCPA-compliant Privacy Policy.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main className="py-32">
      <Container className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Last updated: March 2026
        </p>

        <hr className="my-10 border-border" />

        {/* ---------------------------------------------------------------- */}
        {/* Table of Contents */}
        {/* ---------------------------------------------------------------- */}
        <nav className="mb-12 rounded-lg border border-border bg-muted/30 p-6">
          <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
          <ol className="list-decimal pl-6 space-y-2 text-muted-foreground leading-relaxed">
            <li>
              <a
                href="#introduction"
                className="text-primary underline underline-offset-4 hover:text-primary/80"
              >
                Introduction
              </a>
            </li>
            <li>
              <a
                href="#information-we-collect"
                className="text-primary underline underline-offset-4 hover:text-primary/80"
              >
                Information We Collect
              </a>
            </li>
            <li>
              <a
                href="#how-we-use-your-information"
                className="text-primary underline underline-offset-4 hover:text-primary/80"
              >
                How We Use Your Information
              </a>
            </li>
            <li>
              <a
                href="#information-sharing"
                className="text-primary underline underline-offset-4 hover:text-primary/80"
              >
                Information Sharing
              </a>
            </li>
            <li>
              <a
                href="#data-retention"
                className="text-primary underline underline-offset-4 hover:text-primary/80"
              >
                Data Retention
              </a>
            </li>
            <li>
              <a
                href="#data-security"
                className="text-primary underline underline-offset-4 hover:text-primary/80"
              >
                Data Security
              </a>
            </li>
            <li>
              <a
                href="#your-rights-gdpr"
                className="text-primary underline underline-offset-4 hover:text-primary/80"
              >
                Your Rights (GDPR)
              </a>
            </li>
            <li>
              <a
                href="#california-privacy-rights"
                className="text-primary underline underline-offset-4 hover:text-primary/80"
              >
                California Privacy Rights (CCPA)
              </a>
            </li>
            <li>
              <a
                href="#cookies-and-tracking"
                className="text-primary underline underline-offset-4 hover:text-primary/80"
              >
                Cookies &amp; Tracking
              </a>
            </li>
            <li>
              <a
                href="#childrens-privacy"
                className="text-primary underline underline-offset-4 hover:text-primary/80"
              >
                Children&apos;s Privacy
              </a>
            </li>
            <li>
              <a
                href="#international-data-transfers"
                className="text-primary underline underline-offset-4 hover:text-primary/80"
              >
                International Data Transfers
              </a>
            </li>
            <li>
              <a
                href="#changes-to-this-policy"
                className="text-primary underline underline-offset-4 hover:text-primary/80"
              >
                Changes to This Policy
              </a>
            </li>
            <li>
              <a
                href="#contact-us"
                className="text-primary underline underline-offset-4 hover:text-primary/80"
              >
                Contact Us
              </a>
            </li>
          </ol>
        </nav>

        {/* ---------------------------------------------------------------- */}
        {/* 1. Introduction */}
        {/* ---------------------------------------------------------------- */}
        <h2
          id="introduction"
          className="text-2xl font-semibold mt-12 mb-4 scroll-mt-24"
        >
          1. Introduction
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          KickDeck (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;),
          operating at kickdeck.io, is committed to protecting the privacy and
          security of your personal information. This Privacy Policy explains
          what information we collect, how we use and share it, and the choices
          and rights you have regarding your data.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          This policy applies to all users of the KickDeck platform, including
          tournament organizers, team managers, coaches, players, and parents or
          guardians who interact with the Service. By accessing or using
          KickDeck, you acknowledge that you have read, understood, and agree to
          the practices described in this Privacy Policy.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          If you do not agree with this Privacy Policy, please do not use the
          Service.
        </p>

        {/* ---------------------------------------------------------------- */}
        {/* 2. Information We Collect */}
        {/* ---------------------------------------------------------------- */}
        <h2
          id="information-we-collect"
          className="text-2xl font-semibold mt-12 mb-4 scroll-mt-24"
        >
          2. Information We Collect
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We collect information in the following categories:
        </p>

        <h3 className="text-xl font-medium mt-8 mb-3">
          2.1 Account Information
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          When you create a KickDeck account, we collect personal information
          necessary to provide the Service, including:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground leading-relaxed mb-4 space-y-2">
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Organization or club name (if applicable)</li>
          <li>Role (e.g., tournament organizer, coach, team manager)</li>
          <li>
            Account credentials (passwords are stored in hashed form and never
            in plain text)
          </li>
        </ul>

        <h3 className="text-xl font-medium mt-8 mb-3">
          2.2 Tournament and Team Data
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          To provide our tournament management features, we collect and process
          data related to:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground leading-relaxed mb-4 space-y-2">
          <li>Team names, rosters, and player information</li>
          <li>Player ages, jersey numbers, and positions</li>
          <li>Coach and manager contact details</li>
          <li>Match schedules, scores, and standings</li>
          <li>Tournament configurations and rules</li>
        </ul>

        <h3 className="text-xl font-medium mt-8 mb-3">
          2.3 Payment Information
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Payment processing is handled entirely by our third-party payment
          processor, Stripe, Inc. KickDeck does not store full credit card
          numbers, CVV codes, or complete bank account details on its servers.
          We may receive and store:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground leading-relaxed mb-4 space-y-2">
          <li>
            Partial card information (e.g., last four digits, card brand, and
            expiration date) for display purposes
          </li>
          <li>Billing address associated with the payment method</li>
          <li>Transaction history, amounts, and status</li>
          <li>
            Stripe customer and payment identifiers for managing recurring
            billing
          </li>
        </ul>

        <h3 className="text-xl font-medium mt-8 mb-3">2.4 Usage Data</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We automatically collect certain technical and usage information when
          you interact with the Service, including:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground leading-relaxed mb-4 space-y-2">
          <li>IP address and approximate geographic location</li>
          <li>Browser type, version, and operating system</li>
          <li>Device type and screen resolution</li>
          <li>Pages visited, features used, and time spent on the platform</li>
          <li>Referring URLs and exit pages</li>
          <li>
            Error logs and performance data used for debugging and improving the
            Service
          </li>
        </ul>

        <h3 className="text-xl font-medium mt-8 mb-3">
          2.5 Cookies and Similar Technologies
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We use cookies and similar tracking technologies to maintain sessions,
          remember preferences, and analyze how the Service is used. See{" "}
          <a
            href="#cookies-and-tracking"
            className="text-primary underline underline-offset-4 hover:text-primary/80"
          >
            Section 9
          </a>{" "}
          for detailed information about our use of cookies.
        </p>

        {/* ---------------------------------------------------------------- */}
        {/* 3. How We Use Your Information */}
        {/* ---------------------------------------------------------------- */}
        <h2
          id="how-we-use-your-information"
          className="text-2xl font-semibold mt-12 mb-4 scroll-mt-24"
        >
          3. How We Use Your Information
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We use the information we collect for the following purposes:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground leading-relaxed mb-4 space-y-2">
          <li>
            <strong>Providing the Service:</strong> To create and manage your
            account, facilitate tournament creation and management, process team
            registrations, generate schedules, track scores and standings, and
            deliver the core functionality of the platform
          </li>
          <li>
            <strong>Processing payments:</strong> To process registration fees,
            subscription payments, and other financial transactions through
            Stripe, and to maintain accurate billing and transaction records
          </li>
          <li>
            <strong>Communications:</strong> To send you transactional
            notifications (e.g., registration confirmations, payment receipts,
            schedule updates), service announcements, and, with your consent,
            promotional communications about new features or offerings
          </li>
          <li>
            <strong>Improving the platform:</strong> To analyze usage patterns,
            identify areas for improvement, conduct research and development,
            and enhance the features, functionality, and user experience of the
            Service
          </li>
          <li>
            <strong>Security and fraud prevention:</strong> To detect, prevent,
            and address fraud, unauthorized access, security breaches, and other
            potentially harmful or illegal activities
          </li>
          <li>
            <strong>Legal compliance:</strong> To comply with applicable laws,
            regulations, legal processes, or enforceable governmental requests
          </li>
          <li>
            <strong>Customer support:</strong> To respond to your inquiries,
            troubleshoot issues, and provide technical assistance
          </li>
        </ul>

        {/* ---------------------------------------------------------------- */}
        {/* 4. Information Sharing */}
        {/* ---------------------------------------------------------------- */}
        <h2
          id="information-sharing"
          className="text-2xl font-semibold mt-12 mb-4 scroll-mt-24"
        >
          4. Information Sharing
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          KickDeck does not sell, rent, or trade your personal information to
          third parties. We may share your information only in the following
          circumstances:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground leading-relaxed mb-4 space-y-2">
          <li>
            <strong>Stripe, Inc.:</strong> Payment data is shared with Stripe
            for processing financial transactions. Stripe acts as an independent
            data controller for payment information it processes. Please refer
            to{" "}
            <a
              href="https://stripe.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4 hover:text-primary/80"
            >
              Stripe&apos;s Privacy Policy
            </a>{" "}
            for details on how they handle your data.
          </li>
          <li>
            <strong>Email service providers:</strong> We use third-party email
            services (such as SendGrid) to deliver transactional and
            communication emails. These providers receive only the information
            necessary to deliver messages (e.g., email addresses and message
            content).
          </li>
          <li>
            <strong>Hosting and infrastructure providers:</strong> Your data is
            stored and processed using third-party cloud hosting services that
            maintain industry-standard security and compliance certifications.
          </li>
          <li>
            <strong>Analytics providers:</strong> We may share anonymized or
            aggregated usage data with analytics providers to help us understand
            how the Service is used and to improve our offerings.
          </li>
          <li>
            <strong>Legal requirements:</strong> We may disclose your
            information if required to do so by law, regulation, legal process,
            or governmental request, or when we believe in good faith that
            disclosure is necessary to protect the rights, property, or safety
            of KickDeck, our users, or the public.
          </li>
          <li>
            <strong>Business transfers:</strong> In the event of a merger,
            acquisition, reorganization, bankruptcy, or sale of all or a portion
            of our assets, your information may be transferred as part of such a
            transaction. We will notify you of any such change and any choices
            you may have regarding your information.
          </li>
        </ul>

        {/* ---------------------------------------------------------------- */}
        {/* 5. Data Retention */}
        {/* ---------------------------------------------------------------- */}
        <h2
          id="data-retention"
          className="text-2xl font-semibold mt-12 mb-4 scroll-mt-24"
        >
          5. Data Retention
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We retain your personal information for as long as necessary to
          fulfill the purposes described in this Privacy Policy, unless a longer
          retention period is required or permitted by law.
        </p>
        <ul className="list-disc pl-6 text-muted-foreground leading-relaxed mb-4 space-y-2">
          <li>
            <strong>Active accounts:</strong> Account information and associated
            data are retained for as long as your account remains active and in
            good standing.
          </li>
          <li>
            <strong>Transaction records:</strong> Financial transaction records
            and payment history are retained for a minimum of seven (7) years
            from the date of the transaction to comply with tax, accounting, and
            legal obligations.
          </li>
          <li>
            <strong>Closed accounts:</strong> Following account closure or
            termination, your personal data will be deleted or anonymized within
            ninety (90) days, except where retention is required by law or for
            legitimate business purposes (such as resolving disputes or
            enforcing our Terms &amp; Conditions).
          </li>
          <li>
            <strong>Backups:</strong> Residual copies of data may exist in
            encrypted backup systems for a limited period and will be purged in
            accordance with our standard backup rotation schedule.
          </li>
        </ul>

        {/* ---------------------------------------------------------------- */}
        {/* 6. Data Security */}
        {/* ---------------------------------------------------------------- */}
        <h2
          id="data-security"
          className="text-2xl font-semibold mt-12 mb-4 scroll-mt-24"
        >
          6. Data Security
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          KickDeck takes the security of your personal information seriously. We
          implement a combination of technical, administrative, and physical
          safeguards designed to protect your data against unauthorized access,
          alteration, disclosure, or destruction. These measures include:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground leading-relaxed mb-4 space-y-2">
          <li>
            <strong>Encryption in transit:</strong> All data transmitted between
            your browser and our servers is encrypted using Transport Layer
            Security (TLS/SSL).
          </li>
          <li>
            <strong>Encryption at rest:</strong> Sensitive data stored in our
            databases is encrypted at rest using industry-standard encryption
            algorithms.
          </li>
          <li>
            <strong>Access controls:</strong> Access to personal data is
            restricted to authorized personnel on a need-to-know basis and is
            protected by multi-factor authentication.
          </li>
          <li>
            <strong>Regular assessments:</strong> We conduct regular security
            assessments, vulnerability scans, and code reviews to identify and
            address potential security risks.
          </li>
          <li>
            <strong>PCI compliance:</strong> All payment card data is handled
            exclusively by Stripe, which is a PCI DSS Level 1 certified
            service provider. KickDeck does not process, store, or transmit
            cardholder data directly.
          </li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mb-4">
          While we strive to protect your personal information, no method of
          electronic transmission or storage is completely secure. We cannot
          guarantee absolute security but are committed to promptly addressing
          any security incidents. If we become aware of a data breach that
          affects your personal information, we will notify you and relevant
          authorities in accordance with applicable law.
        </p>

        {/* ---------------------------------------------------------------- */}
        {/* 7. Your Rights (GDPR) */}
        {/* ---------------------------------------------------------------- */}
        <h2
          id="your-rights-gdpr"
          className="text-2xl font-semibold mt-12 mb-4 scroll-mt-24"
        >
          7. Your Rights (GDPR)
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          If you are located in the European Economic Area (EEA), the United
          Kingdom, or Switzerland, you are entitled to certain rights under the
          General Data Protection Regulation (GDPR) and related data protection
          laws. These rights include:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground leading-relaxed mb-4 space-y-2">
          <li>
            <strong>Right of access:</strong> You have the right to request a
            copy of the personal data we hold about you and to receive
            information about how it is processed.
          </li>
          <li>
            <strong>Right to rectification:</strong> You have the right to
            request correction of any inaccurate or incomplete personal data we
            hold about you.
          </li>
          <li>
            <strong>Right to erasure (&quot;right to be forgotten&quot;):</strong>{" "}
            You have the right to request deletion of your personal data, subject
            to certain legal exceptions (e.g., where we are required to retain
            data for legal or regulatory compliance).
          </li>
          <li>
            <strong>Right to restrict processing:</strong> You have the right to
            request that we limit the processing of your personal data under
            certain circumstances, such as when you contest the accuracy of the
            data or object to its processing.
          </li>
          <li>
            <strong>Right to data portability:</strong> You have the right to
            receive your personal data in a structured, commonly used, and
            machine-readable format and to transmit it to another data
            controller.
          </li>
          <li>
            <strong>Right to object:</strong> You have the right to object to
            the processing of your personal data for certain purposes, including
            direct marketing and processing based on legitimate interests.
          </li>
          <li>
            <strong>Right to withdraw consent:</strong> Where processing is
            based on your consent, you have the right to withdraw that consent
            at any time without affecting the lawfulness of processing conducted
            prior to withdrawal.
          </li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mb-4">
          To exercise any of these rights, please contact us at{" "}
          <a
            href="mailto:info@kickdeck.io"
            className="text-primary underline underline-offset-4 hover:text-primary/80"
          >
            info@kickdeck.io
          </a>
          . We will respond to your request within thirty (30) days of receipt.
          In certain circumstances, we may need to verify your identity before
          processing your request. If we are unable to fulfill your request, we
          will provide an explanation.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          You also have the right to lodge a complaint with your local data
          protection supervisory authority if you believe that your data
          protection rights have been violated.
        </p>

        {/* ---------------------------------------------------------------- */}
        {/* 8. California Privacy Rights (CCPA) */}
        {/* ---------------------------------------------------------------- */}
        <h2
          id="california-privacy-rights"
          className="text-2xl font-semibold mt-12 mb-4 scroll-mt-24"
        >
          8. California Privacy Rights (CCPA)
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          If you are a California resident, the California Consumer Privacy Act
          (CCPA), as amended by the California Privacy Rights Act (CPRA), grants
          you the following rights regarding your personal information:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground leading-relaxed mb-4 space-y-2">
          <li>
            <strong>Right to know:</strong> You have the right to request that
            we disclose the categories and specific pieces of personal
            information we have collected about you, the categories of sources
            from which the information was collected, the business purpose for
            collecting the information, and the categories of third parties with
            whom we share the information.
          </li>
          <li>
            <strong>Right to delete:</strong> You have the right to request the
            deletion of personal information we have collected from you, subject
            to certain legal exceptions.
          </li>
          <li>
            <strong>Right to correct:</strong> You have the right to request
            correction of inaccurate personal information.
          </li>
          <li>
            <strong>Right to opt-out of sale or sharing:</strong> KickDeck does
            not sell your personal information and does not share your personal
            information for cross-context behavioral advertising purposes.
            Therefore, there is no need to opt out. If this practice ever
            changes, we will provide a clear opt-out mechanism.
          </li>
          <li>
            <strong>Right to non-discrimination:</strong> We will not
            discriminate against you for exercising any of your CCPA rights. You
            will not receive different pricing, quality of service, or access to
            features as a result of exercising your privacy rights.
          </li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mb-4">
          To submit a CCPA request, please contact us at{" "}
          <a
            href="mailto:info@kickdeck.io"
            className="text-primary underline underline-offset-4 hover:text-primary/80"
          >
            info@kickdeck.io
          </a>
          . We will verify your identity before processing your request and
          respond within forty-five (45) days, as required by law.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          In the preceding twelve (12) months, KickDeck has collected the
          following categories of personal information: identifiers (name,
          email, phone), commercial information (transaction records), internet
          or network activity (usage data and logs), and geolocation data
          (approximate location from IP address).
        </p>

        {/* ---------------------------------------------------------------- */}
        {/* 9. Cookies & Tracking */}
        {/* ---------------------------------------------------------------- */}
        <h2
          id="cookies-and-tracking"
          className="text-2xl font-semibold mt-12 mb-4 scroll-mt-24"
        >
          9. Cookies &amp; Tracking
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          KickDeck uses cookies and similar technologies to enhance your
          experience on the platform. Cookies are small text files placed on
          your device that help us recognize you and remember your preferences.
        </p>

        <h3 className="text-xl font-medium mt-8 mb-3">
          9.1 Essential Cookies
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          These cookies are strictly necessary for the operation of the Service.
          They enable core functionality such as user authentication, session
          management, and security features. Essential cookies cannot be
          disabled, as the Service would not function properly without them.
        </p>

        <h3 className="text-xl font-medium mt-8 mb-3">
          9.2 Analytics Cookies
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We use analytics cookies to collect aggregated, anonymized information
          about how visitors use the Service. This data helps us understand
          usage patterns, identify popular features, and improve the platform.
          Analytics cookies are optional and can be declined through your
          browser settings or our cookie consent mechanism without affecting the
          core functionality of the Service.
        </p>

        <h3 className="text-xl font-medium mt-8 mb-3">
          9.3 Third-Party Advertising Cookies
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          KickDeck does not use third-party advertising cookies. We do not
          serve advertisements on the platform and do not allow third-party
          advertisers to track your activity through our Service.
        </p>

        <h3 className="text-xl font-medium mt-8 mb-3">
          9.4 Managing Cookies
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Most web browsers allow you to manage your cookie preferences through
          browser settings. You can typically choose to block or delete cookies;
          however, blocking essential cookies may impair the functionality of
          the Service. For more information about managing cookies, consult your
          browser&apos;s help documentation.
        </p>

        {/* ---------------------------------------------------------------- */}
        {/* 10. Children's Privacy */}
        {/* ---------------------------------------------------------------- */}
        <h2
          id="childrens-privacy"
          className="text-2xl font-semibold mt-12 mb-4 scroll-mt-24"
        >
          10. Children&apos;s Privacy
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          KickDeck is not directed at children under the age of thirteen (13),
          and we do not knowingly collect personal information directly from
          children under 13. Account creation requires users to be at least
          eighteen (18) years of age.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We recognize that soccer tournaments frequently involve minor
          participants. When player data for minors is collected through the
          Service, it is submitted by tournament organizers, coaches, or team
          managers who act on behalf of and with the authorization of the
          player&apos;s parent or legal guardian. Tournament organizers are
          responsible for obtaining all necessary parental or guardian consent
          before submitting personal information of minor players to the
          platform.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          If we become aware that we have inadvertently collected personal
          information directly from a child under 13 without verified parental
          consent, we will take steps to delete such information promptly. If
          you believe we have collected information from a child under 13,
          please contact us immediately at{" "}
          <a
            href="mailto:info@kickdeck.io"
            className="text-primary underline underline-offset-4 hover:text-primary/80"
          >
            info@kickdeck.io
          </a>
          .
        </p>

        {/* ---------------------------------------------------------------- */}
        {/* 11. International Data Transfers */}
        {/* ---------------------------------------------------------------- */}
        <h2
          id="international-data-transfers"
          className="text-2xl font-semibold mt-12 mb-4 scroll-mt-24"
        >
          11. International Data Transfers
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          KickDeck is based in the United States, and your personal data may be
          processed and stored in the United States or other countries where our
          service providers operate. These countries may have data protection
          laws that differ from those in your jurisdiction.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          If you are located outside the United States, including in the
          European Economic Area, the United Kingdom, or Switzerland, please be
          aware that your information will be transferred to, stored, and
          processed in the United States. By using the Service, you consent to
          the transfer of your information to the United States and other
          jurisdictions as described in this Privacy Policy.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We implement appropriate safeguards for international data transfers,
          including Standard Contractual Clauses (SCCs) approved by the European
          Commission, data processing agreements with our service providers, and
          other legally recognized transfer mechanisms to ensure that your
          personal data receives an adequate level of protection wherever it is
          processed.
        </p>

        {/* ---------------------------------------------------------------- */}
        {/* 12. Changes to This Policy */}
        {/* ---------------------------------------------------------------- */}
        <h2
          id="changes-to-this-policy"
          className="text-2xl font-semibold mt-12 mb-4 scroll-mt-24"
        >
          12. Changes to This Policy
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We may update this Privacy Policy from time to time to reflect changes
          in our practices, technologies, legal requirements, or for other
          operational reasons. When we make changes, we will update the
          &quot;Last updated&quot; date at the top of this page.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          For material changes that significantly affect how we collect, use, or
          share your personal information, we will make reasonable efforts to
          notify you in advance through one or more of the following methods:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground leading-relaxed mb-4 space-y-2">
          <li>
            Sending an email notification to the address associated with your
            account
          </li>
          <li>Displaying a prominent notice within the Service</li>
          <li>
            Posting the updated policy on our website with a summary of changes
          </li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Your continued use of the Service after the effective date of any
          changes to this Privacy Policy constitutes your acceptance of the
          revised policy. We encourage you to review this Privacy Policy
          periodically to stay informed about how we are protecting your
          information.
        </p>

        {/* ---------------------------------------------------------------- */}
        {/* 13. Contact Us */}
        {/* ---------------------------------------------------------------- */}
        <h2
          id="contact-us"
          className="text-2xl font-semibold mt-12 mb-4 scroll-mt-24"
        >
          13. Contact Us
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          If you have any questions, concerns, or requests regarding this
          Privacy Policy or the handling of your personal information, please
          contact us:
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          <strong>KickDeck</strong>
          <br />
          Email:{" "}
          <a
            href="mailto:info@kickdeck.io"
            className="text-primary underline underline-offset-4 hover:text-primary/80"
          >
            info@kickdeck.io
          </a>
          <br />
          Website:{" "}
          <a
            href="https://kickdeck.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4 hover:text-primary/80"
          >
            kickdeck.io
          </a>
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          For GDPR-related inquiries, you may also contact your local data
          protection supervisory authority.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We aim to respond to all privacy-related inquiries within thirty (30)
          days of receipt.
        </p>

        <hr className="my-10 border-border" />
        <p className="text-sm text-muted-foreground/70 leading-relaxed">
          This document is provided for informational purposes and should be
          reviewed by qualified legal counsel before being relied upon as a
          binding privacy policy.
        </p>
      </Container>
    </main>
  );
}
