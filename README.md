------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Project Name 

Express: Note Taker

## Description

This is an application that can be used to write, save, and delete notes. This application will use an express backend to save and retrieve note data from a JSON file.


## User Story

AS A user, I want to be able to write and save notes

I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete

## Business Context

For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have 

written information available when needed.

## Acceptance Criteria

Application should allow users to create and save notes.

Application should allow users to view previously saved notes.

Application should allow users to delete previously saved notes.

## Screenshots

!["Start Page"](images/NoteTakerMain.png "Start page.")

!["Start Page"](images/NoteTakerNotes.png "Start page.")


## Guidlines 

*  Build the backend to an already created front-end and connect the two.

* The following HTML routes should be created:

  * GET `/notes` - Should return the `notes.html` file.

  * GET `*` - Should return the `index.html` file

* The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

* The following API routes should be created:

  * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

  * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.


## Installing

Clone the repository to your local development environment.

git clone : https://github.com/Nikstar-1/note-taker/tree/master

Navigate to the developer-profile-generator folder using the command prompt.

Run npm install to install all dependencies. To use the application locally, run node server.js in your CLI, and then open http://localhost:3000 in your preferred browswer. The Note 

Taker app is live on Heroku for you to use as well. 

## Deployed Link:

https://quiet-atoll-71792.herokuapp.com/notes


## Built With

JavaScript

NodeJS

Node Packages:

Express

## Authors

Rekha Kumari

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

