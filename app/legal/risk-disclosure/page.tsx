
export default function RiskDisclosurePage() {
    return (
        <main className="pt-32 pb-20 bg-white text-basquiat-black min-h-screen">
            <div className="max-w-4xl mx-auto px-6 lg:px-12">
                <h1 className="text-4xl font-light mb-12">Risk Disclosure</h1>
                <div className="prose prose-lg max-w-none prose-headings:font-light prose-headings:text-basquiat-black prose-p:text-gray-600 prose-a:text-basquiat-blue">

                    <div className="p-6 bg-red-50 border-l-4 border-red-500 mb-8">
                        <p className="text-red-700 font-medium m-0">
                            <strong>Important:</strong> All investments involve risk, including the potential loss of principal.
                        </p>
                    </div>

                    <h3>General Investment Risks</h3>
                    <p>
                        Investing in financial markets involves a high degree of risk and may not be suitable for all investors. You should carefully consider your investment objectives, level of experience, and risk appetite before making any investment decisions. The possibility exists that you could sustain a loss of some or all of your initial investment and therefore you should not invest money that you cannot afford to lose.
                    </p>

                    <h3>Market Volatility</h3>
                    <p>
                        Financial markets can be volatile and prices can fluctuate significantly in response to company, industry, political, regulatory, market, or economic developments. Historical performance is not indicative of future results.
                    </p>

                    <h3>Liquidity Risk</h3>
                    <p>
                        Certain investments may be illiquid and difficult to sell at a desired time or price. You may be unable to sell your investment when you wish to, or you may have to sell at a significant discount to the current market value.
                    </p>

                    <h3>Currency Risk</h3>
                    <p>
                        Investments in foreign securities involve special risks, including currency fluctuations, economic instability, and political developments. Changes in exchange rates may have an adverse effect on the value, price, or income of the investment.
                    </p>

                    <h3>Alternative Investments</h3>
                    <p>
                        Alternative investments, such as hedge funds and private equity, are speculative and involve a high degree of risk. These investments are suitable only for sophisticated investors who fully understand and are capable of bearing the risks of an investment in such funds.
                    </p>

                    <h3>No Guarantee</h3>
                    <p>
                        Basquiat Capital does not guarantee any specific investment results or performance. Any forward-looking statements or projections provided by Basquiat Capital are based on assumptions that may not prove to be accurate.
                    </p>

                    <h3>Professional Advice</h3>
                    <p>
                        You should seek advice from an independent financial advisor if you have any doubts. The information provided by Basquiat Capital is for general information purposes only and does not constitute financial, legal, or tax advice.
                    </p>
                </div>
            </div>
        </main>
    );
}
