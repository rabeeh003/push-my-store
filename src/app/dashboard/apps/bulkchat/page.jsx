import Breadcrumb from '@/app/dashboard/layout/shared/breadcrumb/Breadcrumb';
import PageContainer from '@/app/components/container/PageContainer';
import AppCard from '@/app/components/shared/AppCard';
import ChatsApp from '@/app/components/apps/bulkchat/index';

const BulkChats = () => {

  return (
    <PageContainer title="Bulk Chat" description="this is bulk Chat">
      <Breadcrumb title="Bukl Chat" subtitle="Bulk Messenger" />
      <AppCard>
        <ChatsApp />
      </AppCard>
    </PageContainer>
  );
};

export default BulkChats;
