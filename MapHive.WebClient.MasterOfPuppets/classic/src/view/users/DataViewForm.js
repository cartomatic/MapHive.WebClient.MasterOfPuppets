//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('MasterOfPuppets.view.users.DataViewForm', {
        extend: 'Ext.container.Container',
    
        xtype: 'mofp-users-data-view-form',

    requires: [
        'Ext.form.field.Checkbox',
        'Ext.form.field.Text',
        'Ext.layout.container.Form',
        'Ext.layout.container.VBox',
        'mh.mixin.ApiMap',
        'mh.module.data.LinksGrid'
    ],

    layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [
            {
                layout: 'form',
                border: false,
                items: [
                    {
                        xtype: 'textfield',
                        reference: 'email',
                        bind: {
                            fieldLabel: '{localisation.email}',
                            value: '{rec.email}'
                        },
                        readOnly: true
                    },
                    {
                        xtype: 'checkbox',
                        reference: 'isAccountClosed',
                        bind: {
                            fieldLabel: '{localisation.isAccountClosed}',
                            value: '{rec.isAccountClosed}'
                        },
                        readOnly: true
                    },
                    {
                        xtype: 'checkbox',
                        reference: 'isAccountVerified',
                        bind: {
                            fieldLabel: '{localisation.isAccountVerified}',
                            value: '{rec.isAccountVerified}'
                        },
                        readOnly: true
                    }
                ]
            }
        ]
    });

}());