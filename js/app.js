
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

// for (i=0;i < projects.length; i++) {
//     const $div = $(
//         `<div class="card" style="width: 18rem;">
//         <img src=${projects[i].img} class="card-img-top" alt="project">
//         <div class="card-body">
//         <h5 class="card-title">${projects[i].name}</h5>
//         <p class="card-text">${projects[i].description}</p>
//         <a href=${projects[i].live} class="btn">Check it out</a>
//         </div>
//         </div>`
//     )
// $("#projects").append($div)
// }