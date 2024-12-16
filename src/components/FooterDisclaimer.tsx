// src/components/FooterDisclaimer.tsx

import "./Footer2.scss"; // Reuse the existing SCSS

const FooterDisclaimer = () => {
    return (
        <footer className="footer"> {/* Changed to <footer> */}
            <div className="footer-info">
                <p className="footer-disclaimer">
                    *$BRO is a community token, with no intrinsic value or expectation of financial return, and no formal team or roadmap
                </p>
            </div>
        </footer>
    );
};

export default FooterDisclaimer;
