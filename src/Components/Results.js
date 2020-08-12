import React from 'react'

const Results = (props) => {
    const {repos} =props;
    console.log("Repos is: ", repos.data); 

const listRepos = repos.length !== 0 ? repos.data.map((item) =>  
    <li key={item.id}>

         <p id="repoName">{item.name}</p>
         <p class="repoNameMore"> Fork Counts : {item.forks_count}</p> 
         <p class="repoNameMore"> Stargazers Counts : {item.stargazers_count}</p>
         <p class="repoNameMore"> Issue Counts : {item.open_issues_count}</p>
    </li>) :
    <h2></h2>

// function moreInfoFunction() {
//     const more = document.getElementById('more');
//     const moreInfoButton = document.getElementById('moreInfoButton')

//     if(more.style.display === "inline"){
//         moreInfoButton.innerHTML = "More Info"
//     } else {
//         more.style.display = "inline"; 
//         more.style.display = "none"
//     }

// }

    return (
        <div id="results">
           <h2 id="text">List of Repos</h2>
            <ol>
                {listRepos}
                
            </ol>
        </div>
    )
}
export default Results