-- Use data.sql
-- <Mysql command line client>
-- source <data.sql path>


CREATE DATABASE IF NOT EXISTS courseman;

USE courseman;


-- User Table --
CREATE TABLE IF NOT EXISTS User ( id INT PRIMARY KEY AUTO_INCREMENT, student_id VARCHAR(50) NOT NULL UNIQUE, first_name VARCHAR(100), last_name VARCHAR(100), password VARCHAR(1024), courses JSON, currEnrolledCourse JSON)

INSERT INTO User (student_id, first_name, last_name, password, courses, currEnrolledCourse) 
        VALUES (113659563, "Harry", "Chung", "e71b258f98d6b92aef96ebb947b7843a199973603961c66b1f91d92b4c335e33",  '["CSE101", "CSE114"]', '[]');
INSERT INTO User (student_id, first_name, last_name, password, courses, currEnrolledCourse) VALUES 
    (114631693, "Matt", "Lee", "a24136aef3bad4fd8ddb24eundefined195a036283480eb5983e2350ede94e41863ee", '[]', '[]');
INSERT INTO User (student_id, first_name, last_name, password, courses, currEnrolledCourse) VALUES 
    (113539682, "SUE", "Park", "31c41d99fb6d906bf76d0c2a7406d00125d1aeff67bfa8f276d8e05dda0cac5", '[]', '[]');
INSERT INTO User (student_id, first_name, last_name, password, courses, currEnrolledCourse) VALUES 
    (123456789, 'John', 'Doe', "596cd873e1ebf0c7undefined9317c022b0908426f729842b395012269114bc51cfc509", '[]', '[]');
INSERT INTO User (student_id, first_name, last_name, password, courses, currEnrolledCourse) VALUES 
    (234567891, 'Jane', 'Doe', "93f28e576bb68bba43aea3fff519fec3ac029ca4c27fc3984488bee030597960", '[]', '[]');
INSERT INTO User (student_id, first_name, last_name, password, courses, currEnrolledCourse) VALUES 
    (345678912, 'Bob', 'Smith', "3eb1e8ede6397f63f8f8df299678be1b3ee3bd1dd58e7fb3a0c338a96da8e6a6", '[]', '[]');
INSERT INTO User (student_id, first_name, last_name, password, courses, currEnrolledCourse) VALUES 
    (456789123, 'Alice', 'Johnson', "f2865342ddfac10e283d5a7ce609877e779ea43b260536f44d456fdcfc1c0", '[]', '[]');
INSERT INTO User (student_id, first_name, last_name, password, courses, currEnrolledCourse) VALUES 
    (567891234, 'Charlie', 'Brown', "bffea713undefined1fadcaefb581851aa02364d34b8586undefined3bb39b215f4229undefined3bba52", '[]', '[]');
-- INSERT INTO User (student_id, first_name, last_name, password, courses) VALUES 
--     (678912345, 'Lucy', 'Van Pelt', "", "");
-- INSERT INTO User (student_id, first_name, last_name, password, courses) VALUES 
--     (789123456, 'Linus', 'Van Pelt', "", "");
-- INSERT INTO User (student_id, first_name, last_name, password, courses) VALUES 
--     (891234567, 'Sally', 'Brown', "", "");
-- INSERT INTO User (student_id, first_name, last_name, password, courses) VALUES 
--     (912345678, 'Marcie', 'Carlin', "", "");
-- INSERT INTO User (student_id, first_name, last_name, password, courses) VALUES 
--     (123456780, 'Peppermint Patty', 'Reichardt', "", "");


-- Course Table --
CREATE TABLE IF NOT EXISTS Courses ( id INT PRIMARY KEY AUTO_INCREMENT, course_id VARCHAR(255), course_name VARCHAR(255), leftSeat INT)

INSERT INTO Courses (course_id, course_name, leftSeat)
       VALUES ("CSE101", "Computer Science Principles", 40);

INSERT INTO Courses (course_id, course_name, leftSeat)
       VALUES ("CSE114", "Intro to Object-Oriented Programming", 40);

