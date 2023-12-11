import React from 'react';
import styles from './index.less';
import { Select } from 'antd';

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

export default () => (
  <div className={styles.container}>
    <div id="components-select-demo-basic">
      <>
        <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
          <Option value="jack">BLIP</Option>
          <Option value="lucy">BLIP2</Option>
          <Option value="Yiminghe">Qwen</Option>
          <Option value="disabled" disabled>
            文心一言
          </Option>
        </Select>

        <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
          <Option value="jack">BLIP</Option>
          <Option value="lucy">BLIP2</Option>
          <Option value="Yiminghe">Qwen</Option>
          <Option value="disabled" disabled>
            文心一言
          </Option>
        </Select>

        <Select defaultValue="jack" style={{ width: 120 }} onChange={handleChange}>
          <Option value="jack">COCO</Option>
          <Option value="lucy">LIOAN</Option>
          <Option value="Yiminghe">MIT3</Option>
          <Option value="disabled" disabled>
            文心一言
          </Option>
        </Select>

        {/*<Select defaultValue="lucy" style={{ width: 120 }} disabled>
          <Option value="lucy">Lucy</Option>
        </Select>
        <Select defaultValue="lucy" style={{ width: 120 }} loading>
          <Option value="lucy">Lucy</Option>
        </Select>
        <Select defaultValue="lucy" style={{ width: 120 }} allowClear>
          <Option value="lucy">Lucy</Option>
</Select>*/}
      </>
    </div>
  </div>
);
