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

git config --global user.email stephaniebtot3@gmail.com
  git config --global user.name Stephanie Buffotot
