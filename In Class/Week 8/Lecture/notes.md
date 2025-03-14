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