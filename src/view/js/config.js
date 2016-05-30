/**
 * Created by Administrator on 2016/5/30.
 */

require.config({
    baseUrl:"../js",
    paths: {
        "angular": "angular.min",
        "angular-ui-router": ["angular-ui-router.min"],
        "jquery": ["jquery.min"],
        "bootstrap": ["bootstrap.min"],
        "app": ["app"]
    },
    shim: {
        "angular-ui-router": {deps: ["angular"]},
        "bootstrap":["jquery"]
    }

});
require([
    'angular-ui-router',
    'bootstrap',
    'jquery',
    "../view/js/infoController",
    "../view/js/dataservice"
], function () {
    angular.bootstrap(document, ["resumeApp"]);
})
