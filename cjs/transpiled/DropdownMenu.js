"use strict";
/** @jsx React.DOM */

var React = require("./react-es6")["default"];
var classSet = require("./react-es6/lib/cx")["default"];

var DropdownMenu = React.createClass({displayName: 'DropdownMenu',
  propTypes: {
    right: React.PropTypes.bool
  },

  render: function () {
    var classes = {
        'dropdown-menu': true,
        'dropdown-menu-right': this.props.right
      };

    return this.transferPropsTo(
      React.DOM.ul(
        {className:classSet(classes),
        role:"menu"}, 
        this.props.children
      )
    );
  }
});

exports["default"] = DropdownMenu;