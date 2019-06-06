<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\Book */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="book-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'book_name')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'book_author')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'book_press')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'book_time')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'book_price')->textInput() ?>

    <?= $form->field($model, 'book_isbn')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'book_introduction')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'book_image')->textInput(['maxlength' => true]) ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
