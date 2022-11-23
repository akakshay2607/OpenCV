import cv2
import numpy as np

text = cv2.imread(r'C:\Users\akaks\Downloads\15.png')
background = cv2.imread(r"C:\Users\akaks\Downloads\08.png")
img = cv2.imread(r"C:\Users\akaks\Downloads\04.png")
# img = cv2.resize(img,(400,500))
# text = cv2.resize(text,(400,500))
# r1 =  cv2.add(img,text)
cv2.imshow('f',img)
print(text.shape)
cv2.imshow('t',text)
# cv2.imshow('img',r1)
cv2.waitKey(0)
cv2.destroyAllWindows()