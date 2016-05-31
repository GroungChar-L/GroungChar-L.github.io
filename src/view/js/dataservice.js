/**
 * Created by Administrator on 2016/5/26.
 */


define(["app"], function (app) {
    return app.service("dataservice", function () {

        this.getbasedatas = function () {
            return this.basedatas;
        }
        this.getworkinfo = function () {
            return this.workinfo;
        }
        this.getmyself = function () {
            return this.myself;
        }
        this.basedatas = {
            face: true,
            work: false,
            jibenxinxi: false,
            technology: false,
            selfevaluation: false,
            name: "张广超",
            age: 26,
            sex: "男",
            english: "精通",
            address: "北京",
            health: "健康",
            married: "未婚",
            intention: "java程序员",
            workyear: "1年",
            education: "本科",
            major: "自动化",
            home: "辽宁朝阳",
            tel: "13654008330",
            email: "13654008330@163.com",
            info: "    本人于2012年毕业于辽宁科技大学,自动化专业，从事2年自动化编程工作，" +
            "工作期间负责PLC 运行调试，维护，小型系统安装，编程，处理现场临时出现的紧急问题，负" +
            "责安全生产等工作." +
            "2015年开始从事java开发工作，先后就职于2家公司，做java程序开发，用到的技术有：" +
            "Spring Struts2 Hibernate Spring-MVC Mybatis Jquery Angular Bootstrap 等" +
            "在工作期间熟悉掌握了Angular js Boootstrap 等技术，熟悉后台java开发 Spring等技术" +
            "希望在北京找一份稳定的编程工作，有一个更好的平台，可以接触到更新的技术，对自己的能力" +
            "有一个质的提升。期望薪资8K-10K."
        };
        this.workinfo = {
            technologyscore: "Spring MVC, Mybatis,Angular Js ,Bootstrap",
            toolscore: "IDEA+ tomcat7 + jdk1.8 + svn + Orical",
            responsibilityscore: "主要负责积分模块，意向合同模块编写，测试工作，完成模块所需所有功能。",
            projectscore: "积分管理：积分礼品管理模块主要包括，礼品的创建，" +
            "包括图片上传，预览，礼品修改，删除，兑换礼品等功能，" +
            "用户可以查看积分，并通过积分兑换礼品。兑换后的礼品通过兑换模块对数据库中的数据进行修改。",
            projectpreliminary: "意向合同模块：主要包括 新建意向合同，修改意向合同，" +
            "删除意向合同，审核意向合同，查看详细信息 ，添加支付信息，跟踪浏览信息，" +
            "添加买卖客户信息，修改买卖客户信息，删除买卖客户信息，合同分佣添加，修改，删除，转移，" +
            "信息跟踪，附件上传，下载，买方贷款信息，买卖双方应收应付款项信息等功能，" +
            "通过Angular 路由方法进行页面跳转，利用Bootstrap 进行页面布局。" +
            " 在项目中负责前端页面编写，后台编写，数据库创建表等工作，" +
            "独立完成模块并按照项目需求进行修改，测试。",

            technologylogical: "Spring MVC, Mybatis,Angular Js ,Bootstrap 等",
            toollogical: "MyEclipse + tomcat7 + jdk1.7 + svn + mysql",
            responsibilitylogocal: "主要负责 地勘员工信息录入功能，负责记录员工基础信息，具有增删改查等功能",
            projectlogical: "该项目的目的为了给保险公司展现勘察农作物受灾情况的基本信息，保险公司可以通过该软件进行受灾情况的查询。" +
            "我主要负责开发险情 录入员工信息的录入情况，用到的框架为SSH框架前端为Bootstrap框架." +
            "实现功能：员工信息的增 删 改 查。信息上传，下载等功能",
            technologylogicalinfo: "熟练使用Eclipse、MyEclipse、IDEA等开发工具。" +
            "熟练使用struts1、struts2、spring、hibernate、springMVC、Angular 、Bootstrap、Mybatis等框架及其整合技术。：" +
            "熟练使用MySQL、Oracle10g、SQLServel等数据库。"

        }
        this.myself = {
            self: "熟练掌握java编程语言编程技巧，代码规范，了解Spring等编程框架，并熟练运用Eclipse等" +
            "软件进行相关工作。了解Oracle，MySql等数据库相关操作。" +
            " 我有较强的科学研究和动手能力，2年的自动化PLC编程，调试工作经验，1年的java开发工作经验，自始至终都很爱好编程。" +
            "曾经从事的工作，让我懂得了团队合作的重要性，以及培养了自己与人沟通的能力。"
        }
    })
})

