import { movie_id } from "../extend/movie_id"
const createInput = (keys) => {
    let input = []
    for(let i = 0; i< 20; i++){
        input.push(0)
    }

    keys.map((value, idx) => {
        input[movie_id[value]] = 1
    })
    return input
}
export { createInput }