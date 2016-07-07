(function(){
    //Make sure strict mode is on
    'use strict';
    
    /**
     * Created by info_000 on 04-Jul-16.
     */
    Ext.define('MasterOfPuppets.view.localisations.Localisations', {
        extend: 'Ext.tab.Panel',

        xtype: 'mofp-localisations',

    requires: [
        'Ext.layout.container.Fit',
        'MasterOfPuppets.view.localisations.LocalisationsController',
        'MasterOfPuppets.view.localisations.LocalisationsModel',
        'MasterOfPuppets.view.localisations.appLocalisations.AppLocalisations',
        'MasterOfPuppets.view.localisations.emailTemplates.EmailTemplates',
        'MasterOfPuppets.view.localisations.langs.Langs'
    ],

    viewModel: {
            type: 'mofp-localisations'
        },

        controller: 'mofp-localisations',

        bind: {
            title: '{localisation.title}'
        },

        iconCls: 'x-fa fa-comments',

        tabPosition: 'bottom',

        items: [
            {
                reference: 'langs',
                bind: {
                    title: '{localisation.langs}'
                },
                iconCls: 'x-fa fa-comments-o',
                layout: 'fit',
                items: [
                    {
                        xtype: 'mofp-langs'
                    }
                ]
            },
            {
                reference: 'applocalisations',
                bind: {
                    title: '{localisation.appLocalisations}'
                },
                iconCls: 'x-fa fa-desktop',
                layout: 'fit',
                items: [
                    {
                        xtype: 'mofp-app-localisations'
                    }
                ]
            },
            {
                reference: 'emailtemplates',
                bind: {
                    title: '{localisation.emailTemplates}'
                },
                iconCls: 'x-fa fa-envelope',
                layout: 'fit',
                items: [
                    {
                        xtype: 'mofp-email-templates'
                    }
                ]
            }
        ]
    });
}());