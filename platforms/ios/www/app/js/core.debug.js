function AppPlugin(app) {
     app['core.debug'] = {
        mode : {
            value : null,
            set : function(o) {
                this.value = o? true: false;
                app['core.events'].dispatch('core.debug.mode.set', this.value);
            },
            get : function() {
                return this.value? true : false;
            }
        }
     }  
};

AppPluginLoaded=true;