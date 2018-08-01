
/* Main will call all modules as needed to deploy the app */
require.config({
    /* */
    baseUrl : 'src',
    /* paths : requirements */
    paths :{
        /*
            the left side is the module ID,
            the right side is the path to
            the jQuery file, relative to baseUrl.
            Also, the path should NOT include the '.js' file extension.
        */
        "jquery" : "lib/jquery",
       // text : "lib/text",
        "template" : 'template',
        "taskData" : "taskData/taskData",
        "taskRenderer" : "taskRenderer/taskRenderer",
        'task' : "task/task"
    }
});
/* Call App */
require(['app/application'],function(application){
    application.init();
});