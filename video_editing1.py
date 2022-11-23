import cv2
import numpy as np

# raeding the video
cap = cv2.VideoCapture('1.mp4')
text = 'Hello'
def get_optimal_font_scale(text, width):
    for scale in reversed(range(0, 10, 1)):
        textSize = cv2.getTextSize(text, fontFace=cv2.FONT_HERSHEY_COMPLEX_SMALL, fontScale=scale/10, thickness=1)
        new_width = textSize[0][0]
        if (new_width <= width):
            print(new_width)
            return scale/10
    return 1
while True:
    ret,img = cap.read()
    
    #resize the image   
    img = cv2.resize(img,(500,700))
    # blur the image
    blur = cv2.medianBlur(img,9,0)
    # converting the image into gray scale image
    gray_img = cv2.cvtColor(blur,cv2.COLOR_BGR2GRAY)
    # applying thresholding
    ret,thresh = cv2.threshold(gray_img,250,255,0)
    # calculating contours
    cnts,hier = cv2.findContours(thresh,cv2.RETR_TREE,cv2.CHAIN_APPROX_SIMPLE)
    
    ### Finding the largest contour, filling it with the colour and adding text inside the contour
    try:
        largest_contour = max(cnts, key = cv2.contourArea)
        M = cv2.moments(largest_contour)
        cX = int(M['m10']/(M['m00']+0.0001))
        cY = int(M['m01']/(M['m00']+0.0001))
        x,y,w,h = cv2.boundingRect(largest_contour)
        scale = 4 # this value can be from 0 to 1 (0,1] to change the size of the text relative to the image
        fontScale = min(w,h)/(1000/scale)
        # print(x,y,w,h)
        scale = get_optimal_font_scale(text,w)
        cv2.drawContours(img, [largest_contour], -1, (134, 234, 134), -1)
        cv2.circle(img, (cX, cY), 7, (255, 255, 255), -1)
        cv2.putText(img, text, (cX, cY),cv2.FONT_HERSHEY_SIMPLEX, scale, (0, 0, 0), 2)
        cv2.imshow('frame', img)
        
    except:
        pass
    if cv2.waitKey(30) == ord('q'):
            break
cap.release()
cv2.destroyAllWindows()
