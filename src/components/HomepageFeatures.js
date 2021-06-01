import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Dễ tiếp cận',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Ez Code hướng dẫn lập trình các project ngắn gọn, đơn giản, dễ cài đặt.
        Dành cho người mới bắt đầu.
      </>
    ),
  },
  {
    title: 'Chia sẻ',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Các project sẽ được chia nhỏ để thực hành.
        Vào phần <code>docs</code> để đọc và góp ý ở phần edit phía cuối mỗi bài viết.
      </>
    ),
  },
  {
    title: 'Docusaurus',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Thư viện mã nguồn mở được viết bằng React.
        Docusaurus thích hợp dành cho các bạn làm blog hay viết document hướng dẫn.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
