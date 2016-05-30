/**
 * Created by GroungChar.Z on 2016/5/26.
 */




define(['app'], function (app) {
    return app.controller("infoController", ["$scope", "dataservice", function ($scope, dataservice) {
        console.log("###")
        $scope.baseinfo = dataservice.getbasedatas();
        $scope.workinfo = dataservice.getworkinfo();
        $scope.myself = dataservice.getmyself();

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
        $scope.technologyview = function(){
            $scope.baseinfo.jibenxinxi = false;
            $scope.baseinfo.face = false;
            $scope.baseinfo.work = false;
            $scope.baseinfo.technology = true;
            $scope.baseinfo.selfevaluation = false;
        }
        $scope.selfeval = function(){
            $scope.baseinfo.jibenxinxi = false;
            $scope.baseinfo.face = false;
            $scope.baseinfo.work = false;
            $scope.baseinfo.technology = false;
            $scope.baseinfo.selfevaluation = true;
        }

        $scope.showbiye = function () {
            $('#saveModal').modal('show');
        }
        console.log("Enter the info");
    }])
})


