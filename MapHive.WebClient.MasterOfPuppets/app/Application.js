(function(){
    //Make sure strict mode is on
    'use strict';
    
    /**
     * Just a customised generic app entry point
     */
    Ext.define('MasterOfPuppets.Application', {
        extend: 'mh.Application',

        requires: [
            'MasterOfPuppets.AppLauncher'
        ],

        defaultToken : 'dashboard',

        //global shared controllers - they fire up automatically
        controllers: [
            //use the default root
            'mh.controller.Root',

            //use the customised Root
            'MasterOfPuppets.controller.Auth'
        ],
        
        //here goes a custom app launcher class. If not overridden, it will default to mh.AppLauncher
        appLauncher: 'MasterOfPuppets.AppLauncher',

        onLaunchApp: function(){

            Ext.ariaWarn = Ext.emptyFn;

            //first make sure the base does what's required!

            //note: need to drilldown 2 levels, as in fact, this will be an instance of the app defined and launched in the app.js! this is needed, as the core functionality is borrowed from the generic mh.Application
            this.superclass.superclass.onLaunchApp.call(this);

            //start the external route watcher - this will watch changes advised by a parent, and pass own changes to a parent
            this.fireGlobal('root:watchexternalroutes', {host: true});


            //finally force reroute to the specified route so the router kicks in and handles nav properly
            //make sure though to postpone this a bit, so all the other stuff that can still be potentially configuring has some time to finish
            Ext.defer(
                function(){
                    this.redirectTo(window.location.hash.replace('#', ''), true);
                },
                250,
                this
            );
        }

    });
}());