//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('MasterOfPuppets.view.dashboard.Dashboard', {
        extend: 'Ext.panel.Panel',

        requires: [
            'MasterOfPuppets.view.dashboard.DashboardController',
            'MasterOfPuppets.view.dashboard.DashboardModel'
        ],

        xtype: 'mofp-dashboard',

        viewModel: {
            type: 'mofp-dashboard'
        },
    
        controller: 'mofp-dashboard',

        iconCls: 'x-fa fa-dashboard',

        items: [
        ]
    });

}());