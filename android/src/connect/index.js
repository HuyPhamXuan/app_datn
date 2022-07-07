const getData =  async (URL_) => {
    return await fetch(URL_).then((response) => {
        return response.json() 
    }).then((result) => {
        return result
    }).catch((err) =>{
        console.log(err)
    })
}
const postData =  async (data, URL_) => {
    return await fetch(URL_,{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then((response) => {
        return response.json() 
    }).then((result) => {
        return result
    }).catch((err) =>{
        console.log(err)
    })
}
export { getData, postData }