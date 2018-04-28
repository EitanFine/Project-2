

use rental_db;


insert into users (  name , email , password , streetaddress , city , state , zipcode )
values ( "Alexs" , "alex1111@yahoooo.com" , "password1" , "127 Nathan Drive" , "North Brunswick" , "NJ", "08902" ),
( "John Palumbo" , "john11@yahoooo.com" , "password1" , "54 Stella Drive" , "Bridgewater" , "NJ", "08807" );




insert into users (  name , email , password , streetaddress , city , state , zipcode )
values ( "Al Alberts" , "al1@yahoooo.com" , "password1" , "110 Main St" , "New Brunswick" , "NJ", "11111" ),
( "Bill Burr" , "bb1@yahoooo.com" , "password1" , "120 Main St" , "New Brunswick" , "NJ", "11111" ),
( "Carl Carlson" , "cc1@yahoooo.com" , "password1" , "130 Main St" , "New Brunswick" , "NJ", "11111" ),
( "Dave Davies" , "dd1@yahoooo.com" , "password1" , "140 Main St" , "New Brunswick" , "NJ", "11111" );


insert into categories(categoryname)
values ("bicycles"),
("construction equiptment"),
("Recreational vechicles");

insert into items (itemuserId , itemcatId , itemname , itemdescription ,  itemprice ) 
values ( 1 ,1 , "ladies 26 in bike" , "Nice bike for riding on a sunny day", 18.99 ),
( 1 ,2 , "2005 JCB 520 4X4X4 Telehandler" , "Heavy machinery for lifting up to 2600 pounds ",  350.00 ),
( 1 ,3 , "2006 Tuscany 4075 Motor Home" , "2006 Damon Tuscany 4075 Motor Home Class A - Diesel - excellent condition ",  200.00 );


insert into   renteddates ( rentitemid , renteddate)
values  (1 , "20180428") , (1 , "20180429") , (1 , "20180430") ,(1 , "20180427") ,
(2 , "20180503") , (2 , "20180505") , (2 , "20180511") , 
(3 , "20180510") , (3 , "20180511") ,  (3 , "20180512") ;

/*
 SELECT  categories.categoryname, i.* , users.name , users.streetaddress  FROM `items` i , users ,categories
 where itemuserId = users.id and itemcatId = categories.id

 */