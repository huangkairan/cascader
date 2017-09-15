webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	var _rcCascader = __webpack_require__(3);
	
	var _rcCascader2 = _interopRequireDefault(_rcCascader);
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(83);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /* eslint-disable no-console, react/prop-types */
	
	
	var addressOptions = [{
	  label: '福建',
	  value: 'fj',
	  children: [{
	    label: '福州',
	    value: 'fuzhou',
	    children: [{
	      label: '马尾',
	      value: 'mawei'
	    }]
	  }, {
	    label: '泉州',
	    value: 'quanzhou'
	  }]
	}, {
	  label: '浙江',
	  value: 'zj',
	  children: [{
	    label: '杭州',
	    value: 'hangzhou',
	    children: [{
	      label: '余杭',
	      value: 'yuhang'
	    }]
	  }]
	}, {
	  label: '北京',
	  value: 'bj',
	  children: [{
	    label: '朝阳区',
	    value: 'chaoyang'
	  }, {
	    label: '海淀区',
	    value: 'haidian',
	    disabled: true
	  }]
	}];
	
	var MyCascader = function (_React$Component) {
	  _inherits(MyCascader, _React$Component);
	
	  function MyCascader() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, MyCascader);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      inputValue: ''
	    }, _this.onChange = function (value, selectedOptions) {
	      console.log(value, selectedOptions);
	      _this.setState({
	        inputValue: selectedOptions.map(function (o) {
	          return o.label;
	        }).join(', ')
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  MyCascader.prototype.render = function render() {
	    var builtinPlacements = this.props.builtinPlacements;
	
	    return _react2.default.createElement(
	      _rcCascader2.default,
	      {
	        options: addressOptions,
	        builtinPlacements: builtinPlacements,
	        onChange: this.onChange
	      },
	      _react2.default.createElement('input', {
	        placeholder: builtinPlacements ? 'Will not adjust position' : 'Will adjust position',
	        value: this.state.inputValue,
	        style: { width: 170 }
	      })
	    );
	  };
	
	  return MyCascader;
	}(_react2.default.Component);
	
	var placements = {
	  bottomLeft: {
	    points: ['tl', 'bl'],
	    offset: [0, 4],
	    overflow: {
	      adjustY: 1
	    }
	  },
	  topLeft: {
	    points: ['bl', 'tl'],
	    offset: [0, -4],
	    overflow: {
	      adjustY: 1
	    }
	  },
	  bottomRight: {
	    points: ['tr', 'br'],
	    offset: [0, 4],
	    overflow: {
	      adjustY: 1
	    }
	  },
	  topRight: {
	    points: ['br', 'tr'],
	    offset: [0, -4],
	    overflow: {
	      adjustY: 1
	    }
	  }
	};
	
	_reactDom2.default.render(_react2.default.createElement(
	  'div',
	  { style: { position: 'absolute', right: 10, top: 150 } },
	  _react2.default.createElement(MyCascader, null),
	  _react2.default.createElement('br', null),
	  _react2.default.createElement('br', null),
	  _react2.default.createElement(MyCascader, { builtinPlacements: placements })
	), document.getElementById('__react-content'));

/***/ })
]);
//# sourceMappingURL=adjust-overflow.js.map