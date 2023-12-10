## Installation

To install the required dependencies, run the following commands:

``` 
npm install 
```

## Running the application
Once the packages are installed, you can start the application using the following command:

```
node seed.js

```

The above command is the provided method to seed the data base with mockdata.

then next run the below command to start the application

```
node app.js

```

## API Endpoints
1. Endpoint 1: Retrieve All Books
  - Endpoint : GET/api/books
  - Description: Retrieves information about all books.
  - Expected request:
  ```
    GET http://localhost:3000/api/books

  ```
  - Expected response :
  ```
    json:

    {
        "title": "The Red Moon",
        "author": "Alex Swift",
        "genre": "Science Fiction"
    }
  ```

2. Endpoint 2: Add a New Book
   - Endpoint: POST/api/books
   - Description: Creates a new book in the Database.
   - Expected request:
     ```
        json:

        {
            "title": "The Red Moon",
            "author": "Alex Swift",
            "genre": "Science Fiction"
        }
     ```
   - Expected Response:
      - for successful request:
      ```
        a new book is inserted into database
      ```
      - for unsuccessful request:
        - possible unsuccessful requests are : 
          - every field doesn't consist values i.e validating for every field 
          - inserting duplicate books
        
        ```
        Book validation failed: title: title name must start with alphabet characters and may constain spaces, genre: Path genre is required.
        ```

        ```
        book with same details already exits in database
        ```

3. Endpoint 3: Update Book Details
   - Endpoint: PUT /api/books/{id}
   - Description: Updates an existed book in the Database.
   - Expected request:
     ```
        json:

        {
            "title": "The Red Moon",
            "author": "Alex Swift",
            "genre": "Science Fiction"
        }
     ```
    - Expected Response:
      - for successful request:
      ```
        book with same details is found in database
      ```
      -  for unsuccessful request:
          - possible unsuccessful requests are : 
            - no id in database for selected book
            - validating for every field 
            - inserting duplicate books
            ```
            no book exist in the database with given id
            ```

            ```
            Validation failed: author: author name must start with alphabet characters and may constain spaces
            ```

            ```
            book with same details already exits in database
            ```


   


