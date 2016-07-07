//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('MasterOfPuppets.view.localisations.LocalisationsController', {
        extend: 'Ext.app.ViewController',

        alias: 'controller.mofp-localisations',

    requires: [
        'Ext.app.Application',
        'MasterOfPuppets.view.localisations.LocalisationsLocalisation'
    ],

    mixins: [
            'mh.mixin.Localisation',
            'mh.mixin.CallMeParent',
            'mh.mixin.GridUtils',
            'MasterOfPuppets.mixins.RouteUtils'
        ],

        //Note: no route defs here, all handled in a customised way
        // routes: {
        // },

        /**
         * Called when the view is created
         */
        init: function() {
            this.callMeParent('init', arguments);
            this.injectLocalisationToViewModel();

            //push

            //this will handle the routes as expected.
            this.listen({
                controller: {
                    '#': {
                        unmatchedroute: this.onUnmatchedRoute
                    }
                }
            });

            //finally
            //this is a startup, so need to grab the route manually and feed it into the route handler for the view...
            this.getView().on('afterrender', function(){
                this.onUnmatchedRoute(window.location.hash.substring(1));
                //NOTE: if a default router is to be used, on init will just have to redirect to same route and enforce reprocessing of a route.
            }, this);

            this.getView().on(
                'tabchange',
                function(panel, newCard, oldCard){
                    window.location.hash = 'localisations/' + newCard.reference;
                },
                this
            );
        },

        /**
         * handles unmatched routes
         * @param route
         */
        onUnmatchedRoute: function(route){

            //FIXME - ok, current way of dynamically deciding what to turn on / off and such is bad, bad bad. On one hand I do not want to repeat all the bloody routes handled in an app at the main view controller level and prefer having the router adjust dynamically to a situation, on the other hand this means messing around with some custom ways of route handling, while the default router would be more than happy to handle things properly.


            if(route.startsWith('localisations')){

                if(route !== 'localisations'){
                    //no view, nothing to handle
                    route = route.replace('localisations/', '');

                    var view = this.lookupReference(route);
                    if(view){
                        //alert(route);
                        this.getView().getLayout().setActiveItem(view);
                    }
                    else {
                        //redirect to dashboard.
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
                }
                //do nothing, just display, whetever is configured initially
            }
            //the other unmatched handled by the main controller
        }
    });

}());