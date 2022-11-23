import cv2
import numpy as np

img = np.zeros((300,512,3),np.uint8)
cv2.namedWindow("CP")

def fun(x):
    pass

s1 = '0:OFF \n 1:ON'
cv2.createTrackbar(s1,"CP",0,1,fun)
cv2.createTrackbar("R","CP",0,255,fun)
cv2.createTrackbar("G","CP",0,255,fun)
cv2.createTrackbar("B","CP",0,255,fun)


while True:
    cv2.imshow("CP",img)
    
    if cv2.waitKey(1) & 0xFF == 27:
        break
    
    s = cv2.getTrackbarPos(s1,"CP")
    r = cv2.getTrackbarPos("R","CP")
    g = cv2.getTrackbarPos("G","CP")
    b = cv2.getTrackbarPos("B","CP")
    
    if s == 0:
        img[:] = 0
        
    else:
        img[:] = [r,g,b]
        
cv2.destroyAllWindows()