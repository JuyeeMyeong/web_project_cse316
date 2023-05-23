-- User Table --

INSERT INTO User (student_id, first_name, last_name, password, courses) 
        VALUES (113659563, "Harry", "Chung", "", "");
INSERT INTO User (student_id, first_name, last_name, password, courses) VALUES 
    (114631693, "Matt", "Lee", "", "");
INSERT INTO User (student_id, first_name, last_name, password, courses) VALUES 
    (113539682, "SUE", "Park", "", "");
INSERT INTO User (student_id, first_name, last_name, password, courses) VALUES 
    (123456789, 'John', 'Doe', "", "");
INSERT INTO User (student_id, first_name, last_name, password, courses) VALUES 
    (234567891, 'Jane', 'Doe', "", "");
INSERT INTO User (student_id, first_name, last_name, password, courses) VALUES 
    (345678912, 'Bob', 'Smith', "", "");
INSERT INTO User (student_id, first_name, last_name, password, courses) VALUES 
    (456789123, 'Alice', 'Johnson', "", "");
INSERT INTO User (student_id, first_name, last_name, password, courses) VALUES 
    (567891234, 'Charlie', 'Brown', "", "");
INSERT INTO User (student_id, first_name, last_name, password, courses) VALUES 
    (678912345, 'Lucy', 'Van Pelt', "", "");
INSERT INTO User (student_id, first_name, last_name, password, courses) VALUES 
    (789123456, 'Linus', 'Van Pelt', "", "");
INSERT INTO User (student_id, first_name, last_name, password, courses) VALUES 
    (891234567, 'Sally', 'Brown', "", "");
INSERT INTO User (student_id, first_name, last_name, password, courses) VALUES 
    (912345678, 'Marcie', 'Carlin', "", "");
INSERT INTO User (student_id, first_name, last_name, password, courses) VALUES 
    (123456780, 'Peppermint Patty', 'Reichardt', "", "");


-- Course Table --
INSERT INTO Courses (course_id, course_name)
       VALUES ("CSE101", "Computer Science Principles");

INSERT INTO Courses (course_id, course_name)
       VALUES ("CSE114", "Intro to Object-Oriented Programming");

INSERT INTO Courses (course_id, course_name)
       VALUES ("CSE214", "Data Structures");

INSERT INTO Courses (course_id, course_name)
       VALUES ("CSE215", "Foundation of Comp Science");

INSERT INTO Courses (course_id, course_name)
       VALUES ("CSE216", "Programming Abstractions");

INSERT INTO Courses (course_id, course_name)
       VALUES ("CSE220", "System Fundamentals I");

INSERT INTO Courses (course_id, course_name)
       VALUES ("CSE300", "Technical Communications");

INSERT INTO Courses (course_id, course_name)
       VALUES ("CSE303", "Intro to the Theory of Computation");

INSERT INTO Courses (course_id, course_name)
       VALUES ("CSE304", "Compiler Design");

INSERT INTO Courses (course_id, course_name)
       VALUES ("CSE310", "Computer Networks");

INSERT INTO Courses (course_id, course_name)
       VALUES ("CSE316", "Fundamentals of Software Development");

INSERT INTO Courses (course_id, course_name)
       VALUES ("CSE320", "System Fundamentals II");

INSERT INTO Courses (course_id, course_name)
       VALUES ("CSE352", "Altificial Intelligence");
       
INSERT INTO Courses (course_id, course_name)
       VALUES ("CSE354", "Natural Language Processing");

INSERT INTO Courses (course_id, course_name)
       VALUES ("CSE373", "Analysis of Algorithms");

INSERT INTO Courses (course_id, course_name)
       VALUES ("CSE416", "Software Engineering");


-- Prerequsite Table --
INSERT INTO Prerequisites (course_number, prerequisite)
       VALUES (101, "");
INSERT INTO Prerequisites (course_number, prerequisite)
       VALUES (114, "");
INSERT INTO Prerequisites (course_number, prerequisite)
       VALUES (214, "");
INSERT INTO Prerequisites (course_number, prerequisite)
       VALUES (215, "");
INSERT INTO Prerequisites (course_number, prerequisite)
       VALUES (216, "");
INSERT INTO Prerequisites (course_number, prerequisite)
       VALUES (220, "");
INSERT INTO Prerequisites (course_number, prerequisite)
       VALUES (300, "");
INSERT INTO Prerequisites (course_number, prerequisite)
       VALUES (303, "");
INSERT INTO Prerequisites (course_number, prerequisite)
       VALUES (304, "");
INSERT INTO Prerequisites (course_number, prerequisite)
       VALUES (310, "");
INSERT INTO Prerequisites (course_number, prerequisite)
       VALUES (316, "");
INSERT INTO Prerequisites (course_number, prerequisite)
       VALUES (320, "");
INSERT INTO Prerequisites (course_number, prerequisite)
       VALUES (352, "");
INSERT INTO Prerequisites (course_number, prerequisite)
       VALUES (354, "");
INSERT INTO Prerequisites (course_number, prerequisite)
       VALUES (373, "");
INSERT INTO Prerequisites (course_number, prerequisite)
       VALUES (416, "");