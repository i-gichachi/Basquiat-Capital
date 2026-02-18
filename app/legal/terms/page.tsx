import LegalLayout from "@/components/LegalLayout";

const tableOfContents = [
    { label: "Agreement to Terms", anchor: "agreement" },
    { label: "Use of Services", anchor: "use-of-services" },
    { label: "Intellectual Property", anchor: "intellectual-property" },
    { label: "Disclaimer of Warranties", anchor: "disclaimer" },
    { label: "Limitation of Liability", anchor: "limitation" },
    { label: "Governing Law", anchor: "governing-law" },
    { label: "Changes to Terms", anchor: "changes" },
    { label: "Contact Us", anchor: "contact" }
];

const sections = [
    {
        number: "1",
        heading: "Agreement to Terms",
        anchor: "agreement",
        content: "By accessing or using the website of Basquiat Capital (\"we,\" \"us,\" or \"our\"), you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree to these terms, please do not use our services."
    },
    {
        number: "2",
        heading: "Use of Services",
        anchor: "use-of-services",
        content: "Our website and services are intended for informational purposes regarding our wealth management and investment advisory services. You agree to use our site only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website."
    },
    {
        number: "3",
        heading: "Intellectual Property",
        anchor: "intellectual-property",
        content: "The content, organization, graphics, design, compilation, and other matters related to the Site are protected under applicable copyrights, trademarks, and other proprietary (including but not limited to intellectual property) rights. The copying, redistribution, use, or publication by you of any such matters or any part of the Site is strictly prohibited."
    },
    {
        number: "4",
        heading: "Disclaimer of Warranties",
        anchor: "disclaimer",
        content: "The materials on Basquiat Capital's website are provided on an 'as is' basis. Basquiat Capital makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
    },
    {
        number: "5",
        heading: "Limitation of Liability",
        anchor: "limitation",
        content: "In no event shall Basquiat Capital or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Basquiat Capital's website, even if Basquiat Capital or a Basquiat Capital authorized representative has been notified orally or in writing of the possibility of such damage."
    },
    {
        number: "6",
        heading: "Governing Law",
        anchor: "governing-law",
        content: "These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Basquiat Capital is registered, and you irrevocably submit to the exclusive jurisdiction of the courts in that location."
    },
    {
        number: "7",
        heading: "Changes to Terms",
        anchor: "changes",
        content: "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion."
    },
    {
        number: "",
        heading: "Contact Us",
        anchor: "contact",
        content: "If you have any questions about these Terms, please contact us at info@basquiatcapital.com."
    }
];

export default function TermsOfUse() {
    return (
        <LegalLayout
            label="Legal"
            title="Terms of Use"
            lastUpdated="February 18, 2026"
            subtitle="Please read these terms carefully before using our website and services."
            sections={sections}
            tableOfContents={tableOfContents}
        />
    );
}
