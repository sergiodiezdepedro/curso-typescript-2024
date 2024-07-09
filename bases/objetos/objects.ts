(() => {
    let flash: {name: string, age?: number, powers: string[]} = {
        name: "Barry Allen",
        age: 24,
        powers: ["Supervelocidad", "Viajar en el tiempo"],
    }

    flash = {
        name: "Clark Kent",
        powers: ["Superfuerza", "Volar"]
    }
    console.log({flash});
})()