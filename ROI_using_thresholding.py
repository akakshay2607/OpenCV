import cv2
import numpy

img = cv2.imread(r'C:\Users\akaks\Desktop\Dahihandi\img.jpg')
text = cv2.imread(r'C:\Users\akaks\Desktop\Dahihandi\text.png')
text = cv2.resize(text,(600,600))
r,c,ch = text.shape
roi = img[0:r,0:c]
text_gray = cv2.cvtColor(text,cv2.COLOR_BGR2GRAY)

_,mask = cv2.threshold(text_gray,50,255,cv2.THRESH_BINARY)

mask_inv = cv2.bitwise_not(mask)
img_bg = cv2.bitwise_and(roi,roi,mask=mask_inv)
img_fg = cv2.bitwise_and(text,text,mask=mask)
img_c = cv2.add(img_bg,img_fg)


final = img
final[0:r,0:c] = img_c
cv2.imshow('img',img)
cv2.imshow('text',text)
cv2.imshow('img_fg',img_fg)
cv2.imshow('x',img_c)
cv2.imshow('final',final)
cv2.waitKey(0)
cv2.destroyAllWindows()