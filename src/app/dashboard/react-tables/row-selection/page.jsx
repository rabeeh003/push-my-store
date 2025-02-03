import * as React from 'react';

import Breadcrumb from '@/app/dashboard/layout/shared/breadcrumb/Breadcrumb';
import PageContainer from '@/app/components/container/PageContainer';

import TableRowSelection from '@/app/components/react-table/TableRowSelection';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Row Selection React Table',
  },
];


const ReactEditable = () => {


  return (
    <PageContainer title="Row Selection Table" description="this is Row Selection Table">
      {/* breadcrumb */}
      <Breadcrumb title="Row Selection Table" items={BCrumb} />
      {/* end breadcrumb */}
      <TableRowSelection />
    </PageContainer>
  );
};

export default ReactEditable;
