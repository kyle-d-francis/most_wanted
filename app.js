/*
    Author: devCodeCamp
    Description: Most Wanted Starter Code
*/
//////////////////////////////////////////* Beginning Of Starter Code *//////////////////////////////////////////

"use strict";
//? Utilize the hotkey to hide block level comment documentation
////* Mac: Press "CMD"+"K" and then "CMD"+"/"
////* PC: Press "CTRL"+"K" and then "CTRL"+"/"

/**
 * This is the main logic function being called in index.html.
 * It operates as the entry point for our entire application and allows
 * our user to decide whether to search by name or by traits.
 * @param {Array} people        A collection of person objects.
 */
function app(people) {
    // promptFor() is a custom function defined below that helps us prompt and validate input more easily
    // Note that we are chaining the .toLowerCase() immediately after the promptFor returns its value
    let searchType = promptFor(
        "Do you know the name of the person you are looking for? Enter 'yes' or 'no'",
        yesNo
    ).toLowerCase();
    let searchResults;
    // Routes our application based on the user's input
    switch (searchType) {
        case "yes":
            searchResults = searchByName(people);
            break;
        case "no":
            //! TODO #4: Declare a searchByTraits (multiple traits) function //////////////////////////////////////////
                //! TODO #4a: Provide option to search for single or multiple //////////////////////////////////////////
            searchResults = searchByTraits(people);
            break;
        default:
            // Re-initializes the app() if neither case was hit above. This is an instance of recursion.
            app(people);
            break;
    }
    // Calls the mainMenu() only AFTER we find the SINGLE PERSON
    mainMenu(searchResults, people);
}
// End of app()

/**
 * After finding a single person, we pass in the entire person-object that we found,
 * as well as the entire original dataset of people. We need people in order to find
 * descendants and other information that the user may want.
 * @param {Object[]} person     A singular object inside of an array.
 * @param {Array} people        A collection of person objects.
 * @returns {String}            The valid string input retrieved from the user.
 */
