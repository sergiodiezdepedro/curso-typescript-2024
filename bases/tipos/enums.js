"use strict";
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["optimus"] = 3] = "optimus";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudioLevel = AudioLevel.max;
    console.log({ currentAudioLevel: currentAudioLevel });
    console.log(AudioLevel);
})();
