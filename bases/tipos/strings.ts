(() => {
    const batman: string = "Batman";
    const greenLantern: string = "Green Lantern";
    const volcanNegro: string = `Héroe: Volcán Negro`;

    console.log(`I'm ${batman}`);
    console.log(batman.toUpperCase());
    console.log(batman[10]?.toUpperCase() || "No existe ese carácter");
})()