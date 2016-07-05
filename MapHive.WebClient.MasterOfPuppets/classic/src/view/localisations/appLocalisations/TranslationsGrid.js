//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('MasterOfPuppets.view.localisations.appLocalisations.TranslationsGrid', {
        extend: 'mh.module.data.BindableStoreGrid',
    
        xtype: 'mofp-translationsgrid',

    requires: [
        'Ext.button.Button',
        'Ext.form.field.ComboBox',
        'Ext.form.field.TextArea',
        'Ext.grid.column.Action',
        'Ext.grid.plugin.CellEditing',
        'Ext.toolbar.Toolbar',
        'MasterOfPuppets.view.localisations.appLocalisations.TranslationsGridController',
        'MasterOfPuppets.view.localisations.appLocalisations.TranslationsGridModel'
    ],

    plugins: {
            ptype: 'cellediting',
            clicksToEdit: 2
        },

        controller: 'mofp-translationsgrid',

        viewModel: {
            type: 'mofp-translationsgrid'
        },

        iconCls: 'x-fa fa-comments-o',
        flex: 1,
        minHeight: 250,
        minWidth: 400,
        //Note: width is required here even though the min width is used, as the container window auto adjusts itself to the content. without it grid will fail to do layout after record add. min width will get overriden when nesting in a parent that controls the width itself
        width: 100,
        bind: {
            title: '{localisation.translations}',
            gridData: {
                bindTo: '{rec}'
                //,deep: true
            }
        },
        columns: [
            {
                bind: {text: '{localisation.langCode}'},
                dataIndex: 'langCode',
                width: 100,
                editor: {
                    xtype: 'combobox',
                    editable: false,
                    valueField: 'langCode',
                    displayField: 'langCode',
                    triggerAction: 'all',
                    bind: {
                        store: '{langsstore}'
                    }
                }
            },
            {
                bind: {text: '{localisation.translation}'},
                dataIndex: 'translation',
                flex: 1,
                editor: {
                    completeOnEnter: true,
                    field: {
                        xtype: 'textarea',
                        allowBlank: false
                    }
                }
            },
            {
                xtype: 'actioncolumn',
                reference: 'translationsgrid_coldelete',
                handler: 'onTranslationDeleteClick',
                width: 30,
                iconCls: 'x-fa fa-remove',
                menuDisabled: true,
                hidden: true,
                tooltipTranslationKey: 'translationDeleteTooltip' //see the controller for the tip handler setup!
            }
        ],
        dockedItems: [
            {
                xtype: 'toolbar',
                reference: 'translationsgrid_tbar',
                hidden: true,
                dock: 'top',
                items: [
                    {
                        xtype: 'button',
                        iconCls: 'x-fa fa-plus',
                        listeners: {
                            click: 'onBtnAddTranslationClick'
                        }
                    }
                ]
            }
        ]
    });

}());