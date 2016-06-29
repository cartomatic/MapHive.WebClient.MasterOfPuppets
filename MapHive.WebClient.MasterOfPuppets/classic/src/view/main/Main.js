//Disable some of the JSLint warnings
/*global Ext,console,MapHive,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

    /**
     * App's viewport
     */
    Ext.define('MasterOfPuppets.view.main.Main', {
        extend: 'Ext.panel.Panel',

    requires: [
        'Ext.container.Container',
        'Ext.layout.container.Card',
        'Ext.layout.container.HBox',
        'Ext.list.Tree',
        'Ext.panel.Panel',
        'Ext.plugin.Viewport',
        'MasterOfPuppets.view.main.MainModel',
        'MasterOfPuppets.view.main.MainController'
    ],

    plugins: 'viewport',

        controller: 'viewport',

        viewModel: {
            type: 'viewport'
        },

        border: false,

        layout: {
            type: 'hbox',
            align: 'stretch',

            // Tell the layout to animate the x/width of the child items.
            animate: true,
            animatePolicy: {
                x: true,
                width: true
            }
        },

        items: [
            {
                xtype: 'treelist',
                reference: 'navTreeList',
                ui: 'navigation',
                width: 250,
                expanderFirst: false,
                expanderOnly: false,
                listeners: {
                    selectionchange: 'onTreeListSelectionChange'
                },
                bind: {
                    store: '{treeMenu}'
                }
            },
            {
                xtype: 'container',
                reference: 'cardHolder',
                layout: 'card',
                flex: 1
            }
        ]
    });

}());