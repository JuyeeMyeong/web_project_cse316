-- Use data.sql
-- <Mysql command line client>
-- source <data.sql path>


-- User Table --

INSERT INTO User (student_id, first_name, last_name, password, courses) 
        VALUES (113659563, "Harry", "Chung", "e71b258f98d6b92aef96ebb947b7843a199973603961c66b1f91d92b4c335e33",  '["CSE101", "CSE114"]');
INSERT INTO User (student_id, first_name, last_name, password, courses) VALUES 
    (114631693, "Matt", "Lee", "a24136aef3bad4fd8ddb24eundefined195a036283480eb5983e2350ede94e41863ee", '[]');
INSERT INTO User (student_id, first_name, last_name, password, courses) VALUES 
    (113539682, "SUE", "Park", "31c41d99fb6d906bf76d0c2a7406d00125d1aeff67bfa8f276d8e05dda0cac5", '[]');
INSERT INTO User (student_id, first_name, last_name, password, courses) VALUES 
    (123456789, 'John', 'Doe', "596cd873e1ebf0c7undefined9317c022b0908426f729842b395012269114bc51cfc509", '[]');
INSERT INTO User (student_id, first_name, last_name, password, courses) VALUES 
    (234567891, 'Jane', 'Doe', "93f28e576bb68bba43aea3fff519fec3ac029ca4c27fc3984488bee030597960", '[]');
INSERT INTO User (student_id, first_name, last_name, password, courses) VALUES 
    (345678912, 'Bob', 'Smith', "3eb1e8ede6397f63f8f8df299678be1b3ee3bd1dd58e7fb3a0c338a96da8e6a6", '[]');
INSERT INTO User (student_id, first_name, last_name, password, courses) VALUES 
    (456789123, 'Alice', 'Johnson', "f2865342ddfac10e283d5a7ce609877e779ea43b260536f44d456fdcfc1c0", '[]');
INSERT INTO User (student_id, first_name, last_name, password, courses) VALUES 
    (567891234, 'Charlie', 'Brown', "bffea713undefined1fadcaefb581851aa02364d34b8586undefined3bb39b215f4229undefined3bba52", '[]');
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