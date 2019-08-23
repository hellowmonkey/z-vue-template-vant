import Vue from 'vue'
import store from '../store'

import InfiniteLoading from 'vue-infinite-loading'
import {
    // 基础组件
    ActionSheet,
    Button,
    Cell,
    CellGroup,
    CountDown,
    Divider,
    SwipeCell,
    Checkbox,
    CheckboxGroup,
    Circle,
    Col,
    Collapse,
    CollapseItem,
    DatetimePicker,
    DropdownItem,
    DropdownMenu,
    Field,
    Grid,
    GridItem,
    Icon,
    Image,
    IndexAnchor,
    IndexBar,
    Info,
    List,
    Loading,
    NavBar,
    NoticeBar,
    NumberKeyboard,
    Pagination,
    Panel,
    PasswordInput,
    Picker,
    Popup,
    Progress,
    PullRefresh,
    Radio,
    RadioGroup,
    Rate,
    Row,
    Search,
    Sidebar,
    SidebarItem,
    Skeleton,
    Slider,
    Step,
    Stepper,
    Steps,
    Sticky,
    Swipe,
    SwipeItem,
    Switch,
    SwitchCell,
    Tab,
    Tabbar,
    TabbarItem,
    Tabs,
    Tag,
    TreeSelect,
    Uploader,

    // 业务组件
    // Sku,
    // SubmitBar,
    // AddressEdit,
    // AddressList,
    // Area,
    // Card,
    // ContactCard,
    // ContactEdit,
    // ContactList,
    // CouponCell,
    // CouponList,
    // GoodsAction,
    // GoodsActionButton,
    // GoodsActionIcon,

    // 插件
    Toast,
    Dialog,
    Notify,
    // Locale,
    Lazyload,
    ImagePreview
} from 'vant'

Vue.use(InfiniteLoading, { /* 配置 */ })

Vue.use(ActionSheet)
Vue.use(Button)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(CountDown)
Vue.use(Divider)
Vue.use(SwipeCell)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Circle)
Vue.use(Col)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(DatetimePicker)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Field)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Icon)
Vue.use(Image)
Vue.use(IndexAnchor)
Vue.use(IndexBar)
Vue.use(Info)
Vue.use(List)
Vue.use(Loading)
Vue.use(NavBar)
Vue.use(NoticeBar)
Vue.use(NumberKeyboard)
Vue.use(Pagination)
Vue.use(Panel)
Vue.use(PasswordInput)
Vue.use(Picker)
Vue.use(Popup)
Vue.use(Progress)
Vue.use(PullRefresh)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Rate)
Vue.use(Row)
Vue.use(Search)
Vue.use(Sidebar)
Vue.use(SidebarItem)
Vue.use(Skeleton)
Vue.use(Slider)
Vue.use(Step)
Vue.use(Stepper)
Vue.use(Steps)
Vue.use(Sticky)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Switch)
Vue.use(SwitchCell)
Vue.use(Tab)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Tabs)
Vue.use(Tag)
Vue.use(TreeSelect)
Vue.use(Uploader)

Vue.use(Lazyload)
Vue.use(Toast)
Vue.use(Dialog)
Vue.use(Notify)
Vue.use(ImagePreview)

const loading = (message = '数据加载中...') => {
    const toast = Toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true, // 禁用背景点击
        loadingType: 'spinner',
        message
    })
    return toast.clear
}
Vue.prototype.$loading = loading

store.$toast = Toast
store.$dialog = Dialog
store.$notify = Notify
