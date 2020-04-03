import Vue from "vue";
import {
  Button,
  Form,
  FormItem,
  Input,
  Select,
  Option,
  Col,
  TimePicker,
  DatePicker,
  Switch,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  MessageBox
} from "element-ui";

Vue.use(Button)
  .use(Form)
  .use(Input)
  .use(Select)
  .use(Option)
  .use(Col)
  .use(TimePicker)
  .use(DatePicker)
  .use(Switch)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(Radio)
  .use(RadioGroup)
  .use(FormItem);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
