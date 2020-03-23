-- Seed for users --
INSERT INTO users(auth0,firstname,lastname,email,createdAt,updatedAt) 
VALUES("auth0|5e76b62cebaf590c6df9f811","david","chau","de@gmail.com",'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000');
INSERT INTO users(auth0,firstname,lastname,email,createdAt,updatedAt) 
VALUES("auth0|534b62cebaf590c6df9f811","emi","clar","ec@gmail.com",'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000');
INSERT INTO users(auth0,firstname,lastname,email,createdAt,updatedAt) 
VALUES("auth0|5e76b62456baf590c6df9f811","test","user","tu@gmail.com",'1000-01-01 00:00:00.000000','1000-01-01 00:00:00.000000');

-- Fitness for user 1 --
INSERT INTO fitnessess(workout,weight,sets,reps,time,day,userid) VALUES('Squats',135,1,8,'',1,1);
INSERT INTO fitnessess(workout,weight,sets,reps,time,day,userid) VALUES('Squats',185,1,5,'',1,1);
INSERT INTO fitnessess(workout,weight,sets,reps,time,day,userid) VALUES('Squats',205,1,3,'',1,1);
INSERT INTO fitnessess(workout,weight,sets,reps,time,day,userid) VALUES('Squats',225,1,1,'',1,1);
INSERT INTO fitnessess(workout,weight,sets,reps,time,day,userid) VALUES('Lunges',70,5,10,null,1,1);
INSERT INTO fitnessess(workout,weight,sets,reps,time,day,userid) VALUES('Knee raises',null,1,30,null,1,1);
INSERT INTO fitnessess(workout,weight,sets,reps,time,day,userid) VALUES('Russian Twist',null,3,20,null,1,1);
INSERT INTO fitnessess(workout,weight,sets,reps,time,day,userid) VALUES('Core Holds',25,3,null,30,1,1);
INSERT INTO fitnessess(workout,weight,sets,reps,time,day,userid) VALUES('Bench',105,3,10,null,2,1);
INSERT INTO fitnessess(workout,weight,sets,reps,time,day,userid) VALUES('Dumbell Inclined bench',30,3,6,null,2,1);
INSERT INTO fitnessess(workout,weight,sets,reps,time,day,userid) VALUES('V Leg lifts',null,3,10,null,2,1);

-- Food for user 1 --
INSERT INTO food(item,calories,day,userid) VALUES('CL Tripleta',460,1,1);
INSERT INTO food(item,calories,day,userid) VALUES('Baked Classic Roll',330,1,1);
INSERT INTO food(item,calories,day,userid) VALUES('Swiss Cheese',180,1,1);
INSERT INTO food(item,calories,day,userid) VALUES('Mayo Ketchup',70,1,1);
INSERT INTO food(item,calories,day,userid) VALUES('Chicken Steak',180,1,1);
INSERT INTO food(item,calories,day,userid) VALUES('Wheat Classic Roll',320,1,1);
INSERT INTO food(item,calories,day,userid) VALUES('Pepper Jack Cheese',150,1,1);
INSERT INTO food(item,calories,day,userid) VALUES('Onion Sliced',15,1,1);
INSERT INTO food(item,calories,day,userid) VALUES('Tomato',20,1,1);
INSERT INTO food(item,calories,day,userid) VALUES('Strawberry Smoothie',390,1,1);
INSERT INTO food(item,calories,day,userid) VALUES('Protein Boost',30,1,1);
INSERT INTO food(item,calories,day,userid) VALUES('Cheese Steak',270,2,1);
INSERT INTO food(item,calories,day,userid) VALUES('Wheat Classic Roll',320,2,1);
INSERT INTO food(item,calories,day,userid) VALUES('Mayo Ketchup',210,2,1);
INSERT INTO food(item,calories,day,userid) VALUES('Onion Sliced',15,2,1);
INSERT INTO food(item,calories,day,userid) VALUES('Toasted Chicken',1445,2,1);

-- Money for user 1 --
INSERT INTO money(item,price,day,userid) VALUES('Tripleta',5.79,1,1);
INSERT INTO money(item,price,day,userid) VALUES('Coffee 16oz',1.65,1,1);
INSERT INTO money(item,price,day,userid) VALUES('Chicken Steak',6.09,1,1);
INSERT INTO money(item,price,day,userid) VALUES('Extra Chicken Steak',1.50,1,1);
INSERT INTO money(item,price,day,userid) VALUES('Strawberry Smoothie 16oz',3.59,1,1);
INSERT INTO money(item,price,day,userid) VALUES('Protein Boost',.99,1,1);
INSERT INTO money(item,price,day,userid) VALUES('Chicken Steak',6.09,2,1);
INSERT INTO money(item,price,day,userid) VALUES('Chicken Steak',6.09,2,1);
INSERT INTO money(item,price,day,userid) VALUES('Caramelized Onions',1,2,1);
INSERT INTO money(item,price,day,userid) VALUES('Extra Chicken Steak',1.50,2,1);
INSERT INTO money(item,price,day,userid) VALUES('Right Pepperoni',1.35,1,1);

