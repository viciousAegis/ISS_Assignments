const ColorChangebtn = document.getElementById('btn1')
let pointer1 = 0

const FontChangebtn = document.getElementById('btn2')
let pointer2 = 0

const para = document.getElementsByTagName("p")
const head = document.getElementsByTagName("h1")
const polaroid = document.getElementById("polaroid")
const newsContainer = document.getElementById("newsContainer")

const newsForm = document.querySelector('#newsForm')
const newslist = document.querySelector('#newsList')
const clearBtn = document.querySelector('#clearBtn')
const header = document.querySelector('#header')

ColorChangebtn.addEventListener('click', function onClick(event) {
    switch(pointer1)
    {
        case 0:
            document.body.style.backgroundColor = "#788AA3";
            polaroid.style.backgroundColor = "#637792"
            header.style.backgroundColor = "#637792"
            newsContainer.style.backgroundColor = "#637792"
            pointer1+=1
            break;
        case 1:
            document.body.style.backgroundColor = "#92B6B1";
            polaroid.style.backgroundColor = "#78A59F"
            newsContainer.style.backgroundColor = "#78A59F"
            header.style.backgroundColor = "#78A59F"
            pointer1+=1
            break;
        case 2:
            document.body.style.backgroundColor = "#B2C9AB";
            polaroid.style.backgroundColor = "#A4BF9B"
            newsContainer.style.backgroundColor = "#A4BF9B"
            header.style.backgroundColor = "#A4BF9B"
            pointer1+=1
            break;
        case 3:
            document.body.style.backgroundColor = "#E8DDB5";
            polaroid.style.backgroundColor = "#DDCD92"
            header.style.backgroundColor = "#DDCD92"
            newsContainer.style.backgroundColor = "#DDCD92"
            document.body.style.color = "#666A86";
            for (var i = 0; i < head.length; i++) {
                var element = head[i];
                element.style.color = "#666A86";
            }
            pointer1+=1
            break;
        case 4:
            document.body.style.backgroundColor = "#666A86";
            polaroid.style.backgroundColor = "#585B74"
            header.style.backgroundColor = "#585B74"
            newsContainer.style.backgroundColor = "#585B74"
            for (var i = 0; i < head.length; i++) {
                var element = head[i];
                element.style.color = "#fff3b0";
            }
            document.body.style.color = "antiquewhite";
            pointer1=0
            break;
        default:
            document.body.style.backgroundColor = "white";
    }

})

//let listCount = 
let listCount
if(window.localStorage.getItem('listCount') === null) {
    listCount = 0
}
else {
    listCount = Number(window.localStorage.getItem('listCount'))
    for(let i = 0; i < listCount; i++)
    {
        const newsValue = window.localStorage.getItem(i)
        const newNews = document.createElement('li')
        const bTag = document.createElement('b')

        bTag.append(newsValue)
        newNews.append(bTag)
        newslist.append(newNews)
    }
}

FontChangebtn.addEventListener('click', function onClick(event) {
    switch(pointer2)
    {
        case 0:
            for (var i = 0; i < para.length; i++) {
                var element = para[i];
                element.style.fontSize = "18px";
              }
            pointer2+=1
            break;
        case 1:
            for (var i = 0; i < para.length; i++) {
                var element = para[i];
                element.style.fontSize = "20px";
              }
            pointer2+=1
            break;
        case 2:
            for (var i = 0; i < para.length; i++) {
                var element = para[i];
                element.style.fontSize = "16px";
              }
            pointer2=0
            break;
    }
})

newsForm.addEventListener('submit', function(e) {
    e.preventDefault()

    const newsValue = newsForm.elements.news.value
    const newNews = document.createElement('li')
    const bTag = document.createElement('b')

    if(newsValue == '')
    {
        alert('enter something non empty!')
        return;
    }
    bTag.append(newsValue)
    newNews.append(bTag)
    newslist.append(newNews)

    window.localStorage.setItem(listCount, newsValue)
    listCount++
    window.localStorage.setItem('listCount', listCount)

    newsForm.elements.news.value = ''
})

newsForm.addEventListener('reset', function(e) {
    e.preventDefault()

    for(let i=0; i<listCount; i++) {
		newslist.removeChild(newslist.firstElementChild)
		localStorage.removeItem(String(i))
	}
	listCount = 0
	localStorage.setItem('listCount', listCount)
})