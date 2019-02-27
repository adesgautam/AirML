import pickle as pkl
# import numpy as np
import pandas as pd

dataframe = pd.read_csv('data/Data.csv')

rulModel = pkl.load(open("models/rf_model.sav", 'rb'))
# df_rul = pd.read_csv('data/rulData.csv')

faultModel = pkl.load(open("models/rfBinary_model.sav", 'rb'))
# df_fault = pd.read_csv(open("data/faultData.csv"))

multiClassModel = pkl.load(open("models/rfMulticlass_model.sav", 'rb'))
# df_multiclass = pd.read_csv(open("data/multiData.csv"))


def rulPrediction():
    # engine = 0
    rul = {}
    for i in [1,2,19,23]:
        # print(engine_num)
        # print('gdhadj&*&^&*^8')
        # print(feature)
        # df = pd.read_csv('data/testData.csv')
        # print(list(df.iloc[engine_num-1, 1:].values))
        df = dataframe.iloc[i, :].values.reshape(1, -1)
        print(df)
    # print(list(df.iloc[engine_num+1, 1:].values))
    # feature = np.array(feature, dtype=np.float32).reshape(1,-1)
    # print(feature)

        # result.append(model.predict(df))
        rul['engine_rul_' + str(i + 1)] = int(list(rulModel.predict(df))[0])
        print(rul)
    # print(result)
    print('&&&&&\n')
    return rul


def faultPrediction(data):
    # engine = 0
    # fault = {}
    for i in range(5):
        # print(engine_num)
        # print('gdhadj&*&^&*^8')
        # print(feature)
        # df = pd.read_csv('data/testData.csv')
        # print(list(df.iloc[engine_num-1, 1:].values))
        df = dataframe.iloc[i, :].values.reshape(1, -1)
    # print(list(df.iloc[engine_num+1, 1:].values))
    # feature = np.array(feature, dtype=np.float32).reshape(1,-1)
    # print(feature)

        # result.append(model.predict(df))
        data['engine_fault_' +
             str(i + 1)] = int(list(faultModel.predict(df))[0])
        # print(fault)
    # print(result)
    print('&&&&&\n')
    return data


def multiclassPrediction(data):
    for i in range(5):
        # print(engine_num)
        # print('gdhadj&*&^&*^8')
        # print(feature)
        # df = pd.read_csv('data/testData.csv')
        # print(list(df.iloc[engine_num-1, 1:].values))
        df = dataframe.iloc[i, :].values.reshape(1, -1)
    # print(list(df.iloc[engine_num+1, 1:].values))
    # feature = np.array(feature, dtype=np.float32).reshape(1,-1)
    # print(feature)

        # result.append(model.predict(df))
        data['engine_MultiClass_' +
             str(i + 1)] = int(list(multiClassModel.predict(df))[0])
        # print(fault)
    # print(result)
    print('&&&&&\n')
    return data


# [19,23,30,33,34,35,41,55,65,67,75,80,81,91,99]


def testrul():
    data = {}
    for i in [19,23,30,33,34,35,41,55,65,67,75,80,81,91,99]:
        # print(engine_num)
        # print('gdhadj&*&^&*^8')
        # print(feature)
        # df = pd.read_csv('data/testData.csv')
        # print(list(df.iloc[engine_num-1, 1:].values))
        df = dataframe.iloc[i, :].values.reshape(1, -1)
    # print(list(df.iloc[engine_num+1, 1:].values))
    # feature = np.array(feature, dtype=np.float32).reshape(1,-1)
    # print(feature)

        # result.append(model.predict(df))
        data['engine_rul_' + str(i + 1)] = int(list(rulModel.predict(df))[0])
        # data['engine_fault_' +
        #      str(i + 1)] = int(list(faultModel.predict(df))[0])
        # data['engine_MultiClass_' +
        #      str(i + 1)] = int(list(multiClassModel.predict(df))[0])
        print(data)
    # print(result)
    print('&&&&&\n')
    return data
# 0.371191135734072   0.36233663713709    0.404761904761902   0.602406876790832   0.437959645483688   0.593220338983052   0.368421052631579   0.653497063534434   0.69912280701755    0.396108949416319   0.429728958630532   0.297619047619048   0.406313301823091   0.594882729211087   0.647342995169087   0.584455559830709   0.601353217343272   0.534883720930231   0.475903614457819   0.416666666666667   0.369458128079088   0.333333333332962   0.3889252234576 0.303030303030094   0.264705882352764   0.170475860381667   0.151709593466756   0.214558265704669   0.207761378883271   0.632455532033676   0.800000000000071   1   0.358567807450268   0.333691857757878   0.088579773160331
