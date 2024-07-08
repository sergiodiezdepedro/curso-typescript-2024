(() => {
  enum AudioLevel {
    min = 1,
    medium,
    optimus,
    max = 10,
  }

  let currentAudioLevel: AudioLevel = AudioLevel.max;
  console.log({ currentAudioLevel });
  console.log(AudioLevel);
})();
