# _Note To Self_

#### _A webpage that allows users to to-do lists, 10-11-2018_

#### By _**William Kulha**_

## Description

_This is a webpage that I made to practice BDD and object-oriented JavasScript with learnhowtoprogram.com. The user inputs information about what they have on their to-do lists. The program creates objects based on that information and displays it for the user, allowing them to add and remove tasks as they go._

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
**Program collects user input** | Input: Wash Dishes, 15 minutes, Don't leave a single one in the sink! | Output: Task {workToDo: Wash Dishes, timeEstimate: 15 Minutes, noteToSelf: Don't leave a single one in the sink} |
**Program creates a clickable entry below the form for a quick reference of what there is to do** | Input: Task {workToDo: Wash Dishes, timeEstimate: 15 Minutes, noteToSelf: Don't leave a single one in the sink}  | Output: Wash Dishes |
**If the user clicks the entry, all the details of the entry appear to the right of the form** | Wash Dishes.click| Output: Wash Dishes, Time: 15 minutes, Note to Self: Don't leave a single one in the sink! |
**If the user double clicks an entry in the list, that entry is removed** | Input: Wash Dishes.dblclick | Output: this.remove() |


## Setup/Installation Requirements

* _Download or clone this repo <code>$git clone https://github.com/zangiboy/note-to-self.git</code>_
* _Navigate to the folder where you saved the directory._
* _Open with the browser of your choice and enjoy_


## Known Bugs

_When user double clicks to close an entry, the entry opens to the right with expanded details. An inline button might resolve the issue_

## Support and contact details

_If you have any questions or advice, or if you find a bug, please email me at kulha.william@gmail.com_

## Technologies Used

_javascript_\
_jQuery_\
_Bootstrap 3_

### License

*This To-do List application is licensed under the MIT License*

Copyright (c) 2018 **_William Kulha_**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
