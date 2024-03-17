
export const formFunction = (e, type) => {
    e.preventDefault();
    let vehicleObj;
    if (type === "car") {
        vehicleObj = {
        type: type,
        licenseplate: e.target[0].value,
        brand: e.target[1].value,
        model: e.target[2].value,
        fuel: e.target[3].value,
        emission: e.target[4].value,
        kw: e.target[5].value,
        ps: e.target[6].value,
        mileage: e.target[7].value,
        lastTuv: e.target[8].value,
        lastOil: e.target[9].value,
        nextOil: e.target[10].value,
        nextOilDate: e.target[11].value,
        lastService: e.target[12].value,
        };
    };
    if (type === "trailer") {
        vehicleObj = {
        type: type,
        licenseplate: e.target[0].value,
        brand: e.target[1].value,
        model: e.target[2].value,
        maxSpeed: e.target[3].value,
        volume: e.target[4].value,
        lastTuv: e.target[5].value,
        lastService: e.target[6].value,
    }};
    // Fetch hier einbauen
    };