function mainMenu(person, people) {
    // A check to verify a person was found via searchByName() or searchByTrait()
    if (!person[0]) {
        alert("Could not find that individual.");
        // Restarts app() from the very beginning
        return app(people);
    }
    let displayOption = prompt(
        `Found ${person[0].firstName} ${person[0].lastName}. Do you want to know their 'info', 'family', or 'descendants'? \n Type the option you want or type 'restart' or 'quit'.`
    );
    // Routes our application based on the user's input
    switch (displayOption) {
        case "info":
            //! TODO #1: Utilize the displayPerson function //////////////////////////////////////////
            // HINT: Look for a person-object stringifier utility function to help
            let personInfo = displayPerson(person[0]);
            break;
        case "family":
            //! TODO #2: Declare a findPersonFamily function //////////////////////////////////////////
            // HINT: Look for a people-collection stringifier utility function to help
            let personFamily = findPersonFamily(person[0], people);
            alert(personFamily);
            break;
        case "descendants":
            //! TODO #3: Declare a findPersonDescendants function //////////////////////////////////////////
            // HINT: Review recursion lecture + demo for bonus user story
            let personDescendants = findPersonDescendants(person[0], people);
            alert(personDescendants);
            break;
        case "restart":
            // Restart app() from the very beginning
            app(people);
            break;
        case "quit":
            // Stop application execution
            return;
        default:
            // Prompt user again. Another instance of recursion
            return mainMenu(person, people);
    }
}
// End of mainMenu()
/**
 * This function is used when searching the people collection by
 * a person-object's firstName and lastName properties.
 * @param {Array} people        A collection of person objects.
 * @returns {Array}             An array containing the person-object (or empty array if no match)
 */
 function searchByName(people) {
    let firstName = promptFor("What is the person's first name?", chars);
    let lastName = promptFor("What is the person's last name?", chars);

    // The foundPerson value will be of type Array. Recall that .filter() ALWAYS returns an array.
    let foundPerson = people.filter(function (person) {
        if (person.firstName === firstName && person.lastName === lastName) {
            return true;
        }
    });
    return foundPerson;
}
// End of searchByName()
function searchByTraits(people) {
    let searchTraits = prompt(
        "what traits do you want to search by enter 'gender', 'dob', 'height' , 'weight' 'eye color' , or ' occupation'? For eye color type 'eye'",
    ).toLowerCase();
    let searchResults = [];
    let gender;
    let dob;
    let height;
    let weight;
    let eye;
    let occupations;  
    // Routes our application based on the user's input
    let multipleTraits = searchTraits.split(" ", 5);
    for(let traits of multipleTraits)
    switch (traits) {
        case "gender":
        gender = searchByGender(people)
        {if (multipleTraits.length == 1){   
        searchResults = displayPeople(gender)}
        else if(multipleTraits.length > 1){
        searchResults = searchResults.concat(gender)}{
            continue
        }}
        
            
        case "dob":
           dob = searchByDob(people)
            {if (multipleTraits.length == 1){   
                searchResults = displayPeople(dob)}
                else if(multipleTraits.length > 1){
                searchResults=searchResults.concat(dob)}{
                    continue
                }}
        case "height":
            height = searchByHeight(people)
            {if (multipleTraits.length == 1){   
                searchResults = displayPeople(height)}
                else if(multipleTraits.length > 1){
                searchResults = searchResults.concat(height)}{
                    continue
                }}
            
        case "weight":
            weight = searchByWeight(people)
            {if (multipleTraits.length == 1){   
                searchResults = displayPeople(weight)}
                else if(multipleTraits.length > 1){
               searchResults = searchResults.concat(weight)}{
                    continue
                }}
            
        case "eye":
            eye = searchByEyeColor(people)
            {if (multipleTraits.length == 1){   
                searchResults = displayPeople(eye)}
                else if(multipleTraits.length > 1){
                searchResults= searchResults.concat(eye)}{
                    continue
                }}
            
        case "occupations": 
            occupations = searchByOccupation(people)
            {if (multipleTraits.length == 1){   
                searchResults = displayPeople(occupations)}
                else if(multipleTraits.length > 1){
                searchResults = searchResults.concat(occupations)} {
                    continue
                }}
          
        default:
            // Re-initializes the app() if neither case was hit above. This is an instance of recursion.
            app(people);
            break;
    }

    // Calls the mainMenu() only AFTER we find the SINGLE PERSON
 


concatPeople(searchResults)
}
function concatPeople(searchResults){
    let uniqueElements = new Set(searchResults)
    let results = searchResults.filter(function(item){
    if (uniqueElements.has(item)){
        uniqueElements.delete(item);}
        else{return item}
    }
    
);
displayPeople(results)
}
    function searchByGender(person, people){
        let searchGender = prompt(`What is the person's gender?`);
    
        let gender = person.filter(function(person) {
            if (searchGender === person.gender){
                return true;};
            if (searchGender != person.gender)
            {   return false;
            };
    })
        return gender
}
    function searchByDob(person,people){
        let searchDob = prompt("What is the person's date of birth?");
    
        let dob = person.filter(function (person) {
            if (searchDob=== person.dob){
                return true;}
                if (searchDob != person.dob)
                {return false;
                };
        });
        return dob;
    }
    function searchByHeight(person,people){
        let searchHeight = prompt("What is the person's height?");
        let height = person.filter(function (person) {
            if (searchHeight=== person.height){
                return true;}
                if (searchHeight != person.height)
                {return false;
                };
        });
        return height;
    } 
    function searchByWeight(person,people){
        let searchWeight = prompt("What is the person's weight");
        let weights = person.filter(function (person) {
            if (searchWeight=== person.height){
                return true;}
                if (searchWeight != person.Weight)
                {return false;
                };
        });
        return weights;
    }  
    function searchByEyeColor(person,people)
        let SearchEyeColor = prompt("What is the person's eye color?");
        let eye = person.filter(function (person) {
            if (SearchEyeColor=== person.eyeColor){
                return true;}
                if (SearchEyeColor != person.eyeColor)
                {return false;
                };
        });
        return eye;
    }
    function searchByOccupation(person,people){
        let SearchOccupation = prompt("What is the person's occupation?");
        let occupation = person.filter(function (person) {
            if (SearchOccupation=== person.occupation){
                return true;}
                if (SearchOccupation != person.occupation)
                {return false;
                };
        });
        return occupation;
    }
