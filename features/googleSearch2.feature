Feature: Search on Gooogle home page

@smoke
Scenario Outline: search any in google search page

Given Open <URL>
When enter any <SearchText> to search on google page
Then user is able to get correct result
Examples:
| URL | SearchText|
|https://www.google.com| webdriverio|