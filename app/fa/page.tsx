import PortfolioPage from "@/components/portfolioPage";
import { getMessages } from "@/i18n/messages";

/**
 * Render the server-generated Persian portfolio homepage.
 * @returns The Persian portfolio page.
 */
export default function PersianPortfolioPage() {
  return (
    <PortfolioPage
      className="font-['IRANYekan']"
      messages={getMessages("fa")}
    />
  );
}
