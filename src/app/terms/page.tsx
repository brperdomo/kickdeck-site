import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";

export const metadata = createMetadata({
  title: "Terms & Conditions",
  description:
    "Read the Terms & Conditions governing your use of KickDeck, the soccer tournament management platform.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main className="py-32">
      <Container className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Terms &amp; Conditions
        </h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Last updated: March 2026
        </p>

        <hr className="my-10 border-border" />

        {/* ---------------------------------------------------------------- */}
        {/* 1. Acceptance of Terms */}
        {/* ---------------------------------------------------------------- */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          1. Acceptance of Terms
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          By accessing or using the KickDeck platform (&quot;Service&quot;),
          available at kickdeck.io and any associated mobile applications or
          sub-domains, you (&quot;User,&quot; &quot;you,&quot; or
          &quot;your&quot;) agree to be bound by these Terms &amp; Conditions
          (&quot;Terms&quot;). If you do not agree to all of these Terms, you
          must not access or use the Service.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          You must be at least eighteen (18) years of age to create an account
          or use the Service. By using the Service, you represent and warrant
          that you meet this age requirement.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          If you are accessing or using the Service on behalf of a sports
          organization, league, club, tournament organizer, or any other entity,
          you represent and warrant that you have the authority to bind that
          entity to these Terms. In such cases, &quot;you&quot; and
          &quot;your&quot; refer to both you individually and the entity you
          represent.
        </p>

        {/* ---------------------------------------------------------------- */}
        {/* 2. Description of Service */}
        {/* ---------------------------------------------------------------- */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          2. Description of Service
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          KickDeck is a software-as-a-service (&quot;SaaS&quot;) platform that
          provides soccer and futsal tournament management tools, including but
          not limited to:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground leading-relaxed mb-4 space-y-2">
          <li>Tournament creation, configuration, and event management</li>
          <li>Team and player registration and roster management</li>
          <li>Match scheduling and bracket generation</li>
          <li>Score tracking and standings calculation</li>
          <li>
            Online payment processing for registration fees and related charges
          </li>
          <li>Communication tools for organizers, coaches, and participants</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The Service is provided on a subscription basis and is offered
          &quot;as is&quot; and &quot;as available.&quot; KickDeck reserves the
          right to modify, suspend, or discontinue any part of the Service at
          any time, with or without notice. We will make commercially reasonable
          efforts to notify users of material changes in advance.
        </p>

        {/* ---------------------------------------------------------------- */}
        {/* 3. Account Registration */}
        {/* ---------------------------------------------------------------- */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          3. Account Registration
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          To access certain features of the Service, you must create an account.
          When registering, you agree to:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground leading-relaxed mb-4 space-y-2">
          <li>
            Provide accurate, current, and complete information during the
            registration process
          </li>
          <li>
            Maintain and promptly update your account information to keep it
            accurate, current, and complete
          </li>
          <li>
            Maintain the security and confidentiality of your password and not
            share your login credentials with any third party
          </li>
          <li>
            Accept responsibility for all activities that occur under your
            account
          </li>
          <li>
            Notify KickDeck immediately at{" "}
            <a
              href="mailto:info@kickdeck.io"
              className="text-primary underline underline-offset-4 hover:text-primary/80"
            >
              info@kickdeck.io
            </a>{" "}
            if you suspect any unauthorized access to or use of your account
          </li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mb-4">
          KickDeck reserves the right to suspend or terminate any account that
          we reasonably believe contains inaccurate information, has been
          compromised, or is being used in violation of these Terms.
        </p>

        {/* ---------------------------------------------------------------- */}
        {/* 4. Subscription & Billing */}
        {/* ---------------------------------------------------------------- */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          4. Subscription &amp; Billing
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          KickDeck offers subscription plans billed on a monthly basis. By
          selecting a paid plan, you authorize KickDeck to charge the applicable
          subscription fee to your designated payment method on a recurring
          monthly cycle.
        </p>
        <ul className="list-disc pl-6 text-muted-foreground leading-relaxed mb-4 space-y-2">
          <li>
            <strong>Pricing changes:</strong> KickDeck reserves the right to
            change subscription pricing at any time. We will provide at least
            thirty (30) days&apos; written notice before any price increase
            takes effect. Your continued use of the Service after the effective
            date of a price change constitutes acceptance of the new pricing.
          </li>
          <li>
            <strong>No partial refunds:</strong> Subscription fees are
            non-refundable. If you cancel your subscription mid-cycle, you will
            retain access to the Service until the end of your current billing
            period. No prorated refunds will be issued for unused portions of a
            billing cycle.
          </li>
          <li>
            <strong>Free trials:</strong> KickDeck may offer free trial periods
            at its discretion. At the end of a free trial, your account will
            automatically convert to a paid subscription unless you cancel
            before the trial period expires. You will be notified before any
            charges are applied.
          </li>
          <li>
            <strong>Failed payments:</strong> If a payment fails, KickDeck may
            retry the charge and/or suspend access to the Service until a valid
            payment method is provided.
          </li>
        </ul>

        {/* ---------------------------------------------------------------- */}
        {/* 5. Payment Processing */}
        {/* ---------------------------------------------------------------- */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          5. Payment Processing
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          KickDeck uses Stripe, Inc. (&quot;Stripe&quot;) as its third-party
          payment processor. All financial transactions conducted through the
          Service, including team registration fees collected by tournament
          organizers, are processed by Stripe in accordance with Stripe&apos;s
          terms of service and privacy policy.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          A platform fee of four percent (4%) plus thirty cents ($0.30) per
          transaction is applied to all payments processed through the KickDeck
          platform. This fee covers the use of KickDeck&apos;s payment
          infrastructure, including Stripe processing costs, and is deducted
          from the total transaction amount before funds are disbursed to the
          tournament organizer.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Tournament organizers are solely responsible for establishing and
          communicating their own refund policies to teams and participants.
          KickDeck acts as a technology intermediary and is not a party to the
          financial relationship between organizers and teams. KickDeck is not
          responsible for resolving payment disputes between tournament
          organizers and registered teams or participants.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          By using the payment features of the Service, you agree to
          Stripe&apos;s{" "}
          <a
            href="https://stripe.com/legal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4 hover:text-primary/80"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="https://stripe.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4 hover:text-primary/80"
          >
            Privacy Policy
          </a>
          .
        </p>

        {/* ---------------------------------------------------------------- */}
        {/* 6. User Content & Data */}
        {/* ---------------------------------------------------------------- */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          6. User Content &amp; Data
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          You retain full ownership of all data, content, and information you
          submit to the Service (&quot;User Content&quot;), including but not
          limited to tournament configurations, team rosters, player
          information, schedules, and scores.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          By submitting User Content to the Service, you grant KickDeck a
          non-exclusive, worldwide, royalty-free license to use, store, process,
          reproduce, and display your User Content solely for the purpose of
          providing, maintaining, and improving the Service. This license
          terminates when you delete your User Content or close your account,
          except where retention is required by law or for legitimate business
          purposes (such as backup copies or transaction records).
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          You are solely responsible for the accuracy, quality, and legality of
          the User Content you submit. You represent and warrant that you have
          all necessary rights and permissions to submit such content and that
          your User Content does not infringe upon the intellectual property or
          privacy rights of any third party.
        </p>

        {/* ---------------------------------------------------------------- */}
        {/* 7. Acceptable Use */}
        {/* ---------------------------------------------------------------- */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          7. Acceptable Use
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          You agree not to use the Service in any manner that:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground leading-relaxed mb-4 space-y-2">
          <li>
            Violates any applicable local, state, national, or international law
            or regulation
          </li>
          <li>
            Is fraudulent, deceptive, or misleading, including submitting false
            registration information or creating fake tournament listings
          </li>
          <li>
            Interferes with or disrupts the integrity, security, or performance
            of the Service or its underlying infrastructure
          </li>
          <li>
            Attempts to gain unauthorized access to the Service, other user
            accounts, or any related systems or networks
          </li>
          <li>
            Uses any automated means, including bots, scrapers, crawlers, or
            similar tools, to access or interact with the Service without
            KickDeck&apos;s prior written permission
          </li>
          <li>
            Transmits any viruses, malware, or other harmful or destructive code
          </li>
          <li>
            Harasses, abuses, threatens, or intimidates other users of the
            Service
          </li>
          <li>
            Collects or harvests personal information of other users without
            their explicit consent
          </li>
          <li>
            Uses the Service for any purpose other than its intended use as a
            tournament management platform
          </li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mb-4">
          KickDeck reserves the right to investigate and take appropriate action
          against any user who, in KickDeck&apos;s sole discretion, violates
          this section, including removing User Content, suspending or
          terminating accounts, and reporting violations to law enforcement
          authorities.
        </p>

        {/* ---------------------------------------------------------------- */}
        {/* 8. Intellectual Property */}
        {/* ---------------------------------------------------------------- */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          8. Intellectual Property
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The Service, including all software, code, design, text, graphics,
          logos, trademarks, and other content and materials provided by KickDeck
          (collectively, &quot;KickDeck IP&quot;), is the exclusive property of
          KickDeck and its licensors and is protected by United States and
          international copyright, trademark, patent, trade secret, and other
          intellectual property laws.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          You may not, without KickDeck&apos;s prior written consent:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground leading-relaxed mb-4 space-y-2">
          <li>
            Copy, modify, adapt, translate, or create derivative works based on
            the Service or any KickDeck IP
          </li>
          <li>
            Reverse engineer, decompile, disassemble, or otherwise attempt to
            discover the source code or underlying algorithms of the Service
          </li>
          <li>
            Remove, alter, or obscure any proprietary notices, labels, or
            markings on the Service
          </li>
          <li>
            Sublicense, lease, sell, resell, transfer, assign, or otherwise
            commercially exploit the Service or any KickDeck IP
          </li>
          <li>
            Use KickDeck&apos;s name, logo, or trademarks without prior written
            authorization
          </li>
        </ul>

        {/* ---------------------------------------------------------------- */}
        {/* 9. Limitation of Liability */}
        {/* ---------------------------------------------------------------- */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          9. Limitation of Liability
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL
          KICKDECK, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AFFILIATES, OR
          LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
          CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS
          OF PROFITS, REVENUE, DATA, GOODWILL, OR BUSINESS OPPORTUNITY, ARISING
          OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE SERVICE,
          REGARDLESS OF THE CAUSE OF ACTION OR THE THEORY OF LIABILITY, EVEN IF
          KICKDECK HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, KICKDECK&apos;S
          TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS OR
          THE SERVICE SHALL NOT EXCEED THE TOTAL AMOUNT PAID BY YOU TO KICKDECK
          DURING THE TWELVE (12) MONTH PERIOD IMMEDIATELY PRECEDING THE EVENT
          GIVING RISE TO THE CLAIM, OR ONE HUNDRED DOLLARS ($100.00), WHICHEVER
          IS GREATER.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Some jurisdictions do not allow the exclusion or limitation of
          incidental or consequential damages, so the above limitations may not
          apply to you. In such jurisdictions, KickDeck&apos;s liability shall
          be limited to the fullest extent permitted by law.
        </p>

        {/* ---------------------------------------------------------------- */}
        {/* 10. Indemnification */}
        {/* ---------------------------------------------------------------- */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          10. Indemnification
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          You agree to indemnify, defend, and hold harmless KickDeck and its
          officers, directors, employees, agents, affiliates, and licensors from
          and against any and all claims, damages, losses, liabilities, costs,
          and expenses (including reasonable attorneys&apos; fees) arising out
          of or related to:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground leading-relaxed mb-4 space-y-2">
          <li>Your use of the Service</li>
          <li>Your violation of these Terms</li>
          <li>
            Your violation of any applicable law, regulation, or third-party
            right
          </li>
          <li>
            Any User Content you submit, post, or otherwise make available
            through the Service
          </li>
          <li>
            Any dispute between you and a third party, including but not limited
            to disputes between tournament organizers and teams or participants
          </li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mb-4">
          KickDeck reserves the right, at its own expense, to assume the
          exclusive defense and control of any matter otherwise subject to
          indemnification by you, in which event you agree to cooperate with
          KickDeck in asserting any available defenses.
        </p>

        {/* ---------------------------------------------------------------- */}
        {/* 11. Termination */}
        {/* ---------------------------------------------------------------- */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">11. Termination</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Either party may terminate the agreement governed by these Terms at
          any time:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground leading-relaxed mb-4 space-y-2">
          <li>
            <strong>By you:</strong> You may terminate your account at any time
            by contacting us at{" "}
            <a
              href="mailto:info@kickdeck.io"
              className="text-primary underline underline-offset-4 hover:text-primary/80"
            >
              info@kickdeck.io
            </a>{" "}
            or through the account settings in the Service. Cancellation will
            take effect at the end of your current billing period.
          </li>
          <li>
            <strong>By KickDeck:</strong> KickDeck may suspend or terminate your
            account and access to the Service immediately, without prior notice,
            if we reasonably believe you have violated these Terms, engaged in
            fraudulent activity, or if required by law.
          </li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Upon termination, your right to use the Service ceases immediately.
          KickDeck will make your data available for export for a period of
          thirty (30) days following the effective date of termination. After
          this 30-day period, KickDeck may permanently delete your account data,
          subject to any retention obligations required by law.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Sections 6, 8, 9, 10, and 13 of these Terms shall survive
          termination.
        </p>

        {/* ---------------------------------------------------------------- */}
        {/* 12. Modifications to Terms */}
        {/* ---------------------------------------------------------------- */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          12. Modifications to Terms
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          KickDeck reserves the right to modify or update these Terms at any
          time at its sole discretion. When we make changes, we will update the
          &quot;Last updated&quot; date at the top of this page. For material
          changes, we will make reasonable efforts to notify you via email or
          through an in-app notification.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Your continued use of the Service after the effective date of any
          modifications constitutes your acceptance of the revised Terms. If you
          do not agree to the updated Terms, you must stop using the Service and
          terminate your account.
        </p>

        {/* ---------------------------------------------------------------- */}
        {/* 13. Governing Law */}
        {/* ---------------------------------------------------------------- */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          13. Governing Law
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          These Terms and any disputes arising out of or related to these Terms
          or the Service shall be governed by and construed in accordance with
          the laws of the United States and the State of Delaware, without
          regard to its conflict of law principles.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Any dispute, controversy, or claim arising out of or relating to these
          Terms, or the breach, termination, or invalidity thereof, shall be
          resolved through binding arbitration administered by the American
          Arbitration Association (&quot;AAA&quot;) in accordance with its
          Commercial Arbitration Rules. The arbitration shall be conducted by a
          single arbitrator and shall take place in the State of Delaware.
          Judgment upon the award rendered by the arbitrator may be entered in
          any court having jurisdiction thereof.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          You agree that any arbitration shall be conducted on an individual
          basis and not as a class, consolidated, or representative action. You
          waive any right to participate in a class action lawsuit or
          class-wide arbitration against KickDeck.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Notwithstanding the foregoing, either party may seek injunctive or
          other equitable relief in any court of competent jurisdiction to
          prevent the actual or threatened infringement or misappropriation of
          intellectual property rights.
        </p>

        {/* ---------------------------------------------------------------- */}
        {/* 14. Contact Information */}
        {/* ---------------------------------------------------------------- */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          14. Contact Information
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          If you have any questions, concerns, or feedback regarding these
          Terms &amp; Conditions, please contact us at:
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

        <hr className="my-10 border-border" />
        <p className="text-sm text-muted-foreground/70 leading-relaxed">
          This document is provided for informational purposes and should be
          reviewed by qualified legal counsel before being relied upon as a
          binding legal agreement.
        </p>
      </Container>
    </main>
  );
}
