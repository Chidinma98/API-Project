# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Friday| Project Description/Wire-frames/Project Aprroval | Incomplete
|Saturday| Wireframes / Priority Matrix / Functional Components | Incomplete
|Sunday| React Components/API Calls| Incomplete
|Monday|  | Incomplete
|Tuesday|  | Incomplete
|Wednesday| | Incomplete
|Thursday|  | Incomplete


## Project Description
An e-passport

Keeps track of all the places, you have been to and all the places you would like to Go. You click on a localtion in the map and it brings up information about that place. An Online Passport..Keps tracks of all the places you've been and would like to go.

API Link: https://restcountries.eu/rest/v2/all

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.

## Priority Matrix

Be able to provide information to users based on the countries the clicked on.
Create a component that stores info of all the places a person would like to go.
Create another component of all the places they have been.

### MVP/PostMVP - 5min



#### SAMPLE.....
#### MVP 


Be able to provide information to users based on the countries the clicked on.
Create a component that stores info of all the places a person would like to go.
Create another component of all the places they have been.

#### PostMVP 

Have People be able to upload pictures.


Allow people to link it to their social Media.

## React Architectural Design

Define the the React components and the architectural design of your app.

#### [SAMPLE FROM A MAP BASED PROJECT](https://res.cloudinary.com/dvjtpejbw/image/upload/v1540221204/20181022_111216.jpg)

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

#### SAMPLE.....
| Component | Description | 
| --- | :---: |  
| Header | This will render the header include the nav | 
| Footer | This will render the header include the nav | 
| WillTravel| Renders user information on all the places that they've indicated they would like to go. | 
|  Traveled | Render user information on all the places they've traveled to. | 
|  Map | Renders information about that country and users can put it on a traled or would like to travel bucket | 



#### SAMPLE.....
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| WillTravel| H | 3hrs| 3.5hrs |
|Traveled | H | 7hrs| 2.5hrs |
|  Map | H | 6hrs| 5hrs | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 
 
 #### SAMPLE.....
| Library | What it Does | 
| --- | :---: |  
| Bootstrap | Used to help style my application | 
| Giphy API | Used to get gifs to use | 


## Code Snippet

https://restcountries.eu/#api-endpoints-all


[{
    "name": "Colombia",
    "topLevelDomain": [".co"],
    "alpha2Code": "CO",
    "alpha3Code": "COL",
    "callingCodes": ["57"],
    "capital": "Bogotá",
    "altSpellings": ["CO", "Republic of Colombia", "República de Colombia"],
    "region": "Americas",
    "subregion": "South America",
    "population": 48759958,
    "latlng": [4.0, -72.0],
    "demonym": "Colombian",
    "area": 1141748.0,
    "gini": 55.9,
    "timezones": ["UTC-05:00"],
    "borders": ["BRA", "ECU", "PAN", "PER", "VEN"],
    "nativeName": "Colombia",
    "numericCode": "170",
    "currencies": [{
        "code": "COP",
        "name": "Colombian peso",
        "symbol": "$"
    }],
    "languages": [{
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
    }],
    "translations": {
        "de": "Kolumbien",
        "es": "Colombia",
        "fr": "Colombie",
        "ja": "コロンビア",
        "it": "Colombia",
        "br": "Colômbia",
        "pt": "Colômbia"
    },
    "flag": "https://restcountries.eu/data/col.svg",
    "regionalBlocs": [{
        "acronym": "PA",
        "name": "Pacific Alliance",
        "otherAcronyms": [],
        "otherNames": ["Alianza del Pacífico"]
    }, {
        "acronym": "USAN",
        "name": "Union of South American Nations",
        "otherAcronyms": ["UNASUR", "UNASUL", "UZAN"],
        "otherNames": ["Unión de Naciones Suramericanas", "União de Nações Sul-Americanas", "Unie van Zuid-Amerikaanse Naties", "South American Union"]
    }],
    "cioc": "COL"
}]
 

#### SAMPLE.....
```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

#### SAMPLE.....
| Original Plan | Outcome | 
| --- | :---: |  
| Have one Book component | Split that component into BookInfo and BookInteraction as the component grew too complicated | 

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object

