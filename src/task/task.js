define([
    'jquery',
    'taskData',
    'taskRenderer'
], function($, taskData, taskRenderer) {
    'use strict';
        function render(){
             taskRenderer.renderTask(taskData.load());
        }
        function add (){
            taskRenderer.renderNew();
        }
        function clear(){
            taskData.clear();
            render();
        }
        function remove(clickEvent){
            var taskElement = clickEvent.target;
            $(taskElement).closest(".task").remove();
        }
        function showLog(task){
            console.log('LOG:' + task.find(".description").val() + ' ' + 'at' + ' ' + Date());

        }
        function save (){
            var tasks = [] ;
            // console.log("Dash");
            $("#task-list .task").each(function( index , task ){
                var $task =  $(task);
                tasks.push({
                    complete: $task.find(".complete").prop("checked"),
                    description: $task.find(".description").val()
                });
                showLog($task);
            });
            taskData.save(tasks);
        }
        function cancel(){
            render();
        }
    /* public */

    return {
        add : add,
        clear : clear,
        save : save,
        remove : remove,
        cancel : cancel,
        render : render
    };
});