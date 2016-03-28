c3_chart_fn.groups = function (groups) {
    var $$ = this.internal, config = $$.config;
    if (isDefined(groups) && !arrayEquals(config.data_groups, groups)) {
        config.data_groups = groups;
        $$.redraw();
    }
    return config.data_groups;
};
