# Password_Generator

## Author: alligatormonday (Joseph Jepson)

## Description: 

Submission for my third assignment within the Full-Stack Web Development Coding Bootcamp via University of Arizona. 

In this assignment, I needed to create an application that generates a random password based on user-selected criteria. The assignment featured clean and polished HTML and CSS code to allow for the user interface to be responsive. My task was to use JavaScript to provide the user a randomly generated password with the following parameters:
* When the user clicks the 'Generate Password' button, the user is presented with a series of prompts.
* The user then selects which criteria to include in the password. 
    * Length of password. At least 8 characters and nor more than 128 characters. 
    * Character types; lowercase, uppercase, numeric, and/or special characters. 
* User input should be validated.
* Once all prompts have been answered, a password is generated that matches the selected criteria. 
* The password generated is displayed on the page. 

In my approach to this assignment, I first made an active and deliberate choice to commit to myself that _I would not_ spend more than 8-10 hours on this assignment. In assignments one and two, for this Bootcamp, I spent more time on completing and perfecting the assignment than I should have. Time management was very important to me, in addition to completing the _assignment criteria_ when submitting the homework. 

The first step I took in order to start this assignment was to begin **pseudo-coding** the process for how I wanted this application to work. I've left most of my pseudo-code in the JavaScript file for you to see how I was thinking through this. I left some of my _console-log_ as well. 

This was the first assignment where I meaningfully attempted to pseudo-code. Going through this process helped me organize my thoughts and in which order I ought to start. From there, I could break the process of creating the password generator into small pieces. 

I struggled a bit with validating the user input





# 03 JavaScript: Password Generator

Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

If you are unfamiliar with special characters, take a look at [some examples](https://www.owasp.org/index.php/Password_special_characters).

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

The following image demonstrates the application functionality:

![password generator demo](./Assets/03-javascript-homework-demo.png)

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -

