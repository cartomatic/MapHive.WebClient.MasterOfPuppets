//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    /**
     * This is a simplistic example of a hosted app CLASSIC view. it simply sets up some
     */
    Ext.define('MasterOfPuppets.view.main.MainController', {
        extend: 'mh.module.sideNav.SideNavController',
        alias: 'controller.viewport',

        mixins: [
            'mh.mixin.CallMeParent',
            'mh.mixin.Localisation'
        ],

    requires: [
        'Ext.panel.Panel',
        'Ext.util.History',
        'MasterOfPuppets.view.main.MainLocalisation',
        'mh.module.dataView.applications.Applications',
        'MasterOfPuppets.view.dashboard.Dashboard',
        'mh.module.dataView.localisations.Localisations',
        'MasterOfPuppets.view.main.MainLocalisation',
        'MasterOfPuppets.view.users.Users'
    ],

        init: function(){
            this.callMeParent('init', arguments);
        },

        /**
         * Prepares the menu data for the navigation tree list
         * @returns {*[]}
         */
        prepareMenuData: function(){
            //Note: this can be data driven and based on the serverside roles / permissions configuration
            return [
                {
                    text: this.getTranslation('dashboard'),
                    iconCls: 'x-i54 i54-analitics i54-2x',
                    view: 'MasterOfPuppets.view.dashboard.Dashboard',
                    viewReference: 'dashboard',
                    routes: [
                        'dashboard'
                    ],
                    leaf: true
                },
                {
                    text: this.getTranslation('users'),
                    iconCls: 'x-i54 i54-group-2 i54-2x',
                    view: 'MasterOfPuppets.view.users.Users',
                    viewReference: 'users',
                    routes: ['users'],
                    leaf: true
                },
                {
                    text: this.getTranslation('applications'),
                    iconCls: 'x-i54c i54c-computer-network2  i54c-2x',
                    view: 'mh.module.dataView.applications.Applications',
                    viewReference: 'applications',
                    routes: ['applications'],
                    leaf: true
                },
                {
                    text: this.getTranslation('localisations'),
                    iconCls: 'x-i54 i54-speach-bubbles-1 i54-2x',
                    view: 'mh.module.dataView.localisations.Localisations',
                    viewReference: 'localisations',
                    routes: [
                        'localisations',
                        'localisations/:subView'
                    ],
                    leaf: true
                }
            ];
        }
    });

}());