import AppLayout from "@/components/layout/AppLayout";
import { PageContainer } from "@/components/layout";

import {
  WelcomeBanner,
  DashboardGrid,
} from "@/components/dashboard";

export default function HomePage() {
  return (
    <AppLayout>
      <PageContainer>
        <div className="space-y-8">
          <WelcomeBanner />

          <DashboardGrid />
        </div>
      </PageContainer>
    </AppLayout>
  );
}