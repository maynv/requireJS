define (['jquery', 'lib/text!template/taskTemplate.html' ],function($, taskTemplate){
    /* private */
        function renderTasks(tasks){
            var elementArray = $.map(tasks, _renderTask);
            $("#task-list")
                .empty()
                .append(elementArray);
        }
        function renderNew(){
            var $taskList = $("#task-list") ;
            $taskList.prepend(_renderTask({}));
        }
        function _renderTask(task){
            var $task =$(taskTemplate);
            if(task.complete){
                $task.find(".complete").attr("checked","checked");
            }
            $task.find(".description").val(task.description);
            return $task;
        }
    /* public */
  
    return {
        renderTask : renderTasks,
        renderNew : renderNew
    };
});