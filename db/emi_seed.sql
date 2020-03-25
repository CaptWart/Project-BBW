USE bodybywawa;

INSERT INTO users(auth0,firstname,lastname,email,createdAt,updatedAt) 
VALUES
("auth0|5e76b62cebaf590c6df9f811","david","chau","de@gmail.com",'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000'),
("auth0|534b62cebaf590c6df9f811","emi","clar","ec@gmail.com",'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000'),
("auth0|5e76b62456baf590c6df9f811","test","user","tu@gmail.com",'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000');

INSERT INTO fitnesses(workout,weight,sets,reps,time,day,userid,createdAt,updatedAt) VALUES
('Squats',135,1,8,1,1,1,'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000'),
('Squats',185,1,5,1,1,1,'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000'),
('Squats',205,1,3,2,1,1,'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000'),
('Squats',225,1,1,2,1,1,'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000'),
('Lunges',70,5,10,null,1,1,'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000'),
('Knee raises',null,1,30,null,1,1,'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000'),
('Russian Twist',null,3,20,null,1,1,'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000'),
('Core Holds',25,3,null,30,1,1,'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000'),
('Bench',105,3,10,null,2,1,'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000'),
('Dumbell Inclined bench',30,3,6,null,2,1,'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000'),
('V Leg lifts',null,3,10,null,2,1,'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000');

INSERT INTO food(item,calories,day,userid,createdAt,updatedAt) 
VALUES
('CL Tripleta',460,1,1,'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000'),
('Baked Classic Roll',330,1,1,'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000'),
('Swiss Cheese',180,1,1,'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000'),
('Mayo Ketchup',70,1,1,'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000'),
('Chicken Steak',180,1,1,'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000'),
('Wheat Classic Roll',320,1,1,'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000'),
('Pepper Jack Cheese',150,1,1,'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000'),
('Onion Sliced',15,1,1,'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000'),
('Tomato',20,1,1,'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000'),
('Strawberry Smoothie',390,1,1,'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000'),
('Protein Boost',30,1,1,'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000'),
('Cheese Steak',270,2,1,'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000'),
('Wheat Classic Roll',320,2,1,'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000'),
('Mayo Ketchup',210,2,1,'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000'),
('Onion Sliced',15,2,1,'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000'),
('Toasted Chicken',1445,2,1,'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000');

INSERT INTO money(item,price,day,userid,createdAt,updatedAt) 
VALUES
('Tripleta',5.79,1,1,'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000'),
('Coffee 16oz',1.65,1,1,'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000'),
('Chicken Steak',6.09,1,1,'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000'),
('Extra Chicken Steak',1.50,1,1,'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000'),
('Strawberry Smoothie 16oz',3.59,1,1,'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000'),
('Protein Boost',.99,1,1,'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000'),
('Chicken Steak',6.09,2,1,'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000'),
('Chicken Steak',6.09,2,1,'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000'),
('Caramelized Onions',1,2,1,'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000'),
('Extra Chicken Steak',1.50,2,1,'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000'),
('Right Pepperoni',1.35,1,1,'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000');