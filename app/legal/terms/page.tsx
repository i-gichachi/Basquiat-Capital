
export default function TermsPage() {
    return (
        <main className="pt-32 pb-20 bg-white text-basquiat-black min-h-screen">
            <div className="max-w-4xl mx-auto px-6 lg:px-12">
                <h1 className="text-4xl font-light mb-12">Terms of Use</h1>
                <div className="prose prose-lg max-w-none prose-headings:font-light prose-headings:text-basquiat-black prose-p:text-gray-600 prose-a:text-basquiat-blue">
                    <p>Last Updated: {new Date().toLocaleDateString()}</p>

                    <h3>1. Agreement to Terms</h3>
                    <p>
                        By accessing or using the website of Basquiat Capital ("we," "us," or "our"), you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree to these terms, please do not use our services.
                    </p>

                    <h3>2. Use of Services</h3>
                    <p>
                        Our website and services are intended for informational purposes regarding our wealth management and investment advisory services. You agree to use our site only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website.
                    </p>

                    <h3>3. Intellectual Property</h3>
                    <p>
                        The content, organization, graphics, design, compilation, and other matters related to the Site are protected under applicable copyrights, trademarks, and other proprietary (including but not limited to intellectual property) rights. The copying, redistribution, use, or publication by you of any such matters or any part of the Site is strictly prohibited.
                    </p>

                    <h3>4. Disclaimer of Warranties</h3>
                    <p>
                        The materials on Basquiat Capital's website are provided on an 'as is' basis. Basquiat Capital makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                    </p>

                    <h3>5. Limitation of Liability</h3>
                    <p>
                        In no event shall Basquiat Capital or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Basquiat Capital's website, even if Basquiat Capital or a Basquiat Capital authorized representative has been notified orally or in writing of the possibility of such damage.
                    </p>

                    <h3>6. Governing Law</h3>
                    <p>
                        These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Basquiat Capital is registered, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                    </p>

                    <h3>7. Changes to Terms</h3>
                    <p>
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
                    </p>

                    <h3>Contact Us</h3>
                    <p>
                        If you have any questions about these Terms, please contact us at info@basquiatcapital.com.
                    </p>
                </div>
            </div>
        </main>
    );
}
