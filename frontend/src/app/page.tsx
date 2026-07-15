import AppLayout from "@/components/layout/AppLayout";
import { PageContainer } from "@/components/layout";

import {
  WelcomeBanner,
  HeroStats,
  DashboardGrid,
} from "@/components/dashboard";

export default function HomePage() {
  return (
    <AppLayout>
      <PageContainer>

        <div className="space-y-8">

          <WelcomeBanner />

          <HeroStats />

          <DashboardGrid />

        </div>

      </PageContainer>
    </AppLayout>
  );
}