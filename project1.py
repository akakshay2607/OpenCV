import cv2
import numpy as np


img = cv2.imread(r'C:\Users\akaks\Desktop\2.jpg')
img = cv2.resize(img,(600,400))
def fun(x):
    pass
cv2.namedWindow('color_adjustor')
cv2.createTrackbar('LH','color_adjustor',0,255,fun)
cv2.createTrackbar('LS','color_adjustor',0,255,fun)
cv2.createTrackbar('LV','color_adjustor',0,255,fun)

cv2.createTrackbar('HH','color_adjustor',255,255,fun)
cv2.createTrackbar('HS','color_adjustor',255,255,fun)
cv2.createTrackbar('HV','color_adjustor',255,255,fun)


while True:
    
    hsv = cv2.cvtColor(img,cv2.COLOR_BGR2HSV)
    
    LH = cv2.getTrackbarPos('LH','color_adjustor')
    LS = cv2.getTrackbarPos('LS','color_adjustor')
    LV = cv2.getTrackbarPos('LV','color_adjustor')
    
    HH = cv2.getTrackbarPos('HH','color_adjustor')
    HS = cv2.getTrackbarPos('HS','color_adjustor')
    HV = cv2.getTrackbarPos('HV','color_adjustor')
    
    Lower = np.array([LH,LS,LV])
    Upper = np.array([HH,HS,HV])
    
    mask = cv2.inRange(hsv,Lower,Upper)
    
    res = cv2.bitwise_and(img,img,mask=mask)
    
    cv2.imshow('img',img)
    cv2.imshow('mask',mask)
    cv2.imshow('res',res)
    key =cv2.waitKey(1)
    if key == 27:
        break
    
cv2.destroyAllWindows()
    
    
    
    
    