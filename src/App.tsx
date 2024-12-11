// src/App.tsx

import { useState, useEffect } from "react";

// types
import ConfigDataType from "./types/ConfigDataType";

// data
import configData from "./data/config.json";

// components
import ProfileHeader from "./components/ProfileHeader";
import LinkBlocksWrapper from "./components/LinkBlocksWrapper";
import FooterTokenomics from "./components/FooterTokenomics";
import FooterDisclaimer from "./components/FooterDisclaimer";
import LoadingScreen from "./components/LoadingScreen";

// styles
import "./styles/global.scss";

const config: ConfigDataType = configData;

function App() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        document.title = `${config.handle}'s Link Orchard`;
        document.body.style.backgroundColor = config.backgroundColor;
        document.body.style.color = config.textColor;

        const timer = setTimeout(() => setIsLoaded(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <LoadingScreen isLoaded={isLoaded} />
            <div
                className="content"
                style={!isLoaded ? { display: "none" } : undefined}>
                <ProfileHeader
                    bio={config.bio}
                    handle={config.handle}
                    name={config.name}
                    verifiedIconColor={config.verifiedIconColor}
                    verifiedIconPath={config.verifiedIconColor}
                />
                <LinkBlocksWrapper
                    links={config.links}
                    linkLogoColor={config.linkLogoColor}
                />

                {/* Render the updated footer components */}
                <FooterTokenomics />
                <FooterDisclaimer />
            </div>
        </>
    );
}

export default App;
