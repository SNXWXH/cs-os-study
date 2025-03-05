import { useRouter } from 'next/router';
export default {
  logo: (
    <strong>
      Self-Study Computer Architecture + Operating System Book Study
    </strong>
  ),
  project: {
    link: 'https://github.com/SNXWXH/cs-os-study',
  },
  sidebar: {
    titleComponent({ title }) {
      return (
        <div
          style={{
            fontSize: '1.2rem',
          }}
        >
          {title}
        </div>
      );
    },
    defaultMenuCollapseLevel: 1,
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath === '/') {
      return {
        titleTemplate:
          'Self-Study Computer Architecture + Operating System Study',
      };
    }
  },
  head: (
    <>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta
        property='og:title'
        content='혼자 공부하는 컴퓨터 구조+운영체제 스터디'
      />
      <meta
        property='og:description'
        content='리책을 정리 및 발표하여 최종적으로 완독하며 면접 대비 CS 개념을 학습하는 것입니다.'
      />
    </>
  ),
};
