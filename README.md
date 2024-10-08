# Work Day Scheduler
Work Day Scheduler is a simple calendar application that allows users to schedule tasks for a typical 9-to-5 workday. This application enables users to add tasks for each hour of the workday, save their input to local storage, and view tasks that are color-coded based on whether the time slot is in the past, present, or future.

## Table of Contents
- [Description](#Description)
- [Features](#Features)
- [Technologies](#Technologies)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)

## Description
The Work Day Scheduler provides a clean and easy interface for users to track their workday tasks. It dynamically displays the current date and time, color-codes time blocks to represent whether the time is in the past, present, or future, and allows users to save tasks to local storage so they persist even after the page is refreshed.

## Features
Current Date Display: Shows the current date at the top of the page.
Hourly Task Blocks: Provides an interface with time blocks for each hour of a standard workday (9 AM - 5 PM).
Color Coding: The time blocks are color-coded to represent past, present, and future:
Gray: Past time block.
Red: Current hour time block.
Green: Future time block.
Local Storage Integration: User tasks are saved locally, so they persist even after refreshing the browser.

## Technologies
HTML5
CSS
Bootstrap for styling
Custom styles in styles.css
JavaScript
jQuery for DOM manipulation and event handling
Day.js for date and time formatting
Local Storage: To store tasks for each hour

## Installation
- Clone the repository:
`git clone https://github.com/astro0725/work-day-scheduler.git`
- Navigate to the project directory:
`cd work-day-scheduler`
- Open the index.html file in a web browser to run the scheduler locally.
- Alternatively, you can access the deployed version of the project directly [here](https://astro0725.github.io/weather-dash/).

## Usage
How the Website Works:
- Current Date Display: When you load the website, the current date will be displayed at the top of the page.
- Task Input: Each hour block has a text area where you can enter a task. Type your task in the corresponding time block for that hour.
- Saving Tasks: Once you've entered your task, click the save button (a floppy disk icon) to store the task in local storage. This ensures your tasks remain on the page even after refreshing the browser.
- Color Coding: The time blocks are color-coded based on the current time:
  - Gray (Past): Hours that have already passed.
  - Red (Present): The current hour.
  - Green (Future): Upcoming hours.
- Loading Saved Tasks: Any tasks saved in local storage will automatically be loaded into the corresponding time blocks when you refresh or revisit the page.

## License
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg) <br/>
This project is licensed under the MIT license. For more details, see [this link](https://opensource.org/licenses/MIT).
