
/////////////////////////////////////////
// PULL AND RENDER DATA FROM GOOGLE SHEET
/////////////////////////////////////////


$.ajax("https://spreadsheets.google.com/feeds/list/1GngbnJmQbGTRqSRAIn0GDWu3cRhh_9tudbz8fXd1u2Q/1/public/full?alt=json")
.then((data) => {
    // Checking my data
    console.log(data)

    // Put our projects in a cariable
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


})






// PULL DATA