INSERT INTO Courses (course_id, course_name, leftSeat)
       VALUES ("CSE214", "Data Structures", '[]', 40);

INSERT INTO Courses (course_id, course_name, leftSeat)
       VALUES ("CSE215", "Foundation of Comp Science", '[]', 40);

INSERT INTO Courses (course_id, course_name, leftSeat)
       VALUES ("CSE216", "Programming Abstractions", 40);

INSERT INTO Courses (course_id, course_name, leftSeat)
       VALUES ("CSE220", "System Fundamentals I", 40);

INSERT INTO Courses (course_id, course_name, leftSeat)
       VALUES ("CSE300", "Technical Communications", 40);

INSERT INTO Courses (course_id, course_name, leftSeat)
       VALUES ("CSE303", "Intro to the Theory of Computation", 40);

INSERT INTO Courses (course_id, course_name, leftSeat)
       VALUES ("CSE304", "Compiler Design", 40);

INSERT INTO Courses (course_id, course_name, leftSeat)
       VALUES ("CSE310", "Computer Networks", 40);

INSERT INTO Courses (course_id, course_name, leftSeat)
       VALUES ("CSE316", "Fundamentals of Software Development", 40);

INSERT INTO Courses (course_id, course_name, leftSeat)
       VALUES ("CSE320", "System Fundamentals II", 40);

INSERT INTO Courses (course_id, course_name, leftSeat)
       VALUES ("CSE352", "Altificial Intelligence", 40);
       
INSERT INTO Courses (course_id, course_name, leftSeat)
       VALUES ("CSE354", "Natural Language Processing", 40);

INSERT INTO Courses (course_id, course_name, leftSeat)
       VALUES ("CSE373", "Analysis of Algorithms", 40);

INSERT INTO Courses (course_id, course_name, leftSeat)
       VALUES ("CSE416", "Software Engineering", 40);

-- Prerequsite Table --
CREATE TABLE IF NOT EXISTS Prerequisites (id INT PRIMARY KEY AUTO_INCREMENT, course_id VARCHAR(255), prerequisite JSON)

INSERT INTO Prerequisites (course_id, prerequisite)
       VALUES ("CSE101", '[]');
INSERT INTO Prerequisites (course_id, prerequisite)
       VALUES ("CSE114", '["CSE101"]');
INSERT INTO Prerequisites (course_id, prerequisite)
       VALUES ("CSE214", '["CSE114"]');
INSERT INTO Prerequisites (course_id, prerequisite)
       VALUES ("CSE215", '[]');
INSERT INTO Prerequisites (course_id, prerequisite)
       VALUES ("CSE216", '["CSE214"]');
INSERT INTO Prerequisites (course_id, prerequisite)
       VALUES ("CSE220", '["CSE214"]');
INSERT INTO Prerequisites (course_id, prerequisite)
       VALUES ("CSE300", '[]');
INSERT INTO Prerequisites (course_id, prerequisite)
       VALUES ("CSE303", '["CSE214"]');
INSERT INTO Prerequisites (course_id, prerequisite)
       VALUES ("CSE304", '["CSE216", "CSE 220", "CSE 303"]');
INSERT INTO Prerequisites (course_id, prerequisite)
       VALUES ("CSE310", '["CSE214"]');
INSERT INTO Prerequisites (course_id, prerequisite)
       VALUES ("CSE316", '["CSE216"]');
INSERT INTO Prerequisites (course_id, prerequisite)
       VALUES ("CSE320", '["CSE220"]');
INSERT INTO Prerequisites (course_id, prerequisite)
       VALUES ("CSE352", '["CSE216"]');
INSERT INTO Prerequisites (course_id, prerequisite)
       VALUES ("CSE354", '[]');
INSERT INTO Prerequisites (course_id, prerequisite)
       VALUES ("CSE373", '["CSE214"]');
INSERT INTO Prerequisites (course_id, prerequisite)
       VALUES ("CSE416", '["CSE316"]');