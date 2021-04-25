1.The Story

Your friend, Lisa, finally
made her lifelong dream come true and started her own bakery shop a few months
ago. As the business was doing really well, and the workload had been
increasing significantly, Lisa wanted to have a website showing an overview of
the shop’s products and employees. At first, Lisa started developing the
website herself but did not have enough time to complete everything because of
her busy schedule. Knowing that you have experience in software development,
she has asked for your help to finish and modify some things on the website. 

2.Setup

To
start this application, you need to install Node.js (version 12+) from https://nodejs.org/en/download/.
Once
installed, go to the bakery-shop directory and run the “npm install” command to
install the project dependencies, then run “npm start” to begin the
application. 
After
the last command, the application should open in your browser at http://localhost:4200/. 

3.Assignment

Start
by familiarizing yourself with the application and its code. Lisa has left some
TODOs in the code to make it easier for you. 



3.1 At
the moment, the “Employees” view displays static data. You need to make it load
and
display data from the backend service and add a column for an avatar (note that
the avatar should be displayed as an image). The URL to load data is https://reqres.in/api/users. (More info on HTTP requests in Angular: https://angular.io/guide/http).

The
data you receive will be in the format you see below:
  {
      "page": "2", 
      "per_page": 2,
      "total": 12,
      "total_pages": 6,
      "data": [
          {
 "id": 3,
 "email": "emma.wong@reqres.in",
 "first_name": "Emma",
 "last_name": "Wong",
 "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
},
{            
  "id": 4,
  "email": "eve.holt@reqres.in",
  "first_name": "Eve",
  "last_name": "Holt",
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
}
]  }

3.2.   
The “Add” and “Delete” buttons of the “Employees” view do not work. Add an option to add and delete an employee from the list. 

a. The backend APIs are not ready yet, so just
add/remove the employee from the table.

b. Add the following validations to the new
employee input form (https://angular.io/api/forms/Validators):

i.    ID: required and contains only numbers
                                
ii.    Name: required and contains only letters
                               
iii.    Email: required and matches a valid email pattern
                       
iv.    Avatar: required

Bonus task: Display appropriate user error messages below the input fields. 

3.3  Lisa wants to make specific table fields
stand out more. Change the following column styles

·Set the font weight of the first table column to bold
across the whole application.

· Display the quantity of the product in red if it is fewer than three (3) pieces. 

3.4. Currently, it takes time to understand which
products are the least and most expensive. Order the products by
price from lowest to highest. 



 



 



 



 
