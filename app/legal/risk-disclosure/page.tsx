import LegalLayout from "@/components/LegalLayout";

const tableOfContents = [
    { label: "Important Notice", anchor: "important" },
    { label: "General Investment Risks", anchor: "general-risks" },
    { label: "Market Volatility", anchor: "market-volatility" },
    { label: "Liquidity Risk", anchor: "liquidity-risk" },
    { label: "Currency Risk", anchor: "currency-risk" },
    { label: "Alternative Investments", anchor: "alternative-investments" },
    { label: "No Guarantee", anchor: "no-guarantee" },
    { label: "Professional Advice", anchor: "professional-advice" }
];

const sections = [
    {
        number: "",
        heading: "Important Notice",
        anchor: "important",
        isWarning: true,
        content: "All investments involve risk, including the potential loss of principal. The information provided on this website is for general informational purposes only and does not constitute financial, legal, or tax advice. Past performance is not indicative of future results."
    },
    {
        number: "1",
        heading: "General Investment Risks",
        anchor: "general-risks",
        content: "Investing in financial markets involves a high degree of risk and may not be suitable for all investors. You should carefully consider your investment objectives, level of experience, and risk appetite before making any investment decisions. The possibility exists that you could sustain a loss of some or all of your initial investment and therefore you should not invest money that you cannot afford to lose."
    },
    {
        number: "2",
        heading: "Market Volatility",
        anchor: "market-volatility",
        content: "Financial markets can be volatile and prices can fluctuate significantly in response to company, industry, political, regulatory, market, or economic developments. Historical performance is not indicative of future results."
    },
    {
        number: "3",
        heading: "Liquidity Risk",
        anchor: "liquidity-risk",
        content: "Certain investments may be illiquid and difficult to sell at a desired time or price. You may be unable to sell your investment when you wish to, or you may have to sell at a significant discount to the current market value."
    },
    {
        number: "4",
        heading: "Currency Risk",
        anchor: "currency-risk",
        content: "Investments in foreign securities involve special risks, including currency fluctuations, economic instability, and political developments. Changes in exchange rates may have an adverse effect on the value, price, or income of the investment."
    },
    {
        number: "5",
        heading: "Alternative Investments",
        anchor: "alternative-investments",
        content: "Alternative investments, such as hedge funds and private equity, are speculative and involve a high degree of risk. These investments are suitable only for sophisticated investors who fully understand and are capable of bearing the risks of an investment in such funds."
    },
    {
        number: "6",
        heading: "No Guarantee",
        anchor: "no-guarantee",
        content: "Basquiat Capital does not guarantee any specific investment results or performance. Any forward-looking statements or projections provided by Basquiat Capital are based on assumptions that may not prove to be accurate."
    },
    {
        number: "7",
        heading: "Professional Advice",
        anchor: "professional-advice",
        content: "You should seek advice from an independent financial advisor if you have any doubts. The information provided by Basquiat Capital is for general information purposes only and does not constitute financial, legal, or tax advice."
    }
];

export default function RiskDisclosure() {
    return (
        <LegalLayout
            label="Compliance"
            title="Risk Disclosure"
            lastUpdated="February 18, 2026"
            subtitle="Important information about the risks associated with investment activities and our services."
            sections={sections}
            tableOfContents={tableOfContents}
        />
    );
}
