/**
 * Created by Administrator on 2016/5/30.
 */

require.config({
    paths: {
        "angular":["angular.min"],
        "angular-ui-router":["angular-ui-router.min"],
        "juqery":["jquery.min"],
        "bootstraop":["bootstrap.min"],
        "app":["app"]
    },
    shim:{
        "angular":{deps:["juqery"]},
        "angular-ui-router":{deps:[angular]}
    }

})
require(["app", "angular", "angular-ui-router", "jquery", "bootstrap", "infoController"], function () {
    angular.bootstrap(document, "resumeApp");
})