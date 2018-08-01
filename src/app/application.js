define(function(require, exports,module) {
    'use strict';
    var $ = require("jquery");
    var task = require("task"); 
    function applicationAdd(){
        task.add();
    }
    function applicationClear(){
        task.clear();
    }
    function applicationSave(){
        task.save();
    }
    function applicationCancel(){
        task.cancel();
    }
    function applicationRemove(clickEvent){
        task.remove(clickEvent);
    }
    function applicationRender(){
        task.render();
    }

    function _registerEventHandlers(){
        $("#new-task").on("click", applicationAdd);
        $("#delete-all").on("click", applicationClear);
        $("#save").on("click", applicationSave);
        $("#cancel").on("click", applicationCancel);
        $("#task-list").on("click", ".delete-each", applicationRemove);
    };
    exports.init = function(){
            _registerEventHandlers();
            applicationRender();
        }
    
});