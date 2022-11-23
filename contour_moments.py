import cv2

cap = cv2.VideoCapture('1.mp4')
# img = cv2.resize(img,(500,300))
# print(img)
while True:
    ret,img = cap.read()
    img = cv2.resize(img,(500,300))
    blur = cv2.medianBlur(img,9,0)
    gray_img = cv2.cvtColor(blur,cv2.COLOR_BGR2GRAY)
    ret,thresh = cv2.threshold(gray_img,250,255,0)
    cnts,hier = cv2.findContours(thresh,cv2.RETR_TREE,cv2.CHAIN_APPROX_SIMPLE)
    
    
    print(len(cnts))
    # largest_area = sorted(cnts, key=cv2.contourArea)[-1]
    text = """Hello"""
    for c in cnts:
        M = cv2.moments(c)
        cX = int(M['m10']/(M['m00']+0.0001))
        cY = int(M['m01']/(M['m00']+0.0001))
        # print(largest_area
        # c = [255,255,255]
        cv2.drawContours(img, [c], -1, (134, 234, 134), -1)
        # cv2.circle(img, (cX, cY), 7, (255, 255, 255), -1)
        cv2.putText(img, text, (cX, cY),cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 0), 2)

    cv2.imshow('img',img)
    key = cv2.waitKey(25) &0xFF
    if key == 27:
        break

     
# cv2.waitKey(0)
cap.release()
cv2.destroyAllWindows()

# # print(area)

# Python code to find the co-ordinates of
# the contours detected in an image.
# import numpy as np
# import cv2

# # Reading image
# font = cv2.FONT_HERSHEY_COMPLEX
# img = cv2.imread('0.jpg')
# img = cv2.resize(img,(500,300))

# # Reading same image in another
# # variable and converting to gray scale.
# img1 = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)

# # Converting image to a binary image
# # ( black and white only image).
# img1 = cv2.medianBlur(img,9,0)
# _, threshold = cv2.threshold(img1, 250, 255,0)

# # Detecting contours in image.
# contours, _= cv2.findContours(threshold, cv2.RETR_TREE,
# 							cv2.CHAIN_APPROX_SIMPLE)

# # Going through every contours found in the image.


# Showing the final image.
# cv2.imshow('image2', img)

# # Exiting the window if 'q' is pressed on the keyboard.
# if cv2.waitKey(0) & 0xFF == ord('q'):
# 	cv2.destroyAllWindows()
