let getData = async () => {

    let promise = await fetch("/list.json")
    let data = await promise.json()
    
    return data
}

export default getData