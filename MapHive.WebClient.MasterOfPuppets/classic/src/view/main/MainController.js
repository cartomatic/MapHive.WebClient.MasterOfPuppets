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
            'mh.mixin.Localisation',
            'MasterOfPuppets.mixins.RouteUtils'
        ],

    requires: [
        'Ext.app.Application',
        'Ext.app.route.Route',
        'Ext.data.TreeStore',
        'Ext.panel.Panel',
        'Ext.util.History',
        'MasterOfPuppets.model.NavigationTree',
        'MasterOfPuppets.view.applications.Applications',
        'MasterOfPuppets.view.dashboard.Dashboard',
        'MasterOfPuppets.view.localisations.Localisations',
        'MasterOfPuppets.view.main.MainLocalisation',
        'MasterOfPuppets.view.users.Users'
    ],

        //Note: routes are set up automatically on init, depending on the context


        /**
         * Called when the view is created
         */
        init: function () {

            //grab the menu data first and
            var menudata = this.prepareMenuData();

            this.prepareRoutes(menudata);

            this.loadMenu(menudata);

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
         * Extracts routes off the menu data and registers them with the controller;
         * @param menudata
         */
        prepareRoutes: function(menudata){
            var m = 0, mlen = menudata.length,
                routes,r, rlen,
                outRoutes = {};

            for (m; m < mlen; m++){
                routes = menudata[m].routes;
                r = 0; rlen = routes.length;
                for(r; r < rlen; r++){
                    outRoutes[routes[r]] = 'onMatchedRoute'
                }
            }
            this.setRoutes(outRoutes);
        },

        prepareMenuData: function(){
            //Note: this can be data driven and based on the serverside roles / permissions configuration
            return [
                {
                    text: this.getTranslation('dashboard'),
                    iconCls: 'x-fa fa-dashboard',
                    view: 'MasterOfPuppets.view.dashboard.Dashboard',
                    viewReference: 'dashboard',
                    routes: [
                        'dashboard'
                    ],
                    leaf: true
                },
                {
                    text: this.getTranslation('users'),
                    iconCls: 'x-fa fa-user',
                    view: 'MasterOfPuppets.view.users.Users',
                    viewReference: 'users',
                    routes: ['users'],
                    leaf: true
                },
                {
                    text: this.getTranslation('applications'),
                    iconCls: 'x-fa fa-desktop',
                    view: 'MasterOfPuppets.view.applications.Applications',
                    viewReference: 'applications',
                    routes: ['applications'],
                    leaf: true
                },
                {
                    text: this.getTranslation('localisations'),
                    iconCls: 'x-fa fa-comments',
                    view: 'MasterOfPuppets.view.localisations.Localisations',
                    viewReference: 'localisations',
                    routes: [
                        'localisations',
                        'localisations/:subView'
                    ],
                    leaf: true
                }
            ];
        },

        /**
         * Loads the appropriate left hand side menu data
         */
        loadMenu: function(data){
            var vm = this.getViewModel(),
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

            this.redirectToDefaultRoute();
        },

        routesCheckupCache: null,

        /**
         * checks if a current rpute matches routes configured for a menu node
         * @param {string} route
         * @param {MasterOfPuppets.model.NavigationTree} n
         * @returns {boolean}
         */
        checkIfRouteMatches: function(route, n){
            this.routesCheckupCache = this.routesCheckupCache || {};

            var viewRef = n.get('viewReference'),
                routes,r,rlen;

            if(!this.routesCheckupCache.hasOwnProperty(viewRef)){
                this.routesCheckupCache[viewRef] = this.prepareRouteValidators(n.get('routes'));
            }
            routes = this.routesCheckupCache[viewRef];
            r = 0; rlen = routes.length;

            for(r; r < rlen; r++){
                if(routes[r].recognizes(route))
                    return true;
            }

            return false;
        },

        /**
         * Matched route handler
         */
        onMatchedRoute: function(){

            //since got here, the route should basically be recognised and there should be a view for it

            //Note: this app only handles single routes (no piped ones)
            var route = this.getCurrentHash();

            var navList = this.lookupReference('navTreeList'),
                treeStore = navList.getStore(),
                me = this,
                node = treeStore.getRoot().findChildBy(
                    function(n){
                        return me.checkIfRouteMatches(route, n);
                    }
                ),
                viewRef,
                cardHolder, cardLayout, currentView, newView;

            //if a node has been found it means there is a matching menu item and a view for a route
            if(node){

                viewRef = node.get('viewReference');

                node.set('currentRoute', route);

                //highlight an item on a list
                navList.setSelection(node);

                //turn on the view
                cardHolder = this.lookupReference('cardHolder');
                cardLayout = cardHolder.getLayout();
                currentView = cardLayout.getActiveItem();
                newView = this.lookupReference(viewRef);

                //if the new view has not yet been created, do create it!
                if(!newView){

                    if(node.get('view')){
                        newView = Ext.create(node.get('view'), {
                            reference: viewRef
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
            else {
                //Note: this could pretty much happen during the dev. in production this should never be the case ;)
                throw new Error('BOOOOM.... View ref for "' + route + '" route has not been found...');
            }
        },

        /**
         * Tree list selection changed callback handdler
         * @param treelist
         * @param selected
         * @param eOpts
         */
        onTreeListSelectionChange: function(treelist, selected, eOpts){
            this.redirectTo(selected.get('currentRoute') || selected.get('routes')[0], false); //do not force hash update if the same
        }
    });

}());