//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('MasterOfPuppets.view.localisations.appLocalisations.AppLocalisations', {
        extend: 'mh.module.dataView.DataViewBase',

    requires: [
        'Ext.grid.Panel',
        'Ext.grid.filters.Filters',
        'MasterOfPuppets.view.localisations.appLocalisations.DataEditForm',
        'MasterOfPuppets.view.localisations.appLocalisations.DataViewForm',
        'MasterOfPuppets.view.localisations.appLocalisations.AppLocalisationsController',
        'MasterOfPuppets.view.localisations.appLocalisations.AppLocalisationsModel'
    ],

    xtype: 'mofp-app-localisations',

        viewModel: {
            type: 'mofp-app-localisations'
        },
    
        controller: 'mofp-app-localisations',

        margin: 0,

        hideGridHeader: true,

        grid: {
            xtype: 'grid',
            border: false,
            plugins: 'gridfilters',
            bind: {store: '{gridstore}'},
            columns: [
                {
                    bind: {text: '{localisation.applicationName}'},
                    dataIndex: 'applicationName',
                    flex: 1,
                    filter: {
                        type: 'string'
                    }
                },
                {
                    bind: {text: '{localisation.className}'},
                    dataIndex: 'className',
                    flex: 1,
                    filter: {
                        type: 'string'
                    }
                },
                {
                    bind: {text: '{localisation.translationKey}'},
                    dataIndex: 'translationKey',
                    flex: 1,
                    filter: {
                        type: 'string'
                    }
                },
                {
                    bind: {text: '{localisation.translations}'},
                    dataIndex: 'translations',
                    flex: 1,
                    filter: {
                        type: 'string'
                    },
                    renderer: 'translationsRenderer'
                }
            ]
        },
        gridIconCls: 'x-fa fa-user',
        form: 'MasterOfPuppets.view.localisations.appLocalisations.DataViewForm',
        //formWidth: 300,
        editForm: 'MasterOfPuppets.view.localisations.appLocalisations.DataEditForm'
    });

}());