function findPersonFamily(person, people){
    let searchResults;
    let personFamily = prompt('Do you want to search for Spouse, Siblings, or Parents?')
    switch (personFamily){
        case "Spouse":
        searchResults= searchBySpouse( person, people)
        let findSpouse =displayPeople(searchResults)
        break;
        case "Siblings":
        searchResults = searchBySiblings(person,people);
        let findSiblings = displayPeople(searchResults)
        break;
        case "Parents":
        searchResults = searchByParents(person,people);
        let findParent = displayPeople(searchResults)
        break;
    }
function searchBySpouse(person, people){
    let findSpouse = people.filter(function(people){
        if (people.currentSpouse=== person.id){
            return true
        };
        if  (people.currentSpouse != person.id)
        {return false;
        };
        
    });
    return findSpouse
    
}
function searchBySiblings(person, people){
    let findSiblings = people.filter(function(el){
        if (person.parents.includes(el.parents[0])|| person.parents.includes(el.parents[1])){
            return true
        };
        if (!person.parents.includes(el.parents[0])|| person.parents.includes(el.parents[1])){
            return false
        };
        
    });
    return findSiblings
} 
function searchByParents(person, people){
    let findParent = people.filter(function(people){
        if (person.parents.includes(people.id)){
            return true
        }
        else {return false }
        
        
    });
    return findParent
}
}
/**
 * This function will be useful for STRINGIFYING a collection of person-objects
 * first and last name properties in order to easily send the information
 * to the user in the form of an alert().
 * @param {Array} people        A collection of person objects.
 */
function displayPeople(people) {
    alert(
        people
            .map(function (person) {
                return `${person.firstName} ${person.lastName}`;
            })
            .join("\n")
    );
}
// End of displayPeople()

/**
 * This function will be useful for STRINGIFYING a person-object's properties
 * in order to easily send the information to the user in the form of an alert().
 * @param {Object} person       A singular object.
 */
function displayPerson(person) {
    let personInfo = `First Name: ${person.firstName}\n`;
    personInfo += `Last Name: ${person.lastName}\n`;
    personInfo += `dob: ${person.dob}\n`;
    personInfo += `weight: ${person.weight}\n`;
    personInfo += `eye color: ${person.eyeColor}\n`;
    personInfo += `occupation: ${person.occupation}\n`;
    personInfo += `height: ${person.height}\n`;
    personInfo += `gender: ${person.gender}\n`;
    //! TODO #1a: finish getting the rest of the information to display //////////////////////////////////////////
    alert(personInfo);
}
// End of displayPerson()

/**
 * This function's purpose is twofold:
 * First, to generate a prompt with the value passed in to the question parameter.
 * Second, to ensure the user input response has been validated.
 * @param {String} question     A string that will be passed into prompt().
 * @param {Function} valid      A callback function used to validate basic user input.
 * @returns {String}            The valid string input retrieved from the user.
 */
function promptFor(question, valid) {
    do {
        var response = prompt(question).trim();
    } while (!response || !valid(response));
    return response;
}
// End of promptFor()

/**
 * This helper function checks to see if the value passed into input is a "yes" or "no."
 * @param {String} input        A string that will be normalized via .toLowerCase().
 * @returns {Boolean}           The result of our condition evaluation.
 */
function yesNo(input) {
    return input.toLowerCase() === "yes" || input.toLowerCase() === "no";
}
// End of yesNo()

/**
 * This helper function operates as a default callback for promptFor's validation.
 * Feel free to modify this to suit your needs.
 * @param {String} input        A string.
 * @returns {Boolean}           Default validation -- no logic yet.
 */
function chars(input) {
    return true; // Default validation only
}
// End of chars()

//////////////////////////////////////////* End Of Starter Code *//////////////////////////////////////////
// Any additional functions can be written below this line 👇. Happy Coding! 😁
