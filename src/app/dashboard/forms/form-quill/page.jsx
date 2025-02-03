import React from 'react';

import 'react-quill/dist/quill.snow.css';

import Breadcrumb from '@/app/dashboard/layout/shared/breadcrumb/Breadcrumb';
import PageContainer from '@/app/components/container/PageContainer';
import Editor from '@/app/components/forms/form-quill/Editor';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Quill Editor',
  },
];

const QuillEditor = () => {

  return (
    <PageContainer title="Quill Editor" description="this is Quill Editor">
      {/* breadcrumb */}
      <Breadcrumb title="Quill Editor" items={BCrumb} />
      {/* end breadcrumb */}
      <Editor />
    </PageContainer>
  );
};

export default QuillEditor;
