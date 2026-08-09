import PortfolioPage from "@/components/portfolioPage";
import { getMessages } from "@/i18n/messages";

/**
 * Render the server-generated English portfolio homepage.
 * @returns The English portfolio page.
 */
export default function EnglishPortfolioPage() {
  return <PortfolioPage messages={getMessages("en")} />;
}
