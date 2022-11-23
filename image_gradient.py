import cv2
import numpy as np
img = cv2.imread('Akshay.jpg',0)
img1 = cv2.resize(img,(600,500))


lap = cv2.Laplacian(img1,cv2.CV_64F,ksize=3)
lap = np.uint8(np.absolute(lap))


cv2.imshow('img',lap)
cv2.imshow('x',img1)
cv2.waitKey(0)
cv2.destroyAllWindows()