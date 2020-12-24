import { addDecorator } from '@storybook/vue';
import { withTests } from '@storybook/addon-jest';
import results from '../.jest-test-results.json';
import { themes } from '@storybook/theming';

// 引入全域使用的 css
import '../src/scss/utils/_normalize.scss'
import '../src/scss/layout/_layout.scss'

// 教學用的 css
import '../src/scss/utils/_tutorial.scss'

export const parameters = {
  // 設定 Parameter action 的排列方式
  actions: { argTypesRegex: "^on[A-Z].*" },
  // 設定 Docs 視覺主題
  docs: {
    theme: themes.dark,
  },
}

// 加入 decorator 對測試的支援
addDecorator(
  withTests({
    results,
  })
);