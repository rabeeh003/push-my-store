import Breadcrumb from '@/app/dashboard/layout/shared/breadcrumb/Breadcrumb';
import PageContainer from '@/app/components/container/PageContainer';
import AppCard from '@/app/components/shared/AppCard';
import Image from 'next/image';
import EmailApp from '@/app/components/apps/email/index'

const Email = () => {

  return (
    <PageContainer title="Email" description="this is Email">
      <Breadcrumb title="Email app" subtitle="Look at Inbox">
        <Image src="/images/breadcrumb/emailSv.png" alt={'emailIcon'} width={195} height={195} />
      </Breadcrumb>

      <AppCard>
        <EmailApp />
      </AppCard>
    </PageContainer>
  );
};

export default Email;
