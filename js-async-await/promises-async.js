// Number Facts
const num = (Math.ceil(1 / Math.random())) * (Math.ceil(1 / Math.random()))
const baseURL = `http://numbersapi.com/${num}?json`

async function singleFact() {

    let fact = await axios.get(baseURL)
    console.log(fact.data.text)
}

async function multipleNums(str) {
    let numbersfact = await axios.get(`http://numbersapi.com/${str}?json`)
    console.log(numbersfact.data)
}

async function multipleFacts() {
    let var1promise = axios.get(baseURL)
    let var2promise = axios.get(baseURL)
    let var3promise = axios.get(baseURL)
    let var4promise = axios.get(baseURL)

    let var1 = await var1promise
    let var2 = await var2promise
    let var3 = await var3promise
    let var4 = await var4promise

    console.log(var1.data.text, var2.data.text, var3.data.text, var4.data.text)
}