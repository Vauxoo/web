/* eslint no-undef: 0*/
odoo.define("web.web_widget_json_graph", function(require) {
    "use strict";

    var ajax = require("web.ajax");
    var AbstractField = require("web.AbstractField");
    var field_registry = require("web.field_registry");

    var JSONGraphWidget = AbstractField.extend({
        jsLibs: ["/web/static/lib/Chart/Chart.js"],
        willStart: function() {
            this._super();
            return ajax.loadLibs(this);
        },
        start: function() {
            var info = JSON.parse(this.value);
            var cx = document.createElement("canvas");
            this.el.appendChild(cx);
            var chart = new Chart(cx, info);
            return chart;
        },
        _destroy: function() {
            return this._super();
        },
    });
    field_registry.add("json_graph", JSONGraphWidget);
});
