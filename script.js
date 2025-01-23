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

        searchbutton.addEventListener('click', function() {
            const username = userinput.value;
            // console.log("loggin" , username);
            if(validateUsername(username)){
                
            }
        })



})