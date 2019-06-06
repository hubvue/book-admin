<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "book".
 *
 * @property int $book_id
 * @property string $book_name
 * @property string $book_author
 * @property string $book_press
 * @property string $book_time
 * @property double $book_price
 * @property string $book_isbn
 * @property string $book_introduction
 * @property string $book_image
 */
class Book extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'book';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['book_name', 'book_author', 'book_press', 'book_time', 'book_price', 'book_isbn', 'book_introduction', 'book_image'], 'required'],
            [['book_price'], 'number'],
            [['book_introduction'], 'string'],
            [['book_name', 'book_author', 'book_press'], 'string', 'max' => 50],
            [['book_time'], 'string', 'max' => 20],
            [['book_isbn'], 'string', 'max' => 30],
            [['book_image'], 'string', 'max' => 100],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'book_id' => 'Book ID',
            'book_name' => 'Book Name',
            'book_author' => 'Book Author',
            'book_press' => 'Book Press',
            'book_time' => 'Book Time',
            'book_price' => 'Book Price',
            'book_isbn' => 'Book Isbn',
            'book_introduction' => 'Book Introduction',
            'book_image' => 'Book Image',
        ];
    }
}
