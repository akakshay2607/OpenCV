import cv2
import numpy as np

def mouse_event(event,x,y,flag,param):
    
    if event == cv2.EVENT_LBUTTONDOWN:
        text = "." + str(x) + "," + str(y)
        font = cv2.FONT_HERSHEY_SIMPLEX
        cv2.putText(img,text,(x,y),font,1,(11, 169, 227),1)
    if event == cv2.EVENT_RBUTTONDOWN:
        b = img[y,x,0]
        g = img[y,x,1]
        r = img[y,x,2]
        font = cv2.FONT_HERSHEY_SIMPLEX
        clr = "." + str(b) + "," + str(g) + "," +str(r)
        cv2.putText(img,clr,(x,y),font,1,(227, 57, 82),1)
        
img = cv2.imread('0.jpg')
cv2.namedWindow(winname = "img")   
cv2.setMouseCallback('img',mouse_event)

while True:
    cv2.imshow('img',img)
    if cv2.waitKey(1) & 0xFF ==27:
        break

cv2.destroyAllWindows()