import LegalLayout from "@/components/LegalLayout";

const tableOfContents = [
    { label: "Introduction", anchor: "introduction" },
    { label: "The Data We Collect", anchor: "data-collected" },
    { label: "How We Use Your Data", anchor: "data-use" },
    { label: "Data Security", anchor: "data-security" },
    { label: "Data Retention", anchor: "data-retention" },
    { label: "Your Legal Rights", anchor: "legal-rights" },
    { label: "Contact Us", anchor: "contact" }
];

const sections = [
    {
        number: "1",
        heading: "Introduction",
        anchor: "introduction",
        content: "Basquiat Capital respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you."
    },
    {
        number: "2",
        heading: "The Data We Collect",
        anchor: "data-collected",
        content: (
            <div className="font-sans" style={{ fontSize: 'clamp(14px, 1.6vw, 15px)', color: '#374151', lineHeight: 1.95 }}>
                <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                <ul className="space-y-3">
                    {[
                        { label: "Identity Data", desc: "includes first name, last name, username or similar identifier." },
                        { label: "Contact Data", desc: "includes email address and telephone numbers." },
                        { label: "Technical Data", desc: "includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website." },
                        { label: "Usage Data", desc: "includes information about how you use our website and services." }
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#F0B429', marginTop: '9px', flexShrink: 0 }} />
                            <span>
                                <span style={{ fontWeight: 500, color: '#0B2545' }}>{item.label}:</span>{' '}
                                {item.desc}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    },
    {
        number: "3",
        heading: "How We Use Your Data",
        anchor: "data-use",
        content: (
            <div className="font-sans" style={{ fontSize: 'clamp(14px, 1.6vw, 15px)', color: '#374151', lineHeight: 1.95 }}>
                <p className="mb-4">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                <ul className="space-y-2">
                    {[
                        "Where we need to perform the contract we are about to enter into or have entered into with you.",
                        "Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.",
                        "Where we need to comply with a legal obligation."
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#F0B429', marginTop: '9px', flexShrink: 0 }} />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    },
    {
        number: "4",
        heading: "Data Security",
        anchor: "data-security",
        content: "We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know."
    },
    {
        number: "5",
        heading: "Data Retention",
        anchor: "data-retention",
        content: "We will only retain your personal data for as long as reasonably necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements."
    },
    {
        number: "6",
        heading: "Your Legal Rights",
        anchor: "legal-rights",
        content: "Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent."
    },
    {
        number: "",
        heading: "Contact Us",
        anchor: "contact",
        content: "If you have any questions about this Privacy Policy, please contact us at info@basquiatcapital.com."
    }
];

export default function PrivacyPolicy() {
    return (
        <LegalLayout
            label="Legal"
            title="Privacy Policy"
            lastUpdated="February 18, 2026"
            subtitle="Your privacy matters to us. This policy explains how we collect, use, and protect your personal data."
            sections={sections}
            tableOfContents={tableOfContents}
        />
    );
}
