//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('MasterOfPuppets.view.dashboard.DashboardModel', {
        extend: 'Ext.app.ViewModel',
        alias: 'viewmodel.mofp-dashboard',
    
        stores: {
            /*
            A declaration of Ext.data.Store configurations that are first processed as binds to produce an effective
            store configuration. For example:
    
            users: {
                model: 'Dashboard',
                autoLoad: true
            }
            */
        },
    
        data: {
            /* This object holds the arbitrary data that populates the ViewModel and is then available for binding. */
        }
    });

}());