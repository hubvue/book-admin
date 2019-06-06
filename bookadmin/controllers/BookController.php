<?php

namespace app\controllers;

use Yii;
use app\models\Book;
use app\models\BookSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\web\Response;

/**
 * BookController implements the CRUD actions for Book model.
 */
class BookController extends Controller
{
    public $enableCsrfValidation = false;
    /**
     * {@inheritdoc}
     */
    public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'delete' => ['POST'],
                ],
            ],
        ];
    }

    /**
     * Lists all Book models.
     * @return mixed
     */
    public function actionIndex()
    {
        $searchModel = new BookSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);
        Yii::$app->response->format=Response::FORMAT_JSON;
        return $dataProvider->getModels();
    }

    /**
     * Displays a single Book model.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($id)
    {
        Yii::$app->response->format=Response::FORMAT_JSON;
        return $this->findModel($id);
    }

    /**
     * Creates a new Book model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new Book();
        $result = array('code'=> 0,'message'=>'');
        Yii::$app->response->format=Response::FORMAT_JSON;
        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            $result['code'] = 1;
            $result['message'] = 'ok';
        }else{
            $result['message'] = 'no';
        }
        return $result;
    }

    /**
     * Updates an existing Book model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);
        $result = array('code'=> 0,'message'=>'');
        Yii::$app->response->format=Response::FORMAT_JSON;
        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            $result['code'] = 1;
            $result['message'] = 'ok';
            return $result;
        }else{
            $result['message'] = 'no';
            return $result;
        }
    }

    /**
     * Deletes an existing Book model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param integer $id
     * @return mixed
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionDelete($id)
    {
        Yii::$app->response->format=Response::FORMAT_JSON;
        $result = array('code'=> 0,'message'=>'');
        if($this->findModel($id)->delete()){
            $result['code'] = 1;
            $result['message'] = 'ok';
            return $result;
        }else{
            $result['message'] = 'no';
            return $result;
        }

    }

    /**
     * Finds the Book model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return Book the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Book::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }
}
