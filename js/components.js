const $body =$("body")
const $nav = $("<nav>")
$body.append($nav)

// const $div = $("<div>")
// $div.attr("class", "main-container")
// $div.text("Image Goes Here")
// $div.css("color", "black")
// $body.append($div)

// const $section = $("<section>")
// $section.attr("id", "about-me")
// $section.text("<h2>About me goes here</h2>")
// $body.append($section)

const $footer = $("<footer>")
$footer.css("background-color", "black")
$footer.text("Copyright 2020 Made in Chicago, IL")
$body.append($footer)

// const $body = $("body")
const $button = $("<button>")
$button.attr("id", "info-submit")
$button.text("Submit")
$nav.prepend($button)