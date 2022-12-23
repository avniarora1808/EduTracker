from fastapi import FastAPI
from statistics import mean
import numpy as np
import pandas as pd
import pickle
from sklearn.ensemble import RandomForestRegressor
from sklearn.linear_model import LinearRegression 
import uvicorn
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/predict")
async def predict(scores: str):
    try: 
        arr_scores = scores.split(",")
        np_scores = np.array(arr_scores).astype(int)
        avg = mean(np_scores)
        while len(np_scores) < 10:
            np_scores = np.append(np_scores, avg)
        np_scores = np_scores[:10]
        with open('models/lr_best_v1.sav', 'rb') as f:
            lr = pickle.load(f)
        with open('models/rfg_best_v1.sav', 'rb') as f:
            rfg = pickle.load(f)
        df_pred = pd.DataFrame(np_scores.reshape(1, -1), 
                    columns=['Test1', 'Test2', 'Test3', 'Test4', 'Test5', 'Test6', 'Test7', 'Test8', 'Test9', 'Test10'])
        pred = lr.predict(df_pred)[0] * 0.5 + rfg.predict(df_pred)[0] * 0.5
        print("Pred:", pred)
        np_scores = np.append(np_scores, round(pred))
        avg = mean(np_scores)
        return {'prediction' : round(pred), 'average' : int(avg)}
    except ValueError:
        return {'prediction' : 'Invalid', 'average' : 'null'}

if __name__ == '__main__':
    uvicorn.run("main:app", port = 8000, host = '0.0.0.0', reload = True)
