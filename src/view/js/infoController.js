/**
 * Created by GroungChar.Z on 2016/5/26.
 */




define(['app'], function (app) {
    return app.controller("infoController", ["$scope", "dataservice", function ($scope, dataservice) {
        var miao = document.getElementById("miao");
        var fen = document.getElementById("fen");
        var shi = document.getElementById("shi");
        var clock = setInterval(function () {
            var nowDate = new Date();//每次读取当前时间
            var hour = nowDate.getHours();
            var minute = nowDate.getMinutes();
            var second = nowDate.getSeconds();

            var circleHour = hour % 12 * 30;
            shi.style.transform = "rotate(" + circleHour + "deg)";//读取到的时间为24小时制，转换为12小时
            fen.style.transform = "rotate(" + minute * 6 + "deg)";
            miao.style.transform = "rotate(" + second * 6 + "deg)";
        }, 1000);









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


