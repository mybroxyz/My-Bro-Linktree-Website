import { motion } from "framer-motion";

// components
import Icon from "./Icon";

// styles
import "./Footer2.scss";

interface FooterProps {
    name: string;
    buildYourOwnBtnColor: string;
}

const btnVariants = {
    initial: { opacity: 0, scale: 1 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.05 },
    focus: { scale: 1.05 },
    tap: { scale: 0.95 },
};

export default function Footer(props: FooterProps) {

    return (
        <div className="footer">

            {/* Informational Text */}
            
            <div className="footer-info">
                <p className="footer-description">
                    $BRO is a community token with no intrinsic value or expectation of financial return. There is no formal roadmap.
                </p>

                <h3 className="footer-title">TOKENOMICS:</h3>
                <ul className="footer-tokenomics">
                    <li>420.69 T $BRO</li>
                    <li>No Allocations</li>
                    <li>No Taxes</li>
                    <li>No BS</li>
                    <li>Trustless, automated and audited presale for bot protection</li>

                </ul>
            </div>





        </div>
    );
}
