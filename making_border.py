import cv2

img = cv2.imread('1.jpg')
img = cv2.resize(img,(500,500))

#with the help of cv2.copyMakeBorder() function.
#it take parameters like(img,border_width*4,bordertype,val_brder)
#border woidth = top,bottom,right,left
img_border = cv2.copyMakeBorder(img,5,5,5,5,cv2.BORDER_CONSTANT,value=[213, 235, 52])

cv2.imshow('img',img_border)

cv2.waitKey(0)
cv2.destroyAllWindows()