// 載入 component
import Title from './Title.vue'

export default {
  title: 'Component/Title',  // 在側邊欄顯示的層級及名稱
  component: Title,  // story 中需要使用的 component
  argTypes: { // 定義參數的行為, 資料型態
    borderColor: { control: 'color' },
    level: { control: { type: 'select', options: ['primary', 'secondary'] } }
  },
  parameters: { // 用於定義 story addon 的靜態資料, 這邊定義的是背景切換時的選項
    backgrounds: {
      values: [
        { name: 'component-pink', value: 'Pink' },
        { name: 'component-green', value: 'DarkGreen' },
      ],
    },
  }
};

// 定義 story 模板
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Title },
  template: '<Title v-bind="$props" />'
})

// 創建 story, 帶入預設參數 
export const PageTitle = Template.bind({})
PageTitle.args = {
  title: 'Page title here',
}

export const BlockTitle = Template.bind({})
// 創建一個裝飾性的區塊包裹 story, 可使用 html 也可以帶入 component 及參數 
BlockTitle.decorators = [() => ({ template: '<div style="margin: 3rem;"><story /></div>' })]

BlockTitle.args = {
  title: 'Block title here',
  level: 'secondary'
}

