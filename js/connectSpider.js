const spiderM = 'https://gateway.marvel.com:443/v1/public/characters/1009610?ts=1&apikey=5baa4a32d69025e2b5c909b612ba67c0&hash=9c98236890134e2525b4f4c3d7d117e9'
const cSpiderM= 'https://gateway.marvel.com/v1/public/characters/1009610/comics?dateRange=2010-01-01%2C2012-01-01&limit=2&ts=1&apikey=5baa4a32d69025e2b5c909b612ba67c0&hash=9c98236890134e2525b4f4c3d7d117e9'
/*  1009610 aranha 
    1009368 ferro   */

async function getContent() {
    try {
        const response = await fetch(spiderM)
        const data = await response.json()
        let spider = data.data.results[0]
        return spider
    }catch (error) {
        console.error(error)
    }
}

async function showCharacter() {
    try {
        let spider = await getContent()
        document.getElementById('nomeSpider').innerHTML = spider.name
        let imgSpider = `${spider.thumbnail.path}${'.'}${spider.thumbnail.extension}`
        document.getElementById('imgSpider').src = (imgSpider)
        document.getElementById('descSpider').innerHTML = spider.description
    }catch (error) {
        console.error(error)
    }
};
showCharacter()


async function getComics1() {
    try{
        const response = await fetch(cSpiderM)
        const data = await response.json()
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
    }catch (error) {
        console.error(error)
    }
}
showComics1();

async function getComics2() {
    try{
        const response = await fetch(cSpiderM)
        const data = await response.json()
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
    }catch (error) {
        console.error(error)
    }
}
showComics2();
