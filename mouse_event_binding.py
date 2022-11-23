import cv2
import numpy as np

def draw(event,x,y,flags,param):
    if event == cv2.EVENT_LBUTTONDBLCLK:
        cv2.circle(img,(x,y),10,(84, 15, 3),3)
    if event == cv2.EVENT_RBUTTONDBLCLK:
        cv2.rectangle(img,(x,y),(x+10,y+30),(219, 193, 189),3)
                
img = np.ones([255,255,3],np.uint8)*255
cv2.namedWindow(winname='frame')
cv2.setMouseCallback('frame',draw)

while True:
    cv2.imshow('frame',img)
    if cv2.waitKey(1) & 0xFF==27:
        break
    
cv2.destroyAllWindows()