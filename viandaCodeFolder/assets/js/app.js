// Her er mit array af tal på top 10.
const numbersTop10 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]


// Her targeter jeg min html class = .top10Wrapper, og sørger for at de indhold der bliver genereret kommer i mit html.
const resultElementTop10 = document.querySelector(".top10Wrapper");


// Her laver jeg et loop som generere én article for hvert navn, det bliver ved til der ikke er flere navne tilbage.
for (let i = 0; i < numbersTop10.length; i++) {  
    const numberTop10 = numbersTop10[i];
    resultElementTop10.innerHTML +=`     
            <div class="top10Full">
                    <div class="top10NameAndNumber">
                        <a href="./yourpage.html"><img src="./assets/img/ellisProfilePicture.png" alt="Ellis Barrie Picture">
                            <h5>Ellis Barrie</h5>
                        </a>
                        <h5>${numberTop10}</h5>
                    </div>
                    <div class="top10Card">
                    <a href="./recipe.html" class="top10A">
                        <figure>
                            <img src="./assets/img/spaghettiCarbonara.png" alt="Spaghetti carbonara">
                        </figure>
                        <figcaption>
                            <h5>Easy spaghetti carbonara</h5>
                
                            <span><img class="iconSmall" src="./assets/img/clock-regular-full.png" alt="Clock icon"> 30 min</span>
                
                            <span><img class="iconSmall" src="./assets/img/utensils-solid-full.png" alt="Fork and knife"> 2
                                people</span>
                
                            <span><img class="iconSmall" src="./assets/img/gauge-high-solid-full.png" alt="Difficultymeter"> Easy</span>
                        </figcaption>
                    </a>
                    </div>
                </div>`
                ;
}



// Her er mit array af tal på top 10.
const numbersCookware = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]


// Her targeter jeg min html class = .top10Wrapper, og sørger for at de indhold der bliver genereret kommer i mit html.
const resultElementCookware = document.querySelector(".popularCookwareWrapper");


// Her laver jeg et loop som generere én article for hvert navn, det bliver ved til der ikke er flere navne tilbage.
for (let i = 0; i < numbersCookware.length; i++) {  
    const numberCookware = numbersCookware[i];
    resultElementCookware.innerHTML +=`
    <div class="popularCookware">
                <h4>Choosing the right utensil</h4>
                <img src="./assets/img/cookAndBakerProfilePicture.png" alt="Cook and baker picture">
                <h4>Cook & Baker</h4>
                <p class="tipUnderheader">Use a whisk for smooth sauces and batters</p>
                <div class="popularCookwareBottom">
                    <img src="./assets/img/cookAndBakerWhisk.png" alt="2 whisks on a white background">
                    <a href="#" class="buttonSmall">View product</a>
                </div>
            </div>
        `
                ;
}


// Her er mit array af tal på top 10.
const numbersTips = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]


// Her targeter jeg min html class = .top10Wrapper, og sørger for at de indhold der bliver genereret kommer i mit html.
const resultElementTips = document.querySelector(".tipsAndTricksWrapper");


// Her laver jeg et loop som generere én article for hvert navn, det bliver ved til der ikke er flere navne tilbage.
for (let i = 0; i < numbersTips.length; i++) {  
    const numberTips = numbersTips[i];
    resultElementTips.innerHTML +=`
            <div class="tipsAndTricks">
                <h4>Set the mood</h4>
                <div class="tipsAndTricksNameAndPic">
                <img src="./assets/img/cookAndBakerProfilePicture.png" alt="Cook and baker picture">
                <h5>Jens Petersen</h5>
                </div>
                <p class="tipUnderheader">Create a nice environment</p>
                <p>Put on your favorite music, podcast, or audiobook.
                Keep the kitchen well-lit and tidy before you start.
                Light a candle or open a window for fresh air</p>
            </div>
        `;
}


// Her er mit array af tal på top 10.
const numbersRecipeTips = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]


// Her targeter jeg min html class = .top10Wrapper, og sørger for at de indhold der bliver genereret kommer i mit html.
const resultElementRecipeTips = document.querySelector(".recipeTipsWrapper");

// Her laver jeg et loop som generere én article for hvert navn, det bliver ved til der ikke er flere navne tilbage.
for (let i = 0; i < numbersRecipeTips.length; i++) {  
    const numberRecipeTips = numbersRecipeTips[i];
    resultElementRecipeTips.innerHTML +=`
            <div class="tipsAndTricks">
                <h4>Set the mood</h4>
                <div class="tipsAndTricksNameAndPic">
                <img src="./assets/img/cookAndBakerProfilePicture.png" alt="Cook and baker picture">
                <h5>Jens Petersen</h5>
                </div>
                <p class="tipUnderheader">Create a nice environment</p>
                <p>Put on your favorite music, podcast, or audiobook.
                Keep the kitchen well-lit and tidy before you start.
                Light a candle or open a window for fresh air</p>
            </div>
        `;
}