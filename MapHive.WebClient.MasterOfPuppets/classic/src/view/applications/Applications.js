//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('MasterOfPuppets.view.applications.Applications', {

        extend: 'mh.module.dataView.DataViewBase',

    requires: [
        'Ext.grid.Panel',
        'Ext.grid.column.Action',
        'Ext.grid.filters.Filters',
        'MasterOfPuppets.view.applications.ApplicationsController',
        'MasterOfPuppets.view.applications.ApplicationsModel',
        'MasterOfPuppets.view.applications.DataEditForm',
        'MasterOfPuppets.view.applications.DataViewForm'
    ],

    xtype: 'mofp-applications',

        viewModel: {
            type: 'mofp-applications'
        },

        controller: 'mofp-applications',

        //Some custom ui cfg
        'btnCreate|setUI': 'green-button',
        'btnEdit|setUI': 'blue-button',
        'btnDelete|setUI': 'red-button',

        'gridHolder|setUI': 'green-panel',

        grid: {
            xtype: 'grid',
            plugins: 'gridfilters',
            bind: {store: '{gridstore}'},
            ui: 'green-panel',
            border: false,
            columns: [
                {
                    bind: {text: '{localisation.name}'},
                    dataIndex: 'name',
                    width: 175,
                    filter: {
                        // required configs
                        type: 'date',
                        dateFormat: 'C'
                    }
                },
                {
                    bind: {text: '{localisation.shortName}'},
                    dataIndex: 'shortName',
                    width: 100,
                    filter: {
                        // required configs
                        type: 'string'
                    }
                },
                {
                    bind: {text: '{localisation.description}'},
                    dataIndex: 'description',
                    flex: 2
                    //filter: {
                    //    // required configs
                    //    type: 'number',
                    //    itemDefaults: {
                    //        // any Ext.form.field.Text configs accepted
                    //    }
                    //}
                },
                {
                    bind: {text: '{localisation.url}'},
                    dataIndex: 'url',
                    flex: 1
                },
                {
                    text: 'splash',
                    dataIndex: 'useSplashscreen',
                    flex: 1,
                    filter: {
                        // required configs
                        type: 'boolean'
                    },
                    hidden: true
                },
                {
                    xtype: 'actioncolumn',
                    handler: 'onAppNavigateToClick',
                    width: 30,
                    iconCls: 'x-fa fa-link',
                    menuDisabled: true,
                    
                    //Note: tips for active columns are a bit tricky, as they require a function here. Therefore in order to ensure view instance encapsulation, customisation is done in the controller; there are two ways of customising a tooltip - via a translation key - this will always apply the same tip to each row, or via specifying a function name, that if present on a controller, will be used as a customised getTip fn; for more details see mh.mixin.GridUtils.activateActiveColsTooltips
                    //getTip: 'getTipAppNavigateTo' //it would be lovely if it worked out of the box, huh?
       //             //
                    //this uses a translation key to obtain a tooltip via getTranslation(translationKey)
                    //tooltipTranslationKey: 'appNavigateToTooltip',
                    //
                    //and this provides a customised fn so each tooltip cna be customised on per row basis.
                    customGetTip: 'getTipAppNavigateTo'
                }
            ]
        },
        gridIconCls: 'x-fa fa-desktop',
        form: 'MasterOfPuppets.view.applications.DataViewForm',
        //formWidth: 350,
        editForm: 'MasterOfPuppets.view.applications.DataEditForm'
    });

}());