import map from "./map"


export const vietnam = async (province_code) => {
    const url = "/api/p"
    return map.get(url)

}