# CRUD
In this crud application I use react for frontend and node js for backend.
The database used is sql.
After getting the whole folder in you pc.
First open code in vs code and follow given steps-
## While moving in front folder by typing cd front in terminal then 
* Run app.js in terminal.
* Write npm init to download all node modules.
* Then write npm start.
## After that setup sql database in your mysql terminal after logging write following command
* create database movie_system;
* use movie_system;
* CREATE TABLE movie (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255),
    genre varchar(255),
    rating int,
    budget int,
    PRIMARY KEY(id)
);
## In second terminal move to back folder by typing cd back in that second terminal
* In db.js write the password of your mysql databse in place of pwd and in database name write name of your database ie movie_system
* Write npm init to download all node modules.
* Then write node db.js
### Now your environment is setup 


