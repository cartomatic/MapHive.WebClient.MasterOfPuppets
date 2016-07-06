//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('MasterOfPuppets.view.localisations.langs.Langs', {
        extend: 'mh.module.data.DataViewBase',

    requires: [
        'Ext.grid.Panel',
        'Ext.grid.filters.Filters',
        'MasterOfPuppets.view.localisations.langs.LangsController',
        'MasterOfPuppets.view.localisations.langs.LangsModel',
        'MasterOfPuppets.view.localisations.langs.DataEditForm',
        'MasterOfPuppets.view.localisations.langs.DataViewForm'
    ],

    xtype: 'mofp-langs',

        viewModel: {
            type: 'mofp-langs'
        },
    
        controller: 'mofp-langs',

        margin: 0,

        hideGridHeader: true,

        grid: {
            xtype: 'grid',
            border: false,
            plugins: 'gridfilters',
            bind: {store: '{gridstore}'},
            columns: [
                {
                    bind: {text: '{localisation.langCode}'},
                    dataIndex: 'langCode',
                    flex: 1,
                    filter: {
                        type: 'string'
                    }
                },
                {
                    bind: {text: '{localisation.name}'},
                    dataIndex: 'name',
                    flex: 1,
                    filter: {
                        type: 'string'
                    }
                },
                {
                    bind: {text: '{localisation.description}'},
                    dataIndex: 'description',
                    flex: 1,
                    filter: {
                        type: 'string'
                    }
                },
                {
                    bind: {text: '{localisation.isDefault}'},
                    dataIndex: 'isDefault',
                    flex: 1,
                    filter: {
                        type: 'boolean'
                    }
                }
            ]
        },
        gridIconCls: 'x-fa fa-user',
        form: 'MasterOfPuppets.view.localisations.langs.DataViewForm',
        //formWidth: 300,
        editForm: 'MasterOfPuppets.view.localisations.langs.DataEditForm'
    });

}());