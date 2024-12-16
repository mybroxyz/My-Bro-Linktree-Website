// src/components/FooterTokenomics.tsx

import "./Footer2.scss"; // Reuse the existing SCSS

const FooterTokenomics = () => {
    return (
        <div className="footer">
            <div className="footer-info">
                {/* Tagline Section */}
                <p className="footer-description">
                    Trustless, automated, and audited presale, for bot protection
                </p>

                {/* Nested Tokenomics Section */}
                <div className="footer-inner">
                    <h3 className="footer-title">TOKENOMICS:</h3>
                    <ul className="footer-tokenomics">
                        <li>420.69 Trillion $BRO</li>
                        <li>No Allocations</li>
                        <li>No Taxes</li>
                        <li>No BS</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FooterTokenomics;
