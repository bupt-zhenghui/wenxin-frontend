import React from 'react';
import styles from './index.less';
import { Button, Row, Col } from 'antd';

export default () => (
  <div className={styles.container}>
    <div id="components-button-demo-block">
      <div>
        <Row gutter={16}>
          <Col
            xl={{
              span: 6,
              offset: 2,
            }}
            lg={6}
            md={12}
            sm={24}
          >
            <Button
              xl={{
                span: 6,
                offset: 2,
              }}
              type="primary"
            >
              预览数据集
            </Button>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col
            xl={{
              span: 6,
              offset: 2,
            }}
            lg={6}
            md={12}
            sm={24}
          >
            <Button
              xl={{
                span: 6,
                offset: 2,
              }}
            >
              下载数据集
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  </div>
);
