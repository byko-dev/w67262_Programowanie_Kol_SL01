class TrafficLights {
    time;
    light;

    constructor(time, light) {
            this.time = time;
            this.light = light;
    }

    setTime(time) {
        this.time = time;
    }

    getTime() {
        return this.time;
    }

    setLight(light){
        this.light = light;
    }

    getLight(){
        return this.light;
    }
}