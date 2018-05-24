var _jsxFileName="__tests__/basic/Checkbox.android.js";require("react-native");
var _react=require("react");var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require("react-test-renderer");var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
var _Content=require("./../../src/basic/Content");
var _ListItem=require("./../../src/basic/ListItem");
var _CheckBox=require("./../../src/basic/CheckBox");
var _Body=require("./../../src/basic/Body");
var _Text=require("./../../src/basic/Text");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}



jest.mock("Platform",function(){
var Platform=require.requireActual("Platform");
Platform.OS="android";
return Platform;
});

it("renders checkbox",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Content.Content,{__source:{fileName:_jsxFileName,lineNumber:21}},
_react2.default.createElement(_ListItem.ListItem,{button:true,__source:{fileName:_jsxFileName,lineNumber:22}},
_react2.default.createElement(_CheckBox.CheckBox,{checked:true,__source:{fileName:_jsxFileName,lineNumber:23}}),
_react2.default.createElement(_Body.Body,{__source:{fileName:_jsxFileName,lineNumber:24}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:25}},"Lunch Break"))),


_react2.default.createElement(_ListItem.ListItem,{button:true,__source:{fileName:_jsxFileName,lineNumber:28}},
_react2.default.createElement(_CheckBox.CheckBox,{color:"red",checked:false,__source:{fileName:_jsxFileName,lineNumber:29}}),
_react2.default.createElement(_Body.Body,{__source:{fileName:_jsxFileName,lineNumber:30}},
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:31}},"Daily Stand Up"))))).




toJSON();
expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Checkbox.android.js.map