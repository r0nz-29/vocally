/**
 * @swagger
 *
 * definitions:
 *   Book:
 *     type: object
 *     properties:
 *       title:
 *         type: string
 *         description: Title of the book
 *       author:
 *         type: string
 *         description: Author of the book
 *       ISBN:
 *         type: string
 *         description: ISBN number of the book
 *       description:
 *         type: string
 *         description: Description of the book
 *       publisher:
 *         type: string
 *         description: Publisher of the book
 *       publication_date:
 *         type: string
 *         format: date
 *         description: Publication date of the book
 *       available:
 *         type: boolean
 *         description: Availability of the book
 *
 * paths:
 *   /books:
 *     get:
 *       description: Returns a list of all books in the library
 *       responses:
 *         200:
 *           description: Successful operation
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/definitions/Book'
 *     post:
 *       description: Adds a new book to the library
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Book'
 *       responses:
 *         201:
 *           description: Successful operation
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/definitions/Book'
 *   /books/{id}:
 *     get:
 *       description: Returns a book by its ID
 *       parameters:
 *         - in: path
 *           name: id
 *           description: ID of the book
 *           required: true
 *           schema:
 *             type: string
 *       responses:
 *         200:
 *           description: Successful operation
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/definitions/Book'
 *         404:
 *           description: Book not found
 *     put:
 *       description: Update a book by its ID
 *       produces:
 *         - application/json
 *       parameters:
 *         - name: id
 *           description: Book's ID
 *           in: path
 *           required: true
 *           type: string
 *         - name: book
 *           description: Book object
 *           in: body
 *           required: true
 *           schema:
 *             $ref: '#/definitions/Book'
 *       responses:
 *         200:
 *           description: Successfully updated the book
 *         404:
 *           description: Book not found
 *         500:
 *           description: Internal server error
 *
 *     delete:
 *       description: Delete a book by its ID
 *       parameters:
 *         - name: id
 *           description: Book's ID
 *           in: path
 *           required: true
 *           type: string
 *       responses:
 *         200:
 *           description: Successfully deleted the book
 *         404:
 *           description: Book not found
 *         500:
 *           description: Internal server error
*/