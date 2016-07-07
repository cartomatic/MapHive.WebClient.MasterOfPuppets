(function(){
    //Make sure strict mode is on
    'use strict';
    
    /**
     * Created by info_000 on 06-Jul-16.
     */
    Ext.define('MasterOfPuppets.mixins.RouteUtils', {
    requires: [
        //FIXME - this is a private util... will need to extract some sensible stuff out of it
        'Ext.app.route.Route'
    ],

    /**
         * Prepares an arr of Ext.app.route.Route so can easily test where a route should be handled
         *
         * @param {string[]} routes
         * @returns {Ext.app.route.Route[]}
         */
        prepareRoutes: function(routes){
            var outRoutes = [],
                r = 0, rlen = routes.length;

            for(r; r < rlen; r++){
                outRoutes.push(
                    Ext.create('Ext.app.route.Route', {
                        url: routes[r]
                    })
                );
            }

            return outRoutes;
        },
    });
}());