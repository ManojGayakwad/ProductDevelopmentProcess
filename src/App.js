import "./styles.css";

import TopHeading from "./TopHeading";
import HorizontalDiamond from "./Diamond";
import HorizontalDiamondText from "./HorizontalDiamondText";
import FooterSection from "./FooterSection";

export default function App() {
  return (
    <div className="App">
      <TopHeading />
      <HorizontalDiamond />
      <HorizontalDiamondText />
      <FooterSection />
    </div>
  );
}
