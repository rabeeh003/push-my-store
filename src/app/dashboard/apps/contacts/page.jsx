import PageContainer from '@/app/components/container/PageContainer';
import Breadcrumb from '@/app/dashboard/layout/shared/breadcrumb/Breadcrumb';
import AppCard from '@/app/components/shared/AppCard';
import ContactApp from '@/app/components/apps/contacts';

const Contacts = () => {


  return (
    <PageContainer title="Contact" description="this is Contact">
      <Breadcrumb title="Contact app" subtitle="List Your Contacts" />
      <AppCard>
        <ContactApp />
      </AppCard>
    </PageContainer>
  );
};

export default Contacts;
