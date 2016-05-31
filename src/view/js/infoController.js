/**
 * Created by GroungChar.Z on 2016/5/26.
 */




define(['app'], function (app) {
    return app.controller("infoController", ["$scope", "dataservice", function ($scope, dataservice) {
        console.log("Enter the info");
        /**
         *      表盘时间
         */
        dataservice.gettimes();
        /**
         *     基础信息
         */
        $scope.baseinfo = dataservice.getbasedatas();
        /**
         * 工作信息
         */
        $scope.workinfo = dataservice.getworkinfo();
        /**
         * 自我介绍
         */
        $scope.myself = dataservice.getmyself();
        /**
         * 页面控制
         */
        $scope.main = function () {
            $scope.baseinfo.jibenxinxi = false;
            $scope.baseinfo.face = true;
            $scope.baseinfo.work = false;
            $scope.baseinfo.technology = false;
            $scope.baseinfo.selfevaluation = false;
        }
        $scope.jiben = function () {
            $scope.baseinfo.jibenxinxi = true;
            $scope.baseinfo.face = false;
            $scope.baseinfo.work = false;
            $scope.baseinfo.technology = false;
            $scope.baseinfo.selfevaluation = false;
        }
        $scope.workjob = function () {
            $scope.baseinfo.jibenxinxi = false;
            $scope.baseinfo.face = false;
            $scope.baseinfo.work = true;
            $scope.baseinfo.technology = false;
            $scope.baseinfo.selfevaluation = false;
        }
        $scope.technologyview = function () {
            $scope.baseinfo.jibenxinxi = false;
            $scope.baseinfo.face = false;
            $scope.baseinfo.work = false;
            $scope.baseinfo.technology = true;
            $scope.baseinfo.selfevaluation = false;
        }
        $scope.selfeval = function () {
            $scope.baseinfo.jibenxinxi = false;
            $scope.baseinfo.face = false;
            $scope.baseinfo.work = false;
            $scope.baseinfo.technology = false;
            $scope.baseinfo.selfevaluation = true;
        }
        /**
         * modal
         */
        $scope.showbiye = function () {
            $('#saveModal').modal('show');
        }

    }])
})


