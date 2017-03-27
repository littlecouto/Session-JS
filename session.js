var Session = function(maxtime){

    this.time = function(){

        return Math.floor(Date.now() / 1000);

    }

    this.json_session = window.localStorage.getItem('session');
    this.session      = JSON.parse(this.json_session) || {};
    this.values       = this.session.values           || {};
    this.lastActivity = this.session.lastActivity     || this.lastActivity || this.time();

    this.get = function(key, return_all){


        if(typeof this.values === 'undefined'){
            return null;
        }

        if(typeof this.values[key] !== 'undefined'){
            return this.values[key];
        }

        if((typeof return_all !== 'undefined' && return_all) || typeof key === 'undefined'){
            return this.values;
        }

        return null;
    };

    this.set = function(key, val){

        val = val || '';

        this.values[key] = val;
        this.update();
        return this.values;

    };

    this.destroy = function(){
        this.lastActivity = 0;
        window.localStorage.session = "{\"values\": {}}";
        return true;

    };

    this.update = function(){

        window.localStorage.session = JSON.stringify({values: this.values, maxtime: this.maxtime, lastActivity: this.lastActivity});

    };

    this.countdown = function(){

       return this.maxtime - (this.time() - this.lastActivity);

    };

    this.maxtime = this.session.maxtime || maxtime || 3600;

    this.check = function(){

        var thisTime = this.time();

        if(typeof this.lastActivity === 'undefined'){

            this.lastActivity = thisTime;
            this.update();

            return true;

        }

        if(thisTime - this.lastActivity <= this.maxtime){

            this.lastActivity = thisTime;
            this.update();

            return true;

        }

        this.destroy();
        return false;

    };

    this.check()

    return this;

};

