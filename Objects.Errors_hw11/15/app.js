let get_obj = {
    himax: 20,
    byraktar: 12,
    pzrk: 38,
}

let keyDoubler = (obj) => {
    for (key in obj) {
        obj[key] *= 2
    }
    return obj
}
console.log(keyDoubler(get_obj));