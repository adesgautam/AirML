# from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .utils import rulPrediction, faultPrediction, multiclassPrediction, testrul
# Create your views here.


@csrf_exempt
def rul_prediction(request):
    if request.method == 'GET':
        # print(dir(request.POST.items()))
        # print(request.POST['engine'])
        # print(request.content_params)
        # print(type(eval(list(dict(request.POST).keys())[0])['engine']))
        # print('\n\n')
        # engine = eval(request.POST.get('engine'))
        # print(dict(request.POST))
        # feature = list(dict(request.POST).values())
        # feature = [float(i[0]) for i in feature]
        # result = list(prediction(engine))[0]
        # print(feature)
        data = rulPrediction()
        # data = faultPrediction(data)
        # data = multiclassPrediction(data)
        print(data)
        print('\n\n')

        return JsonResponse(dict(data))


# @csrf_exempt
# def fault_prediction(request):
#     if request.method == 'GET':
#         fault = faultPrediction()

#         return JsonResponse(fault)


def test(request):
    if request.method == 'GET':
        data = testrul()

        return JsonResponse(dict(data))
