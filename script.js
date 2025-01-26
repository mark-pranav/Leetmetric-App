document.addEventListener('DOMContentLoaded', function() {

    const searchbutton = document.getElementById('search');
    const userinput = document.getElementById('user-input');
    const statscontainer = document.querySelector('.stats-container');
    const easyProgressCircle = document.querySelector('.easy-progress');
    const mediumProgressCircle = document.querySelector('.medium-progress');
    const hardProgressCircle = document.querySelector('.hard-progress');
    const easyLabel = document.getElementById('easy-label');
    const mediumLabel = document.getElementById('medium-label');
    const hardLabel = document.getElementById('hard-label');
    const statsCardContainer = document.querySelector('.stats-card-container');

    function validateUsername(username) {
        const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/; // Alphanumeric characters and underscores, 3-16 characters long
        if (username.trim() === '') {
            alert('Please enter a valid username');
            return false;
        } else if (!usernameRegex.test(username)) {
            alert('Username must be 3-16 characters long and can only contain letters, numbers, and underscores');
            return false;
        }
        return true;
    }

    async function fetchUserDetails(username) {
        const url = `https://leetcode-stats-api.herokuapp.com/${username}`;

        try {
            searchbutton.textContent = "Loading...";
            searchbutton.disabled = true;

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const parsedData = await response.json();
            console.log("Logging data:", parsedData);
            displayUserDetails(parsedData);

        } catch (error) {
            statscontainer.innerHTML = `<p>No Data Found</p>`;
        
        } finally {
            
            searchbutton.textContent = "Search";
            searchbutton.disabled = false;
        }
    }

    function UpdateProgressCircle(solved , total , label , progressCircle ){
        const progressDegree = (solved / total) * 100;
        progressCircle.style.setProperty("--progress-degree" , `${progressDegree}%`);
        label.textContent = `${solved} / ${total}`;
    }

    function displayUserDetails(parsedData){

        const totalQuestions = parsedData.totalQuestions;
        const totalEasyQuestions = parsedData.totalEasy;
        const totalMediumQuestions = parsedData.totalMedium;
        const totalHardQuestions = parsedData.totalHard;
        
        const totalSolvedQuestions = parsedData.totalSolved;
        const totalEasySolved = parsedData.easySolved;
        const totalMediumSolved = parsedData.mediumSolved;
        const totalHardSolved = parsedData.hardSolved;


        UpdateProgressCircle(totalEasySolved , totalEasyQuestions , easyLabel , easyProgressCircle);
        UpdateProgressCircle(totalMediumSolved , totalMediumQuestions , mediumLabel , mediumProgressCircle);
        UpdateProgressCircle(totalHardSolved , totalHardQuestions , hardLabel , hardProgressCircle);

        
    }



    searchbutton.addEventListener('click', function() {
        const username = userinput.value;
        console.log("loggin" , username);
        if (validateUsername(username)) {
            fetchUserDetails(username);
        }
    });

}); // Removed the unexpected closing parenthesis here