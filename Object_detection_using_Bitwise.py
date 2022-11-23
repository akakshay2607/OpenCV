import cv2
import numpy as np

img = cv2.imread(r'C:\Users\akaks\Desktop\2.jpg')

while True:
    hsv = cv2.cvtColor(img,cv2.COLOR_BGR2HSV)
    lv = np.array([110,50,50])
    up = np.array([130,235,225])
    
    mask = cv2.inRange(hsv,lv,up)
    res = cv2.bitwise_and(img,img,mask=mask)
    
    cv2.imshow('img',res)

    key = cv2.waitKey(1)
    if key == 27:
        break
        
cv2.destroyAllWindows()