# SQL Data types

```sql 
CREATE TABLE Users(
    id int,
    first_name char(30) - max number of characters is 30 
    last_name char(10),
);

`0001Stephanie      Buffotot  `

## Strings

### Char
> Chars are strings with a defined msx length 
> length between 0-255
> chars are right-padded with spaces to their max length 

### Varchar
> varchars are stringsd with a defined max length 
> length is between 0-65565
> varchars are not padded


```sql 
CREATE TABLE Users(
    id int,
    first_name char(30) - max number of characters is 30 
    last_name char(10),
);

`0001^9Stephanie^8Buffotot`


### TEXT, BLOB
> store the text in a .txt file
> store the location of that .txt file in the database

### Enum

```sql

Enum('small', 'medium', large')
Enum('Spade', 'Club', Heart', 'Diamonds')
```

## Date, time, Timestamp

### Datetime
> Storing `2025-03-15 17:45:45' as a DATETIME stores `2025-03-15 17:45:45' in our database

### Date
> Storing `2025-03-15 17:45:45' as a DATE stores `2025-03-15 00:00:00' in our database 

### Time
> Exact same as Datetime but withyout time getting stored
> Storing `2025-03-15 17:45:45' as a DATE stores `0000-00-00 17:45:45' in our database

### Timestamp
> Unix time stamp
> Stored as an integer (32bits)
> Stored as the number of seconds since the unix epoch
`1970-01-01 000:00:01 UTC to `2038-01-19 03:14:07`


## RELATIONAL DATABAS DESIGN:

##Steps 

1. Entities
2. Relations 
    - A belongs to B
    - B has many A
    - B has one C
    - C belongs to many A
3. Columns 
4. Is our database normalized?
    - if not: normalize, GOTO 1
    - if yes: continue
5. Diagram (ERD, Crows-Foot notation)
6. Create the databse
    -Write SQL, or use a GUI
    - DDL (Data Definition Language), (CREATE, DROP, ALTER, TRUNCATE)
7. Write the server side service 
    - Example for RoboGarden Class:
        - Connects to SQL using Sequilize
        - Serves data using Express
        - Serves data using Express.JS
8. Write the client side service
    - JavaScript file with functions to call backend service using HTTP API


  ### Step 1. Define Entities

  | Table Name | Description                                                   | Column          |
  -------------|---------------------------------------------------------------|-----------------|
  | Book       | All books that the store sells (books may not be in stock)    | Published Date  |
  | Genre      | Genres                                                        |                 |
  | Author     | Authors                                                       |                 |
  | Publisher  | Publishers                                                    |                 |
  | Location   | Where book can be found                                       |                 |
  | Customer   | Users with accounts on the web store, might not have ordered  |                 |
  | Order      | An order of books made by a customer                          | Copies Sold, IsCart     |
  | Cart       | A potential order of books by a customer                      | IsOrdered       |


## Step 2. Define Data Relationships

- Book 
    - `books` Have one or many `genres`
    - `genres` Have one or many `books`
    - `books` Have one or many  `authors`
    - `authors` Have one or many `books`
    - `book` Has one `publisher`
    - `publishers` Have one or many `book`
    - `book` Have one or many `location`
    - `location` Have one or many `book`
    - `book` Have one or many `order`
    - `order` Have one or many `book`
    - `book` Have one or many `cart`
    - `cart` Have one or many `book`

- Genre
    - `genre` Have one or many `book`

- Author 
    - `authors` Have one or many `books`

- Publisher
    - `publishers` Have one or many `book`

-Location
    - `location` Have one or many `book`

- Order
    - `order` Have one or many `book`
    - `order` Has exactly one `customer`
    - `customer` Have one or many `order`

- Customer
    - `customer` Have one or many `order`
    - `customer` Has exactly one `cart`
    - `cart` Has exactly one `customer`

- Cart
    - `cart` Have one or many `book`
    - `cart` Has exactly one `customer`

- Address
    - `address` Have one or many `publisher`
    - `publisher` Have one or many `publisher`
    - `address` Have one or many `location`
    - `location` Have one or many `location`
    - `address` Have one or many `customer`
    - `customer` Have one or many `address`







### Step 3. Define Columns 

#### Book

| id | title       | publish_date     | price  | auhtor_id |
|----|-------------|------------------|--------|
| 1  |

#### Genre

| id | name       |
|----|------------|

#### Author

| id | name       | website     | phone   | address                             |
|----|------------|-------------|---------|-------------------------------------|


#### Publisher 

| id | name       | website     | phone   | address                             |
|----|------------|-------------|---------|-------------------------------------|


#### Location 

| id | name       | code     | phone   | address                             |
|----|------------|----------|---------|-------------------------------------|


#### Order 

| id | date_placed       | 
|----|-------------------|

#### Customer (User) *CC doesnt info get stored*

| id | first_name         | last_name                 | title           | email    | hashed_and_salted_password  | shipping_address     | billing_address| credit_card    |
|----|-------------------|---------------------------|-----------------|----------|-----------------------------|----------------------|----------------|----------------|

#### Cart

| id | 
|----|

