<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\BookSearch */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="book-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'book_id') ?>

    <?= $form->field($model, 'book_name') ?>

    <?= $form->field($model, 'book_author') ?>

    <?= $form->field($model, 'book_press') ?>

    <?= $form->field($model, 'book_time') ?>

    <?php // echo $form->field($model, 'book_price') ?>

    <?php // echo $form->field($model, 'book_isbn') ?>

    <?php // echo $form->field($model, 'book_introduction') ?>

    <?php // echo $form->field($model, 'book_image') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-default']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
