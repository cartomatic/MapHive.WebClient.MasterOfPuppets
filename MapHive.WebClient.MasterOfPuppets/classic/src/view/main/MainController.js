//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    /**
     * This is a simplistic example of a hosted app CLASSIC view. it simply sets up some
     */
    Ext.define('MasterOfPuppets.view.main.MainController', {
        extend: 'Ext.app.ViewController',
        alias: 'controller.viewport',

        mixins: [
            'mh.communication.MsgBus',
            'mh.mixin.ModalMode',
            'mh.mixin.Localisation'
        ],

    requires: [
        'Ext.app.Application',
        'Ext.data.TreeStore',
        'Ext.panel.Panel',
        'Ext.util.History',
        'MasterOfPuppets.model.NavigationTree',
        'MasterOfPuppets.view.main.MainLocalisation',

        'MasterOfPuppets.view.dashboard.Dashboard',
        'MasterOfPuppets.view.users.Users',
        'MasterOfPuppets.view.applications.Applications',
        'MasterOfPuppets.view.localisations.Localisations'
    ],

    //Note: no routing is handled here at all, all boils dow to handling unmatched routes. The idea is to use piped routes - first part identifies a main card layout view, subsequent parts drive the views appropriately. This way it should be possible to handle all the main views here in a very generalised way. There should be no problems with the piped routes at indexes larger than 0 - if they are handled anywhere in the application, #unmatchedroute will not be fired for them! Also, the idea is that this highest level controller only handles high level views, and does not give a damn about how they act internally!
        // routes: {
        // },

        /**
         * Called when the view is created
         */
        init: function () {

            this.loadMenu();

            //it is required to init the History object prior to using it
            Ext.util.History.init();

            this.listen({
                controller: {
                    '#': {
                        unmatchedroute: this.onUnmatchedRoute
                    }
                }
            });
        },

        /**
         * Loads the appropriate left hand side menu data
         */
        loadMenu: function(){
            var vm = this.getViewModel(),

                //Note: this can be data driven and based on the serverside roles / permissions configuration
                data = [
                    {
                        text: this.getTranslation('dashboard'),
                        iconCls: 'x-fa fa-dashboard',
                        view: 'MasterOfPuppets.view.dashboard.Dashboard',
                        hash: 'dashboard',
                        leaf: true
                    },
                    {
                        text: this.getTranslation('users'),
                        iconCls: 'x-fa fa-user',
                        view: 'MasterOfPuppets.view.users.Users',
                        hash: 'users',
                        leaf: true
                    },
                    {
                        text: this.getTranslation('applications'),
                        iconCls: 'x-fa fa-desktop',
                        view: 'MasterOfPuppets.view.applications.Applications',
                        hash: 'applications',
                        leaf: true
                    },
                    {
                        text: this.getTranslation('localisations'),
                        iconCls: 'x-fa fa-comments',
                        view: 'MasterOfPuppets.view.localisations.Localisations',
                        hash: 'localisations',
                        leaf: true
                    }
                ],
                treeStore = vm.get('treeMenu');

            //just rebind the root to load the data
            treeStore.setRootNode({
                children: data
            });
        },


        /**
         * unmatched route handler
         */
        onUnmatchedRoute: function (route) {

            //properly handle EDIT MODE!
            if (this.getModalModeActive()) {

                //<debug>
                console.warn('[ROUTER@Main]', 'prevented route adjustment - edit mode active!');
                //</debug>

                window.location.hash = this.getModalModeRouteSnapshot();
                return;
            }

            //Note: we're treating all the routes as unmatched by default. If we manage to find a left hand side menu item for a route though, then a route is handled appropriately, otherwise it defaults to whatever it should default to.

            //try to handle the unmatched route
            if(!this.tryHandleUnmatchedRoute(route)){
                //okey dokey, this is an unmatched route indeed, so just silently redirect to a default route
                Ext.defer(
                    function () {
                        //looks like this is not working as expected - not forcing the rpoute to default
                        //this.redirectTo(Ext.app.Application.instance.getDefaultToken() || '', true);
                        //so need to kick it harder
                        window.location.hash = Ext.app.Application.instance.getDefaultToken() || '';
                    },
                    1,
                    this
                );
            }
        },

        /**
         * Tries to handle an unmatched route; returns true if it manages to do so and false otherwise
         * @returns {boolean}
         */
        tryHandleUnmatchedRoute: function(route){

            var routeHandled = false;

            var navList = this.lookupReference('navTreeList'),
                treeStore = navList.getStore(),
                node = treeStore.findNode('hash', route),

                cardHolder, cardLayout, currentView, newView;

            //if a node has been found it means there is a matching menu item and a view for a route
            if(node){

                routeHandled = true;

                //highlight an item on a list
                navList.setSelection(node);

                //turn on the view
                cardHolder = this.lookupReference('cardHolder');
                cardLayout = cardHolder.getLayout();
                currentView = cardLayout.getActiveItem();
                newView = this.lookupReference(route);

                //if the new view has not yet been created, do create it!
                if(!newView){

                    if(node.get('view')){
                        newView = Ext.create(node.get('view'), {
                            reference: route
                        });
                    }
                    else {
                        newView = Ext.create('Ext.panel.Panel', {
                            title: route,
                            html: '<span style ="color:red;">No view defined for <span style="font-weight: bold;">' + route + '</span></span> yet!'
                        });
                    }

                    cardHolder.add(newView);
                }

                if(currentView && newView !== currentView){
                    cardLayout.setActiveItem(newView);
                }
            }

            return routeHandled;
        },

        /**
         * Extracts a view identifier off the hash. returns a first part of a piped route
         */
        getViewIdentifier: function(){
            //get the token off the hash - it is going to be the very first piece of the hash - up top the first /
            var hash = window.location.hash.substring(1),
                slash =  hash.indexOf('|'),
                token = hash.substring(0, slash > -1 ? slash : hash.length);

            return token;
        },

        /**
         * Tree list selection changed callback handdler
         * @param treelist
         * @param selected
         * @param eOpts
         */
        onTreeListSelectionChange: function(treelist, selected, eOpts){
            this.redirectTo(selected.get('hash'), false); //do not force hash update if the same
        }
    });

}());