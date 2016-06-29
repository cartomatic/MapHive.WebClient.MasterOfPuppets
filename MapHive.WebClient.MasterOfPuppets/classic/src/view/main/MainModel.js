//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('MasterOfPuppets.view.main.MainModel', {
        extend: 'Ext.app.ViewModel',
        alias: 'viewmodel.viewport',

    requires: [
        'Ext.data.TreeStore',
        'MasterOfPuppets.model.NavigationTree'
    ],

        stores: {
            //An empty store initially so the tree list configures itself properly; data loaded later dynamically
            treeMenu: {
                type: 'tree',
                model: 'MasterOfPuppets.model.NavigationTree',
                root: {
                    expanded: true,
                    children: [
                    ]
                }
            }
        }
    });

}());