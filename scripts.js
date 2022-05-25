var models = document.getElementById('models')
var customize = document.getElementById('customize')
var colors = document.getElementById('colors')
var modelImg = document.getElementById('model-img')

var wagoneerColors = {
    grey: 'img/models/wagoneer/wagoneer-grey.jpg',
    white: 'img/models/wagoneer/wagoneer-white.jpg',
    red: 'img/models/wagoneer/wagoneer-red.jpg',
}
var wranglerColors = {
    black: 'img/models/wrangler/wrangler-black.jpg',
    white: 'img/models/wrangler/wrangler-white.jpg',
    blue: 'img/models/wrangler/wrangler-blue.jpg',
}

models.addEventListener('change', function () {
    var index = models.selectedIndex
    customize.classList.remove('d-none')
    customize.classList.add('d-flex')
    modelImg.setAttribute('src', '')
    colors.children[0].selected = 'selected'
    if (index == 1) {
        selectedModel = wagoneerColors
    } else {
        selectedModel = wranglerColors
    }
    let modelColors = Object.keys(selectedModel)
    for (let i = 0; i < modelColors.length; i++) {
        color = modelColors[i]
        colors.children[i + 1].setAttribute('value', color)
        color = toTitleCase(color)
        colors.children[i + 1].textContent = color
    }
    return selectedModel
})

colors.addEventListener('change', function () {
    var index = colors.selectedIndex
    selectedColor = colors.children[index].getAttribute('value')
    modelImg.setAttribute('src', selectedModel[selectedColor])
})

function changeModelImg() {}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
}
