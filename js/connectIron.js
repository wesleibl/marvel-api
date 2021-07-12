const ironM = 'https://gateway.marvel.com:443/v1/public/characters/1009368?ts=1&apikey=5baa4a32d69025e2b5c909b612ba67c0&hash=9c98236890134e2525b4f4c3d7d117e9'
const cironM= 'https://gateway.marvel.com/v1/public/characters/1009368/comics?dateRange=2014-01-01%2C2015-01-01&limit=2&ts=1&apikey=5baa4a32d69025e2b5c909b612ba67c0&hash=9c98236890134e2525b4f4c3d7d117e9'
/*  1009610 aranha 
    1009368 ferro   */

async function getContent() {
    try {
        const response = await fetch(ironM)
        //console.log(response)
        const data = await response.json()
        //console.log(data.data.results[0].name)
        let iron = data.data.results[0]
        return iron
    }catch (error) {
        console.error(error)
    }
}

async function showCharacter() {
    try {
        let iron = await getContent()
        document.getElementById('nomeiron').innerHTML = iron.name
        let imgiron = `${iron.thumbnail.path}${'.'}${iron.thumbnail.extension}`
        document.getElementById('imgiron').src = (imgiron)
        document.getElementById('desciron').innerHTML = iron.description

        //console.log(iron)
    }catch (error) {
        console.error(error)
    }
};
showCharacter()


async function getComics1() {
    try{
        const response = await fetch(cironM)
        //console.log(response)
        const data = await response.json()
        //console.log(data.data.results[0])
        let comics = data.data.results[0]
        return comics
    }catch (error){
        console.error(error)
    }
}

async function showComics1(){
    try{
        let comics = await getComics1()
        document.getElementById('title-comic1').innerHTML = comics.title
        let comicsImg = `${comics.thumbnail.path}${'.'}${comics.thumbnail.extension}`
        document.getElementById('imgC1').src = (comicsImg)
        document.getElementById('description1').innerHTML = comics.description
        //console.log(comics)
    }catch (error) {
        console.error(error)
    }
}
showComics1();

async function getComics2() {
    try{
        const response = await fetch(cironM)
        //console.log(response)
        const data = await response.json()
        //console.log(data.data.results[1])
        let comics = data.data.results[1]
        return comics
    }catch (error){
        console.error(error)
    }
}

async function showComics2(){
    try{
        let comics = await getComics2()
        document.getElementById('title-comic2').innerHTML = comics.title
        let comicsImg = `${comics.thumbnail.path}${'.'}${comics.thumbnail.extension}`
        document.getElementById('imgC2').src = (comicsImg)
        document.getElementById('description2').innerHTML = comics.description
        //console.log(comics)
    }catch (error) {
        console.error(error)
    }
}
showComics2();