const $body =$("body")
const $nav = $("<nav>")
$body.append($nav)

const $div = $("<div>")
$div.attr("class", "main-container")
$div.text("Image Goes Here")
$div.css("color", "white")
$body.append($div)

