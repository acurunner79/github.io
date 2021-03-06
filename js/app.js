
/////////////////////////////////////////
// PULL AND RENDER DATA FROM GOOGLE SHEET
/////////////////////////////////////////


$.ajax("https://spreadsheets.google.com/feeds/list/1GngbnJmQbGTRqSRAIn0GDWu3cRhh_9tudbz8fXd1u2Q/1/public/full?alt=json")
.then((data) => {
    // Checking my data
    console.log(data)

    // Put our projects in a variable
    const rawProjects = data.feed.entry

    console.log(rawProjects)

    // Prettify our projects array
    const projects = rawProjects.map((project) => {
        return{
            name: project.gsx$name.$t,
            img: project.gsx$img.$t,
            description: project.gsx$description.$t,
            live: project.gsx$live.$t,
            github: project.gsx$github.$t

        }
    })

    console.log(projects)

/////////////////////////////////////////
//  USE JQUERY TO RENDER PROJECTS TO PAGE
//////////////////////////////////////////
const $myProjects = $(".projects")
for (let i=0;i < $myProjects.length; i++) {

    const $img = projects[i].img
    const $name = projects[i].name
    const $desc = projects[i].description

    $(".col-md-4").eq(i).html(`<img src="${$img}">`)
    $(".card-title").eq(i).text($name)
    $(".card-text").eq(i).text($desc)

}

})

// PULL DATA

