exports.homePage = function (d) {
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>To-Do App</title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
            <style>
                 /* Custom styles go here */
                body {
                    margin: 0;
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                }
                
                .main-content {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    margin: 64px 0;
                    padding: 0 32px;
                }
                
                .left-column {
                    width: 100%;
                    margin-bottom: 32px;
                }
                
                .right-column {
                    width: calc(50% - 16px);
                }
                
                h2 {
                    font-size: 24px;
                    font-weight: bold;
                    margin-top: 0;
                }
                    
                ul {
                    list-style: none;
                    padding-left: 0;
                    margin-top: 0;
                }
                    
                li {
                    margin: 12px 0;
                }
                
                li span {
                    display: inline-block;
                    width: calc(100% - 32px);
                }

                li form {
                    display: inline-block;
                }
            
                li button {
                    background-color: white;
                    border: none;
                    color: black;
                    padding: 8px 16px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 16px;
                    margin-left: 16px;
                    margin-top: 8px;
                    cursor: pointer;
                    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
                }
        
                li button:hover {
                    background-color: #FF5733 !important;
                    color: #fff !important;
                    text-align: center;
                }
    
                .w3-teal {
                    background-color: #FF5733 !important;
                    color: #fff !important;
                    text-align: center;
                }

                .w3-half {
                    width: 50%;
                    float: left;
                }

                .done {
                    background-color: #fff;
                }
                
                .formcontainer {
                    width: 50%; /* or a specific pixel value */
                    margin: 0 auto;
                    text-align: center;
                }
            </style>
        </head>
        <body>
            <header class="w3-container w3-teal">
                <h1>To-Do App</h1>
            </header>
            
            <div class="w3-container formcontainer w3-padding-32">
                <h2>Add New Task</h2>

                <form class="w3-container w3-card-4 w3-light-grey w3-text-teal w3-margin" action="/toDo" method="POST">
                    <div class="w3-row w3-section">
                        <div class="w3-col" style="width:50px"><i class="w3-xxlarge fa fa-calendar"></i></div>
                        <div class="w3-rest">
                            <label class="w3-text-teal w3-text-black"><b>Deadline</b></label>
                            <input class="w3-input w3-border w3-round-large" type="date" id="deadline" name="deadline" required>
                        </div>
                    </div>

                    <div class="w3-row w3-section">
                        <div class="w3-col" style="width:50px"><i class="w3-xxlarge fa fa-user"></i> </div>
                    
                        <div class="w3-rest">
                            <label class="w3-text-teal w3-text-black"><b>Person</b></label>
                            <input class="w3-input w3-border w3-round-large" type="text" id="person" name="person" required>
                        </div>
                    </div>

                    <div class="w3-row w3-section">
                        <div class="w3-col" style="width:50px"><i class="w3-xxlarge fa fa-pencil"></i></div>
                        <div class="w3-rest">
                            <label class="w3-text-teal w3-text-black"><b>Description</b></label>
                            <textarea class="w3-input w3-border w3-round-large" type="text" id="description" name="description" required></textarea>
                        </div>
                    </div>
                    <div class="w3-row w3-section">
                        <div class="w3-rest">
                            <button class="w3-btn w3-teal w3-round-large w3-block" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="w3-row-padding w3-padding-64 main-content">
                <div class="w3-half w3-container">
                    <h2>To-Do List</h2>
                    <ul id="todo-list">
                    `
    for (var i = 0; i < d.length; i++) {
        if (d[i].done == false) {
            var concluded = new Date().toISOString().slice(0, 10);
            pagHTML += `
                    <div class="w3-container w3-card-4 w3-light-grey w3-margin">
                        <li>

                            <span><b>Executer</b>: ${d[i].person}</span>
                            <span><b>Deadline</b>: ${d[i].deadline}</span>
                            <span><b>Description</b>: ${d[i].description}</span>

                            <form action="/done" method="POST">
                                    <input class="w3-hide" type="text" name="id" value="${d[i].id}">
                                    <input class="w3-hide" type="text" name="date" value="${concluded}">
                                    <button type="submit" >Done</button>
                            </form>

                            <form action="/delete" method="POST">
                                <input type="hidden" name="id" value="${d[i].id}">
                                <button type="submit">Delete</button>
                            </form>

                        </li>
                    </div>
                        `
        }
    }

        pagHTML += `
                    </ul>
                </div>
                <div class="w3-half w3-container">
                    <h2>Done List</h2>
                    <ul id="done-list">
                    `
                    for (var i = 0; i < d.length; i++) {
                        if (d[i].done == true) {
                            pagHTML += `
                                    <div class="w3-container w3-card-4 w3-light-grey w3-margin">
                                        <li>
                                            <span><b>Executer: </b>: ${d[i].person}</span>
                                            <span><b>Deadline: </b>: ${d[i].deadline}</span>
                                            <span><b>Description: </b>: ${d[i].description}</span>
                                            <span><b>Concluded: </b>: ${d[i].date}</span>
                                            
                                            <form action="/notdone" method="POST">
                                                <input type="hidden" name="id" value="${d[i].id}">
                                                <button type="submit">Not Done</button>
                                            </form>
                                            
                                            <form action="/delete" method="POST">
                                                <input type="hidden" name="id" value="${d[i].id}">
                                                <button type="submit">Delete</button>
                                            </form>
                                        </li>
                                    </div>
                                    `
                        }
                    }
                    
                    pagHTML +=
                    `
                    </ul>
                </div>
            </div>
            <footer class="w3-container w3-teal">
                <p>&copy; 2023 To-Do App</p>
            </footer>
        </body>
    </html>
`   
    return pagHTML;
}

