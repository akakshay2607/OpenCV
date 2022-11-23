import cv2
import numpy as np
import pafy

url = 'https://www.youtube.com/watch?v=HGoTIw-EiJg'

data = pafy.new(url)
data = data.getbest(preftype='mp4')

cap = cv2.VideoCapture(0)
cap.open(data.url)
def fun(x):
    pass
cv2.namedWindow('color_adjustor')
cv2.createTrackbar('LH','color_adjustor',0,255,fun)
cv2.createTrackbar('LS','color_adjustor',0,255,fun)
cv2.createTrackbar('LV','color_adjustor',0,255,fun)

cv2.createTrackbar('HH','color_adjustor',255,255,fun)
cv2.createTrackbar('HS','color_adjustor',255,255,fun)
cv2.createTrackbar('HV','color_adjustor',255,255,fun)

while cap.isOpened():
    ret,frame = cap.read()
    frame = cv2.resize(frame,(500,500))
    hsv = cv2.cvtColor(frame,cv2.COLOR_BGR2HSV)
    LH = cv2.getTrackbarPos('LH','color_adjustor')
    LS = cv2.getTrackbarPos('LS','color_adjustor')
    LV = cv2.getTrackbarPos('LV','color_adjustor')
    
    HH = cv2.getTrackbarPos('HH','color_adjustor')
    HS = cv2.getTrackbarPos('HS','color_adjustor')
    HV = cv2.getTrackbarPos('HV','color_adjustor')
    
    Lower = np.array([LH,LS,LV])
    Upper = np.array([HH,HS,HV])
    
    mask = cv2.inRange(hsv,Lower,Upper)
    
    res = cv2.bitwise_and(frame,frame,mask=mask)
    
    cv2.imshow('frame',frame)
    cv2.imshow('mask',mask)
    cv2.imshow('res',res)
    k = cv2.waitKey(20)
    if k == ord('q'):
        break
cap.release()
cv2.destroyAllWindows()
