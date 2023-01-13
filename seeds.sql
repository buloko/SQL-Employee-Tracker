INSERT INTO department (name)
VALUES("Administration/operations"),
("Research and Devlopment"),
("Marketing and Sales"),
("Human resources"),
("Legal"),
("Accounting and Finance")

INSERT INTO roles (title,salary, department_id,)
VALUES("Chief Executive Officer",800000, 1),
("Chief Operating Officer",400000, 2),
("Chief Information Ofiicer",300000,3)
("Chief Technology Officer",300000, 4),
("President",100000,5),
("Executive Assistant", 82000, 6),
("Market Manager", 140000, 7),
("Product Manager", 120000, 8),
("Project Manger", 100000, 9),
("Marketing Specialist", 70000,10),
("Accountant" 60000,11),
("Sales Representative",70000,12),
("Customer Service Representative",50000,12)


INSERT INTO employees (first_name,last_name,role_id,manager_id)
VALUES("Mattie", "Rhea", 1, NULL),
("Leighton","Jeana", 2, 1),
("Lance","Vera", 3, 1 ),
("Brannon", "Gaz", 4, 3),
("Garret", "Ericka", 5, NULL),
("Maleah","Conner", 6,5 ),
("Tamsen", "Jensen",7,1),
("Adella", "Dene", 8, 2),
("Orrell" "Deirdre", 9, 2),
("Christiana", "Willard", 10,7),
("Clarence", "Baxter", 11, 2),
("Liberty", "Breanna", 12,1 ),
("Emery", "Stacia", 13, 1),